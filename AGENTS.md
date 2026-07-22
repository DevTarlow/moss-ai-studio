# AGENTS.md

## Stack

- **Astro 7** (SSG only, `output: "static"` — no SSR/hybrid). **Docs:** https://docs.astro.build/ — consult for APIs, content collections, routing, pagination, etc.
- **Tailwind CSS v4** via `@tailwindcss/vite` — **no `tailwind.config.*` file exists**. Theme tokens are in `src/styles/global.css` under `@theme { … }`.
- **All components are `.astro` files** — no React, Vue, or Svelte. Interactive behavior is vanilla JS (inline `<script>` blocks or `src/scripts/reveal.js`).
- Node `>=22.12.0`, ESM (`"type": "module"`).

## Commands

| Command | Notes |
|---|---|
| `npm run dev` | Astro dev server (default `localhost:4321`) |
| `npm run build` | SSG build → `dist/` |
| `npm run preview` | Preview production build locally |

There is **no linter, formatter, typecheck script, or test runner** configured.

## Architecture

```
src/
  pages/                  # File-based routing (SSG)
    index.astro           # Landing page — assembles all sections
    apps/[...slug].astro  # Product detail pages (getStaticPaths from data/products.js)
    projects/[...slug].astro  # Case-study detail pages (getStaticPaths from content collection)
  layouts/Layout.astro    # Single layout — HTML shell, SEO + OG meta, Google Fonts, reveal.js
  components/             # .astro section components (Header, Hero, About, FAQ, CTA, etc.)
  data/                   # Plain JS arrays (products.js, faqs.js, customBuilds.js)
  content/                # Astro content collections (Markdown via glob loader)
  content.config.ts       # Collection schema + glob loader config
  scripts/reveal.js       # IntersectionObserver scroll-reveal animations
  styles/global.css       # Tailwind v4 imports + @theme tokens + base styles
```

- Content collections use the **glob loader** (not fs-based), configured in `src/content.config.ts`.
- `src/data/*.js` files export arrays of objects consumed directly by components.
- Scroll-reveal system: CSS classes `.reveal`, `.revealed`, `.reveal-delay-{1..5}` driven by `reveal.js`.
- Two Google Fonts loaded in `Layout.astro`: **Inter** (`--font-sans`) and **Plus Jakarta Sans** (`--font-display`).

## Theme (actual, not README)

The `@theme` block in `global.css` defines these tokens (use these, NOT the README brand palette, which is stale):

- `--color-bg: #F4F8FB`
- `--color-accent: #22C55E` (green-500)
- `--color-accent-2: #3B82F6` (blue-500)
- `--color-text: #0F172A` (slate-900)

## Environment

Contact forms (`/api/contact`, `/api/subscribe`) are served by Firebase Cloud Functions (`functions/index.js`). No environment variables are required for local Astro development. See `functions/` for backend configuration.

## Deployment

Push to `master` triggers `.github/workflows/deploy.yml` — builds and deploys to **Firebase Hosting** (`mossaistudio.com`) including the static site (`dist/`) and Cloud Functions (`functions/`). CI authenticates via the `FIREBASE_SERVICE_ACCOUNT` repository secret.

## Conventions

- Brand voice: "indie AI studio," "solo developer," "since 2014." Portland, OR based.
- No client-side routing — every page is a full static `.html` file.
- Product images are referenced as `/images/products/<slug>.png` from the `public/images/products/` directory.
- The `.astro/` directory is auto-generated; never edit it.
