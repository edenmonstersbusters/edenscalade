import { Quest } from '../types';

export const generateDailyQuests = (): Quest[] => [
  {
    id: 'daily-warmup',
    title: 'Échauffement Quotidien',
    description: 'Complétez une séance d\'échauffement aujourd\'hui',
    type: 'daily',
    target: 1,
    current: 0,
    completed: false,
    xpReward: 50,
    icon: '🔥',
    category: 'training'
  },
  {
    id: 'daily-strength',
    title: 'Force du Jour',
    description: 'Faites 15 minutes de renforcement',
    type: 'daily',
    target: 15,
    current: 0,
    completed: false,
    xpReward: 75,
    icon: '💪',
    category: 'training'
  },
  {
    id: 'daily-stretch',
    title: 'Flexibilité Quotidienne',
    description: 'Étirez-vous pendant 10 minutes',
    type: 'daily',
    target: 10,
    current: 0,
    completed: false,
    xpReward: 40,
    icon: '🧘',
    category: 'training'
  },
  {
    id: 'daily-learning',
    title: 'Apprentissage du Jour',
    description: 'Lisez un article de documentation',
    type: 'daily',
    target: 1,
    current: 0,
    completed: false,
    xpReward: 30,
    icon: '📚',
    category: 'learning'
  },
  {
    id: 'daily-exploration',
    title: 'Explorateur',
    description: 'Découvrez une nouvelle salle sur la carte',
    type: 'daily',
    target: 1,
    current: 0,
    completed: false,
    xpReward: 25,
    icon: '🗺️',
    category: 'exploration'
  }
];

export const generateWeeklyQuests = (): Quest[] => [
  {
    id: 'weekly-consistency',
    title: 'Régularité Hebdomadaire',
    description: 'Entraînez-vous 5 jours cette semaine',
    type: 'weekly',
    target: 5,
    current: 0,
    completed: false,
    xpReward: 200,
    icon: '🔥',
    category: 'consistency'
  },
  {
    id: 'weekly-strength-master',
    title: 'Maître de la Force',
    description: 'Complétez 3 séances de renforcement',
    type: 'weekly',
    target: 3,
    current: 0,
    completed: false,
    xpReward: 150,
    icon: '🏋️',
    category: 'training'
  },
  {
    id: 'weekly-flexibility',
    title: 'Souplesse de la Semaine',
    description: 'Faites 60 minutes d\'étirements au total',
    type: 'weekly',
    target: 60,
    current: 0,
    completed: false,
    xpReward: 120,
    icon: '🤸',
    category: 'training'
  },
  {
    id: 'weekly-scholar',
    title: 'Érudit de l\'Escalade',
    description: 'Lisez 5 articles de documentation',
    type: 'weekly',
    target: 5,
    current: 0,
    completed: false,
    xpReward: 100,
    icon: '🎓',
    category: 'learning'
  },
  {
    id: 'weekly-explorer',
    title: 'Grand Explorateur',
    description: 'Visitez 3 salles différentes sur la carte',
    type: 'weekly',
    target: 3,
    current: 0,
    completed: false,
    xpReward: 80,
    icon: '🧭',
    category: 'exploration'
  }
];

