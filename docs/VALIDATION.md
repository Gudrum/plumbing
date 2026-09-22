# Validation · 2026-09-21

Environment: macOS, Node 26.8.1, Next.js 15.5.25. Local static export served at http://127.0.0.1:4173/plumbing/ . Browser: headless installed Google Chrome via Playwright.

- Approved — production build / TypeScript: `NEXT_PUBLIC_BASE_PATH=/plumbing npm run build`, exit 0, 34 generated pages including framework pages.
- Approved — `node scripts/check.mjs`: both languages and every linked page return HTTP 200; no broken images or horizontal overflow at 390×844.
- Approved — equivalent service language switching, mobile menu, service/property query preselection.
- Approved — required fields, invalid email/phone, consent, back-navigation preservation, editable review, full English and Spanish completion.
- Approved — no POST during completion; browser storage contains only language preference; no browser runtime errors.
- Approved — desktop 1440×1000 and mobile 390×844 screenshots reviewed; mobile review form inspected. This is browser emulation, not physical-device evidence.
- Approved — logo PNG contains an alpha channel; supplied original retained separately.
- Pending — release until GitHub Actions deployment succeeds and public URL is checked.
- Not applicable — business conversion metrics, live request delivery, appointments and commercial acceptance. These are not claimed by the demo.
