import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  admin: {
    useAsTitle: "alt",
  },

  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
  },

  fields: [
    {
      name: "alt",
      label: "Texte alternatif",
      type: "text",
      required: true,
    },
  ],
};