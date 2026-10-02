# Clube da Pesca Landing Implementation Plan

> Implemented natively in this session, following the approved design.

**Goal:** Create an independent, runnable Vite + TypeScript landing page for Clube da Pesca, ready for launch configuration but not publication.

**Architecture:** Copy the source application while preserving the destination Git history, approved docs, and fishing logo. Replace inherited brand content, assets, styles, SEO, and tracking configuration; keep CTA, attribution, and sticky CTA behavior with launch-dependent values disabled until supplied.

**Tech Stack:** Vite, TypeScript, vanilla CSS, npm.

**Spec:** `docs/superpowers/specs/2026-10-01-clube-da-pesca-landing-design.md`

## Global constraints

- Use `#318C91`, `#B6E0DC`, `#79C4C2`, `#FFFFFF`, and `#EAF7F4` as the brand palette.
- Preserve destination `.git`, supplied logo, and existing documents; do not copy source `.git`, dependencies, build output, skincare documentation/assets, or hosting configuration.
- Do not invent discount amounts, member counts, testimonials, or other promotional claims.
- Keep the group URL and analytics ID pending; do not activate inherited skincare tracking or publish.
- Preserve mobile-first layout, CTA placements, sticky mobile CTA, and `utm_*`/`fbclid` forwarding.

## Files and tasks

1. Copy runnable app files, scripts, lockfiles, tests, and non-brand assets from the source; update package names and README.
2. Adapt `index.html`, `src/styles.css`, and public metadata for fishing promotions; copy the approved SVG into `public/` and remove inherited skincare imagery.
3. Update `src/config.ts`, `src/main.ts`, and contract tests so the group URL and Pixel ID remain null, CTAs remain visible but inactive until configured, and attribution is preserved once a URL is provided.
4. Run lint and production build; inspect the final diff and confirm no skincare links, claims, Pixel ID, or hosting config remain.

## Review focus

- Missing group URL: every CTA must remain inactive and show the pending state.
- Missing analytics ID: no Facebook request or skincare Pixel may fire.
- Configured group URL: only `utm_*` and `fbclid` parameters are copied to it.
- SEO and visible copy must describe fishing promotions without unsupported claims.
