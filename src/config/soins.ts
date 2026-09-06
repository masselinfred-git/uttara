import type { PublicSoin } from "@/services/cms/types";

export const fallbackSoins: PublicSoin[] = [
  {
    id: -1,
    title: "Massage Ayurvédique Abhyanga",
    eyebrow: "Massage traditionnel à l’huile",
    description:
      "L’Abhyanga est l’un des massages emblématiques de la tradition ayurvédique. Pratiqué à l’huile, il enveloppe le corps dans des mouvements fluides, réguliers et profonds.",
    details:
      "Ce soin invite au relâchement, à la détente et à une meilleure perception du corps. Il constitue un véritable temps de pause, particulièrement adapté lorsque l’on ressent le besoin de ralentir et de se recentrer.",
    durations: [
      { duration: "60 min", price: "75 €" },
      { duration: "80 min", price: "90 €" },
    ],
    image: "/images/soins/massage-ayurvedique-home.webp",
    order: 0,
    active: true,
  },
  {
    id: -2,
    title: "Massage Bol Kansu pieds",
    eyebrow: "Ancrage et relaxation",
    description:
      "Le massage des pieds au bol Kansu est une pratique traditionnelle ayurvédique réalisée avec du ghee et un petit bol composé d’un alliage de métaux.",
    details:
      "Le soin alterne gestes manuels, pressions douces et mouvements du bol sur différentes zones du pied. Il offre une expérience particulièrement apaisante et favorise une sensation profonde d’ancrage et de détente.",
    durations: [{ duration: "30 min", price: "45 €" }],
    image: "/images/soins/bol-kansu-pieds.webp",
    order: 1,
    active: true,
  },
  {
    id: -3,
    title: "Massage corps aux poudres de plantes Udvartana",
    eyebrow: "Rituel ayurvédique aux plantes",
    description:
      "L’Udvartana est un massage traditionnel du corps réalisé avec des poudres de plantes. Il apporte une dimension très sensorielle au soin grâce au contact des poudres sur la peau.",
    details:
      "Lotus sacré, rose de Damas, neem et autres plantes peuvent être utilisés selon le rituel. Le massage associe mouvements dynamiques et exfoliation pour laisser la peau douce et satinée.",
    durations: [{ duration: "60 min", price: "75 €" }],
    image: "/images/soins/udvartana.webp",
    order: 2,
    active: true,
  },
  {
    id: -4,
    title: "Massage corps au Bol Kansu",
    eyebrow: "Douceur et équilibre",
    description:
      "Le massage du corps au Bol Kansu associe les mains et de petits bols traditionnels dans un enchaînement de lissages et de rotations.",
    details:
      "La douceur du geste et le contact du métal offrent un soin enveloppant et profondément relaxant. Une expérience idéale pour ralentir, relâcher les tensions et retrouver une sensation de calme.",
    durations: [{ duration: "60 min", price: "75 €" }],
    image: "/images/soins/bol-kansu-corps.webp",
    order: 3,
    active: true,
  },
  {
    id: -5,
    title: "Lifting naturel du visage Kobido",
    eyebrow: "Massage facial japonais",
    description:
      "Le Kobido est un art traditionnel japonais du massage du visage, transmis depuis plusieurs siècles.",
    details:
      "Le soin repose sur des gestes précis et rythmés travaillant différentes zones du visage. Il associe détente, tonicité et mise en valeur de l’éclat naturel de la peau.",
    durations: [{ duration: "60 min", price: "75 €" }],
    image: "/images/soins/kobido.webp",
    order: 4,
    active: true,
  },
];
