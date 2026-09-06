import type { CollectionConfig } from "payload";

export const Temoignages: CollectionConfig = {
  slug: "temoignages",
  labels: {
    singular: "Témoignage",
    plural: "Témoignages",
  },
  access: {
    read: ({ req }) =>
      req.user
        ? true
        : {
            active: {
              equals: true,
            },
          },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: "name",
    group: "Contenu du site",
    description: "Gérez les témoignages affichés sur la page d’accueil.",
    defaultColumns: ["name", "context", "active", "order", "updatedAt"],
    hideAPIURL: true,
    listSearchableFields: ["name", "text", "context"],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "active",
          label: "Afficher sur le site",
          type: "checkbox",
          defaultValue: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "order",
          label: "Ordre d’affichage",
          type: "number",
          defaultValue: 0,
          admin: {
            width: "50%",
            description: "Les plus petits nombres apparaissent en premier.",
          },
        },
      ],
    },
    {
      name: "name",
      label: "Prénom ou nom affiché",
      type: "text",
      required: true,
    },
    {
      name: "text",
      label: "Témoignage",
      type: "textarea",
      required: true,
    },
    {
      name: "context",
      label: "Contexte",
      type: "text",
      admin: {
        description: "Facultatif, par exemple : soin ou formation.",
      },
    },
  ],
};