export const achievementQuests: Quest[] = [
  {
    id: 'achievement-first-session',
    title: 'Premier Pas',
    description: 'Complétez votre première séance d\'entraînement',
    type: 'achievement',
    target: 1,
    current: 0,
    completed: false,
    xpReward: 100,
    icon: '👶',
    category: 'training'
  },
  {
    id: 'achievement-10-sessions',
    title: 'Grimpeur Dévoué',
    description: 'Complétez 10 séances d\'entraînement',
    type: 'achievement',
    target: 10,
    current: 0,
    completed: false,
    xpReward: 300,
    icon: '🧗',
    category: 'training'
  },
  {
    id: 'achievement-50-sessions',
    title: 'Araignée Humaine',
    description: 'Complétez 50 séances d\'entraînement',
    type: 'achievement',
    target: 50,
    current: 0,
    completed: false,
    xpReward: 1000,
    icon: '🕷️',
    category: 'training'
  },
  {
    id: 'achievement-100-sessions',
    title: 'Maître Grimpeur',
    description: 'Complétez 100 séances d\'entraînement',
    type: 'achievement',
    target: 100,
    current: 0,
    completed: false,
    xpReward: 2500,
    icon: '👑',
    category: 'training'
  },
  {
    id: 'achievement-7-day-streak',
    title: 'Semaine Parfaite',
    description: 'Entraînez-vous 7 jours consécutifs',
    type: 'achievement',
    target: 7,
    current: 0,
    completed: false,
    xpReward: 500,
    icon: '🔥',
    category: 'consistency'
  },
  {
    id: 'achievement-30-day-streak',
    title: 'Mois de Fer',
    description: 'Entraînez-vous 30 jours consécutifs',
    type: 'achievement',
    target: 30,
    current: 0,
    completed: false,
    xpReward: 2000,
    icon: '🏆',
    category: 'consistency'
  },
  {
    id: 'achievement-level-10',
    title: 'Chèvre de Montagne',
    description: 'Atteignez le niveau 10',
    type: 'achievement',
    target: 10,
    current: 0,
    completed: false,
    xpReward: 1500,
    icon: '🐐',
    category: 'training'
  },
  {
    id: 'achievement-level-25',
    title: 'Légende Vivante',
    description: 'Atteignez le niveau 25',
    type: 'achievement',
    target: 25,
    current: 0,
    completed: false,
    xpReward: 5000,
    icon: '⭐',
    category: 'training'
  },
  {
    id: 'achievement-all-articles',
    title: 'Encyclopédie Vivante',
    description: 'Lisez tous les articles de documentation',
    type: 'achievement',
    target: 20, // Nombre total d'articles
    current: 0,
    completed: false,
    xpReward: 1000,
    icon: '📖',
    category: 'learning'
  },
  {
    id: 'achievement-world-explorer',
    title: 'Explorateur Mondial',
    description: 'Visitez 10 salles différentes sur la carte',
    type: 'achievement',
    target: 10,
    current: 0,
    completed: false,
    xpReward: 800,
    icon: '🌍',
    category: 'exploration'
  },
  {
    id: 'achievement-strength-master',
    title: 'Maître de la Force',
    description: 'Complétez 25 séances de renforcement',
    type: 'achievement',
    target: 25,
    current: 0,
    completed: false,
    xpReward: 750,
    icon: '💪',
    category: 'training'
  },
  {
    id: 'achievement-flexibility-guru',
    title: 'Gourou de la Flexibilité',
    description: 'Complétez 25 séances d\'étirements',
    type: 'achievement',
    target: 25,
    current: 0,
    completed: false,
    xpReward: 600,
    icon: '🤸',
    category: 'training'
  },
  {
    id: 'achievement-warmup-champion',
    title: 'Champion de l\'Échauffement',
    description: 'Complétez 50 séances d\'échauffement',
    type: 'achievement',
    target: 50,
    current: 0,
    completed: false,
    xpReward: 400,
    icon: '🔥',
    category: 'training'
  },
  {
    id: 'achievement-advanced-exercises',
    title: 'Défi Ultime',
    description: 'Complétez 10 exercices de niveau avancé',
    type: 'achievement',
    target: 10,
    current: 0,
    completed: false,
    xpReward: 1200,
    icon: '🚀',
    category: 'training'
  },
  {
    id: 'achievement-perfect-week',
    title: 'Semaine Parfaite',
    description: 'Complétez toutes les quêtes quotidiennes pendant 7 jours',
    type: 'achievement',
    target: 7,
    current: 0,
    completed: false,
    xpReward: 1500,
    icon: '✨',
    category: 'consistency'
  }
];

export const updateQuestProgress = (
  quests: Quest[],
  questId: string,
  increment: number = 1
): Quest[] => {
  return quests.map(quest => {
    if (quest.id === questId && !quest.completed) {
      const newCurrent = Math.min(quest.current + increment, quest.target);
      return {
        ...quest,
        current: newCurrent,
        completed: newCurrent >= quest.target
      };
    }
    return quest;
  });
};

export const getCompletedQuests = (quests: Quest[]): Quest[] => {
  return quests.filter(quest => quest.completed);
};

export const getActiveQuests = (quests: Quest[]): Quest[] => {
  return quests.filter(quest => !quest.completed);
};