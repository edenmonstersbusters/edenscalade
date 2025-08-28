import { Exercise, WorkoutSession } from '../types';

// ÉCHAUFFEMENT - 100+ exercices
export const warmupExercises: Exercise[] = [
  // Poignets et avant-bras (20 exercices)
  {
    id: 'wrist-rotations',
    name: 'Rotations des Poignets',
    description: 'Mouvements circulaires pour échauffer les articulations',
    duration: 30,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'rotate',
    difficulty: 'beginner',
    instructions: [
      'Tendez les bras devant vous',
      'Effectuez des rotations lentes avec les poignets',
      'Changez de sens toutes les 15 secondes'
    ]
  },
  {
    id: 'wrist-flexion',
    name: 'Flexions des Poignets',
    description: 'Flexion et extension des poignets',
    duration: 45,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'flex',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus devant vous',
      'Fléchissez les poignets vers le haut puis vers le bas',
      'Mouvements lents et contrôlés'
    ]
  },
  {
    id: 'finger-waves',
    name: 'Vagues des Doigts',
    description: 'Mouvement ondulatoire des doigts',
    duration: 30,
    muscles: ['Doigts', 'Avant-bras'],
    animation: 'wave',
    difficulty: 'beginner',
    instructions: [
      'Mains ouvertes devant vous',
      'Créez un mouvement de vague avec les doigts',
      'Du petit doigt vers le pouce'
    ]
  },
  {
    id: 'prayer-stretch',
    name: 'Étirement en Prière',
    description: 'Étirement des avant-bras en position de prière',
    duration: 60,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'prayer',
    difficulty: 'beginner',
    instructions: [
      'Paumes jointes devant la poitrine',
      'Descendez lentement les mains',
      'Gardez les paumes collées'
    ]
  },
  {
    id: 'reverse-prayer',
    name: 'Prière Inversée',
    description: 'Étirement inverse des avant-bras',
    duration: 45,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'reverse-prayer',
    difficulty: 'intermediate',
    instructions: [
      'Dos des mains joints derrière le dos',
      'Remontez doucement les mains',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'finger-extensions',
    name: 'Extensions des Doigts',
    description: 'Ouverture forcée des doigts',
    duration: 30,
    muscles: ['Extenseurs', 'Doigts'],
    animation: 'extend',
    difficulty: 'beginner',
    instructions: [
      'Fermez le poing',
      'Ouvrez rapidement les doigts',
      'Étirez au maximum'
    ]
  },
  {
    id: 'tendon-glides',
    name: 'Glissements Tendineux',
    description: 'Mobilisation des tendons fléchisseurs',
    duration: 60,
    muscles: ['Tendons', 'Doigts'],
    animation: 'glide',
    difficulty: 'intermediate',
    instructions: [
      'Doigts droits puis crochet',
      'Puis poing fermé',
      'Mouvement fluide et lent'
    ]
  },
  {
    id: 'wrist-circles-weighted',
    name: 'Cercles Poignets Lestés',
    description: 'Rotations avec résistance légère',
    duration: 45,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'weighted-circle',
    difficulty: 'intermediate',
    instructions: [
      'Tenez un objet léger',
      'Effectuez des cercles lents',
      'Contrôlez le mouvement'
    ]
  },
  {
    id: 'finger-piano',
    name: 'Piano des Doigts',
    description: 'Mouvement de piano pour la dextérité',
    duration: 30,
    muscles: ['Doigts', 'Coordination'],
    animation: 'piano',
    difficulty: 'beginner',
    instructions: [
      'Posez les mains à plat',
      'Levez chaque doigt individuellement',
      'Comme jouer du piano'
    ]
  },
  {
    id: 'rubber-band-extensions',
    name: 'Extensions Élastique',
    description: 'Renforcement des extenseurs avec élastique',
    duration: 45,
    muscles: ['Extenseurs', 'Avant-bras'],
    animation: 'rubber-band',
    difficulty: 'intermediate',
    instructions: [
      'Élastique autour des doigts',
      'Ouvrez contre la résistance',
      'Contrôlez le retour'
    ]
  },
  {
    id: 'wrist-push-ups',
    name: 'Pompes Poignets',
    description: 'Renforcement en appui sur les poignets',
    duration: 30,
    muscles: ['Poignets', 'Avant-bras'],
    animation: 'wrist-pushup',
    difficulty: 'advanced',
    instructions: [
      'Position pompe sur les poignets',
      'Fléchissez et tendez les poignets',
      'Gardez le corps droit'
    ]
  },
  {
    id: 'finger-taps',
    name: 'Tapotements Doigts',
    description: 'Activation rapide des doigts',
    duration: 30,
    muscles: ['Doigts', 'Coordination'],
    animation: 'tap',
    difficulty: 'beginner',
    instructions: [
      'Tapotez rapidement avec chaque doigt',
      'Sur une surface dure',
      'Alternez les mains'
    ]
  },
  {
    id: 'wrist-flexor-stretch',
    name: 'Étirement Fléchisseurs',
    description: 'Étirement spécifique des fléchisseurs',
    duration: 60,
    muscles: ['Fléchisseurs', 'Avant-bras'],
    animation: 'flexor-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras tendu, paume vers l\'extérieur',
      'Tirez les doigts vers vous',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'wrist-extensor-stretch',
    name: 'Étirement Extenseurs',
    description: 'Étirement des muscles extenseurs',
    duration: 60,
    muscles: ['Extenseurs', 'Avant-bras'],
    animation: 'extensor-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras tendu, paume vers le sol',
      'Poussez la main vers le bas',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'finger-spreads',
    name: 'Écartements Doigts',
    description: 'Écartement maximal des doigts',
    duration: 30,
    muscles: ['Doigts', 'Interosseux'],
    animation: 'spread',
    difficulty: 'beginner',
    instructions: [
      'Écartez au maximum les doigts',
      'Maintenez 5 secondes',
      'Relâchez et répétez'
    ]
  },
  {
    id: 'thumb-circles',
    name: 'Cercles du Pouce',
    description: 'Mobilisation spécifique du pouce',
    duration: 30,
    muscles: ['Pouce', 'Thénar'],
    animation: 'thumb-circle',
    difficulty: 'beginner',
    instructions: [
      'Effectuez des cercles avec le pouce',
      'Dans les deux sens',
      'Amplitude maximale'
    ]
  },
  {
    id: 'grip-releases',
    name: 'Relâchements de Prise',
    description: 'Alternance tension-relâchement',
    duration: 45,
    muscles: ['Avant-bras', 'Doigts'],
    animation: 'grip-release',
    difficulty: 'intermediate',
    instructions: [
      'Serrez fort le poing 5 secondes',
      'Relâchez complètement',
      'Alternez tension et détente'
    ]
  },
  {
    id: 'finger-independence',
    name: 'Indépendance Doigts',
    description: 'Travail d\'indépendance des doigts',
    duration: 60,
    muscles: ['Doigts', 'Coordination'],
    animation: 'independence',
    difficulty: 'advanced',
    instructions: [
      'Gardez 3 doigts pliés',
      'Bougez seulement 1 doigt',
      'Alternez les combinaisons'
    ]
  },
  {
    id: 'wrist-stability',
    name: 'Stabilité Poignets',
    description: 'Renforcement de la stabilité',
    duration: 45,
    muscles: ['Poignets', 'Stabilisateurs'],
    animation: 'stability',
    difficulty: 'intermediate',
    instructions: [
      'Appui sur les mains',
      'Petits mouvements circulaires',
      'Gardez les poignets stables'
    ]
  },
  {
    id: 'dynamic-stretching',
    name: 'Étirements Dynamiques',
    description: 'Étirements avec mouvement',
    duration: 60,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'dynamic',
    difficulty: 'intermediate',
    instructions: [
      'Mouvements d\'étirement rythmés',
      'Ne forcez pas',
      'Amplitude progressive'
    ]
  },

  // Épaules et bras (25 exercices)
  {
    id: 'shoulder-rolls',
    name: 'Roulements d\'Épaules',
    description: 'Échauffement des épaules et du haut du dos',
    duration: 45,
    muscles: ['Épaules', 'Trapèzes'],
    animation: 'roll',
    difficulty: 'beginner',
    instructions: [
      'Debout, pieds écartés largeur d\'épaules',
      'Effectuez des roulements d\'épaules vers l\'arrière',
      'Mouvements amples et contrôlés'
    ]
  },
  {
    id: 'arm-circles-small',
    name: 'Petits Cercles Bras',
    description: 'Cercles de faible amplitude',
    duration: 30,
    muscles: ['Épaules', 'Deltoïdes'],
    animation: 'small-circles',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus sur les côtés',
      'Petits cercles vers l\'avant',
      'Puis vers l\'arrière'
    ]
  },
  {
    id: 'arm-circles-large',
    name: 'Grands Cercles Bras',
    description: 'Cercles de grande amplitude',
    duration: 45,
    muscles: ['Épaules', 'Deltoïdes'],
    animation: 'large-circles',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus, grands cercles',
      'Amplitude maximale',
      'Contrôlez le mouvement'
    ]
  },
  {
    id: 'shoulder-shrugs',
    name: 'Haussements d\'Épaules',
    description: 'Mobilisation des trapèzes',
    duration: 30,
    muscles: ['Trapèzes', 'Épaules'],
    animation: 'shrug',
    difficulty: 'beginner',
    instructions: [
      'Haussez les épaules vers les oreilles',
      'Maintenez 2 secondes',
      'Relâchez lentement'
    ]
  },
  {
    id: 'cross-body-stretch',
    name: 'Étirement Croisé',
    description: 'Étirement horizontal des épaules',
    duration: 60,
    muscles: ['Deltoïdes', 'Capsule'],
    animation: 'cross-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras croisé devant la poitrine',
      'Tirez avec l\'autre bras',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'overhead-reach',
    name: 'Extensions Verticales',
    description: 'Étirement vers le haut',
    duration: 45,
    muscles: ['Épaules', 'Lats'],
    animation: 'overhead',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus au-dessus de la tête',
      'Étirez vers le haut',
      'Alternez les bras'
    ]
  },
  {
    id: 'wall-slides',
    name: 'Glissements Muraux',
    description: 'Mobilisation contre le mur',
    duration: 60,
    muscles: ['Épaules', 'Omoplates'],
    animation: 'wall-slide',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Glissez les bras vers le haut',
      'Gardez le contact avec le mur'
    ]
  },
  {
    id: 'pendulum-swings',
    name: 'Balancements Pendule',
    description: 'Mouvements pendulaires des bras',
    duration: 45,
    muscles: ['Épaules', 'Capsule'],
    animation: 'pendulum',
    difficulty: 'beginner',
    instructions: [
      'Penchez-vous légèrement',
      'Laissez le bras se balancer',
      'Mouvement naturel et libre'
    ]
  },
  {
    id: 'doorway-stretch',
    name: 'Étirement Encadrement',
    description: 'Étirement dans l\'encadrement',
    duration: 60,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'doorway',
    difficulty: 'beginner',
    instructions: [
      'Bras contre l\'encadrement',
      'Avancez le corps',
      'Ressentez l\'étirement pectoral'
    ]
  },
  {
    id: 'band-pull-aparts',
    name: 'Écartements Élastique',
    description: 'Renforcement avec élastique',
    duration: 45,
    muscles: ['Rhomboïdes', 'Trapèzes'],
    animation: 'band-apart',
    difficulty: 'intermediate',
    instructions: [
      'Élastique tendu devant vous',
      'Écartez en serrant les omoplates',
      'Contrôlez le retour'
    ]
  },
  {
    id: 'shoulder-dislocations',
    name: 'Dislocations Épaules',
    description: 'Mobilité avec bâton',
    duration: 60,
    muscles: ['Épaules', 'Capsule'],
    animation: 'dislocation',
    difficulty: 'intermediate',
    instructions: [
      'Bâton large devant vous',
      'Passez par-dessus la tête',
      'Amplitude progressive'
    ]
  },
  {
    id: 'scapular-wall-slides',
    name: 'Glissements Omoplates',
    description: 'Mobilisation des omoplates',
    duration: 45,
    muscles: ['Omoplates', 'Rhomboïdes'],
    animation: 'scap-slide',
    difficulty: 'intermediate',
    instructions: [
      'Bras en W contre le mur',
      'Glissez en gardant le contact',
      'Serrez les omoplates'
    ]
  },
  {
    id: 'arm-swings-front',
    name: 'Balancements Avant',
    description: 'Balancements vers l\'avant',
    duration: 30,
    muscles: ['Épaules', 'Deltoïdes'],
    animation: 'swing-front',
    difficulty: 'beginner',
    instructions: [
      'Balancez les bras vers l\'avant',
      'Mouvement ample et contrôlé',
      'Alternez ou simultané'
    ]
  },
  {
    id: 'arm-swings-side',
    name: 'Balancements Latéraux',
    description: 'Balancements sur les côtés',
    duration: 30,
    muscles: ['Épaules', 'Deltoïdes'],
    animation: 'swing-side',
    difficulty: 'beginner',
    instructions: [
      'Balancez les bras latéralement',
      'Croisez devant le corps',
      'Mouvement rythmé'
    ]
  },
  {
    id: 'shoulder-blade-squeezes',
    name: 'Serrages Omoplates',
    description: 'Activation des rhomboïdes',
    duration: 30,
    muscles: ['Rhomboïdes', 'Trapèzes'],
    animation: 'squeeze',
    difficulty: 'beginner',
    instructions: [
      'Serrez les omoplates ensemble',
      'Maintenez 3 secondes',
      'Relâchez lentement'
    ]
  },
  {
    id: 'reverse-fly-motion',
    name: 'Mouvement Reverse Fly',
    description: 'Simulation sans poids',
    duration: 45,
    muscles: ['Deltoïdes', 'Rhomboïdes'],
    animation: 'reverse-fly',
    difficulty: 'beginner',
    instructions: [
      'Bras écartés, paumes vers le bas',
      'Ramenez vers l\'arrière',
      'Serrez les omoplates'
    ]
  },
  {
    id: 'shoulder-external-rotation',
    name: 'Rotation Externe',
    description: 'Mobilisation en rotation externe',
    duration: 45,
    muscles: ['Rotateurs', 'Épaules'],
    animation: 'external-rotation',
    difficulty: 'intermediate',
    instructions: [
      'Coudes collés au corps',
      'Rotation externe des avant-bras',
      'Amplitude progressive'
    ]
  },
  {
    id: 'shoulder-internal-rotation',
    name: 'Rotation Interne',
    description: 'Mobilisation en rotation interne',
    duration: 45,
    muscles: ['Rotateurs', 'Épaules'],
    animation: 'internal-rotation',
    difficulty: 'intermediate',
    instructions: [
      'Coudes collés au corps',
      'Rotation interne des avant-bras',
      'Contrôlez l\'amplitude'
    ]
  },
  {
    id: 'high-five-stretch',
    name: 'Étirement High Five',
    description: 'Étirement en position high five',
    duration: 60,
    muscles: ['Épaules', 'Triceps'],
    animation: 'high-five',
    difficulty: 'beginner',
    instructions: [
      'Bras levé, coude plié',
      'Tirez le coude vers l\'arrière',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'shoulder-flexion',
    name: 'Flexion Épaules',
    description: 'Mouvement de flexion pure',
    duration: 30,
    muscles: ['Deltoïdes', 'Épaules'],
    animation: 'flexion',
    difficulty: 'beginner',
    instructions: [
      'Levez les bras vers l\'avant',
      'Jusqu\'à la verticale',
      'Mouvement lent et contrôlé'
    ]
  },
  {
    id: 'shoulder-extension',
    name: 'Extension Épaules',
    description: 'Mouvement d\'extension',
    duration: 30,
    muscles: ['Deltoïdes', 'Lats'],
    animation: 'extension',
    difficulty: 'beginner',
    instructions: [
      'Bras vers l\'arrière',
      'Amplitude maximale',
      'Ne forcez pas'
    ]
  },
  {
    id: 'shoulder-abduction',
    name: 'Abduction Épaules',
    description: 'Élévation latérale',
    duration: 30,
    muscles: ['Deltoïdes', 'Épaules'],
    animation: 'abduction',
    difficulty: 'beginner',
    instructions: [
      'Levez les bras sur les côtés',
      'Jusqu\'à l\'horizontale',
      'Contrôlez la descente'
    ]
  },
  {
    id: 'shoulder-adduction',
    name: 'Adduction Épaules',
    description: 'Rapprochement des bras',
    duration: 30,
    muscles: ['Pectoraux', 'Lats'],
    animation: 'adduction',
    difficulty: 'beginner',
    instructions: [
      'Rapprochez les bras du corps',
      'Serrez contre les côtes',
      'Maintenez la tension'
    ]
  },
  {
    id: 'dynamic-shoulder-warm',
    name: 'Échauffement Dynamique',
    description: 'Combinaison de mouvements',
    duration: 60,
    muscles: ['Épaules', 'Complexe'],
    animation: 'dynamic-warm',
    difficulty: 'intermediate',
    instructions: [
      'Enchaînez différents mouvements',
      'Cercles, flexions, rotations',
      'Fluidité et progression'
    ]
  },
  {
    id: 'shoulder-activation',
    name: 'Activation Épaules',
    description: 'Réveil musculaire complet',
    duration: 45,
    muscles: ['Épaules', 'Stabilisateurs'],
    animation: 'activation',
    difficulty: 'intermediate',
    instructions: [
      'Contractions isométriques',
      'Toutes les directions',
      'Activation progressive'
    ]
  },

  // Tronc et dos (25 exercices)
  {
    id: 'torso-twists',
    name: 'Rotations du Tronc',
    description: 'Échauffement de la colonne vertébrale',
    duration: 45,
    muscles: ['Obliques', 'Colonne'],
    animation: 'twist',
    difficulty: 'beginner',
    instructions: [
      'Mains sur les hanches',
      'Rotation douce du tronc',
      'Alternez droite et gauche'
    ]
  },
  {
    id: 'cat-cow-stretch',
    name: 'Chat-Vache',
    description: 'Mobilisation vertébrale',
    duration: 60,
    muscles: ['Colonne', 'Dos'],
    animation: 'cat-cow',
    difficulty: 'beginner',
    instructions: [
      'À quatre pattes',
      'Alternez dos rond et dos creux',
      'Mouvement fluide'
    ]
  },
  {
    id: 'side-bends',
    name: 'Flexions Latérales',
    description: 'Étirement des flancs',
    duration: 45,
    muscles: ['Obliques', 'Quadratus'],
    animation: 'side-bend',
    difficulty: 'beginner',
    instructions: [
      'Debout, bras le long du corps',
      'Penchez-vous sur le côté',
      'Alternez droite et gauche'
    ]
  },
  {
    id: 'spinal-waves',
    name: 'Vagues Vertébrales',
    description: 'Ondulation de la colonne',
    duration: 60,
    muscles: ['Colonne', 'Paravertébraux'],
    animation: 'wave',
    difficulty: 'intermediate',
    instructions: [
      'Debout, initiez le mouvement par la tête',
      'Déroulez vertèbre par vertèbre',
      'Mouvement fluide comme une vague'
    ]
  },
  {
    id: 'hip-circles',
    name: 'Cercles des Hanches',
    description: 'Mobilisation du bassin',
    duration: 45,
    muscles: ['Hanches', 'Bassin'],
    animation: 'hip-circle',
    difficulty: 'beginner',
    instructions: [
      'Mains sur les hanches',
      'Effectuez des cercles avec le bassin',
      'Dans les deux sens'
    ]
  },
  {
    id: 'back-extensions',
    name: 'Extensions Dorsales',
    description: 'Mobilisation en extension',
    duration: 30,
    muscles: ['Érecteurs', 'Dos'],
    animation: 'back-extension',
    difficulty: 'beginner',
    instructions: [
      'Mains dans le dos',
      'Cambrez doucement vers l\'arrière',
      'Ne forcez pas'
    ]
  },
  {
    id: 'thoracic-rotation',
    name: 'Rotation Thoracique',
    description: 'Mobilité du haut du dos',
    duration: 60,
    muscles: ['Thoracique', 'Obliques'],
    animation: 'thoracic-rotation',
    difficulty: 'intermediate',
    instructions: [
      'À quatre pattes',
      'Une main derrière la tête',
      'Rotation du tronc vers le haut'
    ]
  },
  {
    id: 'pelvic-tilts',
    name: 'Bascules du Bassin',
    description: 'Mobilisation pelvienne',
    duration: 45,
    muscles: ['Bassin', 'Lombaires'],
    animation: 'pelvic-tilt',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux fléchis',
      'Basculez le bassin',
      'Alternez antéversion et rétroversion'
    ]
  },
  {
    id: 'knee-to-chest',
    name: 'Genoux à la Poitrine',
    description: 'Étirement lombaire',
    duration: 60,
    muscles: ['Lombaires', 'Fessiers'],
    animation: 'knee-chest',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le dos',
      'Ramenez les genoux vers la poitrine',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'child-pose',
    name: 'Position de l\'Enfant',
    description: 'Étirement et relaxation',
    duration: 60,
    muscles: ['Dos', 'Épaules'],
    animation: 'child-pose',
    difficulty: 'beginner',
    instructions: [
      'À genoux, assis sur les talons',
      'Penchez-vous vers l\'avant',
      'Bras tendus devant'
    ]
  },
  {
    id: 'cobra-stretch',
    name: 'Étirement du Cobra',
    description: 'Extension de la colonne',
    duration: 45,
    muscles: ['Abdominaux', 'Dos'],
    animation: 'cobra',
    difficulty: 'intermediate',
    instructions: [
      'Allongé sur le ventre',
      'Poussez sur les bras',
      'Cambrez le dos doucement'
    ]
  },
  {
    id: 'seated-spinal-twist',
    name: 'Torsion Assise',
    description: 'Rotation vertébrale assise',
    duration: 60,
    muscles: ['Obliques', 'Colonne'],
    animation: 'seated-twist',
    difficulty: 'beginner',
    instructions: [
      'Assis jambes croisées',
      'Rotation du tronc',
      'Maintenez avec les bras'
    ]
  },
  {
    id: 'standing-forward-fold',
    name: 'Flexion Avant Debout',
    description: 'Étirement de toute la chaîne postérieure',
    duration: 60,
    muscles: ['Ischio-jambiers', 'Dos'],
    animation: 'forward-fold',
    difficulty: 'beginner',
    instructions: [
      'Debout, penchez-vous vers l\'avant',
      'Laissez pendre les bras',
      'Pliez les genoux si nécessaire'
    ]
  },
  {
    id: 'bridge-prep',
    name: 'Préparation Pont',
    description: 'Activation des fessiers',
    duration: 45,
    muscles: ['Fessiers', 'Ischio-jambiers'],
    animation: 'bridge-prep',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux fléchis',
      'Soulevez légèrement le bassin',
      'Serrez les fessiers'
    ]
  },
  {
    id: 'quadruped-rocks',
    name: 'Balancements Quadrupède',
    description: 'Mobilisation en quadrupédie',
    duration: 45,
    muscles: ['Hanches', 'Dos'],
    animation: 'quad-rock',
    difficulty: 'beginner',
    instructions: [
      'À quatre pattes',
      'Balancez d\'avant en arrière',
      'Mouvement contrôlé'
    ]
  },
  {
    id: 'trunk-circles',
    name: 'Cercles du Tronc',
    description: 'Mobilisation circulaire',
    duration: 60,
    muscles: ['Tronc', 'Obliques'],
    animation: 'trunk-circle',
    difficulty: 'intermediate',
    instructions: [
      'Debout, mains sur les hanches',
      'Effectuez des cercles avec le tronc',
      'Amplitude progressive'
    ]
  },
  {
    id: 'supine-spinal-twist',
    name: 'Torsion Allongée',
    description: 'Rotation au sol',
    duration: 60,
    muscles: ['Obliques', 'Dos'],
    animation: 'supine-twist',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux fléchis',
      'Laissez tomber les genoux sur le côté',
      'Gardez les épaules au sol'
    ]
  },
  {
    id: 'wall-angels',
    name: 'Anges Muraux',
    description: 'Mobilisation contre le mur',
    duration: 45,
    muscles: ['Dos', 'Épaules'],
    animation: 'wall-angel',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Mouvements d\'ange avec les bras',
      'Gardez le contact'
    ]
  },
  {
    id: 'hip-flexor-march',
    name: 'Marche Psoas',
    description: 'Activation des fléchisseurs',
    duration: 45,
    muscles: ['Psoas', 'Hanches'],
    animation: 'hip-march',
    difficulty: 'beginner',
    instructions: [
      'Debout, levez alternativement les genoux',
      'Comme une marche sur place',
      'Contrôlez le mouvement'
    ]
  },
  {
    id: 'scapular-mobility',
    name: 'Mobilité Omoplates',
    description: 'Mouvements des omoplates',
    duration: 45,
    muscles: ['Omoplates', 'Rhomboïdes'],
    animation: 'scap-mobility',
    difficulty: 'intermediate',
    instructions: [
      'Bras tendus devant',
      'Écartez et rapprochez les omoplates',
      'Amplitude maximale'
    ]
  },
  {
    id: 'lumbar-rotation',
    name: 'Rotation Lombaire',
    description: 'Mobilisation des lombaires',
    duration: 60,
    muscles: ['Lombaires', 'Obliques'],
    animation: 'lumbar-rotation',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux fléchis',
      'Rotation douce des lombaires',
      'Alternez les côtés'
    ]
  },
  {
    id: 'thoracic-extension',
    name: 'Extension Thoracique',
    description: 'Ouverture du thorax',
    duration: 45,
    muscles: ['Thoracique', 'Pectoraux'],
    animation: 'thoracic-extension',
    difficulty: 'intermediate',
    instructions: [
      'Mains derrière la tête',
      'Ouvrez la poitrine vers l\'arrière',
      'Ressentez l\'ouverture'
    ]
  },
  {
    id: 'dynamic-warm-up',
    name: 'Échauffement Dynamique',
    description: 'Combinaison de mouvements',
    duration: 90,
    muscles: ['Corps entier', 'Coordination'],
    animation: 'dynamic-warmup',
    difficulty: 'intermediate',
    instructions: [
      'Enchaînez plusieurs mouvements',
      'Augmentez progressivement l\'intensité',
      'Préparez tout le corps'
    ]
  },
  {
    id: 'core-activation',
    name: 'Activation du Core',
    description: 'Réveil des muscles profonds',
    duration: 60,
    muscles: ['Core', 'Transverse'],
    animation: 'core-activation',
    difficulty: 'intermediate',
    instructions: [
      'Contractez les muscles profonds',
      'Respirez normalement',
      'Maintenez la contraction'
    ]
  },
  {
    id: 'postural-reset',
    name: 'Reset Postural',
    description: 'Réalignement postural',
    duration: 60,
    muscles: ['Posture', 'Stabilisateurs'],
    animation: 'postural-reset',
    difficulty: 'beginner',
    instructions: [
      'Trouvez votre alignement optimal',
      'Activez les muscles posturaux',
      'Mémorisez la position'
    ]
  },

  // Jambes et hanches (30 exercices)
  {
    id: 'leg-swings-front',
    name: 'Balancements Avant',
    description: 'Mobilisation des hanches vers l\'avant',
    duration: 45,
    muscles: ['Hanches', 'Psoas'],
    animation: 'leg-swing-front',
    difficulty: 'beginner',
    instructions: [
      'Appuyez-vous contre un mur',
      'Balancez la jambe d\'avant en arrière',
      'Amplitude progressive'
    ]
  },
  {
    id: 'leg-swings-side',
    name: 'Balancements Latéraux',
    description: 'Mobilisation latérale des hanches',
    duration: 45,
    muscles: ['Abducteurs', 'Adducteurs'],
    animation: 'leg-swing-side',
    difficulty: 'beginner',
    instructions: [
      'Appui latéral contre un mur',
      'Balancez la jambe de côté',
      'Contrôlez le mouvement'
    ]
  },
  {
    id: 'high-knees',
    name: 'Montées de Genoux',
    description: 'Activation des fléchisseurs',
    duration: 30,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'high-knees',
    difficulty: 'beginner',
    instructions: [
      'Montez alternativement les genoux',
      'Vers la poitrine',
      'Rythme soutenu'
    ]
  },
  {
    id: 'butt-kicks',
    name: 'Talons-Fesses',
    description: 'Activation des ischio-jambiers',
    duration: 30,
    muscles: ['Ischio-jambiers', 'Fessiers'],
    animation: 'butt-kicks',
    difficulty: 'beginner',
    instructions: [
      'Ramenez alternativement les talons aux fesses',
      'Gardez les genoux vers le bas',
      'Mouvement rapide'
    ]
  },
  {
    id: 'walking-lunges',
    name: 'Fentes Marchées',
    description: 'Échauffement en fentes dynamiques',
    duration: 60,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'walking-lunges',
    difficulty: 'intermediate',
    instructions: [
      'Pas en avant en fente',
      'Alternez les jambes',
      'Gardez le tronc droit'
    ]
  },
  {
    id: 'calf-raises',
    name: 'Élévations Mollets',
    description: 'Échauffement des mollets',
    duration: 30,
    muscles: ['Mollets', 'Soléaires'],
    animation: 'calf-raises',
    difficulty: 'beginner',
    instructions: [
      'Montez sur la pointe des pieds',
      'Descendez lentement',
      'Contrôlez le mouvement'
    ]
  },
  {
    id: 'ankle-circles',
    name: 'Cercles Chevilles',
    description: 'Mobilisation des chevilles',
    duration: 45,
    muscles: ['Chevilles', 'Pieds'],
    animation: 'ankle-circles',
    difficulty: 'beginner',
    instructions: [
      'Effectuez des cercles avec les pieds',
      'Dans les deux sens',
      'Amplitude maximale'
    ]
  },
  {
    id: 'hip-circles-standing',
    name: 'Cercles Hanches Debout',
    description: 'Mobilisation des hanches debout',
    duration: 45,
    muscles: ['Hanches', 'Bassin'],
    animation: 'hip-circles-standing',
    difficulty: 'beginner',
    instructions: [
      'Une main contre le mur',
      'Cercles avec la jambe libre',
      'Alternez les directions'
    ]
  },
  {
    id: 'quad-stretch-standing',
    name: 'Étirement Quadriceps Debout',
    description: 'Étirement des quadriceps',
    duration: 60,
    muscles: ['Quadriceps', 'Psoas'],
    animation: 'quad-stretch',
    difficulty: 'beginner',
    instructions: [
      'Pliez le genou vers l\'arrière',
      'Tenez le pied',
      'Poussez la hanche vers l\'avant'
    ]
  },
  {
    id: 'hamstring-swings',
    name: 'Balancements Ischio',
    description: 'Mobilisation des ischio-jambiers',
    duration: 45,
    muscles: ['Ischio-jambiers', 'Fessiers'],
    animation: 'hamstring-swings',
    difficulty: 'beginner',
    instructions: [
      'Jambe tendue, balancez vers le haut',
      'Gardez le dos droit',
      'Amplitude progressive'
    ]
  },
  {
    id: 'lateral-leg-raises',
    name: 'Élévations Latérales',
    description: 'Activation des abducteurs',
    duration: 45,
    muscles: ['Abducteurs', 'Moyen fessier'],
    animation: 'lateral-raises',
    difficulty: 'beginner',
    instructions: [
      'Levez la jambe sur le côté',
      'Gardez le bassin stable',
      'Contrôlez la descente'
    ]
  },
  {
    id: 'glute-bridges',
    name: 'Ponts Fessiers',
    description: 'Activation des fessiers',
    duration: 45,
    muscles: ['Fessiers', 'Ischio-jambiers'],
    animation: 'glute-bridge',
    difficulty: 'beginner',
    instructions: [
      'Allongé, soulevez le bassin',
      'Serrez les fessiers',
      'Maintenez 2 secondes'
    ]
  },
  {
    id: 'fire-hydrants',
    name: 'Bouches d\'Incendie',
    description: 'Activation des abducteurs',
    duration: 45,
    muscles: ['Abducteurs', 'Fessiers'],
    animation: 'fire-hydrants',
    difficulty: 'intermediate',
    instructions: [
      'À quatre pattes',
      'Levez le genou sur le côté',
      'Gardez l\'angle à 90°'
    ]
  },
  {
    id: 'clamshells',
    name: 'Coquillages',
    description: 'Rotation externe des hanches',
    duration: 45,
    muscles: ['Rotateurs externes', 'Fessiers'],
    animation: 'clamshells',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le côté',
      'Ouvrez le genou du dessus',
      'Gardez les pieds ensemble'
    ]
  },
  {
    id: 'pigeon-prep',
    name: 'Préparation Pigeon',
    description: 'Ouverture des hanches',
    duration: 60,
    muscles: ['Psoas', 'Piriformes'],
    animation: 'pigeon-prep',
    difficulty: 'intermediate',
    instructions: [
      'Genou avant plié à 90°',
      'Jambe arrière tendue',
      'Penchez-vous vers l\'avant'
    ]
  },
  {
    id: 'deep-squat-hold',
    name: 'Squat Profond',
    description: 'Mobilité en squat',
    duration: 60,
    muscles: ['Hanches', 'Chevilles'],
    animation: 'deep-squat',
    difficulty: 'intermediate',
    instructions: [
      'Descendez en squat profond',
      'Gardez les talons au sol',
      'Balancez doucement'
    ]
  },
  {
    id: 'standing-figure-four',
    name: 'Chiffre 4 Debout',
    description: 'Étirement des fessiers',
    duration: 60,
    muscles: ['Fessiers', 'Piriformes'],
    animation: 'figure-four',
    difficulty: 'intermediate',
    instructions: [
      'Cheville sur le genou opposé',
      'Penchez-vous vers l\'avant',
      'Maintenez l\'équilibre'
    ]
  },
  {
    id: 'adductor-stretch',
    name: 'Étirement Adducteurs',
    description: 'Ouverture des adducteurs',
    duration: 60,
    muscles: ['Adducteurs', 'Aine'],
    animation: 'adductor-stretch',
    difficulty: 'beginner',
    instructions: [
      'Jambes écartées',
      'Penchez-vous vers un côté',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'it-band-stretch',
    name: 'Étirement Bandelette',
    description: 'Étirement de la bandelette IT',
    duration: 60,
    muscles: ['IT Band', 'TFL'],
    animation: 'it-band-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Croisez les jambes',
      'Penchez-vous du côté opposé',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'hip-flexor-stretch',
    name: 'Étirement Psoas',
    description: 'Étirement des fléchisseurs de hanche',
    duration: 60,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'hip-flexor-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Position fente, genou arrière au sol',
      'Poussez le bassin vers l\'avant',
      'Maintenez le dos droit'
    ]
  },
  {
    id: 'single-leg-rdl',
    name: 'RDL Une Jambe',
    description: 'Équilibre et mobilité',
    duration: 45,
    muscles: ['Ischio-jambiers', 'Équilibre'],
    animation: 'single-leg-rdl',
    difficulty: 'intermediate',
    instructions: [
      'Penchez-vous vers l\'avant sur une jambe',
      'Jambe libre vers l\'arrière',
      'Gardez l\'équilibre'
    ]
  },
  {
    id: 'wall-sit-prep',
    name: 'Préparation Chaise',
    description: 'Activation des quadriceps',
    duration: 30,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'wall-sit-prep',
    difficulty: 'beginner',
    instructions: [
      'Dos contre le mur',
      'Descendez légèrement',
      'Maintenez la position'
    ]
  },
  {
    id: 'lateral-lunges',
    name: 'Fentes Latérales',
    description: 'Mobilisation latérale',
    duration: 60,
    muscles: ['Adducteurs', 'Fessiers'],
    animation: 'lateral-lunges',
    difficulty: 'intermediate',
    instructions: [
      'Pas large sur le côté',
      'Pliez une jambe, tendez l\'autre',
      'Alternez les côtés'
    ]
  },
  {
    id: 'reverse-lunges',
    name: 'Fentes Arrière',
    description: 'Fentes vers l\'arrière',
    duration: 60,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'reverse-lunges',
    difficulty: 'beginner',
    instructions: [
      'Pas en arrière',
      'Descendez en fente',
      'Revenez à la position initiale'
    ]
  },
  {
    id: 'curtsy-lunges',
    name: 'Fentes Révérence',
    description: 'Fentes en diagonale',
    duration: 60,
    muscles: ['Fessiers', 'Abducteurs'],
    animation: 'curtsy-lunges',
    difficulty: 'intermediate',
    instructions: [
      'Pas en diagonale arrière',
      'Comme une révérence',
      'Alternez les jambes'
    ]
  },
  {
    id: 'monster-walks',
    name: 'Marche du Monstre',
    description: 'Activation avec élastique',
    duration: 45,
    muscles: ['Abducteurs', 'Fessiers'],
    animation: 'monster-walks',
    difficulty: 'intermediate',
    instructions: [
      'Élastique autour des chevilles',
      'Pas latéraux en squat',
      'Gardez la tension'
    ]
  },
  {
    id: 'single-leg-balance',
    name: 'Équilibre Une Jambe',
    description: 'Travail proprioceptif',
    duration: 60,
    muscles: ['Équilibre', 'Stabilisateurs'],
    animation: 'single-leg-balance',
    difficulty: 'intermediate',
    instructions: [
      'Tenez-vous sur une jambe',
      'Fermez les yeux pour plus de difficulté',
      'Alternez les jambes'
    ]
  },
  {
    id: 'heel-walks',
    name: 'Marche Talons',
    description: 'Activation des tibias',
    duration: 30,
    muscles: ['Tibias', 'Chevilles'],
    animation: 'heel-walks',
    difficulty: 'beginner',
    instructions: [
      'Marchez sur les talons',
      'Orteils relevés',
      'Gardez l\'équilibre'
    ]
  },
  {
    id: 'toe-walks',
    name: 'Marche Orteils',
    description: 'Renforcement des mollets',
    duration: 30,
    muscles: ['Mollets', 'Pieds'],
    animation: 'toe-walks',
    difficulty: 'beginner',
    instructions: [
      'Marchez sur la pointe des pieds',
      'Gardez l\'équilibre',
      'Pas contrôlés'
    ]
  },
  {
    id: 'dynamic-stretching-legs',
    name: 'Étirements Dynamiques',
    description: 'Combinaison pour les jambes',
    duration: 90,
    muscles: ['Jambes complètes', 'Mobilité'],
    animation: 'dynamic-legs',
    difficulty: 'intermediate',
    instructions: [
      'Enchaînez différents mouvements',
      'Balancements, fentes, étirements',
      'Préparez toutes les jambes'
    ]
  }
];

