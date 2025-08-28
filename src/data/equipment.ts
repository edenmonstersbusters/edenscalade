import { Equipment } from '../types';

export const climbingEquipment: Equipment[] = [
  // Chaussons d'escalade
  {
    id: 'scarpa-instinct-vs',
    name: 'Scarpa Instinct VS',
    category: 'shoes',
    type: 'Chausson d\'escalade',
    price: 159,
    currency: '€',
    description: 'Chausson technique avec cambre agressif, idéal pour l\'escalade sportive et le bloc. Excellent grip et précision sur petites prises.',
    features: [
      'Cambre agressif pour la précision',
      'Semelle Vibram XS Edge',
      'Système de fermeture velcro',
      'Talon renforcé pour les crochets'
    ],
    image: 'https://images.pexels.com/photos/3768/rock-climbing-shoes-sports.jpg',
    buyLink: 'https://www.decathlon.fr/p/chaussons-escalade-scarpa-instinct/_/R-p-123456',
    rating: 4.8,
    difficulty: 'advanced',
    bestFor: ['Sport climbing', 'Bouldering', 'Overhangs']
  },
  {
    id: 'la-sportiva-tarantulace',
    name: 'La Sportiva Tarantulace',
    category: 'shoes',
    type: 'Chausson d\'escalade débutant',
    price: 89,
    currency: '€',
    description: 'Chausson confortable pour débuter l\'escalade. Forme droite et matériaux souples pour un apprentissage en douceur.',
    features: [
      'Forme droite confortable',
      'Cuir souple qui s\'adapte au pied',
      'Lacets pour ajustement précis',
      'Semelle FriXion RS'
    ],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    buyLink: 'https://www.decathlon.fr/p/chaussons-escalade-la-sportiva/_/R-p-789012',
    rating: 4.5,
    difficulty: 'beginner',
    bestFor: ['Learning', 'Indoor climbing', 'Long routes']
  },
  {
    id: 'five-ten-hiangle',
    name: 'Five Ten Hiangle',
    category: 'shoes',
    type: 'Chausson performance',
    price: 135,
    currency: '€',
    description: 'Chausson polyvalent avec excellent compromis performance/confort. Parfait pour l\'escalade technique.',
    features: [
      'Cambre modéré polyvalent',
      'Semelle Stealth C4',
      'Fermeture velcro pratique',
      'Talon précis'
    ],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    buyLink: 'https://www.decathlon.fr/p/chaussons-escalade-five-ten/_/R-p-345678',
    rating: 4.7,
    difficulty: 'intermediate',
    bestFor: ['Technical climbing', 'Multi-pitch', 'Versatility']
  },

  // Baudriers
  {
    id: 'petzl-adjama',
    name: 'Petzl Adjama',
    category: 'harness',
    type: 'Baudrier polyvalent',
    price: 65,
    currency: '€',
    description: 'Baudrier confortable et polyvalent, idéal pour l\'escalade sportive et l\'alpinisme. Réglage facile et porte-matériel pratiques.',
    features: [
      '4 porte-matériel rigides',
      'Ceinture et cuisses réglables',
      'Boucle DoubleBack',
      'Léger et résistant'
    ],
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
    buyLink: 'https://www.decathlon.fr/p/baudrier-petzl-adjama/_/R-p-111222',
    rating: 4.6,
    difficulty: 'intermediate',
    bestFor: ['Sport climbing', 'Multi-pitch', 'Alpinism']
  },
  {
    id: 'black-diamond-momentum',
    name: 'Black Diamond Momentum',
    category: 'harness',
    type: 'Baudrier débutant',
    price: 45,
    currency: '€',
    description: 'Baudrier d\'entrée de gamme confortable et sûr. Parfait pour débuter l\'escalade en salle et en extérieur.',
    features: [
      'Rembourrage confortable',
      'Boucles auto-bloquantes',
      '2 porte-matériel',
      'Rapport qualité-prix excellent'
    ],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    buyLink: 'https://www.decathlon.fr/p/baudrier-black-diamond/_/R-p-333444',
    rating: 4.3,
    difficulty: 'beginner',
    bestFor: ['Learning', 'Gym climbing', 'Easy routes']
  },

  // Magnésie et accessoires
  {
    id: 'black-diamond-white-gold',
    name: 'Black Diamond White Gold',
    category: 'chalk',
    type: 'Magnésie pure',
    price: 8,
    currency: '€',
    description: 'Magnésie de haute qualité pour une adhérence optimale. Texture fine et absorption excellente.',
    features: [
      'Magnésie pure 100%',
      'Texture fine',
      'Absorption optimale',
      'Packaging refermable'
    ],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    buyLink: 'https://www.decathlon.fr/p/magnesie-black-diamond/_/R-p-555666',
    rating: 4.4,
    difficulty: 'beginner',
    bestFor: ['All climbing', 'Sweaty hands', 'Competition']
  },
  {
    id: 'petzl-sakapoche',
    name: 'Petzl Sakapoche',
    category: 'chalk_bag',
    type: 'Sac à magnésie',
    price: 25,
    currency: '€',
    description: 'Sac à magnésie ergonomique avec ouverture large et fermeture pratique. Idéal pour l\'escalade sportive.',
    features: [
      'Ouverture large',
      'Fermeture cordon',
      'Ceinture incluse',
      'Boucle porte-brosse'
    ],
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
    buyLink: 'https://www.decathlon.fr/p/sac-magnesie-petzl/_/R-p-777888',
    rating: 4.5,
    difficulty: 'beginner',
    bestFor: ['Sport climbing', 'Bouldering', 'Training']
  },

  // Cordes
  {
    id: 'mammut-infinity',
    name: 'Mammut Infinity 9.5mm',
    category: 'rope',
    type: 'Corde dynamique',
    price: 180,
    currency: '€',
    description: 'Corde polyvalente pour l\'escalade sportive et l\'alpinisme. Excellent compromis entre légèreté et durabilité.',
    features: [
      'Diamètre 9.5mm',
      'Longueur 60m',
      'Traitement Dry',
      'Marquage milieu'
    ],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    buyLink: 'https://www.decathlon.fr/p/corde-mammut-infinity/_/R-p-999000',
    rating: 4.7,
    difficulty: 'intermediate',
    bestFor: ['Sport climbing', 'Multi-pitch', 'Alpinism']
  },

  // Casques
  {
    id: 'petzl-meteor',
    name: 'Petzl Meteor',
    category: 'helmet',
    type: 'Casque d\'escalade',
    price: 85,
    currency: '€',
    description: 'Casque léger et ventilé pour l\'escalade et l\'alpinisme. Protection optimale sans compromis sur le confort.',
    features: [
      'Ultra-léger 235g',
      'Excellente ventilation',
      'Réglage précis',
      'Certification CE/UIAA'
    ],
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg',
    buyLink: 'https://www.decathlon.fr/p/casque-petzl-meteor/_/R-p-111333',
    rating: 4.6,
    difficulty: 'intermediate',
    bestFor: ['Multi-pitch', 'Alpinism', 'Via ferrata']
  },

  // Dégaines
  {
    id: 'petzl-djinn-axess',
    name: 'Petzl Djinn Axess',
    category: 'quickdraw',
    type: 'Dégaine',
    price: 28,
    currency: '€',
    description: 'Dégaine polyvalente avec mousquetons ergonomiques. Parfaite pour l\'escalade sportive.',
    features: [
      'Mousquetons Djinn',
      'Sangle 12cm',
      'Doigt courbe ergonomique',
      'Léger et résistant'
    ],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    buyLink: 'https://www.decathlon.fr/p/degaine-petzl-djinn/_/R-p-222444',
    rating: 4.5,
    difficulty: 'intermediate',
    bestFor: ['Sport climbing', 'Competition', 'Training']
  },

  // Assureurs
  {
    id: 'petzl-grigri',
    name: 'Petzl GriGri',
    category: 'belay_device',
    type: 'Assureur automatique',
    price: 105,
    currency: '€',
    description: 'Assureur automatique de référence. Sécurité maximale pour l\'assurage et la descente.',
    features: [
      'Freinage assisté',
      'Compatible cordes 8.5-11mm',
      'Descente contrôlée',
      'Robuste et fiable'
    ],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    buyLink: 'https://www.decathlon.fr/p/assureur-petzl-grigri/_/R-p-555777',
    rating: 4.8,
    difficulty: 'intermediate',
    bestFor: ['Sport climbing', 'Gym climbing', 'Learning']
  }
];

export const getEquipmentByCategory = (category: string): Equipment[] => {
  return climbingEquipment.filter(item => item.category === category);
};

export const getEquipmentByDifficulty = (difficulty: string): Equipment[] => {
  return climbingEquipment.filter(item => item.difficulty === difficulty);
};

export const categories = [
  { id: 'shoes', name: 'Chaussons', icon: '👟', description: 'Chaussons d\'escalade pour tous niveaux' },
  { id: 'harness', name: 'Baudriers', icon: '🔗', description: 'Baudriers confortables et sécurisés' },
  { id: 'chalk', name: 'Magnésie', icon: '🤏', description: 'Magnésie et accessoires d\'adhérence' },
  { id: 'chalk_bag', name: 'Sacs à magnésie', icon: '👜', description: 'Sacs à magnésie pratiques' },
  { id: 'rope', name: 'Cordes', icon: '🪢', description: 'Cordes dynamiques et statiques' },
  { id: 'helmet', name: 'Casques', icon: '⛑️', description: 'Casques de protection' },
  { id: 'quickdraw', name: 'Dégaines', icon: '🔗', description: 'Dégaines et mousquetons' },
  { id: 'belay_device', name: 'Assureurs', icon: '🔒', description: 'Dispositifs d\'assurage' }
];