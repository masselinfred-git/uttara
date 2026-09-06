import { unstable_noStore as noStore } from "next/cache";
import { getPayload } from "payload";

import config from "@payload-config";
import { fallbackTestimonials } from "@/config/cmsFallbacks";
import type { PublicTestimonial } from "@/services/cms/types";

const fallback: PublicTestimonial[] = fallbackTestimonials.map(
  (testimonial) => ({ ...testimonial }),
);

export async function getTestimonials(): Promise<PublicTestimonial[]> {
  noStore();

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "temoignages",
      limit: 100,
      sort: "order",
      where: {
        active: {
          equals: true,
        },
      },
    });

    if (result.docs.length === 0) {
      const { totalDocs } = await payload.count({
        collection: "temoignages",
      });

      return totalDocs === 0 ? fallback : [];
    }

    return result.docs.map((testimonial) => ({
      id: testimonial.id,
      name: testimonial.name,
      text: testimonial.text,
      context: testimonial.context ?? undefined,
      order: testimonial.order,
      active: testimonial.active,
    }));
  } catch (error) {
    console.error(
      "Impossible de charger les témoignages depuis Payload.",
      error,
    );
    return fallback;
  }
}
