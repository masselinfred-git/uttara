import path from "path";
import { fileURLToPath } from "url";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";

import { Formations } from "./collections/Formations";
import { Media } from "./collections/Media";
import { Soins } from "./collections/Soins";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",

  admin: {
    user: Users.slug,
  },

  collections: [
    Users,
    Media,
    Soins,
    Formations,
  ],

  db: sqliteAdapter({
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
