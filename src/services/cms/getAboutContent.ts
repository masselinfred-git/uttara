import { unstable_noStore as noStore } from "next/cache";
import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackAboutContent } from "@/config/cmsFallbacks";
import { getMediaUrl } from "@/services/cms/getMediaUrl";
import type { PublicAboutContent } from "@/services/cms/types";

function textOrFallback(value: string | null | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export async function getAboutContent(): Promise<PublicAboutContent> {
  noStore();

  try {
    const payload = await getPayload({ config });
    const about = await payload.findGlobal({
      slug: "a-propos",
      depth: 1,
    });

    return {
      displayName: textOrFallback(
        about.displayName,
        fallbackAboutContent.displayName,
      ),
      role: textOrFallback(about.role, fallbackAboutContent.role),
      primaryText: textOrFallback(
        about.primaryText,
        fallbackAboutContent.primaryText,
      ),
      secondaryText: textOrFallback(
        about.secondaryText,
        fallbackAboutContent.secondaryText,
      ),
      photo: getMediaUrl(about.photo, fallbackAboutContent.photo),
    };
  } catch (error) {
    console.error(
      "Impossible de charger la présentation depuis Payload.",
      error,
    );
    return { ...fallbackAboutContent };
  }
}
