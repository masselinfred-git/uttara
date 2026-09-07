import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const packageRoot = path.join(
  projectRoot,
  "node_modules",
  "@payloadcms",
  "ui",
);
const packageJson = JSON.parse(
  await readFile(path.join(packageRoot, "package.json"), "utf8"),
);

// Payload 3.88.0 oublie d'invalider le cache App Router après une suppression
// unitaire. La base est bien modifiée, mais l'admin peut réafficher sa liste
// préchargée. Ce patch ajoute uniquement l'appel natif clearRouteCache().
if (packageJson.version !== "3.88.0") {
  throw new Error(
    `[payload-admin-refresh] Version non prise en charge : @payloadcms/ui ${packageJson.version} (attendue : 3.88.0). Vérifiez si le correctif est encore nécessaire avant de l'adapter.`,
  );
}

async function patchFile(relativePath, replacements) {
  const filePath = path.join(packageRoot, relativePath);
  let source = await readFile(filePath, "utf8");
  let changed = false;

  for (const { before, after } of replacements) {
    if (source.includes(after)) {
      continue;
    }

    if (!source.includes(before)) {
      throw new Error(
        `[payload-admin-refresh] Structure inattendue dans ${relativePath}.`,
      );
    }

    source = source.replace(before, after);
    changed = true;
  }

  if (changed) {
    await writeFile(filePath, source, "utf8");
    console.log(`[payload-admin-refresh] Correctif appliqué à ${relativePath}.`);
  } else {
    console.log(`[payload-admin-refresh] Correctif déjà présent dans ${relativePath}.`);
  }
}

await patchFile("dist/elements/DeleteDocument/index.js", [
  {
    before:
      "import { useRouteTransition } from '../../providers/RouteTransition/index.js';",
    after:
      "import { useRouteTransition } from '../../providers/RouteTransition/index.js';\nimport { useRouteCache } from '../../providers/RouteCache/index.js';",
  },
  {
    before:
      "  const {\n    startRouteTransition\n  } = useRouteTransition();\n  const {\n    openModal",
    after:
      "  const {\n    startRouteTransition\n  } = useRouteTransition();\n  const {\n    clearRouteCache\n  } = useRouteCache();\n  const {\n    openModal",
  },
  {
    before:
      "          return startRouteTransition(() => router.push(formatAdminURL({\n            adminRoute,\n            path: `/collections/${collectionSlug}`\n          })));",
    after:
      "          return startRouteTransition(() => {\n            router.push(formatAdminURL({\n              adminRoute,\n              path: `/collections/${collectionSlug}`\n            }));\n            clearRouteCache();\n          });",
  },
  {
    before:
      "collectionConfig, startRouteTransition]);",
    after:
      "collectionConfig, startRouteTransition, clearRouteCache]);",
  },
]);
