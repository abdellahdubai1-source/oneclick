# OneClick — 7-Day Client Acquisition Playbook

A clean, single-page sales website for **The 7-Day Client Acquisition Playbook**. The previous agency-services content has been removed; the root route now focuses only on this digital product.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide icons
- No database or backend
- Node.js 20.9 or newer

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
```

## Connect the Whop checkout

The current purchase buttons clearly hand the customer off to a pre-filled OneClick WhatsApp message. When the Whop checkout is ready, open `lib/site-config.ts` and replace the single `checkoutUrl` value with the Whop checkout URL. Every purchase button will update automatically.

## Main files

- `app/page.tsx` — complete product sales page
- `app/layout.tsx` — SEO metadata and product structured data
- `app/globals.css` — global brand styles
- `lib/site-config.ts` — product copy, price, sections, FAQ, and checkout URL
- `public/brand/` — supplied OneClick logo assets

## Deploy

The deployment root is the `web` folder—the folder that contains `package.json`. The project can be deployed to Vercel or any Node host that supports Next.js. Run `npm run build` before deployment.
