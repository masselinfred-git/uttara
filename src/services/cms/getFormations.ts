import { getPayload } from "payload";

import config from "@payload-config";
import { formations as fallbackFormations } from "@/config/formations";
import type { PublicFormation } from "@/services/cms/types";

const normalizedFallbackFormations: PublicFormation[] =
  fallbackFormations.map((formation, index) => ({
    id: formation.slug,
    title: formation.title,
    shortTitle: formation.shortTitle,
    eyebrow: formation.eyebrow,
    description: formation.description,
    duration: formation.duration,
    hours: formation.hours,
    price: formation.price,
    objectives: formation.objectives,
    individual: formation.individual,
    maxParticipants: formation.maxParticipants,
    accommodation: formation.accommodation,
    order: index,
    active: true,
  }));

export async function getFormations(): Promise<PublicFormation[]> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "formations",
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
        collection: "formations",
      });

      return totalDocs === 0
        ? normalizedFallbackFormations
        : [];
    }

    return result.docs.map((formation) => ({
      id: formation.id,
      title: formation.title,
      shortTitle: formation.shortTitle ?? formation.title,
      eyebrow: formation.eyebrow ?? "",
      description: formation.description,
      duration: formation.duration ?? "",
      hours: formation.hours ?? undefined,
      price: formation.price ?? "",
      objectives:
        formation.objectives?.map(({ objective }) => objective) ?? [],
      individual: formation.individual === true,
      maxParticipants: formation.maxParticipants ?? undefined,
      accommodation: formation.accommodation ?? undefined,
      order: formation.order,
      active: formation.active,
    }));
  } catch (error) {
    console.error(
      "Impossible de charger les formations depuis Payload.",
      error,
    );
    return normalizedFallbackFormations;
  }
}
