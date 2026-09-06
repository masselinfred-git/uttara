import type { GlobalConfig } from "payload";

export const APropos: GlobalConfig = {
  slug: "a-propos",
  label: "À propos de Laëtitia",
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: "Contenu du site",
    description:
      "Présentation de Laëtitia affichée sur la page d’accueil.",
  },
  fields: [
    {
      name: "displayName",
      label: "Prénom ou nom affiché",
      type: "text",
    },
    {
      name: "role",
      label: "Titre ou rôle",
      type: "text",
    },
    {
      name: "primaryText",
      label: "Texte principal",
      type: "textarea",
    },
    {
      name: "secondaryText",
      label: "Texte secondaire",
      type: "textarea",
    },
    {
      name: "photo",
      label: "Photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Sélectionnez une photo existante ou importez-en une nouvelle.",
      },
    },
  ],
};
