import type { Media } from "@/payload-types";

export function getMediaUrl(
  media: Media | number | null | undefined,
  fallbackUrl: string,
) {
  if (typeof media !== "object" || !media?.url) {
    return fallbackUrl;
  }

  return media.url;
}
