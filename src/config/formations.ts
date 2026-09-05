export type Formation = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  duration: string;
  hours?: string;
  price: string;
  accommodation?: string;
  description: string;
  objectives: string[];
  program: {
    title: string;
    items: string[];
  }[];
  prerequisites: string;
  validation: string;
  individual: boolean;
  maxParticipants?: number;
  image: string;
};

export const formations: Formation[] = [
  {
    slug: "massage-ayurvedique-abhyanga",
    title: "Formation Massage Ayurvédique Abhyanga",
    shortTitle: "Massage Abhyanga",
    eyebrow: "Massage traditionnel à l’huile",
    duration: "2 jours",
    hours: "14 h",
    price: "À partir de 450 € / personne",
    accommodation: "Hébergement sur place possible : 50 € / nuit",
    description:
      "Une formation immersive pour apprendre le massage Abhyanga, comprendre ses bases ayurvédiques et développer un toucher fluide, adapté à la personne et à sa constitution.",
    objectives: [
      "Connaître les bases de l’Ayurvéda appliquées au massage.",
      "Comprendre les doshas et la constitution ayurvédique.",
      "Découvrir les points Marmas.",
      "Maîtriser les principales techniques du massage Abhyanga.",
      "Adapter le toucher aux différents profils.",
      "Savoir accueillir, conseiller et accompagner le client.",
      "Connaître les principales contre-indications.",
    ],
    program: [
      {
        title: "Jour 1",
        items: [
          "Accueil et respiration Pranayama pour les masseurs.",
          "Origines du massage ayurvédique et découverte des Marmas.",
          "Accueil et conseil de la clientèle.",
          "Réception du massage complet.",
          "Mise en place de la cabine.",
          "Pratique de la tête et de la face antérieure du corps.",
          "Travail accompagné et démonstrations.",
          "Contre-indications et précautions.",
        ],
      },
      {
        title: "Jour 2",
        items: [
          "Comprendre les doshas et la constitution ayurvédique.",
          "Adapter le toucher aux différents types constitutionnels.",
          "Pratique de la face postérieure du corps.",
          "Enchaînement complet du massage.",
          "Pratique supervisée.",
          "Évaluation finale.",
        ],
      },
    ],
    prerequisites:
      "Aucun prérequis obligatoire. Une première expérience du massage est toutefois recommandée compte tenu du rythme intensif de la formation.",
    validation:
      "Un certificat de formation est remis au stagiaire ayant suivi la totalité de la formation et réalisé le protocole complet en fin de parcours.",
    individual: true,
    maxParticipants: 6,
    image: "/images/formations/formation-abhyanga.webp",
  },

  {
    slug: "massage-bol-kansu-corps",
    title: "Formation Massage Bol Kansu Corps",
    shortTitle: "Bol Kansu Corps",
    eyebrow: "Technique ayurvédique aux bols",
    duration: "2 jours",
    hours: "14 h",
    price: "À confirmer",
    accommodation: "Hébergement sur place possible : 50 € / nuit",
    description:
      "Une formation consacrée au massage du corps au Bol Kansu, associant compréhension ayurvédique, utilisation des bols, travail manuel et adaptation du soin.",
    objectives: [
      "Connaître les bases de l’Ayurvéda liées au massage Kansu.",
      "Comprendre les propriétés de l’alliage Kansa.",
      "Découvrir les chakras et les Nadis.",
      "Maîtriser les mouvements avec les bols.",
      "Associer lissages, rotations et techniques manuelles.",
      "Adapter le massage selon la constitution.",
      "Savoir préparer le ghee.",
      "Savoir accueillir et accompagner le client.",
    ],
    program: [
      {
        title: "Jour 1",
        items: [
          "Accueil et Pranayama.",
          "Origines de l’Ayurvéda et du massage au Bol Kansu.",
          "Découverte des chakras et des Nadis.",
          "Conseil et accueil de la clientèle.",
          "Mise en place de la cabine.",
          "Pratique du dos et du visage.",
          "Compréhension des doshas et de la prakriti.",
        ],
      },
      {
        title: "Jour 2",
        items: [
          "Pranayama.",
          "Pratique sur le ventre.",
          "Pratique sur les pieds.",
          "Préparation traditionnelle du ghee.",
          "Enchaînement du massage complet.",
          "Pratique supervisée et évaluation.",
        ],
      },
    ],
    prerequisites:
      "Aucun prérequis obligatoire. Une expérience préalable du massage est recommandée pour profiter pleinement du format intensif.",
    validation:
      "Un certificat de formation est remis après suivi complet de la formation et réalisation du protocole.",
    individual: true,
    maxParticipants: 6,
    image: "/images/formations/formation-kansu-corps.webp",
  },

  {
    slug: "massage-bol-kansu-pieds",
    title: "Formation Massage Bol Kansu Pieds",
    shortTitle: "Bol Kansu Pieds",
    eyebrow: "Une journée de pratique ciblée",
    duration: "1 jour",
    hours: "7 h",
    price: "À partir de 190 € / personne",
    accommodation: "Hébergement sur place possible : 50 € / nuit",
    description:
      "Une journée dédiée à l’apprentissage du massage des pieds au Bol Kansu, à l’utilisation du ghee et aux principales techniques manuelles associées.",
    objectives: [
      "Découvrir les bases de l’Ayurvéda liées au Bol Kansu.",
      "Comprendre l’utilisation des bols Kansa.",
      "Découvrir les points réflexes du pied.",
      "Maîtriser les lissages et digito-pressions.",
      "Préparer le ghee.",
      "Savoir installer la cabine.",
      "Réaliser le protocole complet.",
    ],
    program: [
      {
        title: "Jour 1",
        items: [
          "Accueil et respiration Pranayama.",
          "Origines de l’Ayurvéda et du Bol Kansu.",
          "Chakras, Nadis et points réflexes du pied.",
          "Démonstration du protocole.",
          "Pratique du massage des pieds.",
          "Préparation du ghee.",
          "Conseil et accueil de la clientèle.",
          "Mise en place de la cabine.",
          "Réalisation complète et évaluation.",
        ],
      },
    ],
    prerequisites:
      "Aucun prérequis obligatoire. Une pratique antérieure du massage constitue néanmoins un avantage.",
    validation:
      "Un certificat de formation est remis après réalisation du massage complet et suivi intégral de la journée.",
    individual: true,
    maxParticipants: 6,
    image: "/images/formations/formation-kansu-pieds.webp",
  },

  {
    slug: "decouverte-ayurveda",
    title: "Stage Découverte de l’Ayurvéda",
    shortTitle: "Découverte de l’Ayurvéda",
    eyebrow: "Comprendre sa constitution",
    duration: "3 jours",
    price: "À partir de 450 € / personne",
    accommodation: "Repas et hébergement en supplément",
    description:
      "Trois jours pour découvrir les fondements de l’Ayurvéda, explorer sa constitution, les rythmes de vie, l’alimentation, la respiration, la méditation et quelques plantes incontournables.",
    objectives: [
      "Comprendre les principes fondamentaux de l’Ayurvéda.",
      "Découvrir Vata, Pitta et Kapha.",
      "Mieux comprendre sa constitution individuelle.",
      "Découvrir les routines quotidiennes.",
      "Aborder l’alimentation selon les six saveurs.",
      "Découvrir quelques plantes utilisées en Ayurveda.",
      "Expérimenter Pranayama, méditation et auto-massage.",
    ],
    program: [
      {
        title: "Jour 1 — L’Ayurvéda et ma constitution",
        items: [
          "Origines de l’Ayurvéda.",
          "Découverte de Vata, Pitta et Kapha.",
          "Approche de sa constitution individuelle.",
          "Pranayama et méditation.",
        ],
      },
      {
        title: "Jour 2 — Hygiène de vie",
        items: [
          "Rythme de vie adapté à la constitution.",
          "Routines quotidiennes.",
          "Observation des déséquilibres.",
          "Initiation à l’auto-massage.",
          "Pranayama et méditation.",
        ],
      },
      {
        title: "Jour 3 — Alimentation et plantes",
        items: [
          "Découverte des six saveurs.",
          "Alimentation adaptée à la constitution.",
          "Introduction à quelques plantes ayurvédiques.",
          "Pranayama et méditation.",
        ],
      },
    ],
    prerequisites: "Aucun prérequis.",
    validation:
      "Stage de découverte et d’expérimentation de l’Ayurvéda.",
    individual: false,
    maxParticipants: 4,
    image: "/images/formations/stage-ayurveda.webp",
  },
];