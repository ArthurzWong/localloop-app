# LocalLoop — Local Economic Discovery Engine

> **Travel local. Spend local. Keep the value local.**

LocalLoop is a mobile-first PWA that guides visitors to genuinely local small
businesses — so tourist spending helps the people who actually live in the
destination. It ships with a fictional demo destination, **Riverstone**, and
clearly-labelled demo data.

## What's inside

| Area | Details |
|---|---|
| Tourist discovery | Home, Explore (categories + filters + sort), Map (custom canvas map, pan/zoom/tap), Business detail, Walk Local routes, Saved, Profile & Impact |
| **Taste guide** | Per-dish **Spiciness / Sweetness / Sour tempo / MSG strength** dials (0–3) with plain-language words for visitors new to local food; per-place flavor profile; "Gentle flavors" filter; assistant understands "not too spicy" queries |
| Local Score | Transparent 0–100 score (ownership 30 / community 20 / local products 20 / independence 15 / sustainability 10 / reviews 5) with per-factor breakdown |
| Trust system | UNVERIFIED → COMMUNITY SUBMITTED → OWNER/ADMIN/COMMUNITY VERIFIED; never claims ownership that isn't verified |
| Impact tracking | Estimated local spending (clearly labelled estimates, not transactions) |
| Assistant | Rule-based, grounded ONLY in the business database — says so when it can't find options |
| Business onboarding | Free listing form incl. menu + flavor editor; queue shows "pending verification" |
| Admin console | Verification queue, approve/reject/verify, Local Score editing, review moderation, impact stats, demo reset |
| PWA | Manifest + generated icons + offline service worker |

## Run it

```bash
npm install          # installs typescript, react, jsdom (dev)
npm run build        # typechecks + bundles + emits dist/
npm run smoke        # static bundle checks (15 checks)
node runtime.test.cjs# 23-check jsdom interaction test (demo journey end-to-end)
npx serve dist       # or any static file server
```

The production app is a **single self-contained static bundle** (`dist/`) —
no CDN, no external assets, strict-CSP safe, works offline after first load.

## Architecture notes

- **Stack**: React 18 + TypeScript (strict) with a hand-rolled zero-dependency
  bundler (`build.mjs`) that compiles via `tsc` and inlines React's production
  CJS runtime. Deliberately simple; swap for Vite anytime.
- **Data layer** (`src/lib/store.ts`): in-browser store with localStorage
  persistence. Every function is shaped like a future Supabase client, so the
  backend swap (§18 of the PRD: PostgreSQL/Supabase) touches one module.
- **Demo data** (`src/data/seed.ts`): 30 approved businesses + 2 pending
  submissions, all flagged `isDemo` and labelled **DEMO** in the UI. Riverstone
  is fictional; no real business names.
- **Map** (`src/lib/map.ts`): dependency-free canvas map with procedural
  scenery. Swap for MapLibre/Google later behind the same interface.
- **Assistant** (`src/lib/assistant.ts`): deterministic rule-based QA over the
  registry. Never invents businesses, hours, or ownership.

## Modifying

- Copy/branding: `index.html`, `src/App.tsx` (header), `src/styles.css` (tokens at top)
- Categories: `CATEGORIES` in `src/data/seed.ts`
- Local Score weights: `SCORE_FACTORS` in `src/lib/types.ts`
- Flavor axes/labels: `FLAVOR_AXES` in `src/lib/store.ts`
- Ranking formula: `rankBusinesses` in `src/lib/store.ts`

## Production hardening path (not in this MVP)

Supabase Auth + RLS for admin/business roles, server-side LLM for the
assistant, image uploads, review rate-limiting, real payments for measured
(而非 estimated) impact.
