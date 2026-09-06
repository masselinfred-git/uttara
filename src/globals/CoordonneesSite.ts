import type { GlobalConfig } from "payload";

export const CoordonneesSite: GlobalConfig = {
  slug: "coordonnees-site",
  label: "Coordonnées du site",
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: "Réglages du site",
    description:
      "Coordonnées publiques, réseaux sociaux et informations pratiques.",
  },
  fields: [
    {
      type: "collapsible",
      label: "Identité et adresse",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "businessName",
          label: "Nom commercial",
          type: "text",
        },
        {
          name: "address",
          label: "Adresse",
          type: "text",
        },
        {
          type: "row",
          fields: [
            {
              name: "postalCode",
              label: "Code postal",
              type: "text",
              admin: { width: "35%" },
            },
            {
              name: "city",
              label: "Ville",
              type: "text",
              admin: { width: "65%" },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Contact et réseaux sociaux",
      admin: { initCollapsed: false },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "phone",
              label: "Téléphone",
              type: "text",
              admin: { width: "50%" },
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              admin: { width: "50%" },
            },
          ],
        },
        {
          name: "instagram",
          label: "Instagram",
          type: "text",
        },
        {
          name: "facebook",
          label: "Facebook",
          type: "text",
        },
        {
          name: "shopUrl",
          label: "URL de la boutique",
          type: "text",
        },
      ],
    },
    {
      type: "collapsible",
      label: "Informations pratiques",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "appointmentText",
          label: "Texte rendez-vous",
          type: "textarea",
        },
        {
          name: "fundingText",
          label: "Texte formation et financement",
          type: "textarea",
        },
      ],
    },
  ],
};
