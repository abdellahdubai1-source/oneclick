# Oneclick Digital Solution

A compact, mobile-first Next.js website with a 3D layered-website hero, clear package pricing, a real offer countdown and WhatsApp inquiries.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm start
```

## Use with your existing GitHub repository

Extract this ZIP and copy the **contents** of `oneclick-main` into the existing repository root. Replace matching files. `package.json`, `app`, `lib` and `public` should be at the repository root, not inside another folder. Do not upload the ZIP itself as the website.

The old `app/agency-markup.ts`, `app/agency.css` and `public/agency/site.js` are no longer used and have been removed from this package. If these remain in your working copy after merging folders, they may be deleted. Older `dist/` or `preview.mjs` files, if present, are not part of this Next.js app.

No GitHub push or deployment was performed. When you choose to push to a Vercel-connected branch, that may trigger automatic deployment.

## Files to edit

- `app/agency-home.tsx`: homepage sections, copy and countdown display.
- `app/components/site-header.tsx`: compact header, cropped original logo, mobile menu.
- `app/components/hero-scene.tsx`: the CSS 3D hero (public site, mobile view, admin dashboard layers).
- `app/components/tilt-card.tsx`: desktop-only 3D card tilt.
- `app/home.css`: homepage-only styling (scoped under `.oc-site`), isolated from the Playbook.
- `lib/agency-config.ts`: package prices, features, campaign dates, WhatsApp helper, package-specific messages and the homepage FAQ text (shared with its structured data).
- `app/page.tsx`: request-time homepage rendering (so offer prices are never frozen at build time), homepage `<title>`/description and its Service/FAQ structured data.
- `lib/seo-config.ts`: business name, description, service area, the six real services (for structured data) and the homepage title/description text.
- `public/agency/assets/oneclick-logo.png`: supplied original logo, unchanged.

## SEO

- **Metadata**: `app/layout.tsx` sets sitewide defaults (a title template, robots, Open Graph/Twitter defaults, the `#1a7bff` theme color). `app/page.tsx` and `app/playbook/page.tsx` each set their own complete title, description, canonical URL and Open Graph/Twitter fields — Next.js does not merge these nested fields between a layout and a page, so each page's block is self-contained.
- **Structured data**: `app/layout.tsx` renders sitewide `Organization`/`WebSite` JSON-LD (no address, ratings or social links are included, since none were supplied). The homepage adds `Service` entries for the six real services and an `FAQPage` that mirrors its visible FAQ text exactly. The Playbook keeps its existing `Product` JSON-LD and gains an `FAQPage` matching its own visible FAQs.
- **Social preview image**: `lib/og-image.tsx` renders one branded 1200×630 image (the real logo, the real headline, the real services and market) with `next/og`, served through `app/opengraph-image.tsx` / `app/twitter-image.tsx` and their `app/playbook/` counterparts (Next does not reliably cascade a root-level image convention to a nested route, so each segment has its own).
- **Icons and manifest**: the browser-tab and home-screen icons come from the already-branded `app/icon.png` / `app/apple-icon.png` (an unrelated, off-brand `favicon.svg` reference was removed from the metadata). `app/manifest.ts` adds a web app manifest using two new icon sizes generated from the existing `public/brand/oneclick-icon-dark.png` with `sharp` (already a dependency) into `public/icons/`.
- **Internal linking**: the homepage footer now links to `/playbook`, which previously had no link pointing to it from anywhere on the site.
- `robots.ts` and `sitemap.ts` were already correct (everything allowed, both routes listed) and are unchanged.

## Campaign

The fixed campaign runs from **16 September 2026, 00:00 UAE** to **1 October 2026, 00:00 UAE** (end exclusive). The final offer day is 30 September. The timer does not reset on refresh. On expiry, the Starter discount, promotional prices and promotional WhatsApp message disappear. The countdown stops at zero and visitors can request current pricing. Before the start, it counts down to the start without offering the discount.

- Starter: AED 600 during the campaign, regularly AED 2,400 (75% off); public site, no admin.
- Business: AED 1,500, no invented discount; public site, no admin.
- Business System: from AED 2,000, with admin controls for one agreed content type. Online payment is not included; booking, payment and customer-account features are quoted separately.
- WhatsApp: +971 56 765 4647.
- Domain, hosting, paid tools and additional features are quoted separately.

The marketing page uses WhatsApp inquiry links; it does not collect contact data or take payment. Package feature lists describe client deliverables, not additional functionality of this marketing website.

## Preserved content

The existing `/playbook` page's visible content, layout and brand assets are unchanged — only its `<head>` metadata and structured data were extended (see SEO, above), which is why `app/layout.tsx` is no longer byte-for-byte identical to earlier drops (it now carries sitewide metadata and JSON-LD; nothing it renders visually changed). Its older USD pricing and Studio branding have not been revised; review them separately before promoting that route.

The ZIP excludes installed dependencies, build output and local test screenshots. Install dependencies with `npm ci`; no new dependency was added — the OG image and manifest icons reuse `next/og`, the already-bundled Geist font files and the existing `sharp` dependency.

## Verification — 22 September 2026

`npm ci`, `npm run lint` and `npm run build` passed. `node scripts/check-offer.cjs` renders the actual homepage at six campaign boundary times and checks package prices, discount expiry, WhatsApp messages and countdown values. `node scripts/check-server.cjs` builds and starts the app, then checks the homepage, Playbook, logo, robots, sitemap, manifest, both pages' Open Graph/Twitter images and the manifest icons all return HTTP 200, plus that the homepage's canonical link and Organization/FAQPage structured data are present.

`package.json`, `package-lock.json`, `app/globals.css` and `lib/site-config.ts` remain byte-for-byte unchanged. The rendered output of `/playbook` (everything inside `<body>`) is unchanged; only metadata was added to its `<head>`. The homepage's rendered markup is unchanged except for three short copy edits (the hero eyebrow/subtext and the closing CTA line, each naturally mentioning the UAE) and one added footer link to `/playbook`. Both pages' titles, canonical URLs, Open Graph/Twitter tags and JSON-LD were read directly from the built server's HTML output, not just the browser DOM. The layout was checked in a browser at 320px, 390px, 768px, 1024px and 1440px: no horizontal overflow at 320px or 390px, and no floating button overlays content (the page has none; the header is the only sticky element). No live WhatsApp message was sent.

## Design and motion notes

- The hero is real CSS 3D (perspective and `translateZ` layers), not WebGL, so there is no extra JavaScript library. It shows the three things the packages sell: a public website, its mobile view and an admin dashboard. The website mock-ups are decorative placeholders with no invented content, clients or figures.
- Pointer parallax on the hero and the 3D tilt on the package cards run only for fine pointers (`hover: hover` and `pointer: fine`) and only when reduced motion is not requested. Touch devices get a static, lightweight composition.
- Scroll reveals use CSS scroll-driven animation as a progressive enhancement. They involve no JavaScript, never change scroll behaviour, and content is simply visible in browsers that lack support or when reduced motion is on.
- The original logo file is unchanged. It is cropped with CSS to trim its transparent padding and sits on a light header bar, because its lettering is dark navy.
