import { unstable_noStore as noStore } from "next/cache";
import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackHomeContent } from "@/config/cmsFallbacks";
import type { PublicHomeContent } from "@/services/cms/types";

function textOrFallback(value: string | null | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export async function getHomeContent(): Promise<PublicHomeContent> {
  noStore();

  try {
    const payload = await getPayload({ config });
    const home = await payload.findGlobal({ slug: "accueil" });

    return {
      hero: {
        eyebrow: textOrFallback(
          home.heroEyebrow,
          fallbackHomeContent.hero.eyebrow,
        ),
        titleLine1: textOrFallback(
          home.heroTitleLine1,
          fallbackHomeContent.hero.titleLine1,
        ),
        titleLine2: textOrFallback(
          home.heroTitleLine2,
          fallbackHomeContent.hero.titleLine2,
        ),
        titleAccent: textOrFallback(
          home.heroTitleAccent,
          fallbackHomeContent.hero.titleAccent,
        ),
        text: textOrFallback(home.heroText, fallbackHomeContent.hero.text),
      },
      intro: {
        eyebrow: textOrFallback(
          home.introEyebrow,
          fallbackHomeContent.intro.eyebrow,
        ),
        title: textOrFallback(home.introTitle, fallbackHomeContent.intro.title),
        text: textOrFallback(home.introText, fallbackHomeContent.intro.text),
      },
      care: {
        eyebrow: textOrFallback(
          home.careEyebrow,
          fallbackHomeContent.care.eyebrow,
        ),
        label: textOrFallback(home.careLabel, fallbackHomeContent.care.label),
        title: textOrFallback(home.careTitle, fallbackHomeContent.care.title),
        text: textOrFallback(home.careText, fallbackHomeContent.care.text),
      },
      immersive: {
        line1: textOrFallback(
          home.immersiveLine1,
          fallbackHomeContent.immersive.line1,
        ),
        line2: textOrFallback(
          home.immersiveLine2,
          fallbackHomeContent.immersive.line2,
        ),
        accent: textOrFallback(
          home.immersiveAccent,
          fallbackHomeContent.immersive.accent,
        ),
      },
      training: {
        eyebrow: textOrFallback(
          home.trainingEyebrow,
          fallbackHomeContent.training.eyebrow,
        ),
        label: textOrFallback(
          home.trainingLabel,
          fallbackHomeContent.training.label,
        ),
        title: textOrFallback(
          home.trainingTitle,
          fallbackHomeContent.training.title,
        ),
        text: textOrFallback(
          home.trainingText,
          fallbackHomeContent.training.text,
        ),
        items:
          home.trainingItems?.length
            ? home.trainingItems
            : fallbackHomeContent.training.items.map((item) => ({ ...item })),
      },
      schedule: {
        eyebrow: textOrFallback(
          home.scheduleEyebrow,
          fallbackHomeContent.schedule.eyebrow,
        ),
        title: textOrFallback(
          home.scheduleTitle,
          fallbackHomeContent.schedule.title,
        ),
        text: textOrFallback(
          home.scheduleText,
          fallbackHomeContent.schedule.text,
        ),
      },
      shop: {
        eyebrow: textOrFallback(
          home.shopEyebrow,
          fallbackHomeContent.shop.eyebrow,
        ),
        title: textOrFallback(home.shopTitle, fallbackHomeContent.shop.title),
        text: textOrFallback(home.shopText, fallbackHomeContent.shop.text),
        buttonLabel: textOrFallback(
          home.shopButtonLabel,
          fallbackHomeContent.shop.buttonLabel,
        ),
      },
    };
  } catch (error) {
    console.error(
      "Impossible de charger les textes de l’accueil depuis Payload.",
      error,
    );
    return {
      ...fallbackHomeContent,
      training: {
        ...fallbackHomeContent.training,
        items: fallbackHomeContent.training.items.map((item) => ({ ...item })),
      },
    };
  }
}
