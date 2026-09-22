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

Localized routes are generated statically, including all seven service detail pages, contact, residential, commercial, about, areas and privacy. The root chooses the remembered language (English by default). Language links retain the equivalent page and request query parameters. Form fields live only in React state and are cleared on completion; switching languages on the contact page retains the step, selections and fields in volatile React memory. Reloading, closing or leaving the contact page clears an unfinished form. No personal data enters browser storage or URLs.

Recovery: redeploy the previous Git commit through Actions. No database or migrations.

## V2

- `src/lib/experience.ts`: bilingual finder, category filters, service preparation guidance, relevant related services and photo mapping.
- `commercialContent` in `src/lib/config.ts`: optional team, reviews, pricing and conditions. Only explicitly verified, sourced and bilingual entries render. Empty by default.
- Service and property context propagate across request and quote CTAs. Quotes carry a distinct editable intent. Only the chosen contact channel is required.
- `node scripts/check-v2.mjs`: focused regression coverage for V2. Use `TEST_URL=https://gudrum.github.io/plumbing` for public checks.
