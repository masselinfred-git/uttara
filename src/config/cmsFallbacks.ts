import { legalConfig } from "./legal.ts";
import { siteConfig } from "./site.ts";

export const fallbackTestimonials = [
  {
    id: "fallback-testimonial",
    name: "Témoignage stagiaire",
    text: "Une expérience profondément humaine, douce et enveloppante, dans laquelle on se sent immédiatement en confiance.",
    context: undefined,
    order: 0,
    active: true,
  },
] as const;

export const fallbackSiteCoordinates = {
  businessName: siteConfig.name,
  address: "12 rue du Presbytère",
  postalCode: "05300",
  city: "Le Poët",
  phone: legalConfig.phone,
  email: legalConfig.email,
  instagram: siteConfig.social.instagram,
  facebook: siteConfig.social.facebook,
  shopUrl: siteConfig.shopUrl,
  appointmentText:
    "Les soins et formations sont proposés sur rendez-vous.",
  fundingText:
    "Pour toute demande concernant une formation, pensez à préciser votre statut professionnel et votre éventuel besoin de financement.",
} as const;

export const fallbackHomeContent = {
  hero: {
    eyebrow: "Ayurveda · Soins · Formations",
    titleLine1: "Revenir à soi.",
    titleLine2: "Se reconnecter",
    titleAccent: "à l’essentiel.",
    text: "Un espace chaleureux où l’Ayurveda, le soin et l’énergie se rencontrent.",
  },
  intro: {
    eyebrow: "Bienvenue chez Uttara",
    title:
      "Un lieu où l’on prend le temps de revenir au corps, au vivant et à soi.",
    text: "Ici, le soin ne se limite pas à un geste. Il devient une expérience, une écoute, une transmission et un moment pour ralentir.",
  },
  care: {
    eyebrow: "Prendre soin",
    label: "Les soins",
    title: "Écouter le corps, accompagner l’énergie.",
    text: "Les soins proposés par Uttara s’inscrivent dans une approche globale inspirée de l’Ayurveda, attentive au corps, aux sensations et à l’équilibre propre à chacun.",
  },
  immersive: {
    line1: "Prendre soin du corps,",
    line2: "c’est aussi prendre soin",
    accent: "de l’énergie.",
  },
  training: {
    eyebrow: "Transmettre",
    label: "Les formations",
    title: "Apprendre, expérimenter, transmettre.",
    text: "Des formations pensées comme des temps d’apprentissage, de pratique et d’expérience.",
    items: [
      {
        number: "01",
        title: "Massage Ayurvédique",
        text: "Découvrir les fondamentaux du massage et développer un toucher juste et conscient.",
      },
      {
        number: "02",
        title: "Bol Kansu",
        text: "Explorer la pratique traditionnelle du massage des pieds au bol Kansu.",
      },
      {
        number: "03",
        title: "Approche énergétique",
        text: "Approfondir l’écoute du corps et des circulations énergétiques.",
      },
      {
        number: "04",
        title: "Transmission",
        text: "Intégrer les pratiques dans une approche professionnelle et personnelle.",
      },
    ],
  },
  schedule: {
    eyebrow: "Se rencontrer",
    title: "Prochaines dates",
    text: "Retrouvez ici les prochaines sessions de formation proposées par Uttara.",
  },
  shop: {
    eyebrow: "Poursuivre l’expérience",
    title: "Entrez dans l’univers de la boutique Uttara.",
    text: "Une sélection pensée autour du soin, du vivant et de l’univers d’Uttara.",
    buttonLabel: "Découvrir la boutique ↗",
  },
} as const;

export const fallbackAboutContent = {
  displayName: "Je suis Laëtitia.",
  role: "La rencontre",
  primaryText:
    "Mon approche s’est construite autour de l’Ayurveda, du soin, de l’écoute du corps et de l’énergie.",
  secondaryText:
    "Uttara est l’espace dans lequel je rassemble aujourd’hui ces pratiques et cette expérience pour accompagner et transmettre.",
  photo: "/images/laititia/portrait.webp",
} as const;
