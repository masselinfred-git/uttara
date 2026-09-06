import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@libsql/client";
import nextEnv from "@next/env";
import { getPayload, type Payload } from "payload";

import { formations as fallbackFormations } from "../config/formations.ts";
import {
  fallbackAboutContent,
  fallbackHomeContent,
  fallbackSiteCoordinates,
  fallbackTestimonials,
} from "../config/cmsFallbacks.ts";
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

async function schemaIsReady() {
  const databaseUrl =
    process.env.DATABASE_URI ||
    `file:${path.resolve(projectRoot, "data/uttara.db")}`;
  const client = createClient({ url: databaseUrl });

  try {
    const result = await client.execute({
      sql: "SELECT name FROM sqlite_master WHERE type = ? AND name IN (?, ?, ?, ?, ?)",
      args: [
        "table",
        "temoignages",
        "documents",
        "accueil",
        "a_propos",
        "coordonnees_site",
      ],
    });

    return result.rows.length === 5;
  } finally {
    client.close();
  }
}

const stats = {
  formations: { created: 0, skipped: 0 } satisfies SeedStats,
  globals: { created: 0, skipped: 0 } satisfies SeedStats,
  media: { created: 0, skipped: 0 } satisfies SeedStats,
  soins: { created: 0, skipped: 0 } satisfies SeedStats,
  temoignages: { created: 0, skipped: 0 } satisfies SeedStats,
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

async function seedTemoignages(payload: Payload) {
  console.log("\nTémoignages");

  for (const testimonial of fallbackTestimonials) {
    const existing = await payload.find({
      collection: "temoignages",
      limit: 1,
      where: {
        text: {
          equals: testimonial.text,
        },
      },
    });

    if (existing.docs[0]) {
      stats.temoignages.skipped += 1;
      console.log(`- Ignoré (déjà présent) : ${testimonial.name}`);
      continue;
    }

    await payload.create({
      collection: "temoignages",
      data: {
        active: testimonial.active,
        order: testimonial.order,
        name: testimonial.name,
        text: testimonial.text,
      },
    });

    stats.temoignages.created += 1;
    console.log(`- Créé : ${testimonial.name}`);
  }
}

function hasContent(values: unknown[]) {
  return values.some((value) => {
    if (Array.isArray(value)) return value.length > 0;
    return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
  });
}

async function seedGlobals(payload: Payload) {
  console.log("\nGlobals");

  const coordinates = await payload.findGlobal({
    slug: "coordonnees-site",
  });
  if (
    hasContent([
      coordinates.businessName,
      coordinates.address,
      coordinates.phone,
      coordinates.email,
    ])
  ) {
    stats.globals.skipped += 1;
    console.log("- Ignoré (déjà renseigné) : Coordonnées du site");
  } else {
    await payload.updateGlobal({
      slug: "coordonnees-site",
      data: { ...fallbackSiteCoordinates },
    });
    stats.globals.created += 1;
    console.log("- Initialisé : Coordonnées du site");
  }

  const home = await payload.findGlobal({ slug: "accueil" });
  if (
    hasContent([
      home.heroEyebrow,
      home.heroTitleLine1,
      home.introTitle,
      home.careTitle,
      home.trainingTitle,
      home.shopTitle,
      home.trainingItems,
    ])
  ) {
    stats.globals.skipped += 1;
    console.log("- Ignoré (déjà renseigné) : Page d’accueil");
  } else {
    await payload.updateGlobal({
      slug: "accueil",
      data: {
        heroEyebrow: fallbackHomeContent.hero.eyebrow,
        heroTitleLine1: fallbackHomeContent.hero.titleLine1,
        heroTitleLine2: fallbackHomeContent.hero.titleLine2,
        heroTitleAccent: fallbackHomeContent.hero.titleAccent,
        heroText: fallbackHomeContent.hero.text,
        introEyebrow: fallbackHomeContent.intro.eyebrow,
        introTitle: fallbackHomeContent.intro.title,
        introText: fallbackHomeContent.intro.text,
        careEyebrow: fallbackHomeContent.care.eyebrow,
        careLabel: fallbackHomeContent.care.label,
        careTitle: fallbackHomeContent.care.title,
        careText: fallbackHomeContent.care.text,
        immersiveLine1: fallbackHomeContent.immersive.line1,
        immersiveLine2: fallbackHomeContent.immersive.line2,
        immersiveAccent: fallbackHomeContent.immersive.accent,
        trainingEyebrow: fallbackHomeContent.training.eyebrow,
        trainingLabel: fallbackHomeContent.training.label,
        trainingTitle: fallbackHomeContent.training.title,
        trainingText: fallbackHomeContent.training.text,
        trainingItems: fallbackHomeContent.training.items.map((item) => ({
          ...item,
        })),
        scheduleEyebrow: fallbackHomeContent.schedule.eyebrow,
        scheduleTitle: fallbackHomeContent.schedule.title,
        scheduleText: fallbackHomeContent.schedule.text,
        shopEyebrow: fallbackHomeContent.shop.eyebrow,
        shopTitle: fallbackHomeContent.shop.title,
        shopText: fallbackHomeContent.shop.text,
        shopButtonLabel: fallbackHomeContent.shop.buttonLabel,
      },
    });
    stats.globals.created += 1;
    console.log("- Initialisé : Page d’accueil");
  }

  const about = await payload.findGlobal({ slug: "a-propos" });
  if (
    hasContent([
      about.displayName,
      about.role,
      about.primaryText,
      about.secondaryText,
      about.photo,
    ])
  ) {
    stats.globals.skipped += 1;
    console.log("- Ignoré (déjà renseigné) : À propos de Laëtitia");
  } else {
    const photo = await getOrCreateMedia(
      payload,
      fallbackAboutContent.photo,
      "Laëtitia, fondatrice d’Uttara",
    );
    await payload.updateGlobal({
      slug: "a-propos",
      data: {
        displayName: fallbackAboutContent.displayName,
        role: fallbackAboutContent.role,
        primaryText: fallbackAboutContent.primaryText,
        secondaryText: fallbackAboutContent.secondaryText,
        photo,
      },
    });
    stats.globals.created += 1;
    console.log("- Initialisé : À propos de Laëtitia");
  }
}

async function seedPayload() {
  if (await schemaIsReady()) {
    process.env.PAYLOAD_SKIP_SCHEMA_PUSH = "true";
  }

  const { default: config } = await import("../payload.config.ts");
  const payload = await getPayload({ config });

  try {
    console.log("Initialisation des contenus Payload…");
    await seedSoins(payload);
    await seedFormations(payload);
    await seedTemoignages(payload);
    await seedGlobals(payload);

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
    console.log(
      `- Témoignages : ${stats.temoignages.created} créé(s), ${stats.temoignages.skipped} ignoré(s)`,
    );
    console.log(
      `- Globals : ${stats.globals.created} initialisé(s), ${stats.globals.skipped} ignoré(s)`,
    );
    console.log("- Documents : 0 (aucun fichier réel compatible trouvé)");
  } finally {
    await payload.destroy();
  }
}

await seedPayload();
