import type { GlobalConfig } from "payload";

const textField = (name: string, label: string) => ({
  name,
  label,
  type: "text" as const,
});

const textareaField = (name: string, label: string) => ({
  name,
  label,
  type: "textarea" as const,
});

export const Accueil: GlobalConfig = {
  slug: "accueil",
  label: "Page d’accueil",
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: "Contenu du site",
    description:
      "Modifiez les textes de l’accueil sans changer sa mise en page.",
  },
  fields: [
    {
      type: "collapsible",
      label: "Bannière principale",
      admin: { initCollapsed: false },
      fields: [
        textField("heroEyebrow", "Accroche"),
        textField("heroTitleLine1", "Titre — ligne 1"),
        textField("heroTitleLine2", "Titre — ligne 2"),
        textField("heroTitleAccent", "Titre manuscrit — ligne 3"),
        textareaField("heroText", "Texte sous le titre"),
      ],
    },
    {
      type: "collapsible",
      label: "Introduction",
      admin: { initCollapsed: false },
      fields: [
        textField("introEyebrow", "Sous-titre"),
        textareaField("introTitle", "Titre principal"),
        textareaField("introText", "Texte d’introduction"),
      ],
    },
    {
      type: "collapsible",
      label: "Présentation des soins",
      admin: { initCollapsed: false },
      fields: [
        textField("careEyebrow", "Titre manuscrit"),
        textField("careLabel", "Catégorie"),
        textareaField("careTitle", "Titre principal"),
        textareaField("careText", "Texte de présentation"),
      ],
    },
    {
      type: "collapsible",
      label: "Citation sur le soin",
      admin: { initCollapsed: true },
      fields: [
        textField("immersiveLine1", "Ligne 1"),
        textField("immersiveLine2", "Ligne 2"),
        textField("immersiveAccent", "Ligne manuscrite"),
      ],
    },
    {
      type: "collapsible",
      label: "Présentation des formations",
      admin: { initCollapsed: false },
      fields: [
        textField("trainingEyebrow", "Titre manuscrit"),
        textField("trainingLabel", "Catégorie"),
        textareaField("trainingTitle", "Titre principal"),
        textareaField("trainingText", "Texte de présentation"),
        {
          name: "trainingItems",
          label: "Points de présentation",
          type: "array",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "number",
                  label: "Numéro",
                  type: "text",
                  required: true,
                  admin: { width: "20%" },
                },
                {
                  name: "title",
                  label: "Titre",
                  type: "text",
                  required: true,
                  admin: { width: "80%" },
                },
              ],
            },
            {
              name: "text",
              label: "Texte",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Prochaines dates",
      admin: { initCollapsed: true },
      fields: [
        textField("scheduleEyebrow", "Titre manuscrit"),
        textField("scheduleTitle", "Titre principal"),
        textareaField("scheduleText", "Texte de présentation"),
      ],
    },
    {
      type: "collapsible",
      label: "Boutique",
      admin: { initCollapsed: false },
      fields: [
        textField("shopEyebrow", "Titre manuscrit"),
        textareaField("shopTitle", "Titre principal"),
        textareaField("shopText", "Texte de présentation"),
        textField("shopButtonLabel", "Libellé du bouton"),
      ],
    },
  ],
};