// RENFORCEMENT - 100+ exercices
export const strengthExercises: Exercise[] = [
  // Core et abdominaux (35 exercices)
  {
    id: 'plank',
    name: 'Planche',
    description: 'Renforcement du core et des stabilisateurs',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules', 'Dos'],
    animation: 'plank',
    difficulty: 'intermediate',
    instructions: [
      'Position de pompe, appuis sur les avant-bras',
      'Corps aligné de la tête aux pieds',
      'Contractez les abdominaux'
    ]
  },
  {
    id: 'side-plank-left',
    name: 'Planche Latérale Gauche',
    description: 'Renforcement des obliques',
    duration: 45,
    muscles: ['Obliques', 'Core'],
    animation: 'side-plank',
    difficulty: 'intermediate',
    instructions: [
      'Allongé sur le côté gauche',
      'Appui sur l\'avant-bras',
      'Corps aligné, hanches hautes'
    ]
  },
  {
    id: 'side-plank-right',
    name: 'Planche Latérale Droite',
    description: 'Renforcement des obliques',
    duration: 45,
    muscles: ['Obliques', 'Core'],
    animation: 'side-plank',
    difficulty: 'intermediate',
    instructions: [
      'Allongé sur le côté droit',
      'Appui sur l\'avant-bras',
      'Corps aligné, hanches hautes'
    ]
  },
  {
    id: 'mountain-climbers',
    name: 'Grimpeurs',
    description: 'Cardio et renforcement core',
    duration: 30,
    muscles: ['Core', 'Cardio'],
    animation: 'mountain-climbers',
    difficulty: 'intermediate',
    instructions: [
      'Position de planche',
      'Alternez genoux vers la poitrine',
      'Rythme rapide'
    ]
  },
  {
    id: 'bicycle-crunches',
    name: 'Pédalage',
    description: 'Travail des obliques',
    duration: 45,
    muscles: ['Obliques', 'Abdominaux'],
    animation: 'bicycle',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, mains derrière la tête',
      'Coude vers genou opposé',
      'Alternez comme un pédalage'
    ]
  },
  {
    id: 'dead-bug',
    name: 'Insecte Mort',
    description: 'Stabilisation du core',
    duration: 60,
    muscles: ['Core', 'Stabilisation'],
    animation: 'dead-bug',
    difficulty: 'beginner',
    instructions: [
      'Allongé, bras et jambes à 90°',
      'Tendez bras et jambe opposés',
      'Alternez lentement'
    ]
  },
  {
    id: 'bird-dog',
    name: 'Chien d\'Oiseau',
    description: 'Stabilisation et coordination',
    duration: 60,
    muscles: ['Core', 'Dos'],
    animation: 'bird-dog',
    difficulty: 'beginner',
    instructions: [
      'À quatre pattes',
      'Tendez bras et jambe opposés',
      'Maintenez l\'équilibre'
    ]
  },
  {
    id: 'russian-twists',
    name: 'Torsions Russes',
    description: 'Rotation du tronc',
    duration: 45,
    muscles: ['Obliques', 'Core'],
    animation: 'russian-twists',
    difficulty: 'intermediate',
    instructions: [
      'Assis, pieds décollés',
      'Rotation du tronc de côté',
      'Touchez le sol alternativement'
    ]
  },
  {
    id: 'hollow-hold',
    name: 'Position Creuse',
    description: 'Isométrie abdominale',
    duration: 45,
    muscles: ['Abdominaux', 'Core'],
    animation: 'hollow-hold',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, creusez le ventre',
      'Épaules et jambes décollées',
      'Maintenez la position'
    ]
  },
  {
    id: 'v-ups',
    name: 'V-Ups',
    description: 'Flexion complète du tronc',
    duration: 30,
    muscles: ['Abdominaux', 'Psoas'],
    animation: 'v-ups',
    difficulty: 'advanced',
    instructions: [
      'Allongé, bras et jambes tendus',
      'Montez simultanément',
      'Formez un V avec le corps'
    ]
  },
  {
    id: 'plank-up-downs',
    name: 'Planche Montées-Descentes',
    description: 'Planche dynamique',
    duration: 45,
    muscles: ['Core', 'Épaules'],
    animation: 'plank-up-down',
    difficulty: 'advanced',
    instructions: [
      'Alternez planche bras/avant-bras',
      'Une main puis l\'autre',
      'Gardez le bassin stable'
    ]
  },
  {
    id: 'plank-jacks',
    name: 'Planche Jumping Jacks',
    description: 'Planche avec écarts',
    duration: 30,
    muscles: ['Core', 'Cardio'],
    animation: 'plank-jacks',
    difficulty: 'advanced',
    instructions: [
      'Position planche',
      'Écartez et resserrez les pieds',
      'Comme des jumping jacks'
    ]
  },
  {
    id: 'reverse-plank',
    name: 'Planche Inversée',
    description: 'Renforcement postérieur',
    duration: 45,
    muscles: ['Dos', 'Fessiers'],
    animation: 'reverse-plank',
    difficulty: 'intermediate',
    instructions: [
      'Assis, appui sur les mains',
      'Soulevez le bassin',
      'Corps aligné'
    ]
  },
  {
    id: 'leg-raises',
    name: 'Élévations de Jambes',
    description: 'Travail du bas des abdos',
    duration: 45,
    muscles: ['Abdominaux inférieurs', 'Psoas'],
    animation: 'leg-raises',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, jambes tendues',
      'Montez les jambes à 90°',
      'Descendez sans toucher le sol'
    ]
  },
  {
    id: 'flutter-kicks',
    name: 'Battements de Jambes',
    description: 'Battements alternés',
    duration: 30,
    muscles: ['Abdominaux', 'Psoas'],
    animation: 'flutter-kicks',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, jambes légèrement décollées',
      'Battements alternés',
      'Petite amplitude'
    ]
  },
  {
    id: 'scissor-kicks',
    name: 'Ciseaux',
    description: 'Croisements de jambes',
    duration: 30,
    muscles: ['Abdominaux', 'Adducteurs'],
    animation: 'scissor-kicks',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, jambes décollées',
      'Croisez les jambes alternativement',
      'Gardez les jambes tendues'
    ]
  },
  {
    id: 'plank-to-downward-dog',
    name: 'Planche vers Chien Tête en Bas',
    description: 'Transition dynamique',
    duration: 45,
    muscles: ['Core', 'Épaules'],
    animation: 'plank-to-dog',
    difficulty: 'intermediate',
    instructions: [
      'De la planche au chien tête en bas',
      'Poussez les hanches vers le haut',
      'Revenez en planche'
    ]
  },
  {
    id: 'bear-crawl',
    name: 'Marche de l\'Ours',
    description: 'Déplacement quadrupède',
    duration: 45,
    muscles: ['Core', 'Épaules'],
    animation: 'bear-crawl',
    difficulty: 'intermediate',
    instructions: [
      'À quatre pattes, genoux décollés',
      'Avancez en gardant les genoux bas',
      'Alternez bras et jambes opposés'
    ]
  },
  {
    id: 'crab-walk',
    name: 'Marche du Crabe',
    description: 'Déplacement en crabe',
    duration: 45,
    muscles: ['Core', 'Triceps'],
    animation: 'crab-walk',
    difficulty: 'intermediate',
    instructions: [
      'Assis, appui mains et pieds',
      'Bassin haut, déplacez-vous',
      'Gardez les hanches hautes'
    ]
  },
  {
    id: 'superman',
    name: 'Superman',
    description: 'Extension dorsale',
    duration: 45,
    muscles: ['Érecteurs', 'Fessiers'],
    animation: 'superman',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le ventre',
      'Levez bras et jambes',
      'Maintenez la position'
    ]
  },
  {
    id: 'superman-alternated',
    name: 'Superman Alterné',
    description: 'Extension alternée',
    duration: 45,
    muscles: ['Érecteurs', 'Coordination'],
    animation: 'superman-alt',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le ventre',
      'Levez bras et jambe opposés',
      'Alternez les côtés'
    ]
  },
  {
    id: 'glute-bridge-single',
    name: 'Pont Une Jambe',
    description: 'Pont sur une jambe',
    duration: 45,
    muscles: ['Fessiers', 'Ischio-jambiers'],
    animation: 'single-glute-bridge',
    difficulty: 'intermediate',
    instructions: [
      'Pont classique, une jambe tendue',
      'Serrez le fessier',
      'Alternez les jambes'
    ]
  },
  {
    id: 'wall-sit',
    name: 'Chaise Murale',
    description: 'Isométrie des cuisses',
    duration: 60,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'wall-sit',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Cuisses parallèles au sol',
      'Maintenez la position'
    ]
  },
  {
    id: 'single-leg-glute-bridge',
    name: 'Pont Fessier Une Jambe',
    description: 'Activation unilatérale',
    duration: 45,
    muscles: ['Fessiers', 'Stabilisation'],
    animation: 'single-glute-bridge',
    difficulty: 'intermediate',
    instructions: [
      'Pont sur une jambe',
      'Jambe libre tendue',
      'Serrez le fessier'
    ]
  },
  {
    id: 'plank-with-leg-lifts',
    name: 'Planche Élévations Jambes',
    description: 'Planche avec défi',
    duration: 45,
    muscles: ['Core', 'Fessiers'],
    animation: 'plank-leg-lift',
    difficulty: 'advanced',
    instructions: [
      'Position planche',
      'Levez alternativement les jambes',
      'Gardez le bassin stable'
    ]
  },
  {
    id: 'side-plank-crunches',
    name: 'Crunchs Planche Latérale',
    description: 'Planche latérale dynamique',
    duration: 30,
    muscles: ['Obliques', 'Core'],
    animation: 'side-plank-crunch',
    difficulty: 'advanced',
    instructions: [
      'Planche latérale',
      'Rapprochez coude et genou',
      'Alternez les répétitions'
    ]
  },
  {
    id: 'plank-shoulder-taps',
    name: 'Planche Touches Épaules',
    description: 'Stabilisation avec défi',
    duration: 30,
    muscles: ['Core', 'Stabilisation'],
    animation: 'shoulder-taps',
    difficulty: 'intermediate',
    instructions: [
      'Position planche',
      'Touchez alternativement les épaules',
      'Minimisez le balancement'
    ]
  },
  {
    id: 'turkish-get-up-prep',
    name: 'Préparation Turkish Get-Up',
    description: 'Mouvement complexe préparatoire',
    duration: 60,
    muscles: ['Corps entier', 'Coordination'],
    animation: 'turkish-prep',
    difficulty: 'advanced',
    instructions: [
      'Allongé, bras tendu vers le haut',
      'Levez-vous étape par étape',
      'Gardez le bras tendu'
    ]
  },
  {
    id: 'hollow-body-rocks',
    name: 'Balancements Position Creuse',
    description: 'Position creuse dynamique',
    duration: 30,
    muscles: ['Abdominaux', 'Core'],
    animation: 'hollow-rocks',
    difficulty: 'intermediate',
    instructions: [
      'Position creuse',
      'Balancez d\'avant en arrière',
      'Gardez la forme'
    ]
  },
  {
    id: 'starfish-crunches',
    name: 'Crunchs Étoile de Mer',
    description: 'Crunchs en X',
    duration: 30,
    muscles: ['Abdominaux', 'Obliques'],
    animation: 'starfish-crunch',
    difficulty: 'intermediate',
    instructions: [
      'Allongé en X',
      'Rapprochez coude et genou opposés',
      'Alternez les diagonales'
    ]
  },
  {
    id: 'plank-walkouts',
    name: 'Sorties de Planche',
    description: 'Planche avec marche des mains',
    duration: 45,
    muscles: ['Core', 'Épaules'],
    animation: 'plank-walkout',
    difficulty: 'advanced',
    instructions: [
      'Debout, penchez-vous vers l\'avant',
      'Marchez avec les mains vers la planche',
      'Revenez en marchant'
    ]
  },
  {
    id: 'reverse-crunches',
    name: 'Crunchs Inversés',
    description: 'Flexion du bassin',
    duration: 30,
    muscles: ['Abdominaux inférieurs', 'Core'],
    animation: 'reverse-crunch',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, genoux fléchis',
      'Ramenez les genoux vers la poitrine',
      'Décollez le bassin'
    ]
  },
  {
    id: 'windshield-wipers',
    name: 'Essuie-Glaces',
    description: 'Rotation des jambes',
    duration: 45,
    muscles: ['Obliques', 'Core'],
    animation: 'windshield-wipers',
    difficulty: 'advanced',
    instructions: [
      'Allongé, jambes à 90°',
      'Rotation des jambes de côté',
      'Gardez les épaules au sol'
    ]
  },
  {
    id: 'dragon-flags',
    name: 'Drapeaux du Dragon',
    description: 'Exercice très avancé',
    duration: 30,
    muscles: ['Core complet', 'Force'],
    animation: 'dragon-flag',
    difficulty: 'advanced',
    instructions: [
      'Allongé, tenez-vous derrière la tête',
      'Levez tout le corps',
      'Descendez contrôlé'
    ]
  },
  {
    id: 'l-sit-progression',
    name: 'Progression L-Sit',
    description: 'Préparation au L-sit',
    duration: 30,
    muscles: ['Core', 'Épaules'],
    animation: 'l-sit-prep',
    difficulty: 'advanced',
    instructions: [
      'Assis, mains au sol',
      'Soulevez les fesses',
      'Progressez vers jambes tendues'
    ]
  },

  // Haut du corps (35 exercices)
  {
    id: 'push-ups',
    name: 'Pompes',
    description: 'Renforcement pectoraux et triceps',
    duration: 45,
    muscles: ['Pectoraux', 'Triceps', 'Épaules'],
    animation: 'pushup',
    difficulty: 'intermediate',
    instructions: [
      'Position planche, mains sous les épaules',
      'Descendez jusqu\'à frôler le sol',
      'Poussez pour remonter'
    ]
  },
  {
    id: 'push-ups-knee',
    name: 'Pompes sur Genoux',
    description: 'Version débutant des pompes',
    duration: 45,
    muscles: ['Pectoraux', 'Triceps'],
    animation: 'knee-pushup',
    difficulty: 'beginner',
    instructions: [
      'Appui sur les genoux',
      'Mains sous les épaules',
      'Descendez et remontez'
    ]
  },
  {
    id: 'push-ups-diamond',
    name: 'Pompes Diamant',
    description: 'Pompes mains rapprochées',
    duration: 30,
    muscles: ['Triceps', 'Pectoraux'],
    animation: 'diamond-pushup',
    difficulty: 'advanced',
    instructions: [
      'Mains en forme de diamant',
      'Pouces et index qui se touchent',
      'Pompes classiques'
    ]
  },
  {
    id: 'push-ups-wide',
    name: 'Pompes Larges',
    description: 'Pompes mains écartées',
    duration: 45,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'wide-pushup',
    difficulty: 'intermediate',
    instructions: [
      'Mains plus larges que les épaules',
      'Accent sur les pectoraux',
      'Amplitude complète'
    ]
  },
  {
    id: 'push-ups-decline',
    name: 'Pompes Déclinées',
    description: 'Pieds surélevés',
    duration: 30,
    muscles: ['Pectoraux supérieurs', 'Épaules'],
    animation: 'decline-pushup',
    difficulty: 'advanced',
    instructions: [
      'Pieds sur une élévation',
      'Plus difficile que les pompes classiques',
      'Contrôlez la descente'
    ]
  },
  {
    id: 'push-ups-incline',
    name: 'Pompes Inclinées',
    description: 'Mains surélevées',
    duration: 45,
    muscles: ['Pectoraux', 'Triceps'],
    animation: 'incline-pushup',
    difficulty: 'beginner',
    instructions: [
      'Mains sur une élévation',
      'Plus facile que les pompes classiques',
      'Bonne forme avant tout'
    ]
  },
  {
    id: 'pull-ups',
    name: 'Tractions',
    description: 'Renforcement du dos et des bras',
    duration: 45,
    muscles: ['Dorsaux', 'Biceps', 'Avant-bras'],
    animation: 'pullup',
    difficulty: 'advanced',
    instructions: [
      'Suspendez-vous à une barre',
      'Tirez jusqu\'à ce que le menton dépasse la barre',
      'Descente contrôlée'
    ]
  },
  {
    id: 'chin-ups',
    name: 'Tractions Supination',
    description: 'Tractions paumes vers soi',
    duration: 45,
    muscles: ['Biceps', 'Dorsaux'],
    animation: 'chinup',
    difficulty: 'advanced',
    instructions: [
      'Paumes vers vous',
      'Plus facile que les tractions',
      'Accent sur les biceps'
    ]
  },
  {
    id: 'negative-pull-ups',
    name: 'Tractions Négatives',
    description: 'Phase excentrique des tractions',
    duration: 45,
    muscles: ['Dorsaux', 'Biceps'],
    animation: 'negative-pullup',
    difficulty: 'intermediate',
    instructions: [
      'Commencez en haut',
      'Descendez très lentement',
      'Contrôlez la descente'
    ]
  },
  {
    id: 'dead-hang',
    name: 'Suspension',
    description: 'Renforcement de la poigne et des avant-bras',
    duration: 30,
    muscles: ['Avant-bras', 'Doigts', 'Épaules'],
    animation: 'hang',
    difficulty: 'intermediate',
    instructions: [
      'Suspendez-vous à une barre',
      'Gardez les épaules actives',
      'Respirez normalement'
    ]
  },
  {
    id: 'scapular-pull-ups',
    name: 'Tractions Omoplates',
    description: 'Activation des omoplates',
    duration: 30,
    muscles: ['Rhomboïdes', 'Trapèzes'],
    animation: 'scap-pullup',
    difficulty: 'intermediate',
    instructions: [
      'Suspendu, bras tendus',
      'Tirez seulement avec les omoplates',
      'Petit mouvement, grande activation'
    ]
  },
  {
    id: 'inverted-rows',
    name: 'Tractions Horizontales',
    description: 'Tirage horizontal',
    duration: 45,
    muscles: ['Dorsaux', 'Rhomboïdes'],
    animation: 'inverted-row',
    difficulty: 'intermediate',
    instructions: [
      'Sous une barre basse',
      'Corps incliné, tirez la poitrine vers la barre',
      'Serrez les omoplates'
    ]
  },
  {
    id: 'pike-push-ups',
    name: 'Pompes Pike',
    description: 'Préparation handstand push-up',
    duration: 30,
    muscles: ['Épaules', 'Triceps'],
    animation: 'pike-pushup',
    difficulty: 'advanced',
    instructions: [
      'Position chien tête en bas',
      'Descendez la tête vers le sol',
      'Poussez pour remonter'
    ]
  },
  {
    id: 'handstand-progression',
    name: 'Progression Handstand',
    description: 'Apprentissage de l\'équilibre sur les mains',
    duration: 60,
    muscles: ['Épaules', 'Core', 'Équilibre'],
    animation: 'handstand-prog',
    difficulty: 'advanced',
    instructions: [
      'Commencez contre un mur',
      'Montez progressivement les pieds',
      'Travaillez l\'équilibre'
    ]
  },
  {
    id: 'tricep-dips',
    name: 'Dips Triceps',
    description: 'Renforcement des triceps',
    duration: 45,
    muscles: ['Triceps', 'Épaules'],
    animation: 'tricep-dips',
    difficulty: 'intermediate',
    instructions: [
      'Mains sur une chaise ou banc',
      'Descendez en fléchissant les coudes',
      'Poussez pour remonter'
    ]
  },
  {
    id: 'archer-push-ups',
    name: 'Pompes Archer',
    description: 'Pompes unilatérales',
    duration: 30,
    muscles: ['Pectoraux', 'Triceps'],
    animation: 'archer-pushup',
    difficulty: 'advanced',
    instructions: [
      'Pompe vers un côté',
      'Un bras fait le travail',
      'L\'autre bras tendu'
    ]
  },
  {
    id: 'pseudo-planche-pushups',
    name: 'Pompes Pseudo Planche',
    description: 'Pompes mains avancées',
    duration: 30,
    muscles: ['Épaules', 'Pectoraux'],
    animation: 'pseudo-planche',
    difficulty: 'advanced',
    instructions: [
      'Mains plus avancées que les épaules',
      'Corps penché vers l\'avant',
      'Très difficile'
    ]
  },
  {
    id: 'single-arm-pushup-progression',
    name: 'Progression Pompe Une Main',
    description: 'Vers la pompe à une main',
    duration: 30,
    muscles: ['Pectoraux', 'Core'],
    animation: 'single-arm-pushup',
    difficulty: 'advanced',
    instructions: [
      'Commencez avec support',
      'Progressez vers une main',
      'Très avancé'
    ]
  },
  {
    id: 'wall-handstand',
    name: 'Handstand Mural',
    description: 'Équilibre contre le mur',
    duration: 60,
    muscles: ['Épaules', 'Core'],
    animation: 'wall-handstand',
    difficulty: 'intermediate',
    instructions: [
      'Pieds contre le mur',
      'Marchez vers le haut',
      'Gardez les bras tendus'
    ]
  },
  {
    id: 'l-sit-holds',
    name: 'Maintien L-Sit',
    description: 'Position en L',
    duration: 30,
    muscles: ['Core', 'Épaules'],
    animation: 'l-sit',
    difficulty: 'advanced',
    instructions: [
      'Assis, mains au sol',
      'Soulevez tout le corps',
      'Jambes parallèles au sol'
    ]
  },
  {
    id: 'muscle-up-progression',
    name: 'Progression Muscle-Up',
    description: 'Vers le muscle-up',
    duration: 45,
    muscles: ['Dorsaux', 'Triceps'],
    animation: 'muscle-up-prog',
    difficulty: 'advanced',
    instructions: [
      'Combinaison traction + dips',
      'Transition explosive',
      'Très technique'
    ]
  },
  {
    id: 'typewriter-pullups',
    name: 'Tractions Machine à Écrire',
    description: 'Tractions latérales',
    duration: 30,
    muscles: ['Dorsaux', 'Biceps'],
    animation: 'typewriter-pullup',
    difficulty: 'advanced',
    instructions: [
      'Traction puis déplacement latéral',
      'D\'un côté à l\'autre',
      'Très difficile'
    ]
  },
  {
    id: 'commando-pullups',
    name: 'Tractions Commando',
    description: 'Tractions alternées',
    duration: 30,
    muscles: ['Dorsaux', 'Core'],
    animation: 'commando-pullup',
    difficulty: 'advanced',
    instructions: [
      'Alternez tête de chaque côté de la barre',
      'Rotation du tronc',
      'Très technique'
    ]
  },
  {
    id: 'one-arm-hang',
    name: 'Suspension Une Main',
    description: 'Suspension unilatérale',
    duration: 20,
    muscles: ['Avant-bras', 'Dorsaux'],
    animation: 'one-arm-hang',
    difficulty: 'advanced',
    instructions: [
      'Suspendez-vous à une main',
      'Très difficile',
      'Progressez graduellement'
    ]
  },
  {
    id: 'clapping-pushups',
    name: 'Pompes Claquées',
    description: 'Pompes explosives',
    duration: 30,
    muscles: ['Pectoraux', 'Puissance'],
    animation: 'clapping-pushup',
    difficulty: 'advanced',
    instructions: [
      'Pompe explosive',
      'Claque des mains en l\'air',
      'Réception contrôlée'
    ]
  },
  {
    id: 'hindu-pushups',
    name: 'Pompes Hindu',
    description: 'Pompes en mouvement fluide',
    duration: 45,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'hindu-pushup',
    difficulty: 'intermediate',
    instructions: [
      'Du chien tête en bas au cobra',
      'Mouvement fluide',
      'Étirement et force'
    ]
  },
  {
    id: 'dive-bomber-pushups',
    name: 'Pompes Bombardier',
    description: 'Variation des pompes hindu',
    duration: 45,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'dive-bomber',
    difficulty: 'intermediate',
    instructions: [
      'Mouvement de plongée',
      'Comme un avion qui pique',
      'Retour en arrière'
    ]
  },
  {
    id: 'spiderman-pushups',
    name: 'Pompes Spiderman',
    description: 'Pompes avec genou au coude',
    duration: 30,
    muscles: ['Pectoraux', 'Core'],
    animation: 'spiderman-pushup',
    difficulty: 'intermediate',
    instructions: [
      'Pompe classique',
      'Genou vers le coude',
      'Alternez les côtés'
    ]
  },
  {
    id: 'staggered-pushups',
    name: 'Pompes Décalées',
    description: 'Mains à hauteurs différentes',
    duration: 30,
    muscles: ['Pectoraux', 'Stabilisation'],
    animation: 'staggered-pushup',
    difficulty: 'intermediate',
    instructions: [
      'Une main plus avancée',
      'Alternez les positions',
      'Défi de stabilité'
    ]
  },
  {
    id: 'explosive-pushups',
    name: 'Pompes Explosives',
    description: 'Pompes avec décollage',
    duration: 30,
    muscles: ['Pectoraux', 'Puissance'],
    animation: 'explosive-pushup',
    difficulty: 'advanced',
    instructions: [
      'Poussée explosive',
      'Mains décollent du sol',
      'Réception contrôlée'
    ]
  },
  {
    id: 'fingertip-pushups',
    name: 'Pompes sur Doigts',
    description: 'Pompes sur la pointe des doigts',
    duration: 30,
    muscles: ['Doigts', 'Avant-bras'],
    animation: 'fingertip-pushup',
    difficulty: 'advanced',
    instructions: [
      'Appui sur les doigts seulement',
      'Renforce énormément les doigts',
      'Progressez graduellement'
    ]
  },
  {
    id: 'one-arm-pushup-progression',
    name: 'Progression Pompe Une Main',
    description: 'Vers la pompe à une main',
    duration: 30,
    muscles: ['Pectoraux', 'Core'],
    animation: 'one-arm-pushup-prog',
    difficulty: 'advanced',
    instructions: [
      'Commencez incliné',
      'Progressez vers le sol',
      'Objectif ultime'
    ]
  },
  {
    id: 'planche-progression',
    name: 'Progression Planche',
    description: 'Vers la planche complète',
    duration: 60,
    muscles: ['Épaules', 'Core'],
    animation: 'planche-prog',
    difficulty: 'advanced',
    instructions: [
      'Position horizontale sur les mains',
      'Très avancé',
      'Progression par étapes'
    ]
  },
  {
    id: 'front-lever-progression',
    name: 'Progression Front Lever',
    description: 'Vers le front lever',
    duration: 45,
    muscles: ['Dorsaux', 'Core'],
    animation: 'front-lever-prog',
    difficulty: 'advanced',
    instructions: [
      'Corps horizontal suspendu',
      'Extrêmement difficile',
      'Progression lente'
    ]
  },
  {
    id: 'back-lever-progression',
    name: 'Progression Back Lever',
    description: 'Vers le back lever',
    duration: 45,
    muscles: ['Épaules', 'Biceps'],
    animation: 'back-lever-prog',
    difficulty: 'advanced',
    instructions: [
      'Corps horizontal, dos vers le bas',
      'Très technique',
      'Attention aux épaules'
    ]
  },

  // Jambes et fessiers (30 exercices)
  {
    id: 'squats',
    name: 'Squats',
    description: 'Renforcement des cuisses et fessiers',
    duration: 45,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'squat',
    difficulty: 'beginner',
    instructions: [
      'Pieds largeur d\'épaules',
      'Descendez comme pour s\'asseoir',
      'Remontez en poussant sur les talons'
    ]
  },
  {
    id: 'jump-squats',
    name: 'Squats Sautés',
    description: 'Squats explosifs',
    duration: 30,
    muscles: ['Quadriceps', 'Puissance'],
    animation: 'jump-squat',
    difficulty: 'intermediate',
    instructions: [
      'Squat classique',
      'Sautez à la remontée',
      'Réception en squat'
    ]
  },
  {
    id: 'single-leg-squats',
    name: 'Squats Une Jambe',
    description: 'Squats pistol progression',
    duration: 45,
    muscles: ['Quadriceps', 'Équilibre'],
    animation: 'single-leg-squat',
    difficulty: 'advanced',
    instructions: [
      'Une jambe tendue devant',
      'Descendez sur l\'autre jambe',
      'Très difficile'
    ]
  },
  {
    id: 'sumo-squats',
    name: 'Squats Sumo',
    description: 'Squats pieds écartés',
    duration: 45,
    muscles: ['Adducteurs', 'Fessiers'],
    animation: 'sumo-squat',
    difficulty: 'beginner',
    instructions: [
      'Pieds très écartés',
      'Pointes vers l\'extérieur',
      'Accent sur les adducteurs'
    ]
  },
  {
    id: 'lunges-static',
    name: 'Fentes Statiques',
    description: 'Fentes sur place',
    duration: 45,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'static-lunge',
    difficulty: 'beginner',
    instructions: [
      'Position fente fixe',
      'Montez et descendez',
      'Alternez les jambes'
    ]
  },
  {
    id: 'reverse-lunges',
    name: 'Fentes Arrière',
    description: 'Fentes vers l\'arrière',
    duration: 45,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'reverse-lunge',
    difficulty: 'beginner',
    instructions: [
      'Pas en arrière',
      'Descendez en fente',
      'Revenez debout'
    ]
  },
  {
    id: 'lateral-lunges',
    name: 'Fentes Latérales',
    description: 'Fentes sur les côtés',
    duration: 45,
    muscles: ['Adducteurs', 'Fessiers'],
    animation: 'lateral-lunge',
    difficulty: 'intermediate',
    instructions: [
      'Pas large sur le côté',
      'Pliez une jambe, tendez l\'autre',
      'Alternez les côtés'
    ]
  },
  {
    id: 'curtsy-lunges',
    name: 'Fentes Révérence',
    description: 'Fentes en diagonale',
    duration: 45,
    muscles: ['Fessiers', 'Abducteurs'],
    animation: 'curtsy-lunge',
    difficulty: 'intermediate',
    instructions: [
      'Pas en diagonale arrière',
      'Comme une révérence',
      'Travaille les fessiers'
    ]
  },
  {
    id: 'bulgarian-split-squats',
    name: 'Squats Bulgares',
    description: 'Fentes pied arrière surélevé',
    duration: 45,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'bulgarian-squat',
    difficulty: 'intermediate',
    instructions: [
      'Pied arrière sur une élévation',
      'Descendez en fente',
      'Très efficace'
    ]
  },
  {
    id: 'cossack-squats',
    name: 'Squats Cosaque',
    description: 'Squats latéraux profonds',
    duration: 45,
    muscles: ['Adducteurs', 'Mobilité'],
    animation: 'cossack-squat',
    difficulty: 'intermediate',
    instructions: [
      'Jambes très écartées',
      'Descendez d\'un côté',
      'Jambe opposée tendue'
    ]
  },
  {
    id: 'single-leg-deadlifts',
    name: 'Soulevés Une Jambe',
    description: 'Équilibre et ischio-jambiers',
    duration: 45,
    muscles: ['Ischio-jambiers', 'Équilibre'],
    animation: 'single-leg-deadlift',
    difficulty: 'intermediate',
    instructions: [
      'Penchez-vous sur une jambe',
      'Jambe libre vers l\'arrière',
      'Gardez l\'équilibre'
    ]
  },
  {
    id: 'glute-bridges',
    name: 'Ponts Fessiers',
    description: 'Activation des fessiers',
    duration: 45,
    muscles: ['Fessiers', 'Ischio-jambiers'],
    animation: 'glute-bridge',
    difficulty: 'beginner',
    instructions: [
      'Allongé, soulevez le bassin',
      'Serrez les fessiers',
      'Maintenez en haut'
    ]
  },
  {
    id: 'single-leg-glute-bridges',
    name: 'Ponts Une Jambe',
    description: 'Ponts unilatéraux',
    duration: 45,
    muscles: ['Fessiers', 'Stabilisation'],
    animation: 'single-glute-bridge',
    difficulty: 'intermediate',
    instructions: [
      'Pont sur une jambe',
      'Jambe libre tendue',
      'Plus difficile'
    ]
  },
  {
    id: 'hip-thrusts',
    name: 'Poussées Hanches',
    description: 'Activation maximale des fessiers',
    duration: 45,
    muscles: ['Fessiers', 'Ischio-jambiers'],
    animation: 'hip-thrust',
    difficulty: 'intermediate',
    instructions: [
      'Épaules sur une élévation',
      'Poussez les hanches vers le haut',
      'Serrez fort les fessiers'
    ]
  },
  {
    id: 'wall-sits',
    name: 'Chaises Murales',
    description: 'Isométrie des cuisses',
    duration: 60,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'wall-sit',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Cuisses parallèles au sol',
      'Maintenez la position'
    ]
  },
  {
    id: 'step-ups',
    name: 'Montées de Marche',
    description: 'Montées sur élévation',
    duration: 45,
    muscles: ['Quadriceps', 'Fessiers'],
    animation: 'step-up',
    difficulty: 'beginner',
    instructions: [
      'Montez sur une marche',
      'Poussez avec la jambe du haut',
      'Descendez contrôlé'
    ]
  },
  {
    id: 'calf-raises-single',
    name: 'Mollets Une Jambe',
    description: 'Élévations unilatérales',
    duration: 45,
    muscles: ['Mollets', 'Équilibre'],
    animation: 'single-calf-raise',
    difficulty: 'intermediate',
    instructions: [
      'Sur une jambe',
      'Montez sur la pointe',
      'Plus difficile'
    ]
  },
  {
    id: 'jump-lunges',
    name: 'Fentes Sautées',
    description: 'Fentes explosives',
    duration: 30,
    muscles: ['Quadriceps', 'Puissance'],
    animation: 'jump-lunge',
    difficulty: 'intermediate',
    instructions: [
      'Fente puis saut',
      'Changez de jambe en l\'air',
      'Réception en fente'
    ]
  },
  {
    id: 'broad-jumps',
    name: 'Sauts en Longueur',
    description: 'Sauts horizontaux',
    duration: 30,
    muscles: ['Quadriceps', 'Puissance'],
    animation: 'broad-jump',
    difficulty: 'intermediate',
    instructions: [
      'Sautez le plus loin possible',
      'Réception en squat',
      'Explosivité'
    ]
  },
  {
    id: 'box-jumps',
    name: 'Sauts de Boîte',
    description: 'Sauts sur élévation',
    duration: 30,
    muscles: ['Quadriceps', 'Puissance'],
    animation: 'box-jump',
    difficulty: 'intermediate',
    instructions: [
      'Sautez sur une boîte',
      'Réception douce',
      'Descendez contrôlé'
    ]
  },
  {
    id: 'lateral-bounds',
    name: 'Bonds Latéraux',
    description: 'Sauts de côté',
    duration: 30,
    muscles: ['Abducteurs', 'Puissance'],
    animation: 'lateral-bound',
    difficulty: 'intermediate',
    instructions: [
      'Sautez latéralement',
      'D\'une jambe à l\'autre',
      'Stabilisez à la réception'
    ]
  },
  {
    id: 'single-leg-hops',
    name: 'Sauts Une Jambe',
    description: 'Sauts unilatéraux',
    duration: 30,
    muscles: ['Quadriceps', 'Équilibre'],
    animation: 'single-leg-hop',
    difficulty: 'intermediate',
    instructions: [
      'Sautez sur une jambe',
      'Avant, arrière, côté',
      'Gardez l\'équilibre'
    ]
  },
  {
    id: 'squat-pulses',
    name: 'Pulsions Squat',
    description: 'Micro-mouvements en squat',
    duration: 30,
    muscles: ['Quadriceps', 'Endurance'],
    animation: 'squat-pulse',
    difficulty: 'intermediate',
    instructions: [
      'Position squat basse',
      'Petits mouvements de haut en bas',
      'Brûlure garantie'
    ]
  },
  {
    id: 'lunge-pulses',
    name: 'Pulsions Fente',
    description: 'Micro-mouvements en fente',
    duration: 30,
    muscles: ['Quadriceps', 'Endurance'],
    animation: 'lunge-pulse',
    difficulty: 'intermediate',
    instructions: [
      'Position fente basse',
      'Petits mouvements',
      'Très intense'
    ]
  },
  {
    id: 'squat-hold',
    name: 'Maintien Squat',
    description: 'Isométrie en squat',
    duration: 60,
    muscles: ['Quadriceps', 'Endurance'],
    animation: 'squat-hold',
    difficulty: 'intermediate',
    instructions: [
      'Position squat basse',
      'Maintenez sans bouger',
      'Respirez normalement'
    ]
  },
  {
    id: 'pistol-squat-progression',
    name: 'Progression Pistol Squat',
    description: 'Vers le squat une jambe',
    duration: 60,
    muscles: ['Quadriceps', 'Équilibre'],
    animation: 'pistol-progression',
    difficulty: 'advanced',
    instructions: [
      'Objectif: squat sur une jambe',
      'Progressez avec assistance',
      'Très difficile'
    ]
  },
  {
    id: 'shrimp-squat-progression',
    name: 'Progression Shrimp Squat',
    description: 'Squat une jambe arrière',
    duration: 60,
    muscles: ['Quadriceps', 'Flexibilité'],
    animation: 'shrimp-progression',
    difficulty: 'advanced',
    instructions: [
      'Squat une jambe, autre derrière',
      'Extrêmement difficile',
      'Flexibilité requise'
    ]
  },
  {
    id: 'dragon-squat-progression',
    name: 'Progression Dragon Squat',
    description: 'Squat latéral une jambe',
    duration: 60,
    muscles: ['Quadriceps', 'Adducteurs'],
    animation: 'dragon-progression',
    difficulty: 'advanced',
    instructions: [
      'Squat latéral sur une jambe',
      'Très technique',
      'Force et mobilité'
    ]
  },
  {
    id: 'archer-squats',
    name: 'Squats Archer',
    description: 'Squats asymétriques',
    duration: 45,
    muscles: ['Quadriceps', 'Adducteurs'],
    animation: 'archer-squat',
    difficulty: 'advanced',
    instructions: [
      'Squat vers un côté',
      'Une jambe fait le travail',
      'Progression vers pistol'
    ]
  },
  {
    id: 'sissy-squats',
    name: 'Squats Sissy',
    description: 'Squats en arrière',
    duration: 30,
    muscles: ['Quadriceps', 'Équilibre'],
    animation: 'sissy-squat',
    difficulty: 'advanced',
    instructions: [
      'Penchez-vous vers l\'arrière',
      'Genoux vers l\'avant',
      'Très difficile'
    ]
  }
];

