# Aqua Pro demo · 2026-09-21
Significant scope: a bilingual public demo for homeowners and business property managers. Main task: identify a service and complete a clearly labeled simulated request. No live lead delivery, analytics, database or invented company facts.

Design: navy #102c46, brand blue #008dc2, pale water #e9f5f8, white #ffffff, slate #516575. Arial sans-serif, bold editorial headlines, left-aligned copy. Split photographic hero with an oversized rounded lower corner; restrained service rows and two property panels avoid repeated generic cards. Original logo retained. Stock images are illustrative, not company projects.

Flow: home/service/property → preselected four-step request → validation → editable review → explicit demo confirmation. Success criterion is successful completion, without collecting analytics. No conversion baseline or business performance claim.

Architecture: Next.js App Router, TypeScript, Tailwind and local assets; static export with real localized HTML routes for GitHub Pages. Config, dictionaries, service content and submission adapter are independent. No sensitive data persisted. Demo noindex. Production structured data disabled until verified business details exist.

Acceptance: all localized routes export, equivalent-page language switching, mobile navigation, seven service pages, query preselection, required-field errors, back navigation, review, confirmation and no external submission. Verify build, browser desktop/mobile and published URL. Rollback: deploy previous Git commit.

## V2 · 2026-09-21
Authorized: implement reviewed demo improvements and republish Pages. Preserve demo submission, noindex and absence of invented operating claims. No backend or tracking enabled.
Design tokens retained: navy #102c46, blue #007eae, water #e9f5f8, slate #516575, white #fff. Arial display and body retain fast local rendering. Layout: compact headline + photographic work scene; a visible problem selector integrated into the hero, followed by visual service families and concise service guidance. Mobile choice appears before the hero photograph. Replace generic decorative overlays with an actionable selection panel.
Acceptance: EN/ES retains form step and data in memory; every service/property CTA carries context; quote intent is editable and visible in review; only chosen contact channel required; categorized service browser and relevant related services; new illustrative photos have sources; responsive browser review and local/public smoke checks pass.
Language switching on contact updates the existing React tree and the localized history URL, preserving volatile memory only. Reload/close clears the draft. Back/forward restores contact language. No sessionStorage, localStorage or URL contact data. Alternative persistent drafts rejected because demo does not require storing personal information.
Commercial proof slots (team, reviews, pricing, hours and conditions) render only from verified configuration. Business metrics and live delivery stay outside demo scope.
