import React, { useState } from 'react';
import { Play, CheckCircle, Clock, FileMusic as Muscle, Zap, Settings, Shuffle } from 'lucide-react';
import { workoutSessions, generateRandomWorkout } from '../data/exercises';
import { WorkoutSession, Exercise, CustomWorkout } from '../types';
import ExerciseTimer from './ExerciseTimer';
import ProgramGenerator from './ProgramGenerator';
import CustomWorkoutBuilder from './CustomWorkoutBuilder';

interface TrainingSessionProps {
  onSessionComplete: (sessionId: string, xpGained: number) => void;
  customWorkouts?: CustomWorkout[];
}

const TrainingSession: React.FC<TrainingSessionProps> = ({ 
  onSessionComplete, 
  customWorkouts = [] 
}) => {
  const [selectedSession, setSelectedSession] = useState<WorkoutSession | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [showGenerator, setShowGenerator] = useState(false);
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [generatedPrograms, setGeneratedPrograms] = useState<WorkoutSession[]>([]);

  const startSession = (session: WorkoutSession) => {
    setSelectedSession(session);
    setCurrentExerciseIndex(0);
    setIsSessionActive(true);
    setCompletedExercises([]);
  };

  const startCustomWorkout = (workout: CustomWorkout) => {
    const session: WorkoutSession = {
      id: workout.id,
      type: 'auto',
      name: workout.name,
      exercises: workout.exercises,
      totalDuration: workout.totalDuration,
      xpReward: workout.estimatedXP
    };
    startSession(session);
  };

  const handleExerciseComplete = () => {
    if (selectedSession) {
      const currentExercise = selectedSession.exercises[currentExerciseIndex];
      setCompletedExercises(prev => [...prev, currentExercise.id]);
      
      if (currentExerciseIndex < selectedSession.exercises.length - 1) {
        setCurrentExerciseIndex(prev => prev + 1);
      } else {
        // Session complete
        setIsSessionActive(false);
        onSessionComplete(selectedSession.id, selectedSession.xpReward);
        setSelectedSession(null);
      }
    }
  };

  const handleSkipExercise = () => {
    if (selectedSession && currentExerciseIndex < selectedSession.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    }
  };

  const handleProgramGenerated = (program: WorkoutSession) => {
    setGeneratedPrograms(prev => [program, ...prev.slice(0, 4)]); // Garde les 5 derniers
    setShowGenerator(false);
    // Optionnel: démarrer automatiquement le programme généré
    // startSession(program);
  };

  const handleCustomWorkoutCreated = (workout: CustomWorkout) => {
    setShowCustomBuilder(false);
    // Démarrer automatiquement le programme créé
    startCustomWorkout(workout);
  };

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'warmup':
        return '🔥';
      case 'strength':
        return '💪';
      case 'stretching':
        return '🧘';
      case 'auto':
        return '🤖';
      default:
        return '🏋️';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (isSessionActive && selectedSession) {
    const currentExercise = selectedSession.exercises[currentExerciseIndex];
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Session Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {getSessionIcon(selectedSession.type)} {selectedSession.name}
            </h2>
            <div className="text-sm text-gray-600">
              {currentExerciseIndex + 1} / {selectedSession.exercises.length}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentExerciseIndex + 1) / selectedSession.exercises.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-sm font-medium text-blue-800">Temps Total</p>
              <p className="text-lg font-bold text-blue-600">{selectedSession.totalDuration}s</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Zap className="w-5 h-5 text-orange-600 mx-auto mb-1" />
              <p className="text-sm font-medium text-orange-800">XP à Gagner</p>
              <p className="text-lg font-bold text-orange-600">{selectedSession.xpReward}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <p className="text-sm font-medium text-green-800">Exercices</p>
              <p className="text-lg font-bold text-green-600">{completedExercises.length}/{selectedSession.exercises.length}</p>
            </div>
          </div>
        </div>

        {/* Exercise Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
          <ul className="space-y-2">
            {currentExercise.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timer */}
        <ExerciseTimer
          duration={currentExercise.duration}
          exerciseName={currentExercise.name}
          muscles={currentExercise.muscles}
          animation={currentExercise.animation}
          isActive={true}
          onComplete={handleExerciseComplete}
          onPause={() => {}}
          onReset={() => {}}
          onSkip={handleSkipExercise}
        />
      </div>
    );
  }

  if (showGenerator) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setShowGenerator(false)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          ← Retour aux séances
        </button>
        <ProgramGenerator onProgramGenerated={handleProgramGenerated} />
      </div>
    );
  }

  if (showCustomBuilder) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <button
          onClick={() => setShowCustomBuilder(false)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          ← Retour aux séances
        </button>
        <CustomWorkoutBuilder 
          onWorkoutCreated={handleCustomWorkoutCreated}
          onStartWorkout={startCustomWorkout}
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Séances Guidées</h2>
        <p className="text-gray-600">Choisissez votre entraînement et laissez-vous guider !</p>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setShowGenerator(true)}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Settings className="w-5 h-5 mr-2" />
          Générateur de Programme
        </button>
        
        <button
          onClick={() => setShowCustomBuilder(true)}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Play className="w-5 h-5 mr-2" />
          Créer Mon Programme
        </button>
        
        <button
          onClick={() => {
            const randomSession = generateRandomWorkout('intermediate', 'full', 20);
            startSession(randomSession);
          }}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Shuffle className="w-5 h-5 mr-2" />
          Séance Surprise
        </button>
      </div>

      {/* Programmes personnalisés récents */}
      {customWorkouts.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Play className="w-5 h-5 mr-2 text-green-600" />
            Mes Programmes Personnalisés
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {customWorkouts.slice(0, 6).map((workout) => (
              <div
                key={workout.id}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-green-200"
              >
                <div className="h-16 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-3xl">
                  👤
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{workout.name}</h3>
                  
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {Math.round(workout.totalDuration / 60)}min
                    </div>
                    <div className="flex items-center">
                      <Muscle className="w-4 h-4 mr-1" />
                      {workout.exercises.length} exercices
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      {workout.estimatedXP} XP
                    </div>
                  </div>

                  <button
                    onClick={() => startCustomWorkout(workout)}
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    <span>Commencer</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Programmes générés récemment */}
      {generatedPrograms.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-purple-600" />
            Programmes Générés Récemment
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {generatedPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-200"
              >
                <div className="h-16 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-3xl">
                  🤖
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h3>
                  
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {Math.round(program.totalDuration / 60)}min
                    </div>
                    <div className="flex items-center">
                      <Muscle className="w-4 h-4 mr-1" />
                      {program.exercises.length} exercices
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      {program.xpReward} XP
                    </div>
                  </div>

                  <button
                    onClick={() => startSession(program)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    <span>Commencer</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Séances prédéfinies */}
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Play className="w-5 h-5 mr-2 text-blue-600" />
        Séances Prédéfinies
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutSessions.map((session) => (
          <div 
            key={session.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className={`h-24 bg-gradient-to-br ${
              session.type === 'warmup' ? 'from-red-400 to-orange-500' :
              session.type === 'strength' ? 'from-blue-500 to-purple-600' :
              session.type === 'stretching' ? 'from-green-400 to-teal-500' :
              'from-purple-500 to-pink-600'
            } flex items-center justify-center text-4xl`}>
              {getSessionIcon(session.type)}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{session.name}</h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {Math.round(session.totalDuration / 60)}min
                </div>
                <div className="flex items-center">
                  <Muscle className="w-4 h-4 mr-1" />
                  {session.exercises.length} exercices
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  {session.xpReward} XP
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {session.exercises.slice(0, 3).map((exercise) => (
                  <div key={exercise.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{exercise.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                ))}
                {session.exercises.length > 3 && (
                  <p className="text-sm text-gray-500">+{session.exercises.length - 3} autres exercices</p>
                )}
              </div>

              <button
                onClick={() => startSession(session)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Commencer</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSession;