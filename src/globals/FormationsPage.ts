import type { GlobalConfig } from "payload";

const legalNotice = "Cet enregistrement ne vaut pas agrément de l’État.";

export const FormationsPage: GlobalConfig = {
  slug: "formations-page",
  label: "Page Formations",
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: "Contenu du site",
    description:
      "Textes de la section « Financer sa formation ». La mise en page reste gérée par le site.",
  },
  fields: [
    {
      type: "collapsible",
      label: "Titre et certification",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "fundingEyebrow",
          label: "Accroche",
          type: "text",
          admin: {
            description: "Petit titre manuscrit affiché au-dessus de la section.",
          },
        },
        {
          name: "fundingTitle",
          label: "Titre principal",
          type: "textarea",
        },
        {
          name: "qualiopiLabel",
          label: "Mention Qualiopi",
          type: "text",
          validate: (value: null | string | undefined) => {
            if (!value) return true;
            if (/agr[ée]ment/i.test(value)) {
              return "Qualiopi est une certification, pas un agrément.";
            }
            return /certifi/i.test(value) && /qualiopi/i.test(value)
              ? true
              : "Mentionnez la certification Qualiopi sans employer le mot « agrément ».";
          },
          admin: {
            description:
              "Formulation conseillée : « Organisme de formation certifié Qualiopi ».",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Financement",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "fundingIntro",
          label: "Introduction",
          type: "textarea",
          admin: {
            description:
              "Texte placé avant le numéro de déclaration d’activité.",
          },
        },
        {
          name: "fundingExplanation",
          label: "Explication sur les financements",
          type: "textarea",
        },
        {
          name: "funders",
          label: "Organismes financeurs",
          type: "array",
          labels: {
            singular: "Organisme financeur",
            plural: "Organismes financeurs",
          },
          admin: {
            description:
              "Ajoutez, supprimez ou réordonnez les organismes tels qu’ils apparaissent sur le site.",
            initCollapsed: false,
          },
          fields: [
            {
              name: "label",
              label: "Nom affiché",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "fundingNotice",
          label: "Précision sur la prise en charge",
          type: "textarea",
          admin: {
            description:
              "Rappelez que la prise en charge dépend de l’éligibilité et de l’accord du financeur.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Déclaration d’activité",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "trainingRegistrationNumber",
          label: "Numéro de déclaration d’activité",
          type: "text",
          validate: (value: null | string | undefined) =>
            !value || /^\d{11}$/.test(value)
              ? true
              : "Saisissez les 11 chiffres du numéro de déclaration d’activité.",
          admin: {
            description: "Numéro actuel : 93050101105.",
          },
        },
        {
          name: "trainingRegistrationLegalText",
          label: "Mention légale",
          type: "text",
          validate: (value: null | string | undefined) =>
            !value || value === legalNotice
              ? true
              : `Utilisez la formulation légale exacte : « ${legalNotice} »`,
          admin: {
            description:
              "Cette formulation légale doit rester exacte et ne doit pas parler d’agrément de l’État.",
          },
        },
      ],
    },
  ],
};
