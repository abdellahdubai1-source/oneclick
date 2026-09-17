# Oneclick Digital Solution

This is the Next.js version of the Oneclick website for the existing `abdellahdubai1-source/oneclick` repository. The new agency website is at `/`. The earlier 7-Day Client Acquisition Playbook page is preserved at `/playbook`.

## Why the September 16 upload failed

The existing repository was a Next.js project. Commit `1542fa1` replaced its root `package.json` with a dependency-free static preview script, but kept the Next.js `app/`, `lib/`, and `package-lock.json` files. Vercel could no longer run the original build. Uploading a `dist` folder alone does not make that folder the Next.js homepage.

This version restores the original Next.js package settings, places the new homepage inside `app/`, retains the Playbook at `app/playbook/`, and puts agency image/script assets under `public/agency/`. The old `dist/` folder and `preview.mjs` should be removed from the repository because the app no longer uses them.

## How to use this ZIP with the existing repository

1. Open or clone `abdellahdubai1-source/oneclick` on your computer, ideally with GitHub Desktop, and create a new branch from `main`.
2. Extract this ZIP directly into the **repository root**. You should see `app`, `lib`, `public`, `package.json`, and this README beside the existing `.git` folder. Replace files when asked. Do not upload the ZIP as a single file or put its contents inside another project folder.
3. Delete the old `dist/` folder and `preview.mjs` from the repository. Keep the original `package-lock.json`, existing files in `public/brand/`, and other original project files.
4. Review the file changes. Run `npm ci` and `npm run build` locally if Node.js is installed.
5. When you decide to publish, commit the change and push it to the connected GitHub repository. Vercel may automatically deploy commits or pull requests, according to its project settings. Check the deployment before switching any production traffic.

The source ZIP contains the complete corrected repository files, including the original Playbook code and the revised agency site. Generated `node_modules` and `.next` files are excluded.

## Offer and contact settings

Change campaign timestamps, package prices, and WhatsApp number at the top of `public/agency/site.js` in `SITE_CONFIG`. The original fixed campaign is September 16, 2026 at 12:00 AM to October 1, 2026 at 12:00 AM, UAE time. September 30 is the final offer day. Starter is AED 600 during the campaign (75% off AED 2,400), Business is AED 1,500, and Business System starts at AED 2,000. Prices are one-time project prices. The WhatsApp number is +971 56 765 4647.

The promotional price and WhatsApp text expire automatically. The Playbook's earlier content and pricing are preserved as they were in the repository; review that page before promoting its `/playbook` URL.

## Verification

On September 17, 2026, `npm ci` and `npm run build` succeeded using the existing lockfile and Next.js 16.3.4. Next generated both `/` and `/playbook` as static pages. A local production smoke check fetched the new homepage, old Playbook route, logo, and campaign script successfully. The agency CSS was checked for accidental styling of the Playbook route. The standalone design's desktop/mobile, menu, FAQ, WhatsApp, and countdown states were browser-tested before this migration. The migrated Next.js version was not visually inspected in a browser because its local preview address was unavailable to the browser session; this limitation should be checked before any live deployment.

No GitHub commit was pushed and no Vercel deployment was initiated while preparing this package.
