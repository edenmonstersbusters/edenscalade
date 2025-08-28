import { Article } from '../types';

export const articles: Article[] = [
  {
    id: 'grip-types',
    title: 'Les Différents Types de Prises',
    content: `
      # Les Différents Types de Prises

      ## Prises Fermées (Crimps)
      Les crimps sont des prises étroites qui nécessitent une force importante des doigts. Technique :
      - Utilisez la pulpe des doigts
      - Gardez les articulations en position neutre
      - Évitez la position "crimp ouvert" qui stresse les tendons

      ## Prises Ouvertes (Open Hand)
      Position plus naturelle pour les doigts :
      - Doigts légèrement fléchis
      - Contact maximum avec la prise
      - Moins de stress sur les tendons

      ## Pinces (Pinches)
      Prises latérales qui se tiennent entre le pouce et les autres doigts :
      - Force du pouce cruciale
      - Engagement de tout l'avant-bras
      - Technique de compression

      ## Bidoigts (Pockets)
      Trous dans la paroi pour un ou deux doigts :
      - Attention aux blessures
      - Échauffement spécifique nécessaire
      - Progression graduelle
    `,
    category: 'techniques',
    readTime: 5,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
  },
  {
    id: 'climbing-shoes',
    title: 'Guide des Chaussons d\'Escalade',
    content: `
      # Guide des Chaussons d'Escalade

      ## Choisir la Bonne Taille
      - 0.5 à 1 taille en dessous de votre pointure street
      - Confort vs performance selon votre niveau
      - Essayage en fin de journée (pieds gonflés)

      ## Formes de Chaussons
      
      ### Straight (Droit)
      - Idéal débutants
      - Confort maximal
      - Polyvalent

      ### Moderate (Modéré)
      - Léger cambre
      - Bon compromis performance/confort
      - Escalade technique

      ### Aggressive (Cambré)
      - Cambre prononcé
      - Performance sur dévers
      - Précision sur petites prises

      ## Matériaux
      - **Cuir** : s'étire, durable
      - **Synthétique** : garde sa forme, moins d'entretien
      - **Microfibre** : léger, respirant

      ## Entretien
      - Aération après usage
      - Nettoyage régulier
      - Stockage à plat
    `,
    category: 'equipment',
    readTime: 7,
    image: 'https://images.pexels.com/photos/3768/rock-climbing-shoes-sports.jpg'
  },
  {
    id: 'energy-management',
    title: 'Gestion de l\'Énergie en Escalade',
    content: `
      # Gestion de l'Énergie en Escalade

      ## Économie d'Énergie

      ### Positions de Repos
      - Cherchez les "no hands rest"
      - Utilisez les jambes pour soulager les bras
      - Secouez alternativement chaque bras

      ### Respiration
      - Respirez consciemment
      - Expirez lors des mouvements difficiles
      - Utilisez les zones de repos pour récupérer

      ## Technique vs Force
      
      ### Placement des Pieds
      - Précision plutôt que force
      - Utilisez l'adhérence du chausson
      - Pivotez sur les prises

      ### Mouvement du Bassin
      - Rapprochez-vous du mur
      - Utilisez la gravité
      - Économisez les bras

      ## Entraînement Spécifique
      - Endurance de force
      - Intervalles courts
      - Récupération active

      ## Nutrition et Hydratation
      - Hydratation avant, pendant, après
      - Collations énergétiques
      - Évitez les repas lourds avant l'escalade
    `,
    category: 'training',
    readTime: 6,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
  },
  {
    id: 'pro-tips',
    title: 'Conseils de Pros',
    content: `
      # Conseils de Professionnels

      ## Adam Ondra - Concentration
      "La concentration est plus importante que la force pure. Visualisez votre mouvement avant de le faire."

      ## Alex Honnold - Gestion du Stress
      "Pratiquez dans des conditions variées pour développer votre adaptabilité."

      ## Janja Garnbret - Lecture de Voies
      "Prenez le temps d'analyser la voie. Une bonne lecture vaut tous les entraînements."

      ## Magnus Midtbø - Entraînement
      "Variez vos entraînements. Force, endurance, technique - tout est connecté."

      ## Shauna Coxsey - Mental
      "L'escalade est 70% mental. Travaillez votre confiance autant que votre physique."

      ## Tips Quotidiens
      - Échauffez-vous toujours progressivement
      - Filmez-vous pour analyser votre technique
      - Grimpez avec des partenaires plus forts
      - Sortez de votre zone de confort
      - Reposez-vous quand c'est nécessaire
    `,
    category: 'tips',
    readTime: 4,
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg'
  }
];