import type { CollectionConfig } from "payload";

export const Soins: CollectionConfig = {
  slug: "soins",

  labels: {
    singular: "Soin",
    plural: "Soins",
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "active", "updatedAt"],
  },

  fields: [
    {
      name: "active",
      label: "Afficher ce soin",
      type: "checkbox",
      defaultValue: true,
    },

    {
      name: "title",
      label: "Nom du soin",
      type: "text",
      required: true,
    },

    {
      name: "eyebrow",
      label: "Sous-titre",
      type: "text",
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },

    {
      name: "details",
      label: "Description complémentaire",
      type: "textarea",
    },

    {
      name: "image",
      label: "Photo",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "durations",
      label: "Durées et tarifs",
      type: "array",

      fields: [
        {
          name: "duration",
          label: "Durée",
          type: "text",
          required: true,
        },

        {
          name: "price",
          label: "Tarif",
          type: "text",
          required: true,
        },
      ],
    },

    {
      name: "order",
      label: "Ordre d’affichage",
      type: "number",
      defaultValue: 0,
    },
  ],
};