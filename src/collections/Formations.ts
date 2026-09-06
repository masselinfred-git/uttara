import type { CollectionConfig } from "payload";

export const Formations: CollectionConfig = {
  slug: "formations",

  labels: {
    singular: "Formation",
    plural: "Formations",
  },

  admin: {
    useAsTitle: "title",
    group: "Contenu du site",
    description:
      "Gérez ici les formations affichées sur la page publique « Formations ».",
    defaultColumns: ["title", "active", "order", "price", "updatedAt"],
    hideAPIURL: true,
    listSearchableFields: ["title", "shortTitle", "eyebrow"],
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
              "Décochez cette case pour masquer temporairement cette formation.",
          },
        },
        {
          name: "order",
          label: "Ordre d’affichage",
          type: "number",
          defaultValue: 0,
          admin: {
            width: "50%",
            description:
              "Les plus petits nombres apparaissent en premier.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Présentation de la formation",
      admin: {
        initCollapsed: false,
        description:
          "Les textes principaux visibles dans la liste des formations.",
      },
      fields: [
        {
          name: "title",
          label: "Nom complet de la formation",
          type: "text",
          required: true,
          admin: {
            description: "Le grand titre affiché dans la fiche.",
          },
        },
        {
          name: "shortTitle",
          label: "Titre court",
          type: "text",
          admin: {
            description:
              "Affiché dans la colonne colorée. Si ce champ est vide, le nom complet sera utilisé.",
          },
        },
        {
          name: "eyebrow",
          label: "Catégorie ou sous-titre",
          type: "text",
          admin: {
            description:
              "La courte phrase affichée au-dessus du titre court.",
          },
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
          admin: {
            description:
              "Présentez le contenu et l’esprit de la formation.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Durée et tarif",
      admin: {
        initCollapsed: false,
        description:
          "Les informations pratiques affichées dans la colonne colorée.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "duration",
              label: "Durée",
              type: "text",
              admin: {
                width: "33%",
                description: "Exemple : 2 jours",
              },
            },
            {
              name: "hours",
              label: "Nombre d’heures",
              type: "text",
              admin: {
                width: "33%",
                description: "Exemple : 14 h",
              },
            },
            {
              name: "price",
              label: "Tarif",
              type: "text",
              admin: {
                width: "34%",
                description: "Exemple : À partir de 450 € / personne",
              },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Objectifs de la formation",
      admin: {
        initCollapsed: false,
        description:
          "Ajoutez, modifiez ou réordonnez simplement les objectifs.",
      },
      fields: [
        {
          name: "objectives",
          label: "Liste des objectifs",
          labels: {
            singular: "Objectif",
            plural: "Objectifs",
          },
          type: "array",
          admin: {
            initCollapsed: false,
            description:
              "Les quatre premiers objectifs sont affichés sur la page publique.",
          },
          fields: [
            {
              name: "objective",
              label: "Texte de l’objectif",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Modalités pratiques",
      admin: {
        initCollapsed: false,
        description:
          "Précisez le format, le nombre de participants et l’hébergement.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "individual",
              label: "Accompagnement individuel possible",
              type: "checkbox",
              defaultValue: false,
              admin: {
                width: "50%",
                description:
                  "Cochez si la formation peut être suivie individuellement.",
              },
            },
            {
              name: "maxParticipants",
              label: "Nombre maximum de participants",
              type: "number",
              admin: {
                width: "50%",
                description:
                  "Laissez vide si aucune limite ne doit être affichée.",
              },
            },
          ],
        },
        {
          name: "accommodation",
          label: "Informations sur l’hébergement",
          type: "text",
          admin: {
            description:
              "Exemple : Hébergement sur place possible : 50 € / nuit",
          },
        },
      ],
    },
  ],
};
