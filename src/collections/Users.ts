import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  labels: {
    singular: "Utilisateur",
    plural: "Utilisateurs",
  },

  admin: {
    useAsTitle: "email",
    group: "Administration",
    description:
      "Gestion des comptes autorisés à accéder à l’administration.",
    defaultColumns: ["email", "name", "updatedAt"],
    hideAPIURL: true,
  },

  auth: true,

  fields: [
    {
      name: "name",
      label: "Prénom et nom",
      type: "text",
      admin: {
        description: "Nom affiché pour identifier facilement ce compte.",
      },
    },
  ],
};
