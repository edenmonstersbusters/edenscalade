import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import TrainingSession from './components/TrainingSession';
import Documentation from './components/Documentation';
import ClimbingMap from './components/ClimbingMap';
import ProgressSystem from './components/ProgressSystem';
import QuestSystem from './components/QuestSystem';
import CustomWorkoutBuilder from './components/CustomWorkoutBuilder';
import { User, SessionHistory, Badge, DailyGoal, CustomWorkout } from './types';
import { badges as defaultBadges } from './data/badges';
import { generateDailyQuests, generateWeeklyQuests, achievementQuests, updateQuestProgress } from './data/quests';
import { generateDailyGoals, updateDailyGoalProgress, shouldRefreshGoals } from './data/dailyGoals';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('today');
  const [customWorkouts, setCustomWorkouts] = useState<CustomWorkout[]>([]);
  const [dailyGoals, setDailyGoals] = useState<DailyGoal[]>([]);
  const [lastGoalRefresh, setLastGoalRefresh] = useState<string>('');
  
  const [user, setUser] = useState<User>({
    id: 'user-1',
    name: 'Grimpeur',
    level: 3,
    xp: 1250,
    badges: defaultBadges.map(badge => ({ ...badge, unlocked: Math.random() > 0.7 })),
    completedSessions: [
      {
        id: 'session-1',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        sessionType: 'Échauffement',
        duration: 900,
        exercisesCompleted: 5,
        xpGained: 50
      },
      {
        id: 'session-2',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        sessionType: 'Renforcement',
        duration: 1800,
        exercisesCompleted: 8,
        xpGained: 100
      },
      {
        id: 'session-3',
        date: new Date(),
        sessionType: 'Étirements',
        duration: 600,
        exercisesCompleted: 4,
        xpGained: 75
      }
    ],
    currentStreak: 3,
    activeQuests: [...generateDailyQuests(), ...generateWeeklyQuests(), ...achievementQuests],
    completedQuests: []
  });

  // Initialiser les objectifs quotidiens
  useEffect(() => {
    const today = new Date().toDateString();
    if (shouldRefreshGoals(lastGoalRefresh)) {
      setDailyGoals(generateDailyGoals());
      setLastGoalRefresh(today);
    }
  }, [lastGoalRefresh]);

  const [articlesRead, setArticlesRead] = useState<string[]>([]);
  const [gymsVisited, setGymsVisited] = useState<string[]>([]);

  // Fonction pour mettre à jour les quêtes
  const updateQuests = (questId: string, increment: number = 1) => {
    setUser(prevUser => ({
      ...prevUser,
      activeQuests: updateQuestProgress(prevUser.activeQuests, questId, increment)
    }));
  };

  // Fonction pour mettre à jour les objectifs quotidiens
  const updateDailyGoal = (goalId: string, increment: number = 1) => {
    setDailyGoals(prevGoals => {
      const updatedGoals = updateDailyGoalProgress(prevGoals, goalId, increment);
      
      // Vérifier si un objectif vient d'être complété pour donner de l'XP
      const completedGoal = updatedGoals.find(g => g.id === goalId && g.completed);
      const wasCompleted = prevGoals.find(g => g.id === goalId)?.completed;
      
      if (completedGoal && !wasCompleted) {
        setUser(prevUser => ({
          ...prevUser,
          xp: prevUser.xp + completedGoal.xpReward,
          level: Math.floor((prevUser.xp + completedGoal.xpReward) / 1000) + 1
        }));
        
        // Animation de célébration
        setTimeout(() => {
          alert(`🎉 Objectif accompli ! +${completedGoal.xpReward} XP !`);
        }, 500);
      }
      
      return updatedGoals;
    });
  };
  const handleSessionComplete = (sessionId: string, xpGained: number) => {
    const newSession: SessionHistory = {
      id: `session-${Date.now()}`,
      date: new Date(),
      sessionType: sessionId,
      duration: Math.floor(Math.random() * 1800) + 600, // Random duration between 10-40 minutes
      exercisesCompleted: Math.floor(Math.random() * 8) + 3,
      xpGained
    };

    setUser(prevUser => ({
      ...prevUser,
      xp: prevUser.xp + xpGained,
      level: Math.floor((prevUser.xp + xpGained) / 1000) + 1,
      completedSessions: [...prevUser.completedSessions, newSession],
      currentStreak: prevUser.currentStreak + (Math.random() > 0.5 ? 1 : 0)
    }));

    // Mettre à jour les quêtes
    updateQuests('daily-warmup'); // Si c'est un échauffement
    updateQuests('daily-strength', Math.floor(newSession.duration / 60)); // Minutes de renforcement
    updateQuests('weekly-consistency');
    updateQuests('achievement-first-session');
    updateQuests('achievement-10-sessions');
    updateQuests('achievement-50-sessions');
    updateQuests('achievement-100-sessions');

    // Mettre à jour les objectifs quotidiens
    if (sessionId.includes('échauffement') || sessionId.includes('warmup')) {
      updateDailyGoal('warmup-session');
    }
    if (sessionId.includes('renforcement') || sessionId.includes('strength')) {
      updateDailyGoal('strength-session');
    }
    if (sessionId.includes('étirement') || sessionId.includes('stretch')) {
      updateDailyGoal('stretch-session', Math.floor(newSession.duration / 60));
    }
    updateDailyGoal('complete-exercises', newSession.exercisesCompleted);
    // Show celebration animation
    setTimeout(() => {
      alert(`🎉 Séance terminée ! +${xpGained} XP gagnés !`);
    }, 1000);
  };

  const handleArticleRead = (articleId: string) => {
    if (!articlesRead.includes(articleId)) {
      setArticlesRead(prev => [...prev, articleId]);
      setUser(prevUser => ({
        ...prevUser,
        xp: prevUser.xp + 25 // Bonus XP for reading articles
      }));
      
      // Mettre à jour les quêtes
      updateQuests('daily-learning');
      updateQuests('weekly-scholar');
      updateQuests('achievement-all-articles');
      
      // Mettre à jour les objectifs quotidiens
      updateDailyGoal('read-article');
      updateDailyGoal('study-technique');
    }
  };

  const handleGymVisit = (gymId: string) => {
    if (!gymsVisited.includes(gymId)) {
      setGymsVisited(prev => [...prev, gymId]);
      
      // Mettre à jour les quêtes
      updateQuests('daily-exploration');
      updateQuests('weekly-explorer');
      updateQuests('achievement-world-explorer');
      
      // Mettre à jour les objectifs quotidiens
      updateDailyGoal('find-gym');
    }
  };

  const handleQuestComplete = (questId: string, xpReward: number) => {
    setUser(prevUser => {
      const completedQuest = prevUser.activeQuests.find(q => q.id === questId);
      if (completedQuest) {
        return {
          ...prevUser,
          xp: prevUser.xp + xpReward,
          level: Math.floor((prevUser.xp + xpReward) / 1000) + 1,
          completedQuests: [...prevUser.completedQuests, completedQuest],
          activeQuests: prevUser.activeQuests.filter(q => q.id !== questId)
        };
      }
      return prevUser;
    });
  };

  const handleCustomWorkoutCreated = (workout: CustomWorkout) => {
    setCustomWorkouts(prev => [workout, ...prev]);
    updateDailyGoal('custom-workout');
    alert(`Programme "${workout.name}" créé avec succès !`);
  };

  const handleCustomWorkoutStart = (workout: CustomWorkout) => {
    // Convertir le workout personnalisé en session d'entraînement
    const sessionId = `custom-${workout.id}`;
    handleSessionComplete(sessionId, workout.estimatedXP);
  };
  // Compter les quêtes actives non complétées
  const activeQuestsCount = user.activeQuests.filter(q => !q.completed).length;

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'today':
        return (
          <Dashboard 
            onSectionChange={setCurrentSection}
            userStats={{
              level: user.level,
              xp: user.xp,
              currentStreak: user.currentStreak,
              todayGoals: dailyGoals
            }}
            onGoalUpdate={updateDailyGoal}
          />
        );
      case 'training':
        return (
          <TrainingSession 
            onSessionComplete={handleSessionComplete}
            customWorkouts={customWorkouts}
          />
        );
      case 'custom-workout':
        return (
          <CustomWorkoutBuilder
            onWorkoutCreated={handleCustomWorkoutCreated}
            onStartWorkout={handleCustomWorkoutStart}
          />
        );
      case 'quests':
        return (
          <QuestSystem 
            quests={user.activeQuests} 
            onQuestComplete={handleQuestComplete}
          />
        );
      case 'documentation':
        return (
          <Documentation 
            onArticleRead={handleArticleRead}
          />
        );
      case 'map':
        return <ClimbingMap onGymVisit={handleGymVisit} />;
      case 'progress':
        return (
          <ProgressSystem
            userStats={{
              level: user.level,
              xp: user.xp,
              currentStreak: user.currentStreak,
              badges: user.badges,
              completedSessions: user.completedSessions
            }}
          />
        );
      default:
        return (
          <Dashboard 
            onSectionChange={setCurrentSection}
            userStats={{ 
              level: user.level, 
              xp: user.xp, 
              currentStreak: user.currentStreak, 
              todayGoals: dailyGoals 
            }}
            onGoalUpdate={updateDailyGoal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        userXP={user.xp}
        userLevel={user.level}
        activeQuestsCount={activeQuestsCount}
      />
      
      <main className="py-6">
        {renderCurrentSection()}
      </main>

      {/* Floating Action Button for Quick Training */}
      {currentSection !== 'training' && (
        <button
          onClick={() => setCurrentSection('training')}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          🏋️
        </button>
      )}

      {/* Floating Quest Button */}
      {currentSection !== 'quests' && activeQuestsCount > 0 && (
        <button
          onClick={() => setCurrentSection('quests')}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 z-50 relative"
        >
          🎯
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {activeQuestsCount > 9 ? '9+' : activeQuestsCount}
          </span>
        </button>
      )}
    </div>
  );
};

export default App;