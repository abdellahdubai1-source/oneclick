# Oneclick Digital Solution

A complete, compact, responsive one-page website. Built with plain HTML, CSS and JavaScript, using your original logo. No framework, dependency installation or build step is required. This delivery has not been published or deployed.

## Open the website

Extract the ZIP, then open `dist/index.html` in a modern browser. Keep the CSS, JavaScript and assets beside it in the supplied folder structure.

Optional local preview, if Node.js is installed:

```sh
npm run dev
```

Open `http://localhost:4173`. Stop the preview with Ctrl+C. This preview server is for development only.

## Files

- `dist/index.html`: page structure, package features, services and FAQ.
- `dist/styles.css`: colors, responsive layouts and motion preferences.
- `dist/site.js`: business settings, campaign display, contact links and menu behavior.
- `dist/assets/oneclick-logo.png`: your original, unmodified logo with transparency preserved.
- `dist/assets/favicon.svg`: small brand-color cursor favicon.
- `preview.mjs` and `package.json`: optional dependency-free local preview.

## Edit the business settings

The `SITE_CONFIG` block at the top of `dist/site.js` contains the campaign timestamps, package prices, WhatsApp destination and displayed number.

Configured campaign:

- Start: `2026-09-16T00:00:00+04:00`.
- End: `2026-10-01T00:00:00+04:00`.
- Duration: exactly 15 days.
- Final offer day: September 30, 2026.
- Visible deadline: September 30, 2026 at 11:59 PM UAE time.

Configured prices are one-time project prices:

- Starter: AED 600 during the campaign, regular price AED 2,400, saving 75%.
- Business: AED 1,500.
- Business System: from AED 2,000.

WhatsApp: `971567654647`. Display number: `056 765 4647`.

Before the start, the page shows the scheduled start and does not advertise the promotional price. During the campaign, it displays the shared fixed deadline. At expiry, the timer stops at zero, “Offer ended.” appears, and the Starter hero copy, card, discount badge, FAQ and WhatsApp message change to current-pricing inquiries. Business and Business System remain available. Nothing stores or resets a visitor-specific deadline.

If changing the campaign to a different time of day, also update the visible-time wording in `updateCampaign()`, which is intentionally written for this midnight-to-midnight UAE campaign. The date labels and campaign duration are derived from the configured timestamps.

For contact-number changes, the JavaScript configuration updates the live site. Also update the same fallback phone links in `index.html` for visitors with JavaScript disabled.

## Host later

Upload the **contents of `dist`** to the root of any static web host. `index.html` should be at the published root. No server backend, API keys, environment variables, database or build command is needed. The optional Node preview server should not be used as the public production server.

All assets and fonts work locally. There are no CDN, font-service or JavaScript-library dependencies. Internet access is required only to open WhatsApp. This site has no contact form, analytics or cookies.

## Verification completed

- Inspected the rendered desktop website in Chrome at 1348px width.
- Inspected mobile and tablet layouts in browser frames configured to 360px, 390px and 768px widths. Checked narrow-screen and tablet overflow; none was detected.
- Checked both logo assets, local asset paths, anchor destinations and JavaScript syntax.
- Tested mobile menu expansion, Escape-to-close, and closing after navigation.
- Tested FAQ click and keyboard interaction and desktop anchor scroll offset.
- Verified package-specific WhatsApp destinations and encoded message contents, including the expired Starter message. No messages were sent.
- Tested a simulated clock before launch, at launch (15 days), at the final second (1 second), at expiry and after expiry (zero). Confirmed AED 600 and 75% promotional copy is removed and the other package prices remain.
- Confirmed the fixed date interval is exactly 15 days and AED 600 is 75% below AED 2,400.
- Final inspected page logs contained no website JavaScript errors. Browser-extension diagnostics were excluded.

The final configured dates were not changed to conduct these checks. Temporary verification files are not included in the delivery.

## Practical limitations

The countdown depends on the visitor’s device clock and JavaScript. When JavaScript is disabled, current-pricing contact text is shown safely; the footer links and native FAQ remain available. Rendering was checked in Chrome, including responsive browser frames, not on physical phones or every browser. WhatsApp links were validated without sending inquiries. Hosting and domain setup were not performed.
