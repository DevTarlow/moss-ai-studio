# Moss AI Studio — Tailored Automation & AI Systems

Landing page for [mossaistudio.com](https://mossaistudio.com) — an indie AI automation studio built by Tarlow in Portland, OR. A single-page site with scroll-reveal animations, inline Cal.com booking, and a Web3Forms-powered contact form.

**Built with:** [Astro](https://astro.build) 7 + [Tailwind CSS](https://tailwindcss.com) v4 + Vanilla JS

## Sections

Header → Hero → About → Services → Process → FAQ → CTA (Booking / Contact) → Footer

## Project Structure

```
/
├── astro.config.mjs
├── package.json
├── public/
│   ├── CNAME
│   ├── favicon.ico / .svg
│   └── images/
├── src/
│   ├── assets/
│   ├── styles/global.css          # Tailwind + @theme tokens + animations
│   ├── scripts/reveal.js          # IntersectionObserver scroll animations
│   ├── layouts/Layout.astro       # HTML shell, fonts, SEO meta
│   ├── components/                # Header, Hero, About, Services, Process, FAQ, CTA, Footer, BackToTop
│   └── pages/index.astro
└── .github/workflows/deploy.yml
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview production build
```

## Configuration

### Cal.com Booking

Update the booking link in `src/components/CTA.astro`:

```js
calLink: "moss-ai-studio/30min",
```

### Web3Forms

Set your access key in a `.env` file:

```
PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

## Brand Palette

| Token              | Hex       | Example Usage              |
| :----------------- | :-------- | :------------------------- |
| `brand-cream`      | `#FDFBF7` | `bg-brand-cream`           |
| `brand-tan`        | `#EFE9DC` | `bg-brand-tan`             |
| `brand-sand`       | `#D7C49E` | `border-brand-sand`        |
| `brand-earth`      | `#2C2520` | `text-brand-earth`         |
| `brand-olive`      | `#5B6C4A` | `bg-brand-olive`           |
| `brand-olive-light`| `#7A8D67` | `text-brand-olive-light`   |
| `brand-sage`       | `#C4CFB6` | `bg-brand-sage`            |

## Deployment

Auto-deploys to GitHub Pages via GitHub Actions on push to `master`. The `dist/` directory can also be served from any static host (Cloudflare Pages, Netlify, Vercel).

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

Built by [Tarlow P.](https://github.com/DevTarlow)