// ÉTIREMENTS - 100+ exercices
export const stretchingExercises: Exercise[] = [
  // Haut du corps (35 exercices)
  {
    id: 'neck-rolls',
    name: 'Roulements de Nuque',
    description: 'Mobilisation douce de la nuque',
    duration: 45,
    muscles: ['Nuque', 'Trapèzes'],
    animation: 'neck-roll',
    difficulty: 'beginner',
    instructions: [
      'Roulez doucement la tête',
      'Dans les deux sens',
      'Mouvements lents'
    ]
  },
  {
    id: 'neck-side-stretch',
    name: 'Étirement Latéral Nuque',
    description: 'Étirement des côtés du cou',
    duration: 60,
    muscles: ['Nuque', 'Trapèzes'],
    animation: 'neck-side',
    difficulty: 'beginner',
    instructions: [
      'Penchez la tête sur le côté',
      'Main opposée tire vers le bas',
      'Alternez les côtés'
    ]
  },
  {
    id: 'upper-trap-stretch',
    name: 'Étirement Trapèzes Supérieurs',
    description: 'Relâchement des trapèzes',
    duration: 60,
    muscles: ['Trapèzes', 'Nuque'],
    animation: 'upper-trap',
    difficulty: 'beginner',
    instructions: [
      'Tête penchée, main tire l\'épaule',
      'Ressentez l\'étirement',
      'Maintenez et respirez'
    ]
  },
  {
    id: 'levator-scapulae-stretch',
    name: 'Étirement Élévateur Omoplate',
    description: 'Étirement spécifique du muscle élévateur',
    duration: 60,
    muscles: ['Élévateur', 'Nuque'],
    animation: 'levator-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Regardez vers le bas et le côté',
      'Main tire la tête doucement',
      'Angle spécifique important'
    ]
  },
  {
    id: 'forearm-stretch',
    name: 'Étirement Avant-Bras',
    description: 'Étirement des muscles fléchisseurs et extenseurs',
    duration: 45,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'stretch-forearm',
    difficulty: 'beginner',
    instructions: [
      'Tendez un bras devant vous, paume vers le haut',
      'Avec l\'autre main, tirez doucement les doigts vers vous',
      'Maintenez 20s puis changez de sens'
    ]
  },
  {
    id: 'wrist-flexor-stretch',
    name: 'Étirement Fléchisseurs Poignet',
    description: 'Étirement spécifique des fléchisseurs',
    duration: 60,
    muscles: ['Fléchisseurs', 'Avant-bras'],
    animation: 'wrist-flexor',
    difficulty: 'beginner',
    instructions: [
      'Bras tendu, paume vers l\'extérieur',
      'Tirez les doigts vers vous',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'wrist-extensor-stretch',
    name: 'Étirement Extenseurs Poignet',
    description: 'Étirement des muscles extenseurs',
    duration: 60,
    muscles: ['Extenseurs', 'Avant-bras'],
    animation: 'wrist-extensor',
    difficulty: 'beginner',
    instructions: [
      'Bras tendu, paume vers le sol',
      'Poussez la main vers le bas',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'prayer-stretch-advanced',
    name: 'Étirement Prière Avancé',
    description: 'Étirement profond des avant-bras',
    duration: 90,
    muscles: ['Avant-bras', 'Poignets'],
    animation: 'prayer-advanced',
    difficulty: 'intermediate',
    instructions: [
      'Paumes jointes, descendez les mains',
      'Gardez les paumes collées',
      'Étirement progressif'
    ]
  },
  {
    id: 'shoulder-stretch',
    name: 'Étirement Épaules',
    description: 'Détente des épaules et du haut du dos',
    duration: 40,
    muscles: ['Épaules', 'Trapèzes'],
    animation: 'stretch-shoulder',
    difficulty: 'beginner',
    instructions: [
      'Croisez un bras devant la poitrine',
      'Tirez doucement avec l\'autre bras',
      'Ressentez l\'étirement dans l\'épaule'
    ]
  },
  {
    id: 'cross-body-shoulder-stretch',
    name: 'Étirement Épaule Croisé',
    description: 'Étirement horizontal des épaules',
    duration: 60,
    muscles: ['Deltoïdes', 'Capsule'],
    animation: 'cross-shoulder',
    difficulty: 'beginner',
    instructions: [
      'Bras croisé devant la poitrine',
      'Tirez avec l\'autre bras',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'overhead-shoulder-stretch',
    name: 'Étirement Épaule Verticale',
    description: 'Étirement vers le haut',
    duration: 60,
    muscles: ['Épaules', 'Triceps'],
    animation: 'overhead-shoulder',
    difficulty: 'beginner',
    instructions: [
      'Bras levé, coude plié derrière la tête',
      'Tirez le coude avec l\'autre main',
      'Étirez l\'épaule et le triceps'
    ]
  },
  {
    id: 'behind-back-shoulder-stretch',
    name: 'Étirement Épaule Derrière le Dos',
    description: 'Étirement en rotation interne',
    duration: 60,
    muscles: ['Épaules', 'Capsule'],
    animation: 'behind-back-shoulder',
    difficulty: 'intermediate',
    instructions: [
      'Bras derrière le dos',
      'Tirez doucement vers le haut',
      'Attention à ne pas forcer'
    ]
  },
  {
    id: 'doorway-chest-stretch',
    name: 'Étirement Pectoraux Encadrement',
    description: 'Ouverture des pectoraux',
    duration: 90,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'doorway-chest',
    difficulty: 'beginner',
    instructions: [
      'Bras contre l\'encadrement',
      'Avancez le corps',
      'Ressentez l\'ouverture'
    ]
  },
  {
    id: 'corner-chest-stretch',
    name: 'Étirement Pectoraux Coin',
    description: 'Étirement dans un coin',
    duration: 90,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'corner-chest',
    difficulty: 'beginner',
    instructions: [
      'Bras contre les murs du coin',
      'Avancez vers le coin',
      'Étirement bilatéral'
    ]
  },
  {
    id: 'wall-chest-stretch',
    name: 'Étirement Pectoraux Mural',
    description: 'Étirement contre le mur',
    duration: 60,
    muscles: ['Pectoraux', 'Épaules'],
    animation: 'wall-chest',
    difficulty: 'beginner',
    instructions: [
      'Main contre le mur',
      'Tournez le corps',
      'Alternez les bras'
    ]
  },
  {
    id: 'triceps-stretch',
    name: 'Étirement Triceps',
    description: 'Étirement des triceps',
    duration: 60,
    muscles: ['Triceps', 'Épaules'],
    animation: 'triceps-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras levé, coude plié',
      'Tirez le coude vers l\'arrière',
      'Maintenez l\'étirement'
    ]
  },
  {
    id: 'biceps-stretch',
    name: 'Étirement Biceps',
    description: 'Étirement des biceps',
    duration: 60,
    muscles: ['Biceps', 'Épaules'],
    animation: 'biceps-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras tendu contre un mur',
      'Tournez le corps',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'lat-stretch-overhead',
    name: 'Étirement Dorsaux Vertical',
    description: 'Étirement des grands dorsaux',
    duration: 60,
    muscles: ['Dorsaux', 'Obliques'],
    animation: 'lat-overhead',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus au-dessus de la tête',
      'Penchez-vous sur le côté',
      'Étirez le flanc'
    ]
  },
  {
    id: 'lat-stretch-hanging',
    name: 'Étirement Dorsaux Suspendu',
    description: 'Étirement en suspension',
    duration: 60,
    muscles: ['Dorsaux', 'Épaules'],
    animation: 'lat-hanging',
    difficulty: 'intermediate',
    instructions: [
      'Suspendez-vous à une barre',
      'Laissez le poids étirer',
      'Respirez profondément'
    ]
  },
  {
    id: 'rhomboid-stretch',
    name: 'Étirement Rhomboïdes',
    description: 'Étirement entre les omoplates',
    duration: 60,
    muscles: ['Rhomboïdes', 'Trapèzes'],
    animation: 'rhomboid-stretch',
    difficulty: 'beginner',
    instructions: [
      'Bras tendus devant, mains jointes',
      'Poussez vers l\'avant',
      'Écartez les omoplates'
    ]
  },
  {
    id: 'upper-back-stretch',
    name: 'Étirement Haut du Dos',
    description: 'Étirement général du haut du dos',
    duration: 60,
    muscles: ['Haut du dos', 'Trapèzes'],
    animation: 'upper-back',
    difficulty: 'beginner',
    instructions: [
      'Enroulez les bras autour du corps',
      'Tirez vers l\'avant',
      'Arrondissez le haut du dos'
    ]
  },
  {
    id: 'sleeper-stretch',
    name: 'Étirement du Dormeur',
    description: 'Étirement de la capsule postérieure',
    duration: 60,
    muscles: ['Capsule', 'Rotateurs'],
    animation: 'sleeper-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Allongé sur le côté',
      'Bras du dessous à 90°',
      'Poussez la main vers le sol'
    ]
  },
  {
    id: 'wall-slide-stretch',
    name: 'Étirement Glissement Mural',
    description: 'Mobilisation contre le mur',
    duration: 90,
    muscles: ['Épaules', 'Thoracique'],
    animation: 'wall-slide-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Glissez les bras vers le haut',
      'Gardez le contact'
    ]
  },
  {
    id: 'thoracic-extension-stretch',
    name: 'Étirement Extension Thoracique',
    description: 'Ouverture du thorax',
    duration: 60,
    muscles: ['Thoracique', 'Pectoraux'],
    animation: 'thoracic-extension',
    difficulty: 'intermediate',
    instructions: [
      'Mains derrière la tête',
      'Ouvrez la poitrine',
      'Étendez le haut du dos'
    ]
  },
  {
    id: 'cat-cow-stretch',
    name: 'Étirement Chat-Vache',
    description: 'Mobilisation de la colonne',
    duration: 90,
    muscles: ['Colonne', 'Dos'],
    animation: 'cat-cow-stretch',
    difficulty: 'beginner',
    instructions: [
      'À quatre pattes',
      'Alternez dos rond et dos creux',
      'Mouvement fluide'
    ]
  },
  {
    id: 'child-pose-stretch',
    name: 'Position de l\'Enfant',
    description: 'Étirement et relaxation',
    duration: 120,
    muscles: ['Dos', 'Épaules'],
    animation: 'child-pose-stretch',
    difficulty: 'beginner',
    instructions: [
      'À genoux, assis sur les talons',
      'Penchez-vous vers l\'avant',
      'Bras tendus devant'
    ]
  },
  {
    id: 'thread-needle-stretch',
    name: 'Étirement Passer l\'Aiguille',
    description: 'Rotation thoracique',
    duration: 60,
    muscles: ['Thoracique', 'Épaules'],
    animation: 'thread-needle',
    difficulty: 'intermediate',
    instructions: [
      'À quatre pattes',
      'Passez un bras sous l\'autre',
      'Rotation du tronc'
    ]
  },
  {
    id: 'eagle-arms-stretch',
    name: 'Étirement Bras d\'Aigle',
    description: 'Étirement complexe des épaules',
    duration: 60,
    muscles: ['Épaules', 'Rhomboïdes'],
    animation: 'eagle-arms',
    difficulty: 'intermediate',
    instructions: [
      'Enroulez les bras l\'un autour de l\'autre',
      'Levez les coudes',
      'Étirez entre les omoplates'
    ]
  },
  {
    id: 'reverse-prayer-stretch',
    name: 'Étirement Prière Inversée',
    description: 'Étirement avancé des avant-bras',
    duration: 60,
    muscles: ['Avant-bras', 'Épaules'],
    animation: 'reverse-prayer-stretch',
    difficulty: 'advanced',
    instructions: [
      'Dos des mains joints derrière le dos',
      'Remontez doucement',
      'Très intense'
    ]
  },
  {
    id: 'wall-angels-stretch',
    name: 'Anges Muraux Étirement',
    description: 'Mobilisation contre le mur',
    duration: 90,
    muscles: ['Épaules', 'Thoracique'],
    animation: 'wall-angels-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Dos contre le mur',
      'Mouvements d\'ange lents',
      'Gardez le contact'
    ]
  },
  {
    id: 'pec-minor-stretch',
    name: 'Étirement Petit Pectoral',
    description: 'Étirement spécifique du petit pectoral',
    duration: 60,
    muscles: ['Petit pectoral', 'Épaules'],
    animation: 'pec-minor',
    difficulty: 'intermediate',
    instructions: [
      'Bras haut contre le mur',
      'Avancez le corps',
      'Angle spécifique'
    ]
  },
  {
    id: 'scalene-stretch',
    name: 'Étirement Scalènes',
    description: 'Étirement des muscles du cou',
    duration: 60,
    muscles: ['Scalènes', 'Nuque'],
    animation: 'scalene-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Tête penchée et tournée',
      'Main tire l\'épaule opposée',
      'Angle précis important'
    ]
  },
  {
    id: 'sternocleidomastoid-stretch',
    name: 'Étirement Sterno-cléido-mastoïdien',
    description: 'Étirement du muscle du cou',
    duration: 60,
    muscles: ['SCM', 'Nuque'],
    animation: 'scm-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Tournez la tête d\'un côté',
      'Regardez vers le haut',
      'Étirez le muscle visible'
    ]
  },
  {
    id: 'suboccipital-stretch',
    name: 'Étirement Sous-occipitaux',
    description: 'Étirement de la base du crâne',
    duration: 60,
    muscles: ['Sous-occipitaux', 'Nuque'],
    animation: 'suboccipital',
    difficulty: 'intermediate',
    instructions: [
      'Menton vers la poitrine',
      'Poussez doucement la tête',
      'Base du crâne'
    ]
  },
  {
    id: 'finger-extensor-stretch',
    name: 'Étirement Extenseurs Doigts',
    description: 'Étirement des extenseurs des doigts',
    duration: 45,
    muscles: ['Extenseurs', 'Avant-bras'],
    animation: 'finger-extensor',
    difficulty: 'beginner',
    instructions: [
      'Fermez le poing',
      'Tirez les doigts vers l\'arrière',
      'Étirez les extenseurs'
    ]
  },

  // Tronc et dos (35 exercices)
  {
    id: 'spinal-twist-seated',
    name: 'Torsion Vertébrale Assise',
    description: 'Rotation de la colonne vertébrale',
    duration: 90,
    muscles: ['Obliques', 'Colonne'],
    animation: 'spinal-twist-seated',
    difficulty: 'beginner',
    instructions: [
      'Assis jambes croisées',
      'Rotation du tronc',
      'Maintenez avec les bras'
    ]
  },
  {
    id: 'spinal-twist-lying',
    name: 'Torsion Vertébrale Allongée',
    description: 'Rotation au sol',
    duration: 90,
    muscles: ['Obliques', 'Dos'],
    animation: 'spinal-twist-lying',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux fléchis',
      'Laissez tomber les genoux sur le côté',
      'Gardez les épaules au sol'
    ]
  },
  {
    id: 'knee-to-chest-single',
    name: 'Genou à la Poitrine Simple',
    description: 'Étirement lombaire unilatéral',
    duration: 60,
    muscles: ['Lombaires', 'Fessiers'],
    animation: 'knee-chest-single',
    difficulty: 'beginner',
    instructions: [
      'Allongé, ramenez un genou',
      'Vers la poitrine',
      'Alternez les jambes'
    ]
  },
  {
    id: 'knee-to-chest-double',
    name: 'Genoux à la Poitrine Double',
    description: 'Étirement lombaire bilatéral',
    duration: 90,
    muscles: ['Lombaires', 'Fessiers'],
    animation: 'knee-chest-double',
    difficulty: 'beginner',
    instructions: [
      'Allongé, ramenez les deux genoux',
      'Vers la poitrine',
      'Balancez doucement'
    ]
  },
  {
    id: 'cobra-stretch-gentle',
    name: 'Cobra Doux',
    description: 'Extension douce de la colonne',
    duration: 60,
    muscles: ['Abdominaux', 'Dos'],
    animation: 'cobra-gentle',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le ventre',
      'Poussez légèrement sur les bras',
      'Extension douce'
    ]
  },
  {
    id: 'cobra-stretch-full',
    name: 'Cobra Complet',
    description: 'Extension complète de la colonne',
    duration: 60,
    muscles: ['Abdominaux', 'Dos'],
    animation: 'cobra-full',
    difficulty: 'intermediate',
    instructions: [
      'Allongé sur le ventre',
      'Poussez fort sur les bras',
      'Extension maximale'
    ]
  },
  {
    id: 'camel-pose',
    name: 'Position du Chameau',
    description: 'Extension profonde du dos',
    duration: 60,
    muscles: ['Abdominaux', 'Psoas'],
    animation: 'camel-pose',
    difficulty: 'advanced',
    instructions: [
      'À genoux, cambrez vers l\'arrière',
      'Mains sur les talons',
      'Très intense'
    ]
  },
  {
    id: 'bridge-stretch',
    name: 'Étirement en Pont',
    description: 'Pont pour étirer l\'avant du corps',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'bridge-stretch',
    difficulty: 'advanced',
    instructions: [
      'Pont complet',
      'Mains et pieds au sol',
      'Ouvre tout l\'avant'
    ]
  },
  {
    id: 'side-bend-standing',
    name: 'Flexion Latérale Debout',
    description: 'Étirement des flancs',
    duration: 60,
    muscles: ['Obliques', 'Quadratus'],
    animation: 'side-bend-standing',
    difficulty: 'beginner',
    instructions: [
      'Debout, penchez-vous sur le côté',
      'Bras au-dessus de la tête',
      'Alternez les côtés'
    ]
  },
  {
    id: 'side-bend-seated',
    name: 'Flexion Latérale Assise',
    description: 'Étirement latéral assis',
    duration: 60,
    muscles: ['Obliques', 'Dorsaux'],
    animation: 'side-bend-seated',
    difficulty: 'beginner',
    instructions: [
      'Assis, penchez-vous sur le côté',
      'Une main au sol, autre tendue',
      'Étirez le flanc'
    ]
  },
  {
    id: 'forward-fold-seated',
    name: 'Flexion Avant Assise',
    description: 'Étirement de la chaîne postérieure',
    duration: 90,
    muscles: ['Ischio-jambiers', 'Dos'],
    animation: 'forward-fold-seated',
    difficulty: 'beginner',
    instructions: [
      'Assis jambes tendues',
      'Penchez-vous vers l\'avant',
      'Gardez le dos droit'
    ]
  },
  {
    id: 'forward-fold-standing',
    name: 'Flexion Avant Debout',
    description: 'Étirement debout vers l\'avant',
    duration: 90,
    muscles: ['Ischio-jambiers', 'Dos'],
    animation: 'forward-fold-standing',
    difficulty: 'beginner',
    instructions: [
      'Debout, penchez-vous vers l\'avant',
      'Laissez pendre les bras',
      'Pliez les genoux si nécessaire'
    ]
  },
  {
    id: 'standing-backbend',
    name: 'Cambrure Debout',
    description: 'Extension debout',
    duration: 45,
    muscles: ['Abdominaux', 'Psoas'],
    animation: 'standing-backbend',
    difficulty: 'intermediate',
    instructions: [
      'Debout, mains dans le dos',
      'Cambrez doucement',
      'Ne forcez pas'
    ]
  },
  {
    id: 'fish-pose',
    name: 'Position du Poisson',
    description: 'Ouverture de la poitrine',
    duration: 90,
    muscles: ['Pectoraux', 'Nuque'],
    animation: 'fish-pose',
    difficulty: 'intermediate',
    instructions: [
      'Allongé, soulevez la poitrine',
      'Sommet de la tête au sol',
      'Ouvre la gorge'
    ]
  },
  {
    id: 'wheel-pose-prep',
    name: 'Préparation Roue',
    description: 'Vers la position de la roue',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'wheel-prep',
    difficulty: 'advanced',
    instructions: [
      'Progression vers le pont complet',
      'Mains près des oreilles',
      'Poussez pour monter'
    ]
  },
  {
    id: 'scorpion-prep',
    name: 'Préparation Scorpion',
    description: 'Vers la position du scorpion',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'scorpion-prep',
    difficulty: 'advanced',
    instructions: [
      'Avant-bras au sol',
      'Pieds vers la tête',
      'Très avancé'
    ]
  },
  {
    id: 'seated-forward-fold-wide',
    name: 'Flexion Avant Jambes Écartées',
    description: 'Étirement avec jambes écartées',
    duration: 90,
    muscles: ['Adducteurs', 'Dos'],
    animation: 'seated-wide-fold',
    difficulty: 'intermediate',
    instructions: [
      'Assis, jambes très écartées',
      'Penchez-vous vers l\'avant',
      'Entre les jambes'
    ]
  },
  {
    id: 'seated-side-fold',
    name: 'Flexion Latérale Jambes Écartées',
    description: 'Étirement vers une jambe',
    duration: 60,
    muscles: ['Adducteurs', 'Obliques'],
    animation: 'seated-side-fold',
    difficulty: 'intermediate',
    instructions: [
      'Jambes écartées',
      'Penchez-vous vers une jambe',
      'Alternez les côtés'
    ]
  },
  {
    id: 'revolved-triangle',
    name: 'Triangle en Torsion',
    description: 'Torsion debout',
    duration: 60,
    muscles: ['Obliques', 'Ischio-jambiers'],
    animation: 'revolved-triangle',
    difficulty: 'intermediate',
    instructions: [
      'Jambes écartées',
      'Rotation vers une jambe',
      'Main opposée au sol'
    ]
  },
  {
    id: 'revolved-lunge',
    name: 'Fente en Torsion',
    description: 'Torsion en fente',
    duration: 60,
    muscles: ['Obliques', 'Psoas'],
    animation: 'revolved-lunge',
    difficulty: 'intermediate',
    instructions: [
      'Position fente',
      'Rotation du tronc',
      'Main opposée au sol'
    ]
  },
  {
    id: 'eagle-twist',
    name: 'Torsion de l\'Aigle',
    description: 'Torsion avec jambes croisées',
    duration: 60,
    muscles: ['Obliques', 'Fessiers'],
    animation: 'eagle-twist',
    difficulty: 'intermediate',
    instructions: [
      'Jambes croisées debout',
      'Rotation du tronc',
      'Équilibre et torsion'
    ]
  },
  {
    id: 'bharadvajasana',
    name: 'Torsion de Bharadvaja',
    description: 'Torsion assise classique',
    duration: 90,
    muscles: ['Obliques', 'Colonne'],
    animation: 'bharadvajasana',
    difficulty: 'intermediate',
    instructions: [
      'Assis, jambes sur le côté',
      'Rotation du tronc',
      'Torsion profonde'
    ]
  },
  {
    id: 'marichyasana',
    name: 'Torsion de Marichi',
    description: 'Torsion avec une jambe pliée',
    duration: 90,
    muscles: ['Obliques', 'Dos'],
    animation: 'marichyasana',
    difficulty: 'intermediate',
    instructions: [
      'Une jambe tendue, une pliée',
      'Rotation vers la jambe pliée',
      'Bras autour de la jambe'
    ]
  },
  {
    id: 'ardha-matsyendrasana',
    name: 'Demi-Torsion du Seigneur des Poissons',
    description: 'Torsion profonde assise',
    duration: 90,
    muscles: ['Obliques', 'Colonne'],
    animation: 'ardha-matsyendrasana',
    difficulty: 'advanced',
    instructions: [
      'Position complexe de torsion',
      'Jambes entrelacées',
      'Torsion maximale'
    ]
  },
  {
    id: 'parivrtta-parsvakonasana',
    name: 'Angle Latéral en Torsion',
    description: 'Torsion en fente latérale',
    duration: 60,
    muscles: ['Obliques', 'Adducteurs'],
    animation: 'parivrtta-parsvakonasana',
    difficulty: 'advanced',
    instructions: [
      'Fente latérale profonde',
      'Rotation du tronc',
      'Très intense'
    ]
  },
  {
    id: 'parivrtta-trikonasana',
    name: 'Triangle en Torsion Avancé',
    description: 'Triangle avec torsion profonde',
    duration: 60,
    muscles: ['Obliques', 'Ischio-jambiers'],
    animation: 'parivrtta-trikonasana',
    difficulty: 'advanced',
    instructions: [
      'Triangle classique',
      'Rotation complète',
      'Main opposée au sol'
    ]
  },
  {
    id: 'ustrasana',
    name: 'Position du Chameau Complète',
    description: 'Cambrure profonde à genoux',
    duration: 60,
    muscles: ['Abdominaux', 'Psoas'],
    animation: 'ustrasana',
    difficulty: 'advanced',
    instructions: [
      'À genoux, cambrez complètement',
      'Mains sur les talons',
      'Tête vers l\'arrière'
    ]
  },
  {
    id: 'urdhva-dhanurasana',
    name: 'Arc Vers le Haut',
    description: 'Pont complet',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'urdhva-dhanurasana',
    difficulty: 'advanced',
    instructions: [
      'Pont complet sur mains et pieds',
      'Cambrure maximale',
      'Très difficile'
    ]
  },
  {
    id: 'eka-pada-rajakapotasana',
    name: 'Pigeon Royal Une Jambe',
    description: 'Pigeon avec cambrure',
    duration: 90,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'eka-pada-rajakapotasana',
    difficulty: 'advanced',
    instructions: [
      'Position pigeon',
      'Attrapez le pied arrière',
      'Cambrure profonde'
    ]
  },
  {
    id: 'kapotasana',
    name: 'Position du Pigeon Complet',
    description: 'Pigeon avec mains aux pieds',
    duration: 90,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'kapotasana',
    difficulty: 'advanced',
    instructions: [
      'À genoux, cambrez vers l\'arrière',
      'Mains attrapent les pieds',
      'Extrêmement difficile'
    ]
  },
  {
    id: 'dwi-pada-viparita-dandasana',
    name: 'Bâton Inversé Deux Jambes',
    description: 'Pont sur avant-bras',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'dwi-pada-viparita-dandasana',
    difficulty: 'advanced',
    instructions: [
      'Pont sur les avant-bras',
      'Très intense pour les épaules',
      'Progression lente'
    ]
  },
  {
    id: 'natarajasana',
    name: 'Position du Danseur',
    description: 'Équilibre avec cambrure',
    duration: 60,
    muscles: ['Quadriceps', 'Équilibre'],
    animation: 'natarajasana',
    difficulty: 'advanced',
    instructions: [
      'Équilibre sur une jambe',
      'Attrapez l\'autre pied',
      'Cambrure et équilibre'
    ]
  },
  {
    id: 'vrschikasana',
    name: 'Position du Scorpion',
    description: 'Scorpion complet',
    duration: 60,
    muscles: ['Abdominaux', 'Épaules'],
    animation: 'vrschikasana',
    difficulty: 'advanced',
    instructions: [
      'Équilibre sur avant-bras',
      'Pieds vers la tête',
      'Extrêmement avancé'
    ]
  },
  {
    id: 'pincha-mayurasana',
    name: 'Équilibre sur Avant-bras',
    description: 'Handstand sur avant-bras',
    duration: 60,
    muscles: ['Épaules', 'Core'],
    animation: 'pincha-mayurasana',
    difficulty: 'advanced',
    instructions: [
      'Équilibre sur les avant-bras',
      'Jambes droites vers le haut',
      'Très difficile'
    ]
  },

  // Jambes et hanches (30 exercices)
  {
    id: 'hip-flexor-stretch',
    name: 'Étirement Psoas',
    description: 'Étirement des fléchisseurs de hanche',
    duration: 60,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'stretch-hip',
    difficulty: 'intermediate',
    instructions: [
      'Position fente, genou arrière au sol',
      'Poussez le bassin vers l\'avant',
      'Maintenez le dos droit'
    ]
  },
  {
    id: 'standing-quad-stretch',
    name: 'Étirement Quadriceps Debout',
    description: 'Étirement des quadriceps',
    duration: 60,
    muscles: ['Quadriceps', 'Psoas'],
    animation: 'standing-quad',
    difficulty: 'beginner',
    instructions: [
      'Debout, pliez le genou vers l\'arrière',
      'Tenez le pied',
      'Poussez la hanche vers l\'avant'
    ]
  },
  {
    id: 'lying-quad-stretch',
    name: 'Étirement Quadriceps Allongé',
    description: 'Étirement allongé sur le côté',
    duration: 60,
    muscles: ['Quadriceps', 'Psoas'],
    animation: 'lying-quad',
    difficulty: 'beginner',
    instructions: [
      'Allongé sur le côté',
      'Pliez la jambe du dessus',
      'Tirez le pied vers les fesses'
    ]
  },
  {
    id: 'couch-stretch',
    name: 'Étirement du Canapé',
    description: 'Étirement profond du psoas',
    duration: 90,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'couch-stretch',
    difficulty: 'intermediate',
    instructions: [
      'Pied arrière sur une élévation',
      'Fente profonde',
      'Très intense'
    ]
  },
  {
    id: 'hamstring-stretch-standing',
    name: 'Étirement Ischio Debout',
    description: 'Étirement des ischio-jambiers',
    duration: 60,
    muscles: ['Ischio-jambiers', 'Mollets'],
    animation: 'hamstring-standing',
    difficulty: 'beginner',
    instructions: [
      'Une jambe tendue sur une élévation',
      'Penchez-vous vers l\'avant',
      'Gardez le dos droit'
    ]
  },
  {
    id: 'hamstring-stretch-lying',
    name: 'Étirement Ischio Allongé',
    description: 'Étirement allongé',
    duration: 60,
    muscles: ['Ischio-jambiers', 'Mollets'],
    animation: 'hamstring-lying',
    difficulty: 'beginner',
    instructions: [
      'Allongé, levez une jambe',
      'Tirez vers vous',
      'Gardez la jambe tendue'
    ]
  },
  {
    id: 'seated-hamstring-stretch',
    name: 'Étirement Ischio Assis',
    description: 'Étirement assis',
    duration: 60,
    muscles: ['Ischio-jambiers', 'Dos'],
    animation: 'seated-hamstring',
    difficulty: 'beginner',
    instructions: [
      'Assis, une jambe tendue',
      'Penchez-vous vers la jambe',
      'Alternez les jambes'
    ]
  },
  {
    id: 'pigeon-pose',
    name: 'Position du Pigeon',
    description: 'Ouverture profonde des hanches',
    duration: 120,
    muscles: ['Psoas', 'Piriformes'],
    animation: 'pigeon-pose',
    difficulty: 'intermediate',
    instructions: [
      'Genou avant plié à 90°',
      'Jambe arrière tendue',
      'Penchez-vous vers l\'avant'
    ]
  },
  {
    id: 'figure-four-stretch',
    name: 'Étirement Chiffre 4',
    description: 'Étirement des fessiers',
    duration: 60,
    muscles: ['Fessiers', 'Piriformes'],
    animation: 'figure-four',
    difficulty: 'beginner',
    instructions: [
      'Allongé, cheville sur genou opposé',
      'Tirez la cuisse vers vous',
      'Alternez les jambes'
    ]
  },
  {
    id: 'seated-figure-four',
    name: 'Chiffre 4 Assis',
    description: 'Étirement assis des fessiers',
    duration: 60,
    muscles: ['Fessiers', 'Piriformes'],
    animation: 'seated-figure-four',
    difficulty: 'beginner',
    instructions: [
      'Assis, cheville sur genou',
      'Penchez-vous vers l\'avant',
      'Ressentez l\'étirement'
    ]
  },
  {
    id: 'standing-figure-four',
    name: 'Chiffre 4 Debout',
    description: 'Étirement debout avec équilibre',
    duration: 60,
    muscles: ['Fessiers', 'Équilibre'],
    animation: 'standing-figure-four',
    difficulty: 'intermediate',
    instructions: [
      'Debout, cheville sur genou',
      'Penchez-vous vers l\'avant',
      'Gardez l\'équilibre'
    ]
  },
  {
    id: 'butterfly-stretch',
    name: 'Étirement Papillon',
    description: 'Ouverture des adducteurs',
    duration: 90,
    muscles: ['Adducteurs', 'Aine'],
    animation: 'butterfly',
    difficulty: 'beginner',
    instructions: [
      'Assis, plantes des pieds ensemble',
      'Rapprochez les talons',
      'Penchez-vous vers l\'avant'
    ]
  },
  {
    id: 'bound-angle-pose',
    name: 'Position de l\'Angle Lié',
    description: 'Papillon avec flexion avant',
    duration: 90,
    muscles: ['Adducteurs', 'Dos'],
    animation: 'bound-angle',
    difficulty: 'intermediate',
    instructions: [
      'Position papillon',
      'Penchez-vous profondément',
      'Gardez le dos droit'
    ]
  },
  {
    id: 'wide-legged-forward-fold',
    name: 'Flexion Avant Jambes Écartées',
    description: 'Étirement debout jambes écartées',
    duration: 90,
    muscles: ['Adducteurs', 'Ischio-jambiers'],
    animation: 'wide-forward-fold',
    difficulty: 'intermediate',
    instructions: [
      'Debout, jambes très écartées',
      'Penchez-vous vers l\'avant',
      'Mains au sol si possible'
    ]
  },
  {
    id: 'lizard-pose',
    name: 'Position du Lézard',
    description: 'Fente profonde',
    duration: 90,
    muscles: ['Psoas', 'Adducteurs'],
    animation: 'lizard-pose',
    difficulty: 'intermediate',
    instructions: [
      'Fente basse, avant-bras au sol',
      'Genou avant vers l\'extérieur',
      'Très profond'
    ]
  },
  {
    id: 'dragon-pose',
    name: 'Position du Dragon',
    description: 'Fente très profonde',
    duration: 90,
    muscles: ['Psoas', 'Quadriceps'],
    animation: 'dragon-pose',
    difficulty: 'intermediate',
    instructions: [
      'Fente très basse',
      'Genou arrière au sol',
      'Descendez profondément'
    ]
  },
  {
    id: 'low-lunge-twist',
    name: 'Fente Basse avec Torsion',
    description: 'Fente avec rotation',
    duration: 60,
    muscles: ['Psoas', 'Obliques'],
    animation: 'low-lunge-twist',
    difficulty: 'intermediate',
    instructions: [
      'Fente basse',
      'Rotation du tronc',
      'Bras vers le haut'
    ]
  },
  {
    id: 'runners-lunge',
    name: 'Fente du Coureur',
    description: 'Fente haute',
    duration: 60,
    muscles: ['Psoas', 'Mollets'],
    animation: 'runners-lunge',
    difficulty: 'beginner',
    instructions: [
      'Fente haute',
      'Mains de chaque côté du pied',
      'Étirez la jambe arrière'
    ]
  },
  {
    id: 'pyramid-pose',
    name: 'Position de la Pyramide',
    description: 'Étirement intense des ischio-jambiers',
    duration: 90,
    muscles: ['Ischio-jambiers', 'Mollets'],
    animation: 'pyramid-pose',
    difficulty: 'intermediate',
    instructions: [
      'Jambes écartées, une devant',
      'Penchez-vous vers la jambe avant',
      'Gardez les hanches carrées'
    ]
  },
  {
    id: 'revolved-triangle-stretch',
    name: 'Triangle Inversé Étirement',
    description: 'Triangle avec torsion',
    duration: 60,
    muscles: ['Ischio-jambiers', 'Obliques'],
    animation: 'revolved-triangle-stretch',
    difficulty: 'advanced',
    instructions: [
      'Triangle avec rotation',
      'Main opposée vers le sol',
      'Très difficile'
    ]
  },
  {
    id: 'goddess-pose',
    name: 'Position de la Déesse',
    description: 'Squat large avec étirement',
    duration: 90,
    muscles: ['Adducteurs', 'Fessiers'],
    animation: 'goddess-pose',
    difficulty: 'intermediate',
    instructions: [
      'Squat très large',
      'Genoux vers l\'extérieur',
      'Bras en cactus'
    ]
  },
  {
    id: 'garland-pose',
    name: 'Position de la Guirlande',
    description: 'Squat profond',
    duration: 90,
    muscles: ['Chevilles', 'Hanches'],
    animation: 'garland-pose',
    difficulty: 'intermediate',
    instructions: [
      'Squat profond, talons au sol',
      'Mains en prière',
      'Coudes contre les genoux'
    ]
  },
  {
    id: 'happy-baby-pose',
    name: 'Position du Bébé Heureux',
    description: 'Étirement ludique des hanches',
    duration: 90,
    muscles: ['Fessiers', 'Dos'],
    animation: 'happy-baby',
    difficulty: 'beginner',
    instructions: [
      'Allongé, genoux vers les aisselles',
      'Tenez les pieds',
      'Balancez doucement'
    ]
  },
  {
    id: 'reclined-pigeon',
    name: 'Pigeon Allongé',
    description: 'Pigeon sur le dos',
    duration: 90,
    muscles: ['Fessiers', 'Piriformes'],
    animation: 'reclined-pigeon',
    difficulty: 'beginner',
    instructions: [
      'Allongé, cheville sur genou',
      'Tirez la cuisse',
      'Plus accessible que le pigeon'
    ]
  },
  {
    id: 'calf-stretch-wall',
    name: 'Étirement Mollets Mural',
    description: 'Étirement contre le mur',
    duration: 60,
    muscles: ['Mollets', 'Soléaires'],
    animation: 'calf-wall',
    difficulty: 'beginner',
    instructions: [
      'Mains contre le mur',
      'Une jambe tendue derrière',
      'Talon au sol'
    ]
  },
  {
    id: 'calf-stretch-step',
    name: 'Étirement Mollets Marche',
    description: 'Étirement sur une marche',
    duration: 60,
    muscles: ['Mollets', 'Achille'],
    animation: 'calf-step',
    difficulty: 'beginner',
    instructions: [
      'Avant-pieds sur une marche',
      'Laissez descendre les talons',
      'Étirez les mollets'
    ]
  },
  {
    id: 'seated-calf-stretch',
    name: 'Étirement Mollets Assis',
    description: 'Étirement assis',
    duration: 60,
    muscles: ['Mollets', 'Ischio-jambiers'],
    animation: 'seated-calf',
    difficulty: 'beginner',
    instructions: [
      'Assis, jambe tendue',
      'Tirez les orteils vers vous',
      'Avec une sangle si nécessaire'
    ]
  },
  {
    id: 'ankle-circles-stretch',
    name: 'Cercles Chevilles Étirement',
    description: 'Mobilisation des chevilles',
    duration: 60,
    muscles: ['Chevilles', 'Pieds'],
    animation: 'ankle-circles-stretch',
    difficulty: 'beginner',
    instructions: [
      'Assis, jambe tendue',
      'Effectuez des cercles avec le pied',
      'Dans les deux sens'
    ]
  },
  {
    id: 'toe-touch-stretch',
    name: 'Étirement Toucher Orteils',
    description: 'Flexion avant complète',
    duration: 90,
    muscles: ['Ischio-jambiers', 'Dos'],
    animation: 'toe-touch',
    difficulty: 'intermediate',
    instructions: [
      'Debout, penchez-vous vers l\'avant',
      'Essayez de toucher les orteils',
      'Gardez les jambes tendues'
    ]
  },
  {
    id: 'splits-preparation',
    name: 'Préparation Grand Écart',
    description: 'Vers le grand écart',
    duration: 120,
    muscles: ['Psoas', 'Ischio-jambiers'],
    animation: 'splits-prep',
    difficulty: 'advanced',
    instructions: [
      'Progressez vers le grand écart',
      'Une jambe devant, une derrière',
      'Descendez graduellement'
    ]
  }
];

