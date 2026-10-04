# Oneclick Digital Solution

A clean, responsive Next.js website for UAE businesses. White backgrounds, restrained blue accents, service information, website packages, FAQs and direct WhatsApp inquiries.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run lint
npx tsc --noEmit
npm run build
node scripts/check-server.cjs
```

## Upload to your existing GitHub repository

Extract the ZIP and copy the **contents** of `oneclick-main` into the repository root. Replace matching files; do not put the entire folder inside another `oneclick-main` directory, and do not upload the ZIP as your website.

Delete these obsolete files from the old repository if they are still present:

- `app/agency-markup.ts`
- `app/agency.css`
- `public/agency/site.js`
- `app/components/tilt-card.tsx`
- `scripts/check-offer.cjs`

The expired September Starter promotion has been removed completely, including its countdown, dates, discount and promotional WhatsApp message. Starter now invites visitors to request current pricing. Existing Business pricing (AED 1,500) and Business System starting pricing (AED 2,000) are retained. No replacement Starter price has been assumed.

The homepage is statically rendered. Only the mobile navigation needs client-side JavaScript; the decorative website preview has no parallax, tilt effects or animation. The separate `/playbook` product remains available.

## Edit content

- `app/agency-home.tsx`: homepage sections and service copy.
- `app/home.css`: responsive homepage design, scoped to `.oc-site`.
- `app/components/site-header.tsx`: logo, navigation and mobile menu.
- `app/components/hero-scene.tsx`: static desktop/mobile design concept.
- `lib/agency-config.ts`: packages, FAQ content and WhatsApp messages.
- `lib/seo-config.ts`: site identity, canonical domain and metadata.
- `lib/site-config.ts`: existing playbook product details.

WhatsApp and phone remain **+971 56 765 4647**. The canonical domain remains **oneclickbyabdellah.com**, as supplied in the original code. Verify the spelling before changing it; `onclickbyabdellah.com` is a different domain.

No live deployment or GitHub push is included in this ZIP.

## Verified on 4 October 2026

- ESLint, TypeScript and production build passed.
- Twelve route/asset checks returned HTTP 200, including the homepage, Playbook, SEO images, sitemap, robots and app icons.
- Browser checks passed at widths 320, 375, 390, 600, 768, 820, 1024 and 1440 pixels, with no horizontal overflow or package-content overlaps.
- Mobile menu open/close, Escape, FAQ expansion, homepage anchors and Playbook navigation passed.
- WhatsApp links use the existing business number and contain no expired promotional wording. No browser errors were detected.

The ZIP also contains `previews/desktop-preview.png` and `previews/mobile-preview.png` outside the website source folder, for visual review.
