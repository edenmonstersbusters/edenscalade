import React, { useState } from 'react';
import { Play, Settings, Zap, Clock, Target } from 'lucide-react';
import { generateWorkoutProgram } from '../data/exercises';
import { WorkoutSession } from '../types';

interface ProgramGeneratorProps {
  onProgramGenerated: (program: WorkoutSession) => void;
}

const ProgramGenerator: React.FC<ProgramGeneratorProps> = ({ onProgramGenerated }) => {
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [type, setType] = useState<'warmup' | 'strength' | 'stretching' | 'full'>('full');
  const [duration, setDuration] = useState(20);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulation d'un délai pour l'effet visuel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const program = generateWorkoutProgram(difficulty, type, duration);
    onProgramGenerated(program);
    
    setIsGenerating(false);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getTypeColor = (sessionType: string) => {
    switch (sessionType) {
      case 'warmup':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'strength':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'stretching':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'full':
        return 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Settings className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Générateur de Programme</h2>
        <p className="text-gray-600">Créez un programme personnalisé selon vos besoins</p>
      </div>

      <div className="space-y-6">
        {/* Difficulté */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Target className="w-4 h-4 inline mr-2" />
            Niveau de Difficulté
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                  difficulty === level
                    ? getDifficultyColor(level) + ' ring-2 ring-offset-2 ring-blue-500'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {level === 'beginner' && '🌱 Débutant'}
                {level === 'intermediate' && '🔥 Intermédiaire'}
                {level === 'advanced' && '⚡ Avancé'}
              </button>
            ))}
          </div>
        </div>

        {/* Type d'entraînement */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Zap className="w-4 h-4 inline mr-2" />
            Type d'Entraînement
          </label>
          <div className="grid grid-cols-2 gap-3">
            {([
              { key: 'warmup', label: '🔥 Échauffement', desc: 'Préparation du corps' },
              { key: 'strength', label: '💪 Renforcement', desc: 'Force et endurance' },
              { key: 'stretching', label: '🧘 Étirements', desc: 'Flexibilité et récupération' },
              { key: 'full', label: '🎯 Programme Complet', desc: 'Échauffement + Force + Étirements' }
            ] as const).map(({ key, label, desc }) => (
              <button
                key={key}
                onClick={() => setType(key)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  type === key
                    ? getTypeColor(key) + ' ring-2 ring-offset-2 ring-blue-500'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="font-medium text-sm">{label}</div>
                <div className="text-xs text-gray-600 mt-1">{desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Durée */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Clock className="w-4 h-4 inline mr-2" />
            Durée Souhaitée: {duration} minutes
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>5 min</span>
              <span>15 min</span>
              <span>30 min</span>
              <span>45 min</span>
              <span>60 min</span>
            </div>
          </div>
        </div>

        {/* Aperçu */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Aperçu du Programme</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Niveau:</span>
              <span className="ml-2 font-medium">
                {difficulty === 'beginner' && '🌱 Débutant'}
                {difficulty === 'intermediate' && '🔥 Intermédiaire'}
                {difficulty === 'advanced' && '⚡ Avancé'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Type:</span>
              <span className="ml-2 font-medium">
                {type === 'warmup' && '🔥 Échauffement'}
                {type === 'strength' && '💪 Renforcement'}
                {type === 'stretching' && '🧘 Étirements'}
                {type === 'full' && '🎯 Complet'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Durée:</span>
              <span className="ml-2 font-medium">{duration} minutes</span>
            </div>
            <div>
              <span className="text-gray-600">XP estimés:</span>
              <span className="ml-2 font-medium text-green-600">
                ~{Math.floor(duration * (type === 'full' ? 6 : type === 'strength' ? 5 : type === 'stretching' ? 4 : 3))} XP
              </span>
            </div>
          </div>
        </div>

        {/* Bouton de génération */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
            isGenerating
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Génération en cours...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Générer Mon Programme</span>
            </div>
          )}
        </button>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default ProgramGenerator;