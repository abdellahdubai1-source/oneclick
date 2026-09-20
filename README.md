# Oneclick Digital Solution

A compact, responsive Next.js website with clear package pricing and WhatsApp inquiries.

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

- `app/agency-home.tsx`: homepage copy, layout, FAQs and countdown display.
- `app/home.css`: homepage-only styling, isolated from the Playbook.
- `lib/agency-config.ts`: package prices, features, campaign dates and WhatsApp helper.
- `app/page.tsx`: request-time homepage rendering, so offer prices are never frozen at build time.
- `public/agency/assets/oneclick-logo.png`: supplied original logo, unchanged.

## Campaign

The fixed campaign runs from **16 September 2026, 00:00 UAE** to **1 October 2026, 00:00 UAE** (end exclusive). The final offer day is 30 September. The timer does not reset on refresh. On expiry, the Starter discount, promotional prices and promotional WhatsApp message disappear. The countdown stops at zero and visitors can request current pricing. Before the start, it counts down to the start without offering the discount.

- Starter: AED 600 during the campaign, regularly AED 2,400 (75% off); public site, no admin.
- Business: AED 1,500, no invented discount; public site, no admin.
- Business System: from AED 2,000, with admin controls for one agreed content type.
- WhatsApp: +971 56 765 4647.
- Domain, hosting, paid tools and additional features are quoted separately.

The marketing page uses WhatsApp inquiry links; it does not collect contact data or take payment. Package feature lists describe client deliverables, not additional functionality of this marketing website.

## Preserved content

The existing `/playbook` page, its configuration and its brand assets are unchanged. Its older USD pricing and Studio branding have not been revised; review them separately before promoting that route.

The ZIP excludes installed dependencies, build output and local test screenshots. Install dependencies with `npm ci`; no new production dependency was added.

## Verification — 20 September 2026

`npm ci`, `npm run lint` and `npm run build` passed. `node scripts/check-offer.cjs` renders the actual homepage at six campaign boundary times and checks package prices, discount expiry, WhatsApp messages and countdown values. Run `node scripts/check-server.cjs` after building to smoke-test the homepage, Playbook, logo, robots and sitemap over HTTP.

The original Playbook source and dependency lockfile were verified byte-for-byte unchanged. Responsive layouts are implemented for mobile, tablet and desktop, but visual browser verification was unavailable in the build environment. Review those viewports before publishing. No live WhatsApp message was sent.
