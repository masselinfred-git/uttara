import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackSoins } from "@/config/soins";
import { getMediaUrl } from "@/services/cms/getMediaUrl";
import type { PublicSoin } from "@/services/cms/types";

function getFallbackImage(title: string, index: number) {
  return (
    fallbackSoins.find((soin) => soin.title === title)?.image ??
    fallbackSoins[index]?.image ??
    fallbackSoins[0].image
  );
}

export async function getSoins(): Promise<PublicSoin[]> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "soins",
      depth: 1,
      limit: 1000,
      sort: "order",
      where: {
        active: {
          equals: true,
        },
      },
    });

    if (result.docs.length === 0) {
      const { totalDocs } = await payload.count({
        collection: "soins",
      });

      return totalDocs === 0 ? fallbackSoins : [];
    }

    return result.docs.map((soin, index) => ({
      id: soin.id,
      title: soin.title,
      eyebrow: soin.eyebrow ?? "",
      description: soin.description,
      details: soin.details,
      durations: soin.durations ?? [],
      image: getMediaUrl(
        soin.image,
        getFallbackImage(soin.title, index),
      ),
      order: soin.order,
      active: soin.active,
    }));
  } catch (error) {
    console.error("Impossible de charger les soins depuis Payload.", error);
    return fallbackSoins;
  }
}