// Fonction utilitaire pour sélectionner des exercices selon la durée
const selectExercisesForDuration = (exercises: Exercise[], targetDuration: number): Exercise[] => {
  const selected: Exercise[] = [];
  let currentDuration = 0;
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);

  for (const exercise of shuffled) {
    if (currentDuration + exercise.duration <= targetDuration + 60) { // +60s de tolérance
      selected.push(exercise);
      currentDuration += exercise.duration;
    }
    if (currentDuration >= targetDuration - 60) break; // -60s de tolérance
  }

  return selected;
};

export const generateRandomWorkout = (
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  type: 'warmup' | 'strength' | 'stretching' | 'full',
  durationMinutes: number
): WorkoutSession => {
  const targetDuration = durationMinutes * 60; // Convert to seconds
  let selectedExercises: Exercise[] = [];
  let currentDuration = 0;
  
  // Filter exercises by difficulty and type
  let availableExercises: Exercise[] = [];
  
  if (type === 'warmup') {
    availableExercises = warmupExercises.filter(ex => ex.difficulty === difficulty);
  } else if (type === 'strength') {
    availableExercises = strengthExercises.filter(ex => ex.difficulty === difficulty);
  } else if (type === 'stretching') {
    availableExercises = stretchingExercises.filter(ex => ex.difficulty === difficulty);
  } else if (type === 'full') {
    // Mix of all types
    const warmupEx = warmupExercises.filter(ex => ex.difficulty === difficulty);
    const strengthEx = strengthExercises.filter(ex => ex.difficulty === difficulty);
    const stretchingEx = stretchingExercises.filter(ex => ex.difficulty === difficulty);
    
    // Select proportionally
    const warmupCount = Math.ceil(durationMinutes / 10);
    const strengthCount = Math.ceil(durationMinutes / 5);
    const stretchingCount = Math.ceil(durationMinutes / 8);
    
    availableExercises = [
      ...warmupEx.slice(0, warmupCount),
      ...strengthEx.slice(0, strengthCount),
      ...stretchingEx.slice(0, stretchingCount)
    ];
  }
  
  // Shuffle and select exercises to fit duration
  const shuffled = [...availableExercises].sort(() => Math.random() - 0.5);
  
  for (const exercise of shuffled) {
    if (currentDuration + exercise.duration <= targetDuration) {
      selectedExercises.push(exercise);
      currentDuration += exercise.duration;
    }
    
    if (currentDuration >= targetDuration * 0.9) break; // 90% of target duration
  }
  
  // Calculate XP reward
  const xpReward = Math.floor(currentDuration / 10) + (selectedExercises.length * 5);
  
  return {
    id: `random-${Date.now()}`,
    type: 'auto',
    name: `Programme ${type === 'full' ? 'Complet' : type === 'warmup' ? 'Échauffement' : type === 'strength' ? 'Renforcement' : 'Étirements'} (${difficulty})`,
    exercises: selectedExercises,
    totalDuration: currentDuration,
    xpReward
  };
};

