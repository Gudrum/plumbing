# Aqua Pro demo · 2026-09-21
Significant scope: a bilingual public demo for homeowners and business property managers. Main task: identify a service and complete a clearly labeled simulated request. No live lead delivery, analytics, database or invented company facts.

Design: navy #102c46, brand blue #008dc2, pale water #e9f5f8, white #ffffff, slate #516575. Arial sans-serif, bold editorial headlines, left-aligned copy. Split photographic hero with an oversized rounded lower corner; restrained service rows and two property panels avoid repeated generic cards. Original logo retained. Stock images are illustrative, not company projects.

Flow: home/service/property → preselected four-step request → validation → editable review → explicit demo confirmation. Success criterion is successful completion, without collecting analytics. No conversion baseline or business performance claim.

Architecture: Next.js App Router, TypeScript, Tailwind and local assets; static export with real localized HTML routes for GitHub Pages. Config, dictionaries, service content and submission adapter are independent. No sensitive data persisted. Demo noindex. Production structured data disabled until verified business details exist.

Acceptance: all localized routes export, equivalent-page language switching, mobile navigation, seven service pages, query preselection, required-field errors, back navigation, review, confirmation and no external submission. Verify build, browser desktop/mobile and published URL. Rollback: deploy previous Git commit.
