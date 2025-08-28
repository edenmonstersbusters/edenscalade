import React, { useState } from 'react';
import { Plus, Trash2, Play, Clock, Zap, Save, Search, Filter } from 'lucide-react';
import { exercises } from '../data/exercises';
import { Exercise, CustomWorkout } from '../types';

interface CustomWorkoutBuilderProps {
  onWorkoutCreated: (workout: CustomWorkout) => void;
  onStartWorkout: (workout: CustomWorkout) => void;
}

const CustomWorkoutBuilder: React.FC<CustomWorkoutBuilderProps> = ({ 
  onWorkoutCreated, 
  onStartWorkout 
}) => {
  const [workoutName, setWorkoutName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const allExercises = [...(exercises.warmup || []), ...(exercises.strength || []), ...(exercises.stretching || [])];

  const filteredExercises = allExercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || 
      (categoryFilter === 'warmup' && exercises.warmup.includes(exercise)) ||
      (categoryFilter === 'strength' && exercises.strength.includes(exercise)) ||
      (categoryFilter === 'stretching' && exercises.stretching.includes(exercise));
    
    const matchesDifficulty = difficultyFilter === 'all' || exercise.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const addExercise = (exercise: Exercise) => {
    if (!selectedExercises.find(e => e.id === exercise.id)) {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const removeExercise = (exerciseId: string) => {
    setSelectedExercises(selectedExercises.filter(e => e.id !== exerciseId));
  };

  const getTotalDuration = () => {
    return selectedExercises.reduce((total, exercise) => total + exercise.duration, 0);
  };

  const getEstimatedXP = () => {
    const baseDuration = getTotalDuration();
    const exerciseCount = selectedExercises.length;
    return Math.floor(baseDuration / 10) + (exerciseCount * 5);
  };

  const handleSaveWorkout = () => {
    if (!workoutName.trim() || selectedExercises.length === 0) {
      alert('Veuillez donner un nom à votre programme et ajouter au moins un exercice');
      return;
    }

    const workout: CustomWorkout = {
      id: `custom-${Date.now()}`,
      name: workoutName,
      exercises: selectedExercises,
      createdAt: new Date(),
      totalDuration: getTotalDuration(),
      estimatedXP: getEstimatedXP()
    };

    onWorkoutCreated(workout);
    
    // Reset form
    setWorkoutName('');
    setSelectedExercises([]);
  };

  const handleStartWorkout = () => {
    if (selectedExercises.length === 0) {
      alert('Ajoutez au moins un exercice pour commencer');
      return;
    }

    const workout: CustomWorkout = {
      id: `temp-${Date.now()}`,
      name: workoutName || 'Programme Temporaire',
      exercises: selectedExercises,
      createdAt: new Date(),
      totalDuration: getTotalDuration(),
      estimatedXP: getEstimatedXP()
    };

    onStartWorkout(workout);
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

  const getExerciseCategory = (exercise: Exercise) => {
    if (exercises.warmup.includes(exercise)) return 'Échauffement';
    if (exercises.strength.includes(exercise)) return 'Renforcement';
    if (exercises.stretching.includes(exercise)) return 'Étirements';
    return 'Autre';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Créateur de Programme</h2>
        <p className="text-gray-600">Composez votre programme d'entraînement personnalisé</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Exercise Library */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Bibliothèque d'Exercices</h3>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un exercice..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Toutes catégories</option>
                  <option value="warmup">🔥 Échauffement</option>
                  <option value="strength">💪 Renforcement</option>
                  <option value="stretching">🧘 Étirements</option>
                </select>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Tous niveaux</option>
                  <option value="beginner">🌱 Débutant</option>
                  <option value="intermediate">🔥 Intermédiaire</option>
                  <option value="advanced">⚡ Avancé</option>
                </select>
              </div>
            </div>

            {/* Exercise List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-gray-800">{exercise.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {getExerciseCategory(exercise)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exercise.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {exercise.duration}s
                      </span>
                      <span>Muscles: {exercise.muscles.join(', ')}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => addExercise(exercise)}
                    disabled={selectedExercises.some(e => e.id === exercise.id)}
                    className={`ml-4 p-2 rounded-lg transition-colors ${
                      selectedExercises.some(e => e.id === exercise.id)
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {filteredExercises.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Aucun exercice trouvé</p>
              </div>
            )}
          </div>
        </div>

        {/* Workout Builder */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Mon Programme</h3>
            
            {/* Workout Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom du programme
              </label>
              <input
                type="text"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                placeholder="Ex: Mon programme du matin"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-blue-800">Durée</p>
                <p className="text-lg font-bold text-blue-600">{Math.round(getTotalDuration() / 60)}min</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <Zap className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-green-800">XP Estimés</p>
                <p className="text-lg font-bold text-green-600">{getEstimatedXP()}</p>
              </div>
            </div>

            {/* Selected Exercises */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">
                Exercices sélectionnés ({selectedExercises.length})
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {selectedExercises.map((exercise, index) => (
                  <div
                    key={exercise.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{index + 1}. {exercise.name}</p>
                      <p className="text-xs text-gray-600">{exercise.duration}s</p>
                    </div>
                    <button
                      onClick={() => removeExercise(exercise.id)}
                      className="p-1 text-red-600 hover:bg-red-100 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              {selectedExercises.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                  Aucun exercice sélectionné
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleStartWorkout}
                disabled={selectedExercises.length === 0}
                className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
                  selectedExercises.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                }`}
              >
                <Play className="w-4 h-4" />
                <span>Commencer Maintenant</span>
              </button>
              
              <button
                onClick={handleSaveWorkout}
                disabled={!workoutName.trim() || selectedExercises.length === 0}
                className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
                  !workoutName.trim() || selectedExercises.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <Save className="w-4 h-4" />
                <span>Sauvegarder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWorkoutBuilder;