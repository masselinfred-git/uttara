import type { CollectionConfig } from "payload";

export const Documents: CollectionConfig = {
  slug: "documents",
  labels: {
    singular: "Document",
    plural: "Documents",
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
    useAsTitle: "title",
    group: "Contenu du site",
    description:
      "Bibliothèque des documents téléchargeables proposés sur le site.",
    defaultColumns: ["title", "category", "active", "order", "updatedAt"],
    hideAPIURL: true,
    listSearchableFields: ["title", "description", "version"],
  },
  upload: {
    staticDir: "documents",
    mimeTypes: [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ],
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
            description:
              "Seuls les documents cochés peuvent être proposés publiquement.",
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
      name: "title",
      label: "Titre du document",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description courte",
      type: "textarea",
    },
    {
      type: "row",
      fields: [
        {
          name: "category",
          label: "Catégorie",
          type: "select",
          required: true,
          defaultValue: "formation",
          options: [
            { label: "Formation", value: "formation" },
            { label: "Soin", value: "soin" },
            { label: "Accueil", value: "accueil" },
            { label: "Contact", value: "contact" },
            { label: "Autre", value: "autre" },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "version",
          label: "Version",
          type: "text",
          admin: {
            width: "50%",
            description: "Facultatif, par exemple : 2026 ou v2.",
          },
        },
      ],
    },
    {
      name: "documentDate",
      label: "Date du document",
      type: "date",
      admin: {
        description: "Facultatif.",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd/MM/yyyy",
        },
      },
    },
  ],
};
