import type { MetadataRoute } from "next";
import { business, homeMeta } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "Oneclick",
    description: homeMeta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
