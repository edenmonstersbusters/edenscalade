import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, Star, CheckCircle, Clock, Target, Gift } from 'lucide-react';
import { Quest } from '../types';

interface QuestSystemProps {
  quests: Quest[];
  onQuestComplete: (questId: string, xpReward: number) => void;
}

const QuestSystem: React.FC<QuestSystemProps> = ({ quests, onQuestComplete }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'achievement'>('daily');
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState<Quest | null>(null);

  const dailyQuests = quests.filter(q => q.type === 'daily');
  const weeklyQuests = quests.filter(q => q.type === 'weekly');
  const achievementQuests = quests.filter(q => q.type === 'achievement');

  useEffect(() => {
    // Vérifier les quêtes complétées
    const newlyCompleted = quests.filter(q => 
      q.completed && !completedQuests.includes(q.id)
    );

    if (newlyCompleted.length > 0) {
      newlyCompleted.forEach(quest => {
        setShowCelebration(quest);
        onQuestComplete(quest.id, quest.xpReward);
        
        // Animation de célébration
        setTimeout(() => {
          setShowCelebration(null);
        }, 3000);
      });
      
      setCompletedQuests(prev => [...prev, ...newlyCompleted.map(q => q.id)]);
    }
  }, [quests, completedQuests, onQuestComplete]);

  const getProgressPercentage = (quest: Quest) => {
    return Math.min((quest.current / quest.target) * 100, 100);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'training':
        return '🏋️';
      case 'learning':
        return '📚';
      case 'exploration':
        return '🗺️';
      case 'consistency':
        return '🔥';
      default:
        return '⭐';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'training':
        return 'bg-blue-100 text-blue-700';
      case 'learning':
        return 'bg-green-100 text-green-700';
      case 'exploration':
        return 'bg-purple-100 text-purple-700';
      case 'consistency':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderQuestCard = (quest: Quest) => (
    <div
      key={quest.id}
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 ${
        quest.completed 
          ? 'ring-2 ring-green-300 bg-gradient-to-br from-green-50 to-emerald-50' 
          : 'hover:shadow-xl'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
            quest.completed ? 'bg-green-100' : getCategoryColor(quest.category)
          }`}>
            {quest.completed ? '✅' : quest.icon}
          </div>
          <div>
            <h3 className={`font-bold text-lg ${
              quest.completed ? 'text-green-700' : 'text-gray-800'
            }`}>
              {quest.title}
            </h3>
            <p className={`text-sm ${
              quest.completed ? 'text-green-600' : 'text-gray-600'
            }`}>
              {quest.description}
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            quest.completed 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            <Gift className="w-4 h-4 mr-1" />
            {quest.xpReward} XP
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progression</span>
          <span>{quest.current}/{quest.target}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${
              quest.completed 
                ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                : 'bg-gradient-to-r from-blue-400 to-purple-500'
            }`}
            style={{ width: `${getProgressPercentage(quest)}%` }}
          />
        </div>
      </div>

      {/* Badge de catégorie */}
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(quest.category)}`}>
          {getCategoryIcon(quest.category)} {quest.category}
        </span>
        
        {quest.completed && (
          <div className="flex items-center text-green-600 text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-1" />
            Terminé !
          </div>
        )}
      </div>
    </div>
  );

  const tabs = [
    { id: 'daily', label: 'Quotidiennes', icon: Calendar, quests: dailyQuests },
    { id: 'weekly', label: 'Hebdomadaires', icon: Clock, quests: weeklyQuests },
    { id: 'achievement', label: 'Succès', icon: Trophy, quests: achievementQuests }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Animation de célébration */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quête Terminée !</h2>
            <h3 className="text-xl font-semibold text-green-600 mb-2">{showCelebration.title}</h3>
            <p className="text-gray-600 mb-4">{showCelebration.description}</p>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg">
              +{showCelebration.xpReward} XP !
            </div>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Système de Quêtes</h2>
        <p className="text-gray-600">Complétez des défis pour gagner de l'XP et débloquer des récompenses</p>
      </div>

      {/* Statistiques rapides */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Quotidiennes</h3>
              <p className="text-2xl font-bold">
                {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Hebdomadaires</h3>
              <p className="text-2xl font-bold">
                {weeklyQuests.filter(q => q.completed).length}/{weeklyQuests.length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Succès</h3>
              <p className="text-2xl font-bold">
                {achievementQuests.filter(q => q.completed).length}/{achievementQuests.length}
              </p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
      </div>

      {/* Onglets */}
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
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === id 
                  ? 'bg-blue-200 text-blue-800' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {tabs.find(t => t.id === id)?.quests.filter(q => !q.completed).length || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Liste des quêtes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabs.find(t => t.id === activeTab)?.quests.map(renderQuestCard)}
      </div>

      {tabs.find(t => t.id === activeTab)?.quests.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune quête disponible</h3>
          <p className="text-gray-500">Revenez plus tard pour de nouveaux défis !</p>
        </div>
      )}
    </div>
  );
};

export default QuestSystem;