# Moss AI Studio — Tailored Automation & AI Systems

Landing page for an indie AI automation studio. Built with Astro and Tailwind CSS v4 by Tarlow.

**Live site:** [mossaistudio.com](https://mossaistudio.com)

## Built With

- [Astro](https://astro.build) (v7) — static site generation
- [Tailwind CSS](https://tailwindcss.com) (v4) — utility-first styling via `@tailwindcss/vite`
- Inter + Playfair Display (Google Fonts)
- Vanilla JS for scroll-reveal animations, FAQ accordion, and tabbed CTA

## Project Structure

```
/
├── astro.config.mjs
├── package.json
├── public/
│   ├── CNAME                         # GitHub Pages custom domain
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/                       # Logo, headshots
├── src/
│   ├── assets/                       # SVG backgrounds, icons
│   ├── styles/
│   │   └── global.css                # Tailwind import + @theme tokens + reveal animations
│   ├── scripts/
│   │   └── reveal.js                 # IntersectionObserver for scroll-reveal
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML shell, fonts, SEO meta
│   ├── components/
│   │   ├── Header.astro              # Sticky nav, logo, CTA button
│   │   ├── Hero.astro                # Hero copy + dual CTAs
│   │   ├── About.astro               # Studio story, founder headshot
│   │   ├── Services.astro            # 3-card grid (Workflows, AI, Audits)
│   │   ├── Process.astro             # 4-step timeline
│   │   ├── FAQ.astro                 # Accordion FAQ
│   │   ├── CTA.astro                 # Cal.com booking + contact form tabs
│   │   ├── Footer.astro              # Logo, copyright, nav links
│   │   └── BackToTop.astro           # Fixed scroll-to-top button
│   └── pages/
│       └── index.astro               # Assembles all sections
└── .github/workflows/
    └── deploy.yml                    # GitHub Actions deploy to Pages
```

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts on `localhost:4321`. To use a different port:

```bash
npm run dev -- --port 4322
```

## Commands

| Command              | Action                              |
| :------------------- | :---------------------------------- |
| `npm run dev`        | Start dev server at `localhost:4321` |
| `npm run build`      | Build static site to `dist/`         |
| `npm run preview`    | Preview the production build locally |

## Environment Variables

The contact form requires a Web3Forms access key. Set it locally in an `.env` file:

```
PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

| Variable                         | Required | Description                          |
| :------------------------------- | :------- | :----------------------------------- |
| `PUBLIC_WEB3FORMS_ACCESS_KEY`    | Yes      | Web3Forms API key for form submissions |

In production (GitHub Pages), set this as a repository secret named `WEB3FORMS_ACCESS_KEY` — the deploy workflow maps it to the `PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable automatically.

### Cal.com Booking

The CTA "Book a Call" tab uses the Cal.com inline embed script. Configure the link in:

**File:** `src/components/CTA.astro` — line 54

```js
calLink: "moss-ai-studio/30min",
```

Update to your Cal.com username and event slug.

## Brand Palette

Design tokens defined in `src/styles/global.css` via `@theme`:

| CSS Variable              | Hex       | Tailwind Class          |
| :------------------------ | :-------- | :---------------------- |
| `--color-brand-cream`     | `#FDFBF7` | `bg-brand-cream`        |
| `--color-brand-tan`       | `#EFE9DC` | `bg-brand-tan`          |
| `--color-brand-sand`      | `#D7C49E` | `border-brand-sand`     |
| `--color-brand-earth`     | `#2C2520` | `text-brand-earth`      |
| `--color-brand-olive`     | `#5B6C4A` | `bg-brand-olive`        |
| `--color-brand-olive-light` | `#7A8D67` | `text-brand-olive-light` |
| `--color-brand-sage`      | `#C4CFB6` | `bg-brand-sage`         |

Opacities work as usual: `border-brand-sand/40`, `text-brand-earth/70`, etc.

## Deployment

The site deploys automatically via GitHub Actions on push to `main`.

### Prerequisites

1. **GitHub Pages** — enabled in repo settings, source set to "GitHub Actions"
2. **Custom domain** — `mossaistudio.com` configured in repo Pages settings (or via `public/CNAME`)
3. **DNS** — add a `CNAME` record pointing `mossaistudio.com` to `<username>.github.io`
4. **Repository secret** — add `WEB3FORMS_ACCESS_KEY` under Settings → Secrets and variables → Actions

### Manual Deploy

```bash
npm run build
```

The `dist/` directory contains everything needed. Deploy to any static host:

- **Cloudflare Pages** — build command `npm run build`, output directory `dist`
- **Netlify** — publish directory `dist`
- **Vercel** — auto-detects Astro projects
