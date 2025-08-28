import { Exercise, WorkoutSession } from '../types';

// Base d'exercices d'échauffement
export const warmupExercises: Exercise[] = [
  {
    id: 'shoulder-rolls',
    name: 'Rotations d\'épaules',
    description: 'Rotations lentes des épaules pour échauffer les articulations',
    duration: 60,
    muscles: ['Épaules', 'Trapèzes'],
    animation: 'rotate',
    difficulty: 'beginner',
    instructions: [
      'Debout, bras le long du corps',
      'Effectuez des rotations lentes vers l\'arrière',
      'Puis vers l\'avant',
      'Gardez un rythme régulier'
    ]
  },
  {
    id: 'arm-circles',
    name: 'Cercles de bras',
    description: 'Mouvements circulaires des bras pour préparer les épaules',
    duration: 45,
    muscles: ['Épaules', 'Deltoïdes'],
    animation: 'rotate',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus sur les côtés',
      'Effectuez de petits cercles',
      'Augmentez progressivement la taille',
      'Changez de sens à mi-parcours'
    ]
  },
  {
    id: 'wrist-mobility',
    name: 'Mobilité des poignets',
    description: 'Étirements et rotations pour préparer les poignets',
    duration: 90,
    muscles: ['Poignets', 'Avant-bras'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Tendez un bras devant vous',
      'Avec l\'autre main, tirez doucement les doigts vers vous',
      'Maintenez 15 secondes',
      'Répétez de l\'autre côté',
      'Effectuez des rotations de poignets'
    ]
  },
  {
    id: 'finger-stretches',
    name: 'Étirements des doigts',
    description: 'Préparation spécifique des doigts pour l\'escalade',
    duration: 120,
    muscles: ['Doigts', 'Avant-bras'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Étirez chaque doigt individuellement',
      'Massez les articulations',
      'Effectuez des flexions/extensions',
      'Travaillez la mobilité des phalanges'
    ]
  },
  {
    id: 'dynamic-stretching',
    name: 'Étirements dynamiques',
    description: 'Mouvements dynamiques pour échauffer tout le corps',
    duration: 180,
    muscles: ['Corps entier'],
    animation: 'bounce',
    difficulty: 'intermediate',
    instructions: [
      'Balancement des jambes',
      'Rotations du tronc',
      'Flexions latérales',
      'Mouvements d\'escalade simulés'
    ]
  }
];

// Exercices de renforcement
export const strengthExercises: Exercise[] = [
  {
    id: 'pull-ups',
    name: 'Tractions',
    description: 'Exercice fondamental pour développer la force de traction',
    duration: 180,
    muscles: ['Dorsaux', 'Biceps', 'Avant-bras'],
    animation: 'flex',
    difficulty: 'intermediate',
    instructions: [
      'Suspendez-vous à une barre',
      'Tirez-vous vers le haut jusqu\'à ce que le menton dépasse la barre',
      'Descendez lentement',
      'Répétez selon votre niveau'
    ]
  },
  {
    id: 'dead-hang',
    name: 'Suspension passive',
    description: 'Renforcement de la préhension et des avant-bras',
    duration: 120,
    muscles: ['Avant-bras', 'Doigts'],
    animation: 'plank',
    difficulty: 'beginner',
    instructions: [
      'Suspendez-vous à une barre ou des prises',
      'Gardez les bras tendus',
      'Maintenez la position le plus longtemps possible',
      'Respirez calmement'
    ]
  },
  {
    id: 'campus-board',
    name: 'Planche à campus',
    description: 'Exercice avancé pour la force explosive des doigts',
    duration: 300,
    muscles: ['Doigts', 'Avant-bras', 'Dorsaux'],
    animation: 'flex',
    difficulty: 'advanced',
    instructions: [
      'Utilisez une planche à campus ou des prises',
      'Montez en utilisant seulement les bras',
      'Mouvements dynamiques et contrôlés',
      'ATTENTION: Exercice très exigeant'
    ]
  },
  {
    id: 'core-training',
    name: 'Renforcement du core',
    description: 'Exercices pour renforcer la ceinture abdominale',
    duration: 240,
    muscles: ['Abdominaux', 'Obliques', 'Lombaires'],
    animation: 'plank',
    difficulty: 'intermediate',
    instructions: [
      'Planche frontale et latérale',
      'Relevés de jambes suspendus',
      'Rotations du tronc',
      'Gainage dynamique'
    ]
  },
  {
    id: 'fingerboard',
    name: 'Poutre d\'entraînement',
    description: 'Entraînement spécifique sur poutre pour les doigts',
    duration: 360,
    muscles: ['Doigts', 'Avant-bras'],
    animation: 'plank',
    difficulty: 'advanced',
    instructions: [
      'Utilisez différents types de prises',
      'Alternez suspensions et repos',
      'Progressez graduellement',
      'Échauffement obligatoire'
    ]
  },
  {
    id: 'antagonist-training',
    name: 'Travail antagoniste',
    description: 'Renforcement des muscles antagonistes pour l\'équilibre',
    duration: 200,
    muscles: ['Triceps', 'Pectoraux', 'Deltoïdes'],
    animation: 'flex',
    difficulty: 'intermediate',
    instructions: [
      'Pompes et variantes',
      'Extensions triceps',
      'Élévations latérales',
      'Travail de l\'ouverture thoracique'
    ]
  }
];

