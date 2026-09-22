// Colocated here (not just at the app root) because Next does not reliably cascade a
// root-level opengraph-image to nested route segments — each segment resolves its own.
import { ogImageAlt, ogImageContentType, ogImageSize, renderBrandImage } from "@/lib/og-image";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderBrandImage();
}
