# Aqua Pro Plumbing demo

Bilingual Next.js App Router / TypeScript / Tailwind website exported for GitHub Pages. Demo submissions never leave the browser and personal details are never persisted.

## Run

`npm install` then `npm run dev` → http://localhost:3000

`NEXT_PUBLIC_BASE_PATH=/plumbing npm run build` produces `out/` for https://gudrum.github.io/plumbing/ . GitHub Actions deploys pushes to `main`.

## Edit

- Company, logo, phone, email, address, hours, service areas, social links, demo flag: `src/lib/config.ts`.
- Both languages, service descriptions and FAQs: `src/lib/content.ts`.
- Form adapter: `src/lib/submit.ts`. Production mode intentionally fails until a real integration is implemented.
- Layouts and styling: `src/components/Site.tsx` and `src/app/globals.css`.
- Multi-step form: `src/components/RequestForm.tsx`.
- Assets and origin: `docs/ASSETS.md`.

Production needs verified contact information, location/coverage, operating hours, a configured and secured delivery adapter, reviewed privacy notice, and approved commercial claims. Keep noindex for the demo. Structured business data should remain disabled until required business data is verified. No credentials, contact details, company history, reviews or certifications are fabricated.

## Architecture

Localized routes are generated statically, including all seven service detail pages, contact, residential, commercial, about, areas and privacy. The root chooses the remembered language (English by default). Language links retain the equivalent page and request query parameters. Form fields live only in React state and are cleared on completion; switching to a different document resets an unfinished form.

Recovery: redeploy the previous Git commit through Actions. No database or migrations.
