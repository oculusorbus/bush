# The Bush Group — Website

Modern, SEO-optimized rebuild of the Bush Group's Wix site, built with Next.js 16 (App Router) + Tailwind CSS 4 + Framer Motion.

## Quick start

```bash
cd site
npm install         # only if node_modules is missing
npm run dev         # http://localhost:3000
```

## What's included

**22 statically-prerendered routes**

- `/` — layer-cake homepage (hero, intro, Core Eight wheel, services, why us, testimonials, pillar grid, CTA)
- `/about` — origin story + founders
- `/about/steve-bush`, `/about/jessalynn-bush` — full bios
- `/core-eight` — overview + interactive wheel
- `/core-eight/[slug]` — eight pillar detail pages (change-management, project-management, active-management, process-improvement, presentation-skills, group-facilitation, coaching-method, team-resilience)
- `/advisory`, `/consulting`, `/facilitation` — three service pages
- `/contact` — form (mailto-based) + direct contact info
- `/sitemap.xml`, `/robots.txt` — generated automatically

## SEO

- Per-page meta titles & descriptions
- OpenGraph + Twitter card tags
- JSON-LD `ProfessionalService` schema with founders
- Auto-generated sitemap + robots
- Static HTML output (best-in-class crawlability)

## Demo deployment

For local production preview: `npm run build && npm run start`.

For a true static export on any server, set `output: 'export'` in `next.config.ts` and run `npm run build` — outputs to `out/`.

## Brand assets

Headshots and the Core Eight wheel are in `public/headshots/` and `public/images/` — sourced from the Wix export. Logo is a generated SVG wordmark in `src/components/Logo.tsx`; easy to swap when a real logo file is provided.

## Content

All site copy lives in `src/lib/content.ts` — single source of truth. To edit a pillar page, update the corresponding entry in `PILLARS`.
