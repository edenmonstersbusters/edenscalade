import { DailyGoal } from '../types';

// Générateur de quêtes quotidiennes réalistes et réalisables
export const generateDailyGoals = (): DailyGoal[] => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Base d'objectifs quotidiens variés
  const goalPool = [
    // Entraînement
    { id: 'warmup-session', text: 'Faire une séance d\'échauffement de 10 minutes', type: 'training', target: 1, xpReward: 50 },
    { id: 'strength-session', text: 'Compléter une séance de renforcement', type: 'training', target: 1, xpReward: 75 },
    { id: 'stretch-session', text: 'Faire 15 minutes d\'étirements', type: 'training', target: 15, xpReward: 60 },
    { id: 'custom-workout', text: 'Créer et faire son propre programme', type: 'training', target: 1, xpReward: 80 },
    { id: 'complete-exercises', text: 'Terminer 5 exercices différents', type: 'training', target: 5, xpReward: 40 },
    
    // Apprentissage
    { id: 'read-article', text: 'Lire un article de documentation', type: 'learning', target: 1, xpReward: 30 },
    { id: 'study-technique', text: 'Étudier 2 techniques d\'escalade', type: 'learning', target: 2, xpReward: 45 },
    { id: 'gear-research', text: 'Consulter la section matériel', type: 'learning', target: 1, xpReward: 25 },
    
    // Exploration
    { id: 'find-gym', text: 'Découvrir une nouvelle salle sur la carte', type: 'exploration', target: 1, xpReward: 35 },
    { id: 'plan-session', text: 'Planifier sa prochaine sortie escalade', type: 'exploration', target: 1, xpReward: 20 },
    
    // Progression
    { id: 'check-progress', text: 'Consulter ses statistiques de progression', type: 'progress', target: 1, xpReward: 15 },
    { id: 'complete-quest', text: 'Terminer 3 quêtes aujourd\'hui', type: 'progress', target: 3, xpReward: 100 }
  ];

  // Sélection intelligente selon le jour de la semaine
  let selectedGoals: DailyGoal[] = [];
  
  if (dayOfWeek === 1) { // Lundi - Motivation
    selectedGoals = [
      { ...goalPool[0], completed: false, current: 0 }, // Échauffement
      { ...goalPool[5], completed: false, current: 0 }, // Article
      { ...goalPool[8], completed: false, current: 0 }, // Nouvelle salle
      { ...goalPool[10], completed: false, current: 0 } // Progression
    ];
  } else if (dayOfWeek === 3) { // Mercredi - Force
    selectedGoals = [
      { ...goalPool[1], completed: false, current: 0 }, // Renforcement
      { ...goalPool[4], completed: false, current: 0 }, // 5 exercices
      { ...goalPool[6], completed: false, current: 0 }, // Techniques
      { ...goalPool[9], completed: false, current: 0 } // Planification
    ];
  } else if (dayOfWeek === 5) { // Vendredi - Récupération
    selectedGoals = [
      { ...goalPool[2], completed: false, current: 0 }, // Étirements
      { ...goalPool[7], completed: false, current: 0 }, // Matériel
      { ...goalPool[5], completed: false, current: 0 }, // Article
      { ...goalPool[11], completed: false, current: 0 } // Quêtes
    ];
  } else { // Autres jours - Mixte
    const randomGoals = goalPool
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map(goal => ({ ...goal, completed: false, current: 0 }));
    selectedGoals = randomGoals;
  }

  return selectedGoals;
};

export const updateDailyGoalProgress = (
  goals: DailyGoal[],
  goalId: string,
  increment: number = 1
): DailyGoal[] => {
  return goals.map(goal => {
    if (goal.id === goalId && !goal.completed) {
      const newCurrent = Math.min(goal.current + increment, goal.target);
      return {
        ...goal,
        current: newCurrent,
        completed: newCurrent >= goal.target
      };
    }
    return goal;
  });
};

// Vérifier si les objectifs doivent être renouvelés
export const shouldRefreshGoals = (lastRefresh: string): boolean => {
  const today = new Date().toDateString();
  return lastRefresh !== today;
};