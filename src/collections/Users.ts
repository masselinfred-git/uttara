import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  access: {
    unlock: ({ id, req }) =>
      Boolean(
        req.user &&
          id !== undefined &&
          String(req.user.id) === String(id),
      ),
  },

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
