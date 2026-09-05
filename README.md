# OneClick Digital Studio — Website

Production-ready source for the OneClick Digital Studio marketing website: a single-page, service-led site built to turn UAE business owners into WhatsApp/email enquiries.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [Lucide](https://lucide.dev) icons
- No backend, no database — fully static

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

```
app/                  Next.js App Router entry (layout, page, metadata routes)
  layout.tsx          Root layout, global SEO metadata, JSON-LD
  page.tsx             Assembles the one-page site from components/
  sitemap.ts           /sitemap.xml
  robots.ts            /robots.txt
  icon.png              Favicon (from brand/favicon.png)
  apple-icon.png        Apple touch icon (from brand/favicon.png)
components/            One component per section (Header, Hero, Services, ...)
lib/
  site-config.ts        Single source of truth for brand + approved copy
public/brand/           Approved logo & icon PNGs, used as supplied
```

## Content source of truth

All copy, brand colors, and contact details in `lib/site-config.ts` are taken directly from the approved
`OneClick_Digital_Studio_Website_Assets` package (`content/site-copy.md`, `content/site-config.json`,
`brand/brand-tokens.css`). To update copy or contact details, edit `lib/site-config.ts` — every section
reads from it.

## Brand assets

The header, footer, and browser favicon use the supplied PNG logo files exactly as provided (no
recoloring, redrawing, or vectorizing). Source files live in `public/brand/`.

## Five-day offer countdown

The limited offer section is rendered by `components/LimitedOffer.tsx`. Its fixed UAE deadline,
prices, package details, and package-specific WhatsApp messages are managed in `offerConfig` inside
`lib/site-config.ts`. The deadline does not restart when a visitor refreshes the page. Once it passes,
the countdown reaches zero and the offer buttons change to **Offer Ended**.

## Deployment

This is a static Next.js site with no server-side data dependencies — it deploys as-is to Vercel, or any
Node host via `npm run build && npm run start`.