export const generateWorkoutProgram = (
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  type: 'warmup' | 'strength' | 'stretching' | 'full',
  durationMinutes: number
): WorkoutSession => {
  return generateRandomWorkout(difficulty, type, durationMinutes);
};

// Sessions prédéfinies mises à jour
export const workoutSessions: WorkoutSession[] = [
  {
    id: 'beginner-warmup',
    type: 'warmup',
    name: 'Échauffement Débutant',
    exercises: warmupExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8),
    totalDuration: warmupExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 50
  },
  {
    id: 'intermediate-warmup',
    type: 'warmup',
    name: 'Échauffement Intermédiaire',
    exercises: warmupExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10),
    totalDuration: warmupExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 75
  },
  {
    id: 'advanced-warmup',
    type: 'warmup',
    name: 'Échauffement Avancé',
    exercises: warmupExercises.slice(0, 12),
    totalDuration: warmupExercises.slice(0, 12).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 100
  },
  {
    id: 'beginner-strength',
    type: 'strength',
    name: 'Renforcement Débutant',
    exercises: strengthExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8),
    totalDuration: strengthExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 100
  },
  {
    id: 'intermediate-strength',
    type: 'strength',
    name: 'Renforcement Intermédiaire',
    exercises: strengthExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10),
    totalDuration: strengthExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 150
  },
  {
    id: 'advanced-strength',
    type: 'strength',
    name: 'Renforcement Avancé',
    exercises: strengthExercises.slice(0, 12),
    totalDuration: strengthExercises.slice(0, 12).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 200
  },
  {
    id: 'beginner-stretching',
    type: 'stretching',
    name: 'Étirements Débutant',
    exercises: stretchingExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8),
    totalDuration: stretchingExercises.filter(ex => ex.difficulty === 'beginner').slice(0, 8).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 75
  },
  {
    id: 'intermediate-stretching',
    type: 'stretching',
    name: 'Étirements Intermédiaire',
    exercises: stretchingExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10),
    totalDuration: stretchingExercises.filter(ex => ex.difficulty === 'beginner' || ex.difficulty === 'intermediate').slice(0, 10).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 100
  },
  {
    id: 'advanced-stretching',
    type: 'stretching',
    name: 'Étirements Avancé',
    exercises: stretchingExercises.slice(0, 12),
    totalDuration: stretchingExercises.slice(0, 12).reduce((sum, ex) => sum + ex.duration, 0),
    xpReward: 125
  }
];

export const exercises = warmupExercises;