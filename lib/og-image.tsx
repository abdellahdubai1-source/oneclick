// Shared by app/opengraph-image.tsx and app/twitter-image.tsx: one on-brand preview
// image (real logo mark, the homepage headline, the real services and market),
// generated at build time from assets already in the project.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand, contact, hero } from "./studio-config";

export const ogImageSize = { width: 1200, height: 630 } as const;
export const ogImageContentType = "image/png";
export const ogImageAlt = `${brand.name} — websites, branding and content for UAE businesses`;

const root = process.cwd();
const boldFont = readFile(join(root, "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf"));
const mediumFont = readFile(
  join(root, "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf"),
);
const logoFile = readFile(join(root, "public/brand/oneclick-icon-dark.png"));

export async function renderBrandImage() {
  const [bold, medium, logo] = await Promise.all([boldFont, mediumFont, logoFile]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "linear-gradient(160deg, #1a1411 0%, #0a0a0a 65%)",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og requires a raw <img>, not next/image */}
          <img src={logoSrc} width={64} height={64} alt="" style={{ borderRadius: 16 }} />
          <span style={{ fontSize: 30, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>
            {brand.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <span
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {hero.headline.join(" ")}
          </span>
          <span style={{ fontSize: 27, fontWeight: 500, color: "#cf8047" }}>
            Websites · Branding · Digital marketing · Content — UAE
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, fontWeight: 500, color: "#8d8d8d" }}>{brand.locationLabel}</span>
          <span style={{ fontSize: 22, fontWeight: 500, color: "#8d8d8d" }}>
            {contact.phoneInternational}
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
