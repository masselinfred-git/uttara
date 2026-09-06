import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import nextEnv from "@next/env";
import { getPayload, type Payload } from "payload";

import { formations as fallbackFormations } from "../config/formations.ts";
import { fallbackSoins } from "../config/soins.ts";

type SeedStats = {
  created: number;
  skipped: number;
};

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

nextEnv.loadEnvConfig(projectRoot, true);

const stats = {
  formations: { created: 0, skipped: 0 } satisfies SeedStats,
  media: { created: 0, skipped: 0 } satisfies SeedStats,
  soins: { created: 0, skipped: 0 } satisfies SeedStats,
};

async function findByTitle(
  payload: Payload,
  collection: "formations" | "soins",
  title: string,
) {
  const result = await payload.find({
    collection,
    limit: 1,
    where: {
      title: {
        equals: title,
      },
    },
  });

  return result.docs[0];
}

async function getOrCreateMedia(
  payload: Payload,
  imageUrl: string,
  alt: string,
) {
  const filename = path.basename(imageUrl);
  const existing = await payload.find({
    collection: "media",
    limit: 1,
    where: {
      filename: {
        equals: filename,
      },
    },
  });

  if (existing.docs[0]) {
    stats.media.skipped += 1;
    console.log(`  ↳ Média réutilisé : ${filename}`);
    return existing.docs[0].id;
  }

  const relativeImagePath = imageUrl.replace(/^\/+/, "");
  const imagePath = path.resolve(projectRoot, "public", relativeImagePath);

  try {
    await access(imagePath);
  } catch {
    console.warn(
      `  ↳ Média introuvable, soin créé sans image : ${relativeImagePath}`,
    );
    return undefined;
  }

  const media = await payload.create({
    collection: "media",
    data: { alt },
    filePath: imagePath,
  });

  stats.media.created += 1;
  console.log(`  ↳ Média créé : ${media.filename ?? filename}`);
  return media.id;
}

async function seedSoins(payload: Payload) {
  console.log("\nSoins");

  for (const soin of fallbackSoins) {
    const existing = await findByTitle(payload, "soins", soin.title);

    if (existing) {
      stats.soins.skipped += 1;
      console.log(`- Ignoré (déjà présent) : ${soin.title}`);
      continue;
    }

    const image = soin.image
      ? await getOrCreateMedia(payload, soin.image, soin.title)
      : undefined;

    await payload.create({
      collection: "soins",
      data: {
        active: soin.active === true,
        order: soin.order,
        title: soin.title,
        eyebrow: soin.eyebrow,
        description: soin.description,
        details: soin.details,
        durations: soin.durations.map(({ duration, price }) => ({
          duration,
          price,
        })),
        image,
      },
    });

    stats.soins.created += 1;
    console.log(`- Créé : ${soin.title}`);
  }
}

async function seedFormations(payload: Payload) {
  console.log("\nFormations");

  for (const [order, formation] of fallbackFormations.entries()) {
    const existing = await findByTitle(
      payload,
      "formations",
      formation.title,
    );

    if (existing) {
      stats.formations.skipped += 1;
      console.log(`- Ignorée (déjà présente) : ${formation.title}`);
      continue;
    }

    await payload.create({
      collection: "formations",
      data: {
        active: true,
        order,
        title: formation.title,
        shortTitle: formation.shortTitle,
        eyebrow: formation.eyebrow,
        description: formation.description,
        duration: formation.duration,
        hours: formation.hours,
        price: formation.price,
        objectives: formation.objectives.map((objective) => ({ objective })),
        individual: formation.individual,
        maxParticipants: formation.maxParticipants,
        accommodation: formation.accommodation,
      },
    });

    stats.formations.created += 1;
    console.log(`- Créée : ${formation.title}`);
  }
}

async function seedPayload() {
  const { default: config } = await import("../payload.config.ts");
  const payload = await getPayload({ config });

  try {
    console.log("Initialisation des contenus Payload…");
    await seedSoins(payload);
    await seedFormations(payload);

    console.log("\nRésumé");
    console.log(
      `- Soins : ${stats.soins.created} créé(s), ${stats.soins.skipped} ignoré(s)`,
    );
    console.log(
      `- Formations : ${stats.formations.created} créée(s), ${stats.formations.skipped} ignorée(s)`,
    );
    console.log(
      `- Médias : ${stats.media.created} créé(s), ${stats.media.skipped} réutilisé(s)`,
    );
  } finally {
    await payload.destroy();
  }
}

await seedPayload();
