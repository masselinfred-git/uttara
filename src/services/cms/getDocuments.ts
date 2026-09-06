import { unstable_noStore as noStore } from "next/cache";
import { getPayload, type Where } from "payload";

import config from "@payload-config";
import type { Document as PayloadDocument } from "@/payload-types";
import type { PublicDocument } from "@/services/cms/types";

export type GetDocumentsOptions = {
  category?: PayloadDocument["category"];
  formationId?: number;
};

function getFileType(mimeType?: string | null, filename?: string | null) {
  if (mimeType === "application/pdf") return "PDF" as const;
  if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return "DOCX" as const;
  }
  if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    return "XLSX" as const;
  }
  if (mimeType === "text/csv") return "CSV" as const;

  const extension = filename?.split(".").pop()?.toUpperCase();
  if (extension === "PDF" || extension === "DOCX" || extension === "XLSX" || extension === "CSV") {
    return extension;
  }

  return "Fichier" as const;
}

export function mapPayloadDocument(
  document: PayloadDocument,
): PublicDocument | null {
  if (document.active !== true || !document.url || !document.filename) {
    return null;
  }

  return {
    id: document.id,
    title: document.title,
    description: document.description ?? undefined,
    category: document.category,
    version: document.version ?? undefined,
    documentDate: document.documentDate ?? undefined,
    url: document.url,
    filename: document.filename,
    mimeType: document.mimeType ?? undefined,
    fileType: getFileType(document.mimeType, document.filename),
  };
}

export async function getDocuments(
  options: GetDocumentsOptions = {},
): Promise<PublicDocument[]> {
  noStore();

  try {
    const payload = await getPayload({ config });
    const filters: Where[] = [
      {
        active: {
          equals: true,
        },
      },
    ];

    if (options.category) {
      filters.push({
        category: {
          equals: options.category,
        },
      });
    }

    if (options.formationId !== undefined) {
      const formation = await payload.findByID({
        collection: "formations",
        id: options.formationId,
        depth: 0,
      });
      const documentIds = (formation.documents ?? []).map((document) =>
        typeof document === "number" ? document : document.id,
      );

      if (documentIds.length === 0) return [];

      filters.push({
        id: {
          in: documentIds,
        },
      });
    }

    const result = await payload.find({
      collection: "documents",
      limit: 1000,
      sort: "order",
      where: {
        and: filters,
      },
    });

    return result.docs.flatMap((document) => {
      const mapped = mapPayloadDocument(document);
      return mapped ? [mapped] : [];
    });
  } catch (error) {
    console.error("Impossible de charger les documents depuis Payload.", error);
    return [];
  }
}
