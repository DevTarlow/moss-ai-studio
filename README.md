# Moss AI Studio — Tailored Automation & AI Systems

Landing page for [mossaistudio.com](https://mossaistudio.com) — an indie AI automation studio built by Tarlow in Portland, OR. A multi-page static site with scroll-reveal animations, inline Cal.com booking, contact form, product detail pages, blog, and project case studies.

**Built with:** [Astro](https://astro.build) 7 (static SSG) + [Tailwind CSS](https://tailwindcss.com) v4 + Vanilla JS

## Site Structure

Landing page sections: SocialSidebar → Header → Hero → StatsBar → Apps (Products) → Custom Builds → Process → About → FAQ → CTA (Booking / Contact) → Footer → BackToTop

### Routing

| Route | Content |
|---|---|
| `/` | Landing page (all sections) |
| `/apps/` | All products listing |
| `/apps/:slug` | Product detail page (from `src/data/products.js`) |
| `/blog/` | Blog index |
| `/blog/:slug` | Blog post (from `src/content/blog/`) |
| `/projects/:slug` | Case study page (from `src/content/projects/`) |
| `/404` | Custom 404 page |

## Project Structure

```
/
├── astro.config.mjs              # SSG config, Tailwind v4 + sitemap
├── firebase.json                 # Firebase Hosting + Functions config
├── .firebaserc                   # Firebase project alias
├── package.json
├── .env.example                  # Environment variable reference
├── functions/
│   ├── index.js                  # Cloud Functions — /api/contact, /api/subscribe
│   └── package.json
├── public/
│   ├── CNAME
│   ├── robots.txt                # Points to sitemap-index.xml
│   └── images/                   # Product screenshots, headshot, logos
├── src/
│   ├── content/                  # Astro content collections (blog + projects Markdown)
│   │   ├── blog/                 # 3 blog posts
│   │   └── projects/             # 1 case study
│   ├── content.config.ts         # Collection schema + glob loader config
│   ├── data/                     # Plain JS arrays (products, FAQs, custom builds)
│   ├── styles/global.css         # Tailwind v4 imports + @theme tokens + animations
│   ├── scripts/reveal.js         # IntersectionObserver scroll animations
│   ├── layouts/Layout.astro      # HTML shell — SEO, OG meta, Google Fonts, JSON-LD
│   ├── components/               # .astro section components + shared modals
│   └── pages/
│       ├── index.astro           # Landing page — assembles all sections
│       ├── 404.astro             # Custom 404 page
│       ├── apps/
│       │   ├── index.astro       # All products listing
│       │   └── [...slug].astro   # Product detail pages
│       ├── blog/
│       │   ├── index.astro       # Blog index
│       │   ├── [...slug].astro   # Blog post pages
│       │   └── page/[page].astro # Paginated blog
│       └── projects/
│           └── [...slug].astro   # Case study pages
└── .github/workflows/deploy.yml  # GitHub Actions → Firebase Hosting
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

### Firebase Functions

Contact forms (CTA and waitlist) post to `/api/contact` and `/api/subscribe`. These endpoints are served by Firebase Cloud Functions defined in `functions/index.js`.

## Deployment

Auto-deploys to Firebase Hosting via GitHub Actions on push to `master`. The workflow builds the static site and deploys both `dist/` (hosting) and `functions/` (Cloud Functions) in a single step. Authenticates via `FIREBASE_SERVICE_ACCOUNT` repository secret.

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

Built by [Tarlow](https://github.com/DevTarlow)
