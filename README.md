# Moss AI Studio — AI Automation & Engineering

Landing page for an indie AI automation studio. Built with Astro and Tailwind CSS v4.

**Live site** ships a static `dist/` with optimized HTML + CSS.

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
├── src/
│   ├── assets/                    # Static images (backgrounds, etc.)
│   ├── styles/
│   │   └── global.css             # Tailwind import + @theme tokens + reveal animations
│   ├── scripts/
│   │   └── reveal.js              # IntersectionObserver for scroll-reveal
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML shell, fonts, SEO meta
│   ├── components/
│   │   ├── Header.astro           # Sticky nav, logo, CTA button
│   │   ├── Hero.astro             # Hero copy + dual CTAs
│   │   ├── About.astro            # Studio story, founder headshot, philosophy
│   │   ├── Services.astro         # 3-card grid (Workflows, AI, Audits)
│   │   ├── Process.astro          # 4-step timeline (Map → Blueprint → Build → Handoff)
│   │   ├── FAQ.astro              # Accordion FAQ (4 questions)
│   │   ├── CTA.astro              # "Get Started" — Cal.com booking + contact form tabs
│   │   ├── Footer.astro           # Logo, copyright, nav links
│   │   ├── BackToTop.astro        # Fixed scroll-to-top button
│   │   ├── Booking.astro          # Standalone Cal.com embed (not currently imported)
│   │   └── ContactForm.astro      # Standalone contact form (not currently imported)
│   └── pages/
│       └── index.astro            # Assembles all sections
└── public/
    ├── favicon.ico
    ├── favicon.svg
    └── images/                    # Founder headshot, logo
```

## Section Order

The page flows in this "Organic Flow" order:

1. **Header** — Sticky navigation
2. **Hero** — "Cultivating flow. Eliminating friction."
3. **About** — Founder background (Tarlow P., Portland, OR)
4. **Services** — Custom Workflows, AI & App Dev, Audits
5. **Process** — How We Work (01–04 timeline)
6. **FAQ** — Common questions
7. **CTA** — Book a call / Send a message
8. **Footer** — Site footer
9. **BackToTop** — Scroll-to-top button

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

## Configuration

### n8n Webhook

The contact form (CTA "Send a Message" tab) POSTs to a placeholder URL. Replace it with your real n8n webhook:

**File:** `src/components/CTA.astro` — line 64

```astro
action="https://your-n8n-webhook.example.com/webhook/replace-me"
```

The form sends `name`, `email`, `company`, and `message` fields.

### Cal.com Booking

The CTA "Book a Call" tab uses the Cal.com inline embed script. Configure the link in:

**File:** `src/components/CTA.astro` — line 54

```js
calLink: "moss-ai-studio/30min",
```

Update to your Cal.com username and event slug.

### Brand Palette

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

The `dist/` directory contains everything needed to serve the site. Deploy to any static host:

- **Cloudflare Pages** — build command `npm run build`, output directory `dist`
- **Netlify** — publish directory `dist`
- **Vercel** — auto-detects Astro projects