// Exercices d'étirements
export const stretchingExercises: Exercise[] = [
  {
    id: 'forearm-stretch',
    name: 'Étirement avant-bras',
    description: 'Étirement profond des avant-bras après l\'effort',
    duration: 120,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Tendez le bras devant vous',
      'Pliez le poignet vers le bas',
      'Tirez doucement avec l\'autre main',
      'Maintenez 30 secondes de chaque côté'
    ]
  },
  {
    id: 'shoulder-stretch',
    name: 'Étirement épaules',
    description: 'Détente des épaules et du haut du dos',
    duration: 90,
    muscles: ['Épaules', 'Trapèzes', 'Dorsaux'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Croisez un bras devant la poitrine',
      'Tirez doucement avec l\'autre bras',
      'Sentez l\'étirement dans l\'épaule',
      'Répétez de l\'autre côté'
    ]
  },
  {
    id: 'back-stretch',
    name: 'Étirement du dos',
    description: 'Étirement complet de la chaîne postérieure',
    duration: 150,
    muscles: ['Dorsaux', 'Lombaires', 'Ischio-jambiers'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Position de l\'enfant en yoga',
      'Étendez les bras vers l\'avant',
      'Respirez profondément',
      'Relâchez toutes les tensions'
    ]
  },
  {
    id: 'hip-flexor-stretch',
    name: 'Étirement psoas',
    description: 'Étirement des fléchisseurs de hanche',
    duration: 120,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'flex',
    difficulty: 'intermediate',
    instructions: [
      'Position de fente basse',
      'Poussez le bassin vers l\'avant',
      'Gardez le dos droit',
      'Alternez les jambes'
    ]
  },
  {
    id: 'full-body-stretch',
    name: 'Étirement corps entier',
    description: 'Séquence complète d\'étirements',
    duration: 300,
    muscles: ['Corps entier'],
    animation: 'flex',
    difficulty: 'intermediate',
    instructions: [
      'Enchaînement de postures',
      'Étirement de chaque groupe musculaire',
      'Respiration profonde',
      'Relaxation progressive'
    ]
  }
];

// Organisation des exercices par catégorie
export const exercises = {
  warmup: warmupExercises,
  strength: strengthExercises,
  stretching: stretchingExercises
};

// Sessions d'entraînement prédéfinies
export const workoutSessions: WorkoutSession[] = [
  {
    id: 'quick-warmup',
    type: 'warmup',
    name: 'Échauffement Express',
    exercises: [
      warmupExercises[0], // Rotations d'épaules
      warmupExercises[1], // Cercles de bras
      warmupExercises[2]  // Mobilité poignets
    ],
    totalDuration: 195,
    xpReward: 50
  },
  {
    id: 'complete-warmup',
    type: 'warmup',
    name: 'Échauffement Complet',
    exercises: warmupExercises,
    totalDuration: warmupExercises.reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 100
  },
  {
    id: 'strength-basic',
    type: 'strength',
    name: 'Renforcement Débutant',
    exercises: [
      strengthExercises[1], // Suspension passive
      strengthExercises[3], // Core training
      strengthExercises[5]  // Antagoniste
    ],
    totalDuration: 560,
    xpReward: 150
  },
  {
    id: 'strength-advanced',
    type: 'strength',
    name: 'Renforcement Avancé',
    exercises: [
      strengthExercises[0], // Tractions
      strengthExercises[2], // Campus board
      strengthExercises[4]  // Fingerboard
    ],
    totalDuration: 840,
    xpReward: 300
  },
  {
    id: 'flexibility-session',
    type: 'stretching',
    name: 'Session Flexibilité',
    exercises: stretchingExercises,
    totalDuration: stretchingExercises.reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 120
  }
];

// Générateur de programmes personnalisés
export const generateWorkoutProgram = (
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  type: 'warmup' | 'strength' | 'stretching' | 'full',
  targetDuration: number
): WorkoutSession => {
  let selectedExercises: Exercise[] = [];
  let sessionName = '';
  
  if (type === 'full') {
    // Programme complet avec échauffement, renforcement et étirements
    const warmup = warmupExercises.filter(ex => ex.difficulty === difficulty || ex.difficulty === 'beginner').slice(0, 2);
    const strength = strengthExercises.filter(ex => ex.difficulty === difficulty).slice(0, 2);
    const stretching = stretchingExercises.slice(0, 2);
    
    selectedExercises = [...warmup, ...strength, ...stretching];
    sessionName = `Programme Complet ${difficulty}`;
  } else {
    const exercisePool = exercises[type].filter(ex => 
      ex.difficulty === difficulty || (difficulty === 'advanced' && ex.difficulty === 'intermediate')
    );
    
    // Sélection d'exercices pour atteindre la durée cible
    let currentDuration = 0;
    const targetSeconds = targetDuration * 60;
    
    while (currentDuration < targetSeconds && exercisePool.length > selectedExercises.length) {
      const remainingExercises = exercisePool.filter(ex => !selectedExercises.includes(ex));
      if (remainingExercises.length === 0) break;
      
      const nextExercise = remainingExercises[Math.floor(Math.random() * remainingExercises.length)];
      selectedExercises.push(nextExercise);
      currentDuration += nextExercise.duration;
    }
    
    sessionName = `${type === 'warmup' ? 'Échauffement' : type === 'strength' ? 'Renforcement' : 'Étirements'} ${difficulty}`;
  }
  
  const totalDuration = selectedExercises.reduce((sum, ex) => sum + ex.duration, 0);
  const xpReward = Math.floor(totalDuration / 10) + (selectedExercises.length * 10);
  
  return {
    id: `generated-${Date.now()}`,
    type: type === 'full' ? 'auto' : type,
    name: sessionName,
    exercises: selectedExercises,
    totalDuration,
    xpReward
  };
};

// Générateur de séance aléatoire
export const generateRandomWorkout = (
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  type: 'warmup' | 'strength' | 'stretching' | 'full',
  duration: number
): WorkoutSession => {
  return generateWorkoutProgram(difficulty, type, duration);
};