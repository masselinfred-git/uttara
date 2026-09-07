import { unstable_noStore as noStore } from "next/cache";
import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackSiteCoordinates } from "@/config/cmsFallbacks";
import type { PublicSiteCoordinates } from "@/services/cms/types";

function textOrFallback(value: string | null | undefined, fallback: string) {
  return value?.trim() || fallback;
}

const loadSiteCoordinates = async (): Promise<PublicSiteCoordinates> => {
  noStore();

  try {
    const payload = await getPayload({ config });
    const coordinates = await payload.findGlobal({
      slug: "coordonnees-site",
    });

    return {
      businessName: textOrFallback(
        coordinates.businessName,
        fallbackSiteCoordinates.businessName,
      ),
      address: textOrFallback(
        coordinates.address,
        fallbackSiteCoordinates.address,
      ),
      postalCode: textOrFallback(
        coordinates.postalCode,
        fallbackSiteCoordinates.postalCode,
      ),
      city: textOrFallback(coordinates.city, fallbackSiteCoordinates.city),
      phone: textOrFallback(
        coordinates.phone,
        fallbackSiteCoordinates.phone,
      ),
      email: textOrFallback(
        coordinates.email,
        fallbackSiteCoordinates.email,
      ),
      instagram: textOrFallback(
        coordinates.instagram,
        fallbackSiteCoordinates.instagram,
      ),
      facebook: textOrFallback(
        coordinates.facebook,
        fallbackSiteCoordinates.facebook,
      ),
      shopUrl: textOrFallback(
        coordinates.shopUrl,
        fallbackSiteCoordinates.shopUrl,
      ),
      appointmentText: textOrFallback(
        coordinates.appointmentText,
        fallbackSiteCoordinates.appointmentText,
      ),
      fundingText: textOrFallback(
        coordinates.fundingText,
        fallbackSiteCoordinates.fundingText,
      ),
    };
  } catch (error) {
    console.error(
      "Impossible de charger les coordonnées depuis Payload.",
      error,
    );
    return { ...fallbackSiteCoordinates };
  }
};

export const getSiteCoordinates = cache(loadSiteCoordinates);
