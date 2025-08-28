import React from 'react';
import { Calendar, Target, Zap, BookOpen, Award, TrendingUp } from 'lucide-react';
import { DailyGoal } from '../types';

interface DashboardProps {
  onSectionChange: (section: string) => void;
  userStats: {
    level: number;
    xp: number;
    currentStreak: number;
    todayGoals: DailyGoal[];
  };
  onGoalUpdate: (goalId: string, increment?: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userStats, onSectionChange, onGoalUpdate }) => {
  const { level, xp, currentStreak, todayGoals } = userStats;
  const xpToNextLevel = level * 1000;
  const xpProgress = (xp % 1000) / 10;

  const dailyTips = [
    "💪 Échauffez-vous toujours avant de grimper !",
    "🧘 La respiration est clé pour gérer le stress",
    "👀 Analysez la voie avant de commencer",
    "🦶 Utilisez vos pieds autant que vos mains",
    "💧 Hydratez-vous régulièrement pendant l'effort"
  ];

  const todayTip = dailyTips[new Date().getDay() % dailyTips.length];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bonjour, Grimpeur ! 🧗‍♂️
        </h2>
        <p className="text-gray-600">
          {new Date().toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Level Progress */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Niveau {level}</h3>
              <p className="text-blue-100">{xp} / {xpToNextLevel} XP</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>

        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Série Actuelle</h3>
              <p className="text-2xl font-bold">{currentStreak} jours</p>
            </div>
            <Zap className="w-8 h-8 text-orange-200" />
          </div>
        </div>

        {/* Today's Goals */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Objectifs du Jour</h3>
              <p className="text-2xl font-bold">
                {todayGoals.filter(g => g.completed).length}/{todayGoals.length}
              </p>
            </div>
            <Target className="w-8 h-8 text-green-200" />
          </div>
        </div>
      </div>

      {/* Today's Goals Detail */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          Objectifs d'Aujourd'hui
        </h3>
        <div className="space-y-3">
          {todayGoals.map((goal) => (
            <div 
              key={goal.id}
              className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                goal.completed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
              onClick={() => !goal.completed && handleGoalClick(goal)}
            >
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                goal.completed 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300'
              }`}>
                {goal.completed && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className={`${
                goal.completed 
                  ? 'text-green-700 line-through' 
                  : 'text-gray-700'
              }`}>
                {goal.text}
              </span>
              {!goal.completed && goal.target > 1 && (
                <span className="ml-auto text-sm text-gray-500">
                  {goal.current}/{goal.target}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Conseil du Jour
        </h3>
        <p className="text-lg">{todayTip}</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <button 
          onClick={() => onSectionChange('training')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl text-left transition-colors duration-200 transform hover:scale-105"
        >
          <h4 className="text-lg font-semibold mb-2">🏋️ Commencer un Entraînement</h4>
          <p className="text-blue-100">Lancez une séance guidée maintenant</p>
        </button>
        <button 
          onClick={() => onSectionChange('documentation')}
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-xl text-left transition-colors duration-200 transform hover:scale-105"
        >
          <h4 className="text-lg font-semibold mb-2">📚 Apprendre Quelque Chose</h4>
          <p className="text-orange-100">Explorez nos guides techniques</p>
        </button>
      </div>
    </div>
  );

  const handleGoalClick = (goal: DailyGoal) => {
    // Rediriger vers la section appropriée selon le type de quête
    switch (goal.type) {
      case 'training':
        onSectionChange('training');
        break;
      case 'learning':
        onSectionChange('documentation');
        break;
      case 'exploration':
        onSectionChange('map');
        break;
      case 'progress':
        onSectionChange('progress');
        break;
    }
    
    // Marquer comme en cours si c'est un objectif simple
    if (goal.target === 1) {
      onGoalUpdate(goal.id);
    }
  };
};

export default Dashboard;