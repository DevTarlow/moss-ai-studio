# Moss AI Studio — AI Automation & Engineering

Landing page for an AI automation agency. Static HTML built with Astro and Tailwind CSS. Zero client-side JavaScript by default.

**Live site** ships a single `dist/index.html` (~15 KB) with one CSS file.

## Built With

- [Astro](https://astro.build) (v6) — static site generation
- [Tailwind CSS](https://tailwindcss.com) (v4) — utility-first styling via `@tailwindcss/vite`
- Inter + Playfair Display (Google Fonts)

## Project Structure

```
/
├── astro.config.mjs
├── package.json
├── src/
│   ├── styles/
│   │   └── global.css            # Tailwind import + @theme tokens
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML shell, fonts, SEO meta
│   ├── components/
│   │   ├── Header.astro          # Sticky nav, logo, CTA
│   │   ├── Hero.astro            # Hero copy + dual CTAs
│   │   ├── Services.astro        # 3-card grid (n8n, AI, Audits)
│   │   ├── ContactForm.astro     # Lead form → n8n webhook
│   │   ├── Booking.astro         # Cal.com embed placeholder
│   │   └── Footer.astro
│   └── pages/
│       └── index.astro           # Assembles all sections
└── public/
    ├── favicon.svg
    └── favicon.ico
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

Or set it permanently in `astro.config.mjs`:

```js
export default defineConfig({
  server: { port: 4322 },
  // ...
});
```

## Commands

| Command              | Action                                    |
| :------------------- | :---------------------------------------- |
| `npm run dev`        | Start dev server at `localhost:4321`       |
| `npm run build`      | Build static site to `dist/`               |
| `npm run preview`    | Preview the production build locally       |

## Configuration

### n8n Webhook

The contact form POSTs to a placeholder URL. Replace it with your real n8n webhook:

**File:** `src/components/ContactForm.astro` — line 14

```astro
action="https://your-n8n-webhook.example.com/webhook/replace-me"
```

The form sends `name`, `email`, `company`, and `message` fields.

### Cal.com Booking Widget

A commented placeholder lives in `src/components/Booking.astro`. To activate:

1. Replace the placeholder `<div>` with your Cal.com inline embed:
   ```html
   <cal-inline-widget
     data-cal-link="your-username/30min"
     data-cal-config='{"layout":"month_view"}'
     style="width:100%;height:100%;min-height:600px;overflow:scroll;"
   ></cal-inline-widget>
   ```
2. Add the Cal.com embed script to `src/layouts/Layout.astro`:
   ```html
   <script type="module" src="https://app.cal.com/embed/embed.js" async></script>
   ```

### Brand Palette

Design tokens are defined in `src/styles/global.css` via `@theme`:

| CSS Variable           | Hex       | Tailwind Class        |
| :--------------------- | :-------- | :-------------------- |
| `--color-brand-cream`  | `#FDFBF7` | `bg-brand-cream`      |
| `--color-brand-tan`    | `#EFE9DC` | `bg-brand-tan`        |
| `--color-brand-sand`   | `#D7C49E` | `border-brand-sand`   |
| `--color-brand-earth`  | `#2C2520` | `text-brand-earth`    |
| `--color-brand-olive`  | `#5B6C4A` | `bg-brand-olive`      |

Opacities work as usual: `border-brand-sand/40`, `text-brand-earth/70`, etc.

## Deployment

The `dist/` directory contains everything needed to serve the site. Deploy to any static host:

- **Cloudflare Pages** — set build command `npm run build`, output directory `dist`
- **Netlify** — set publish directory to `dist`
- **Vercel** — auto-detects Astro projects

The site ships zero client-side JavaScript by default, so Lighthouse scores should sit at 100 for performance and SEO out of the box.
