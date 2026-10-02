# Oneclick Digital Studio — website

A premium single-page marketing website for Oneclick Digital Studio, a UAE-based studio offering websites, branding, digital marketing and content creation. Built as the homepage of this Next.js app (App Router, Tailwind v4 for the unrelated `/playbook` route, plain scoped CSS for the homepage). No database, authentication, payments, CMS or analytics.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev        # http://localhost:3000
```

Production checks:

```bash
npm run lint
npm run build
npm start
node scripts/check-server.cjs   # after a build: HTTP checks on every route + homepage content checks
```

## Deploying on Vercel

Import the GitHub repository into Vercel with the **Next.js** framework preset. No extra configuration is needed: Vercel runs `npm run build` and serves the app. The optional Lenis smooth-scroll enhancement is loaded in the browser from `https://unpkg.com/lenis@1.3.23/dist/lenis.mjs`; if that request fails the page simply uses native scrolling.

## Where to edit

- `lib/studio-config.ts` — **the central configuration**: brand names, contact details (WhatsApp number, phone, email), social URLs, hero assets, project cards and links, service and process copy, and the message format used by the project-request handoff. Empty strings mean "not configured" and the related controls are hidden.
- `lib/seo-config.ts` — canonical site URL, business description, SEO title/description and the Service structured data.
- `app/studio-home.tsx` — page composition (loader → header → hero → about → band → work → services → process → footer → navigation overlay → project modal).
- `app/components/studio/` — one component per section plus shared pieces:
  - `intro-loader.tsx` (once-per-tab-session intro with fail-safes), `site-header.tsx`, `dubai-clock.tsx`
  - `hero.tsx`, `liquid-reveal.tsx` (desktop-only cursor reveal canvas), `hero-carousel.tsx`
  - `about.tsx`, `build-band.tsx`, `selected-work.tsx`, `project-mockups.tsx`, `services.tsx`, `process.tsx`, `site-footer.tsx`
  - `nav-overlay.tsx`, `project-modal.tsx`, `dialog.tsx` (native `<dialog>` wrapper), `overlay-manager.ts` (shared scroll lock), `motion.ts` (scroll reveals), `smooth-scroll.ts` (optional Lenis), `text-reveal.tsx`, `icons.tsx`, `brand-mark.tsx`
- `app/studio.css` — all homepage styling, scoped under `.st-site`. Palette, radii, breakpoints (640 / 768 / 1024 px) and motion easings are defined at the top.
- `public/hero/hero-base.svg` and `public/hero/hero-reveal.svg` — the hero artwork (original SVG compositions, light and lit-up variants). Replace both with permitted photographs of the same scene to use photography; keep the names in `lib/studio-config.ts` (`heroBaseSrc`, `heroRevealSrc`).
- `public/brand/` — the supplied Oneclick logo files used in the header (primary logo) and on dark surfaces (icon mark + text wordmark).

## How enquiries work

The project-request modal assembles the visitor's name, email, service, details and optional budget into a readable message and hands it to **WhatsApp** (`https://wa.me/971567654647?text=…`) or to the visitor's **email app** (`mailto:info@onclickbyabdellah.com`). Nothing is sent by this website and nothing is stored; the visitor reviews and sends the message themselves, and the status copy says exactly that. If both `whatsappNumber` and `contactEmail` were emptied in the config, the control is disabled with the message "Online enquiries are not available yet."

## Configuration still to confirm

These values were supplied by the owner or pre-existed in the repository and have **not** been independently verified:

- `contact.whatsappNumber` (`971567654647`) — confirm the number is registered on WhatsApp.
- `contact.contactEmail` (`info@onclickbyabdellah.com`, spelt "onclick" as supplied) — confirm the mailbox exists and receives mail.
- `siteUrl` in `lib/seo-config.ts` (`https://oneclickbyabdellah.com`) — this pre-existing value drives canonical links, Open Graph URLs, the sitemap and robots. Confirm the final public domain before launch; `brand.websiteUrl` in `lib/studio-config.ts` is intentionally empty until then.
- Social profiles (Facebook, Instagram, TikTok, YouTube, LinkedIn) — empty; add URLs in `lib/studio-config.ts` to show them.
- Oneclick CV and Smart Way Delivery — no public URLs are confirmed, so those cards open an on-page detail dialog. Add `action: { type: "link", url: "…" }` once confirmed.
- Hero imagery — original SVG compositions are used; if photographs are preferred, supply two permitted images of a creative workspace.
- The supplied logo is blue/navy while the site's accent is burnt orange, as specified. Swap the accent variables in `app/studio.css` if a closer match to the logo is wanted.

## Preserved content

The `/playbook` route and its assets are unchanged. The previous homepage (package pricing, campaign countdown and its components) was removed, together with its config and the `check-offer` script that tested those prices.
