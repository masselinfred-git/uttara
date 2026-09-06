import type { CollectionConfig } from "payload";

export const Formations: CollectionConfig = {
  slug: "formations",

  labels: {
    singular: "Formation",
    plural: "Formations",
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "active", "price", "updatedAt"],
  },

  fields: [
    {
      name: "active",
      label: "Afficher cette formation",
      type: "checkbox",
      defaultValue: true,
    },

    {
      name: "title",
      label: "Nom de la formation",
      type: "text",
      required: true,
    },

    {
      name: "shortTitle",
      label: "Titre court",
      type: "text",
    },

    {
      name: "eyebrow",
      label: "Catégorie / sous-titre",
      type: "text",
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },

    {
      name: "duration",
      label: "Durée",
      type: "text",
    },

    {
      name: "hours",
      label: "Nombre d’heures",
      type: "text",
    },

    {
      name: "price",
      label: "Tarif",
      type: "text",
    },

    {
      name: "objectives",
      label: "Objectifs",
      type: "array",

      fields: [
        {
          name: "objective",
          label: "Objectif",
          type: "text",
          required: true,
        },
      ],
    },

    {
      name: "individual",
      label: "Accompagnement individuel possible",
      type: "checkbox",
      defaultValue: false,
    },

    {
      name: "maxParticipants",
      label: "Nombre maximum de participants",
      type: "number",
    },

    {
      name: "accommodation",
      label: "Hébergement",
      type: "text",
    },

    {
      name: "order",
      label: "Ordre d’affichage",
      type: "number",
      defaultValue: 0,
    },
  ],
};