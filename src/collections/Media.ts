import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  access: {
    read: () => true,
  },

  labels: {
    singular: "Média",
    plural: "Médias",
  },

  admin: {
    useAsTitle: "alt",
    group: "Contenu du site",
    description:
      "Bibliothèque des images utilisées dans les soins et sur le site.",
    defaultColumns: ["filename", "alt", "updatedAt"],
    hideAPIURL: true,
  },

  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
  },

  fields: [
    {
      name: "alt",
      label: "Description de l’image",
      type: "text",
      required: true,
      admin: {
        description:
          "Décrivez brièvement l’image pour les personnes qui ne peuvent pas la voir.",
      },
    },
  ],
};
