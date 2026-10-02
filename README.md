# Oneclick Digital Studio

A simple, text-led Next.js website for Oneclick Digital Studio, a UAE-based studio offering website development, branding and design, digital marketing, and content creation. Visitors see what the studio offers, a few selected projects, and contact details, and get in touch through WhatsApp.

No database, login, admin area, payments, forms or extra dependencies.

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
node scripts/check-server.cjs   # after npm run build
```

`scripts/check-server.cjs` builds nothing itself: it starts the built app and checks that the homepage, `/playbook`, robots, sitemap, manifest, social images and icons all return HTTP 200, and that the homepage contains its headline, the project link, the WhatsApp, phone and email links, the canonical link and the Organization and Service structured data.

## Routes

- `/` — the homepage (header, hero, services, selected work, about, contact, footer). Rendered at request time so the footer year is always current.
- `/playbook` — an unrelated product page that was already in the repository. It is unchanged and still listed in the sitemap, but the homepage no longer links to it.

## Files to edit

- `app/page.tsx`: the homepage markup, its `<title>`/description, the navigation links and the project cards.
- `app/home.css`: homepage-only styling (scoped under `.oc-site`, imported by the page so `/playbook` never loads it). Colours, spacing and breakpoints live at the top of the file.
- `lib/seo-config.ts`: business name, description, contact details (phone, email, WhatsApp link), the four services and the homepage title/description. The layout's Organization structured data, the manifest and the social preview image all read from here.
- `lib/og-image.tsx`: the 1200×630 Open Graph/Twitter preview image, generated with `next/og` from the bundled Geist font.
- `app/layout.tsx`: sitewide metadata, theme colour and Organization/WebSite structured data.
- `lib/site-config.ts`: belongs to `/playbook` only.

## Content notes

- Contact details shown: phone 056 765 4647 (`tel:+971567654647`), email info@onclickbyabdellah.com (`mailto:info@onclickbyabdellah.com`), WhatsApp `https://wa.me/971567654647`.
- Only Gold Gravity UAE has a confirmed link (`https://goldgravityuae.com`). Oneclick CV and Smart Way Delivery are shown as informative cards without links, screenshots or results.
- No testimonials, prices, statistics, address or social links are included because none were supplied.

## Design

White background, dark navy text and one orange accent. Content width is capped at 1120px. Services show two columns on desktop and one on mobile; projects show three columns from tablet width. Only buttons and links have a subtle hover colour change; there is no loader, carousel, animation or popup. The header is sticky from 640px and stacks the brand above the links on narrower screens. Keyboard focus is shown with a visible accent-coloured outline.
