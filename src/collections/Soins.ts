import type { CollectionConfig } from "payload";

export const Soins: CollectionConfig = {
  slug: "soins",

  labels: {
    singular: "Soin",
    plural: "Soins",
  },

  admin: {
    useAsTitle: "title",
    group: "Contenu du site",
    description:
      "Gérez ici les soins affichés sur la page publique « Soins ».",
    defaultColumns: ["title", "active", "order", "updatedAt"],
    hideAPIURL: true,
    listSearchableFields: ["title", "eyebrow"],
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
              "Décochez cette case pour masquer temporairement ce soin.",
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
      label: "Présentation du soin",
      admin: {
        initCollapsed: false,
        description:
          "Les textes principaux visibles dans la liste des soins.",
      },
      fields: [
        {
          name: "title",
          label: "Nom du soin",
          type: "text",
          required: true,
          admin: {
            description: "Le titre principal affiché sur le site.",
          },
        },
        {
          name: "eyebrow",
          label: "Sous-titre",
          type: "text",
          admin: {
            description:
              "La courte phrase affichée juste au-dessus du titre.",
          },
        },
        {
          name: "description",
          label: "Description principale",
          type: "textarea",
          required: true,
          admin: {
            description:
              "Présentez le soin en quelques phrases simples.",
          },
        },
        {
          name: "details",
          label: "Description complémentaire",
          type: "textarea",
          admin: {
            description:
              "Informations facultatives affichées sous la description principale.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Photo du soin",
      admin: {
        initCollapsed: false,
        description:
          "Choisissez la photo qui accompagnera ce soin sur le site.",
      },
      fields: [
        {
          name: "image",
          label: "Image affichée sur le site",
          type: "upload",
          relationTo: "media",
          admin: {
            description:
              "Sélectionnez une image existante ou importez-en une nouvelle. Sans image, le site conserve sa photo actuelle.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Durées et tarifs",
      admin: {
        initCollapsed: false,
        description:
          "Ajoutez une ligne pour chaque durée proposée et son tarif.",
      },
      fields: [
        {
          name: "durations",
          label: "Options proposées",
          labels: {
            singular: "Durée et tarif",
            plural: "Durées et tarifs",
          },
          type: "array",
          admin: {
            initCollapsed: false,
            description:
              "Vous pouvez réordonner les lignes par glisser-déposer.",
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "duration",
                  label: "Durée",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                    description: "Exemple : 60 min",
                  },
                },
                {
                  name: "price",
                  label: "Tarif",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                    description: "Exemple : 75 €",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
