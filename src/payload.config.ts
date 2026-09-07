import path from "path";
import { fileURLToPath } from "url";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { fr } from "@payloadcms/translations/languages/fr";
import { buildConfig } from "payload";

import { Formations } from "./collections/Formations.ts";
import { Documents } from "./collections/Documents.ts";
import { Media } from "./collections/Media.ts";
import { Soins } from "./collections/Soins.ts";
import { Temoignages } from "./collections/Temoignages.ts";
import { Users } from "./collections/Users.ts";
import { Accueil } from "./globals/Accueil.ts";
import { APropos } from "./globals/APropos.ts";
import { CoordonneesSite } from "./globals/CoordonneesSite.ts";
import { FormationsPage } from "./globals/FormationsPage.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",

  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Icon: "/src/components/admin/UttaraBrand#UttaraIcon",
        Logo: "/src/components/admin/UttaraBrand#UttaraLogo",
      },
    },
    meta: {
      titleSuffix: " — Uttara | Administration du site",
    },
  },

  collections: [
    Soins,
    Formations,
    Temoignages,
    Media,
    Documents,
    Users,
  ],

  globals: [
    Accueil,
    APropos,
    CoordonneesSite,
    FormationsPage,
  ],

  i18n: {
    fallbackLanguage: "fr",
    supportedLanguages: {
      fr,
    },
  },

  db: sqliteAdapter({
    push: process.env.PAYLOAD_SKIP_SCHEMA_PUSH !== "true",
    client: {
      url:
        process.env.DATABASE_URI ||
        `file:${path.resolve(dirname, "../data/uttara.db")}`,
    },
  }),

  typescript: {
    outputFile: path.resolve(
      dirname,
      "payload-types.ts",
    ),
  },
});
