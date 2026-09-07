import { unstable_noStore as noStore } from "next/cache";
import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackFormationsPage } from "@/config/cmsFallbacks";
import type { PublicFormationsPage } from "@/services/cms/types";

function textOrFallback(value: string | null | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export async function getFormationsPage(): Promise<PublicFormationsPage> {
  noStore();

  try {
    const payload = await getPayload({ config });
    const page = await payload.findGlobal({ slug: "formations-page" });
    const funders =
      page.funders
        ?.map((funder) => funder.label.trim())
        .filter(Boolean) ?? [];

    return {
      fundingEyebrow: textOrFallback(
        page.fundingEyebrow,
        fallbackFormationsPage.fundingEyebrow,
      ),
      fundingTitle: textOrFallback(
        page.fundingTitle,
        fallbackFormationsPage.fundingTitle,
      ),
      fundingIntro: textOrFallback(
        page.fundingIntro,
        fallbackFormationsPage.fundingIntro,
      ),
      qualiopiLabel: textOrFallback(
        page.qualiopiLabel,
        fallbackFormationsPage.qualiopiLabel,
      ),
      funders:
        funders.length > 0 ? funders : [...fallbackFormationsPage.funders],
      fundingExplanation: textOrFallback(
        page.fundingExplanation,
        fallbackFormationsPage.fundingExplanation,
      ),
      trainingRegistrationNumber: textOrFallback(
        page.trainingRegistrationNumber,
        fallbackFormationsPage.trainingRegistrationNumber,
      ),
      trainingRegistrationLegalText: textOrFallback(
        page.trainingRegistrationLegalText,
        fallbackFormationsPage.trainingRegistrationLegalText,
      ),
      fundingNotice: textOrFallback(
        page.fundingNotice,
        fallbackFormationsPage.fundingNotice,
      ),
    };
  } catch (error) {
    console.error(
      "Impossible de charger la page Formations depuis Payload.",
      error,
    );
    return {
      ...fallbackFormationsPage,
      funders: [...fallbackFormationsPage.funders],
    };
  }
}
