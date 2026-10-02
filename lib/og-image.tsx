// Shared by app/opengraph-image.tsx and app/twitter-image.tsx: one text-led preview
// image in the site's own palette (white, dark navy, one orange accent), generated at
// build time from the Geist font files already bundled with the project.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { business } from "@/lib/seo-config";

export const ogImageSize = { width: 1200, height: 630 } as const;
export const ogImageContentType = "image/png";
export const ogImageAlt =
  "Oneclick Digital Studio — websites, branding, digital marketing and content creation for UAE businesses";

const root = process.cwd();
const boldFont = readFile(join(root, "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf"));
const mediumFont = readFile(
  join(root, "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf"),
);

export async function renderBrandImage() {
  const [bold, medium] = await Promise.all([boldFont, mediumFont]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#0f1f3d",
          fontFamily: "Geist",
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>{business.name}</span>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c2410c",
            }}
          >
            UAE-based digital studio
          </span>
          <span style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            Your business deserves a better digital presence.
          </span>
          <span style={{ fontSize: 27, fontWeight: 500, color: "#475569" }}>
            Website Development · Branding & Design · Digital Marketing · Content Creation
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "2px solid #e2e8f0",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 500, color: "#475569" }}>
            oneclickbyabdellah.com
          </span>
          <span style={{ fontSize: 22, fontWeight: 500, color: "#475569" }}>
            WhatsApp +971 56 765 4647
          </span>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
