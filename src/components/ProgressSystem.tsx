import React, { useState } from 'react';
import { Trophy, Calendar, TrendingUp, Award, Star, BarChart3 } from 'lucide-react';
import { badges } from '../data/badges';
import { SessionHistory, Badge } from '../types';

interface ProgressSystemProps {
  userStats: {
    level: number;
    xp: number;
    currentStreak: number;
    badges: Badge[];
    completedSessions: SessionHistory[];
  };
}

const ProgressSystem: React.FC<ProgressSystemProps> = ({ userStats }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'history' | 'stats'>('overview');

  const { level, xp, currentStreak, completedSessions } = userStats;
  const xpToNextLevel = level * 1000;
  const xpProgress = (xp % 1000) / 10;

  const getTotalTrainingTime = () => {
    return completedSessions.reduce((total, session) => total + session.duration, 0);
  };

  const getWeeklyStats = () => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const thisWeek = completedSessions.filter(session => 
      new Date(session.date) >= weekAgo
    ).length;
    
    return thisWeek;
  };

  const getSessionsByType = () => {
    const sessionTypes = completedSessions.reduce((acc, session) => {
      acc[session.sessionType] = (acc[session.sessionType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(sessionTypes).map(([type, count]) => ({ type, count }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Level Progress */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold">Niveau {level}</h3>
            <p className="text-blue-100">Grimpeur {level < 5 ? 'Débutant' : level < 15 ? 'Intermédiaire' : 'Avancé'}</p>
          </div>
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <span>{xp} XP</span>
            <span>{xpToNextLevel} XP</span>
          </div>
          <div className="w-full bg-blue-400 rounded-full h-3 mt-1">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
        <p className="text-sm text-blue-100">
          Plus que {xpToNextLevel - xp} XP pour le niveau suivant !
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-3" />
          <h4 className="text-2xl font-bold text-gray-800">{currentStreak}</h4>
          <p className="text-gray-600">Jours consécutifs</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <h4 className="text-2xl font-bold text-gray-800">{completedSessions.length}</h4>
          <p className="text-gray-600">Séances complétées</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <h4 className="text-2xl font-bold text-gray-800">{Math.round(getTotalTrainingTime() / 60)}</h4>
          <p className="text-gray-600">Minutes d'entraînement</p>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-500" />
          Derniers Succès
        </h3>
        <div className="space-y-3">
          {userStats.badges.filter(b => b.unlocked).slice(-3).map((badge) => (
            <div key={badge.id} className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-2xl mr-3">{badge.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-800">{badge.name}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBadges = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {badges.map((badge) => {
        const isUnlocked = userStats.badges.some(ub => ub.id === badge.id && ub.unlocked);
        
        return (
          <div 
            key={badge.id}
            className={`p-6 rounded-xl shadow-lg transition-all duration-200 ${
              isUnlocked 
                ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300' 
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-3 ${isUnlocked ? '' : 'grayscale opacity-50'}`}>
                {badge.icon}
              </div>
              <h3 className={`font-bold mb-2 ${isUnlocked ? 'text-yellow-700' : 'text-gray-600'}`}>
                {badge.name}
              </h3>
              <p className={`text-sm ${isUnlocked ? 'text-yellow-600' : 'text-gray-500'}`}>
                {badge.description}
              </p>
              {isUnlocked && (
                <div className="mt-3">
                  <span className="inline-block bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Débloqué !
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderHistory = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
        Historique des Séances
      </h3>
      <div className="space-y-4">
        {completedSessions.slice().reverse().slice(0, 10).map((session) => (
          <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-800">{session.sessionType}</h4>
              <p className="text-sm text-gray-600">
                {new Date(session.date).toLocaleDateString('fr-FR')} • {Math.round(session.duration / 60)}min
              </p>
            </div>
            <div className="text-right">
              <span className="text-green-600 font-semibold">+{session.xpGained} XP</span>
              <p className="text-sm text-gray-600">{session.exercisesCompleted} exercices</p>
            </div>
          </div>
        ))}
      </div>
      {completedSessions.length === 0 && (
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">Aucune séance complétée pour le moment</p>
          <p className="text-sm text-gray-500">Commencez votre premier entraînement !</p>
        </div>
      )}
    </div>
  );

  const renderStats = () => (
    <div className="space-y-6">
      {/* Weekly Progress */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
          Statistiques Hebdomadaires
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-600">{getWeeklyStats()}</h4>
            <p className="text-sm text-gray-600">Séances cette semaine</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-600">{Math.round(getTotalTrainingTime() / 60)}</h4>
            <p className="text-sm text-gray-600">Minutes totales</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-purple-600">{userStats.badges.filter(b => b.unlocked).length}</h4>
            <p className="text-sm text-gray-600">Badges débloqués</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-orange-600">{currentStreak}</h4>
            <p className="text-sm text-gray-600">Jours de suite</p>
          </div>
        </div>
      </div>

      {/* Session Types */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Répartition par Type</h3>
        <div className="space-y-3">
          {getSessionsByType().map(({ type, count }) => (
            <div key={type} className="flex items-center justify-between">
              <span className="capitalize text-gray-700">{type}</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(count / completedSessions.length) * 100}%` }}
                  />
                </div>
                <span className="text-gray-600 font-medium w-8">{count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'badges', label: 'Badges', icon: Award },
    { id: 'history', label: 'Historique', icon: Calendar },
    { id: 'stats', label: 'Statistiques', icon: BarChart3 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Votre Progression</h2>
        <p className="text-gray-600">Suivez vos performances et célébrez vos succès</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === id
                  ? 'bg-blue-100 text-blue-700 shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'badges' && renderBadges()}
      {activeTab === 'history' && renderHistory()}
      {activeTab === 'stats' && renderStats()}
    </div>
  );
};

export default ProgressSystem;