import { DailyGoal } from '../types';

// Générateur de quêtes quotidiennes réalistes et réalisables
export const generateDailyGoals = (): DailyGoal[] => {
  // Base élargie d'objectifs quotidiens variés
  const goalPool: DailyGoal[] = [
    // Entraînement
    { id: 'warmup-session', text: 'Faire une séance d\'échauffement', type: 'training', target: 1, current: 0, completed: false, xpReward: 50 },
    { id: 'strength-session', text: 'Compléter une séance de renforcement', type: 'training', target: 1, current: 0, completed: false, xpReward: 75 },
    { id: 'stretch-session', text: 'Faire 15 minutes d\'étirements', type: 'training', target: 15, current: 0, completed: false, xpReward: 60 },
    { id: 'custom-workout', text: 'Créer son propre programme d\'entraînement', type: 'training', target: 1, current: 0, completed: false, xpReward: 80 },
    { id: 'complete-exercises', text: 'Terminer 5 exercices différents', type: 'training', target: 5, current: 0, completed: false, xpReward: 40 },
    { id: 'training-generator', text: 'Utiliser le générateur de programme', type: 'training', target: 1, current: 0, completed: false, xpReward: 60 },
    { id: 'random-workout', text: 'Essayer une séance surprise', type: 'training', target: 1, current: 0, completed: false, xpReward: 70 },
    
    // Apprentissage
    { id: 'read-article', text: 'Lire un article de documentation', type: 'learning', target: 1, current: 0, completed: false, xpReward: 30 },
    { id: 'study-technique', text: 'Étudier les techniques d\'escalade', type: 'learning', target: 1, current: 0, completed: false, xpReward: 45 },
    { id: 'gear-research', text: 'Consulter la section matériel', type: 'learning', target: 1, current: 0, completed: false, xpReward: 25 },
    { id: 'equipment-store', text: 'Explorer la boutique d\'équipement', type: 'learning', target: 1, current: 0, completed: false, xpReward: 35 },
    { id: 'learn-safety', text: 'Lire un article sur la sécurité', type: 'learning', target: 1, current: 0, completed: false, xpReward: 40 },
    { id: 'nutrition-guide', text: 'Consulter les conseils nutrition', type: 'learning', target: 1, current: 0, completed: false, xpReward: 30 },
    
    // Exploration
    { id: 'find-gym', text: 'Découvrir une nouvelle salle sur la carte', type: 'exploration', target: 1, current: 0, completed: false, xpReward: 35 },
    { id: 'visit-map', text: 'Explorer la carte des salles d\'escalade', type: 'exploration', target: 1, current: 0, completed: false, xpReward: 25 },
    { id: 'call-gym', text: 'Contacter une salle d\'escalade', type: 'exploration', target: 1, current: 0, completed: false, xpReward: 30 },
    { id: 'plan-route', text: 'Planifier un itinéraire vers une salle', type: 'exploration', target: 1, current: 0, completed: false, xpReward: 20 },
    
    // Progression
    { id: 'check-progress', text: 'Consulter ses statistiques de progression', type: 'progress', target: 1, current: 0, completed: false, xpReward: 15 },
    { id: 'view-badges', text: 'Consulter ses badges et succès', type: 'progress', target: 1, current: 0, completed: false, xpReward: 20 },
    { id: 'check-history', text: 'Revoir l\'historique de ses séances', type: 'progress', target: 1, current: 0, completed: false, xpReward: 15 },
    { id: 'complete-quests', text: 'Terminer 2 autres quêtes aujourd\'hui', type: 'progress', target: 2, current: 0, completed: false, xpReward: 80 },
    { id: 'daily-login', text: 'Se connecter à l\'application', type: 'progress', target: 1, current: 0, completed: false, xpReward: 10 }
  ];

  // Sélection aléatoire de 6 objectifs quotidiens
  const shuffled = goalPool.sort(() => Math.random() - 0.5);
  const selectedGoals = shuffled.slice(0, 6);

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