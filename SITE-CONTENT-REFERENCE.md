# Moss AI Studio — Complete Site Content Reference

> This document contains **all** content found on the Moss AI Studio website — copy, data, configuration, copywright, and architecture. Designed for another agent to fully understand the site without reading source files.

---

## Brand Identity

- **Brand:** Moss AI Studio
- **Voice:** Indie AI studio, solo developer, since 2014
- **Tagline:** "Building AI tools and custom software designed to run your business faster, without the enterprise price tag or agency overhead."
- **Location:** Portland, OR
- **Owner:** Tarlow P.
- **Domain:** `https://mossaistudio.com`
- **Social:** GitHub (`DevTarlow`), Bluesky (`moss-ai-studio.bsky.social`), X/Twitter (`DevTarlow`)
- **Email:** `tarlow@mossaistudio.com`

---

## Tech Stack

| Category | Choice |
|---|---|
| Framework | Astro 7 (SSG only, `output: "static"`) |
| CSS | Tailwind CSS v4 via `@tailwindcss/vite` |
| Content | Astro content collections (glob loader from Markdown) |
| Components | `.astro` files only (no React/Vue/Svelte) |
| Interactivity | Vanilla JS (inline `<script>` blocks) |
| Fonts | Google Fonts: Inter (`--font-sans`) + Plus Jakarta Sans (`--font-display`) |
| Backend | Firebase Cloud Functions v2 (Express) |
| Database | Firestore |
| CRM | Brevo (contact sync) |
| Hosting | Firebase Hosting + Cloud Functions |
| CI/CD | GitHub Actions, deploy to GitHub Pages on push to master |
| Scheduling | Cal.com embed (`moss-ai-studio/30min`) |
| Node | `>=22.12.0`, ESM (`"type": "module"`) |

### Commands
- `npm run dev` — Astro dev server (localhost:4321)
- `npm run build` — SSG build to `dist/`
- `npm run preview` — Preview production build

---

## Design System / Theme Tokens

Defined in `src/styles/global.css` `@theme` block:

```css
--color-bg: #F4F8FB          /* light blue-gray page background */
--color-bg-alt: #FFFFFF      /* white card/section background */
--color-text: #0F172A        /* slate-900 — primary text */
--color-text-muted: #64748B  /* slate-500 — secondary text */
--color-accent: #22C55E      /* green-500 — primary accent */
--color-accent-hover: #16A34A /* green-600 */
--color-accent-2: #3B82F6    /* blue-500 — secondary accent */
--color-border: #E2E8F0      /* slate-200 — borders */
--color-dark: #0F172A        /* slate-900 — dark backgrounds */

--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif
--font-display: "Plus Jakarta Sans", "Inter", ui-sans-serif, system-ui, sans-serif
```

### Utility Classes
- `reveal` — sets `opacity: 0; transform: translateY(16px)` with CSS transition
- `revealed` — sets `opacity: 1; transform: translateY(0)`
- `reveal-delay-1` through `reveal-delay-5` — staggered transition delays (0.08s increments)
- Scroll-reveal is driven by `IntersectionObserver` in `src/scripts/reveal.js` (threshold 0.05, rootMargin `0px 0px -30px 0px`)
- Content prose: `.content h2/h3/p/ul/li/a/strong` styled in `@layer base`

---

## Site Structure (Pages / Routes)

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Landing page — assembles all section components |
| `/apps/` | `src/pages/apps/index.astro` | All products listing page |
| `/apps/[slug]` | `src/pages/apps/[...slug].astro` | Product detail page (e.g. `/apps/handmade-checker`) |
| `/projects/[slug]` | `src/pages/projects/[...slug].astro` | Project case-study page |
| `/blog/` | `src/pages/blog/index.astro` | Blog listing (first 10 posts) |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Blog post detail |
| `/blog/page/[page]` | `src/pages/blog/page/[page].astro` | Paginated blog listing (page 2+) |

### Landing Page Section Order (`/`)
1. SocialSidebar (fixed right)
2. Header (fixed top)
3. Hero
4. StatsBar
5. Apps (product cards)
6. CustomBuilds
7. Process ("How It Works")
8. About
9. BlogPreview
10. FAQ
11. CTA (book call / contact form)
12. Footer
13. BackToTop button

---

## Page Content — Full Copy

### Hero Section (`#hero`)

**Badge:** "Moss AI Studio"

**Headline:** "Building Intelligent software to **help you grow.**" (green accent on "help you grow")

**Description:** "I develop AI tools and custom software designed to run your business faster, without the enterprise price tag or agency overhead."

**CTA buttons:**
- "Explore Products" (green button, links to `/#apps`)
- "Let's Create" (outline button, links to `/#builds`)

**Trust text:** "Trusted by solo founders, small teams, & businesses"

**Visual:** Floating moss ball logo image (`/images/moss_ball_logo.png`) with CSS `animate-float` (6s infinite ease-in-out) + click-to-bounce interaction.

**Background:** Gradient `#DCE8F5 → #E8F0FE → #E0ECF8`, fading to `--color-bg` at bottom.

---

### StatsBar (`#stats`)

Dark background (`--color-dark`). Four stats:

| Stat | Label |
|---|---|
| 15+ | Years Building |
| 1,000+ | Customers Served |
| 100+ | Automations Built |
| 99% | Uptime on Apps |

---

### Apps Section (`#apps`)

**Label:** "Our Products"
**Headline:** "Ready-to-use tools."
**Subtitle:** "Backed by a real person."

Two product cards in a grid. See **Products** section below for full product data. Each card shows image, platform badge, coming-soon badge (if applicable), name, tagline, pricing tiers, and action buttons. Action buttons: "Notify Me" (coming soon → waitlist modal), "Get License" (external buy link), or "Buy Now" (internal buy link). Also "Learn More" link to detail page.

Waitlist modal: fixed overlay with `WaitlistForm` component inside. Close via X button, click outside, or ESC key.

**Footer link:** "View All Products" → `/apps/`

---

### Custom Builds Section (`#builds`)

**Label:** "Smart"
**Headline:** "Custom Solutions Built For You."
**Subtitle:** "Need something I haven't built yet? Here's what I can do."

Three service cards:

**1. Custom Versions of My Apps**
- Summary: "My software, your twist."
- Detail: "Looking for custom versions of my software, but with your twist? I can adapt any of my existing products to your needs or integrate with a different platform, build custom features, white-label, or offer private deployment."
- Pricing: "Starting at ~$500"
- CTA: "Get a Quote" → `/#cta`

**2. Personalized Tools**
- Summary: "You describe it, I build it."
- Detail: "Custom scrapers, web apps, browser automations, extensions, AI integrations - if it involves repetitive work, I'll build a tool that saves you hours every week. Project-based pricing, with a free consultation."
- Pricing: "Starting at ~$500"
- CTA: "Get a Quote" → `/#cta`

**3. Private Consultations**
- Summary: "Plan your automation strategy."
- Detail: "Get a free 1-on-1 call to review your stack, spot automation opportunities, and find out what's worth building before you spend a dime."
- Pricing: "Free 30-min call"
- CTA: "Book a Call" → `/#cta`

---

### Process Section (`#process`)

**Label:** "How It Works"
**Headline:** "From Idea to Build — No Friction."

Four steps with numbered circles (01-04), connected by horizontal lines on desktop:

| # | Title | Summary | Detail |
|---|---|---|---|
| 01 | Browse & Buy | Pick an app and get started. | Browse the products above, pick what you need, and grab a license. Download it, run it, you're done. One-time purchases include free updates for the life of the product. |
| 02 | Custom Requests | Tell me your idea. | Need something that isn't listed? Reach out with what you're trying to solve. I'll ask clarifying questions and put together a simple proposal with scope, timeline, and cost. |
| 03 | Build & Deliver | I do the building. | Once we agree on the scope, I build your software. You get progress updates along the way. When it's ready, I deliver it with setup instructions and documentation. |
| 04 | Ongoing Support | I'm here after you ship. | All products come with free updates for as long as they're maintained. Custom builds include a post-delivery support window. Just email me directly - no ticket system. |

---

### About Section (`#about`)

**Label:** "About Me"
**Headline:** "Solo developer. 15+ years shipping software & solving problems."

**Photo:** Tarlow portrait (`/images/tarlow-cropped-headshot-small.jpg`) with badge overlay "Tarlow / Portland, OR"

**Narrative paragraphs:**

"I've been building and selling software since 2010 - from affiliate sites and WordPress setups to full-blown Windows automation tools under BoosterBots. Thousands of customers, every single one supported by me."

"After BoosterBots, I stepped away. Sold the domain, closed that chapter, and spent time on inner work while not sure if or when I'd come back to building."

"Then AI sparked my interest. For years I'd been watching the ideas to catch up with the tech. Now the tech is here, and the ideas are ready to be built. So, I started building again, and I haven't stopped since."

"Moss AI Studio is what came out of that. I build AI-powered tools and automation software that solve real problems. Like, detecting AI listings on Etsy, crawling the web for keyword research, bots that notify people about earthquakes, as well as build custom automations and applications for businesses or people that need to eliminate friction in their workflows."

"When you buy a product or hire me for a custom build, you're dealing with me from start to finish. I build it, I test it, I ship it, and I answer your emails. No account managers. No outsourced support. No surprises."

**Highlight callout:** "Thousands of customers since 2010. Direct support from the guy who created the software."

---

### Blog Preview Section (homepage)

**Label:** "Blog"
**Headline:** "Latest from the Blog"

Shows latest 3 blog posts as cards. Each card: optional image (or green accent bar), date, title (hover turns accent color), summary (3-line clamp).

**Footer link:** "View All Posts" → `/blog/`

---

### FAQ Section (`#faq`)

**Label:** "FAQ"
**Headline:** "Common Questions."
**Subtitle:** "People and clients usually ask me."

Three filter categories: "Products & Licensing", "Custom Builds", "General". Accordion items with smooth open/close animation (CSS `grid-template-rows: 0fr` / `1fr`).

#### Products & Licensing Questions

1. **How long is my license good for?**
   For one-time purchase products like MossCrawl, your license is permanent. You own the version you bought and receive free updates for the lifetime of the product. For subscription-based products like Handmade Checker Pro, your access continues as long as your subscription is active.

2. **How many computers can I use the software on?**
   You can install and activate your license on up to 3 computers that you personally own. If you need to install on more machines or use it across a team, reach out and I'll work out a fair arrangement.

3. **Do your apps get updates?**
   Yes. All products receive free updates for as long as they are actively maintained. Desktop apps check for updates automatically on launch. Chrome extensions update through the Chrome Web Store. I also post product update notes on the site when significant features ship.

4. **What if a platform changes and the app stops working?**
   I actively monitor the platforms my software integrates with. If a change breaks functionality, I work to ship a fix as quickly as possible - typically within days for critical issues. If I can't reasonably fix it and the product is no longer viable, I offer refunds within a reasonable window. I don't sell abandonware.

5. **Can I use your software on a Mac?**
   It depends on the product. MossCrawl is cross-platform and runs on both Windows and macOS. Browser extensions like Handmade Checker work on any platform that runs Chrome. Each product page lists its supported platforms clearly.

6. **How do I activate my license?**
   After purchase, you'll receive an email with your license key and download link. Enter the key during installation and you're set. If you ever lose your key, email me and I'll resend it.

#### Custom Build Questions

7. **How does the custom build process work?**
   First, you tell me what you need via email or a consultation call. I'll ask clarifying questions, then put together a proposal with scope, timeline, and cost. Once we agree, I build it and deliver it to you. You get a support window after delivery for fixes and adjustments.

8. **How much does a custom build cost?**
   Every project is different, but here are rough ranges: customizing one of my existing apps typically starts around $500. A new bespoke automation or scraper usually falls between $1,500 and $5,000 depending on complexity. I'll give you a firm quote before any work begins - no surprise bills.

9. **What if I need changes after delivery?**
   Every custom build includes a support window (typically 30 days) for bug fixes and minor adjustments. Larger changes or new features after that window are scoped and quoted separately. I want you to be happy with what you get, so I'm reasonable about this.

10. **Do you offer refunds?**
    For off-the-shelf products: if something doesn't work as described and I can't fix it within a reasonable time, you get your money back. For custom builds: the deposit is non-refundable once work begins, but I stand behind my work. If the delivered product doesn't match the agreed spec after a good-faith effort to fix it, we work out a fair resolution.

11. **Can you sign an NDA?**
    Yes. If your project involves sensitive business data or proprietary ideas, I'm happy to sign an NDA before our first detailed conversation. Just mention it when you reach out.

#### General

12. **How do I get in touch?**
    The fastest way is to book a free 15-minute consultation call via the link at the bottom of this page. You can also email me directly or send a message through the contact form. I typically respond within 24 hours on weekdays.

---

### CTA Section (`#cta`)

**Label:** "Let's Build Something Amazing"
**Headline:** "Book a Call or Send a Message."
**Subtitle:** "Book a free 30-minute call or send a message. No commitment - just a conversation."

Two tabs:
- **"Book a Call"** — Cal.com inline embed (`moss-ai-studio/30min`), month view layout
- **"Send a Message"** — Contact form posting to `/api/contact`. Fields: Name (required), Email (required), Company (optional), Message (required, textarea: "What are you looking to automate or build?" with placeholder "Tell me a little about your workflows, tools, and goals..."). Submit button: "Send Message". On success: "Thanks! I'll get back to you within 24 hours." On failure: "Something went wrong. Please try again or email me directly."

Tab switching supports keyboard navigation (ArrowLeft / ArrowRight).

---

### Footer

Dark background (`--color-dark`). Three columns:

**Column 1 — Brand:**
- Logo + "Moss AI Studio" (AI in green accent)
- Tagline: "Building AI tools and custom software designed to run your business faster, without the enterprise price tag or agency overhead."
- Social links: GitHub, Bluesky, X/Twitter

**Column 2 — Quick Links:**
- Products, Custom Builds, About, FAQ (all anchor links to `/#apps`, `/#builds`, `/#about`, `/#faq`)

**Column 3 — Get In Touch:**
- Schedule a Call → `/#cta`
- Email: `tarlow@mossaistudio.com`
- "Located in Portland, OR"

**Copyright:** `© {currentYear} Moss AI Studio. All rights reserved.`

---

### Header

Fixed top header. Logo + "Moss **AI** Studio" on left. Centered nav: Products (`/apps/`), Blog (`/blog/`), Custom Builds (`/#builds`), About (`/#about`), FAQ (`/#faq`). "Book a Call" CTA button on right (`/#cta`). Transparent when at top, adds `bg-white/90 backdrop-blur-md shadow-sm` on scroll past 60px.

---

### Social Sidebar

Fixed right sidebar (hidden on mobile, `md:flex`). Dark background. Vertical "Follow Me" text (`writing-mode: vertical-rl`). Three icons: GitHub, Bluesky, X/Twitter. Muted gray, hover to white.

---

### Back To Top Button

Fixed bottom-right (`md:right-[4.5rem]` to clear sidebar). Green accent, appears after 300px scroll. Smooth scroll to top on click.

---

## Products Data (`src/data/products.js`)

### Product 1: Handmade Checker

| Field | Value |
|---|---|
| `slug` | `handmade-checker` |
| `name` | Handmade Checker |
| `image` | `/images/products/handmade-checker-big-panel.png` |
| `tagline` | Instantly check any Etsy listing to see if it was made using AI. One click, a clear score. |
| `platform` | Chrome Extension |
| `comingSoon` | `false` |
| `buyLink` | `https://www.handmadechecker.com` |
| `externalBuy` | `true` |

**Description (array):**
1. A Chrome extension that adds a one-click "Check Listing" button to any Etsy product page.
2. It analyzes the listing's title, description, and images to produce an AI Confidence Score with clear labels: Likely Handmade, Possibly AI-Assisted, or Highly Suspect.
3. Built on a freemium model with a Pro tier that handles payments via Stripe.

**Features:**
- One-click scan - click "Check Listing" on any Etsy page
- AI Confidence Score - Likely Handmade, Possibly AI-Assisted, or Highly Suspect
- Detailed evidence - see specific reasons behind every score
- Privacy-first - only analyzes listing title, description, and main photo
- Pro tier: 100 checks/day, full history, and auto-scan

**Pricing:**
| Tier | Price | Description |
|---|---|---|
| Free | $0 | 10 checks/day |
| Pro | $5/mo | 100 checks/day, detailed evidence |
| Pro Annual | $48/yr | 100 checks/day, save $12/year |

**Product-specific FAQs:**
1. **Does Handmade Checker work on Etsy only?** — Yes, the extension is built specifically for Etsy listing pages. I may expand to other marketplaces in the future based on user demand.
2. **How accurate is the AI detection?** — The tool uses Google Gemini to analyze listing text and images. It's quite good at spotting obvious AI-generated content - overly polished product photos with unnatural lighting, and generic AI-written descriptions. That said, no detection tool is perfect. I recommend using it as a tool to aid your decision-making when shopping.
3. **Will Etsy ban me for using this?** — No. The extension only reads publicly visible listing data that your browser already loads. It doesn't interact with Etsy's servers in any way beyond what a normal page visit does.
4. **What do I get with the Pro plan?** — Pro gives you 100 checks per day instead of 10, detailed explanations behind every AI Confidence Score, a full check history so you can review previous results, and auto-scan that runs on every listing page you visit without clicking.
5. **Can I cancel my Pro subscription anytime?** — Yes. You can cancel anytime from your account page on handmadechecker.com. Your Pro features remain active until the end of your current billing period.

### Product 2: Moss Crawl

| Field | Value |
|---|---|
| `slug` | `moss-crawl` |
| `name` | Moss Crawl |
| `comingSoon` | `true` |
| `image` | `/images/coming-soon.png` |
| `tagline` | Desktop app that scrapes web pages and scores them against your target keywords. |
| `platform` | Desktop (Windows/Mac) |
| `buyLink` | `#` |
| `externalBuy` | `false` |

**Description (string):**
Stop guessing what content ranks. MossCrawl lets you point, crawl, and score - see exactly how any page aligns with your SEO targets, niche keywords, or content filters.

**Features:**
- Drop in keywords → get scored results per page
- Full local processing — your data never leaves your machine
- Export-ready reports for SEO research, niche discovery, content filtering

**Pricing:**
| Tier | Price | Description |
|---|---|---|
| Pro License | $39 one-time | Lifetime access, free updates |

**Product-specific FAQs:**
1. **When will Moss Crawl be released?** — I'm actively developing Moss Crawl and plan to launch early August. Join the waitlist below to get notified as soon as it's available, plus any early-bird pricing.
2. **Does Moss Crawl work on Mac and Windows?** — Yes. Moss Crawl is built as a cross-platform desktop application and runs on both Windows and macOS.
3. **What does the license include?** — The $39 license gives you lifetime access to Moss Crawl with free updates. You can install it on up to 3 computers you own. If you ever need to move it to a new machine, just deactivate the old one.
4. **Does Moss Crawl respect robots.txt?** — Moss Crawl follows standard crawling etiquette. It identifies itself with a user agent and respects robots.txt directives. It's designed for research and analysis, not aggressive scraping.

---

## Content Collection: Projects

Collection defined in `src/content.config.ts` with Zod schema. Glob loader from `src/content/projects/`.

### Project Schema
- `title` (string, required)
- `summary` (string, required)
- `problem` (string, required)
- `solution` (string, required)
- `results` (string, required)
- `metrics` (array of `{label, value}`, optional)
- `techStack` (array of strings, required)
- `image` (string, optional)
- `link` (URL string, optional)
- `featured` (boolean, default false)
- `pubDate` (date, required)

### Project: Handmade Checker

**Title:** Handmade Checker
**Summary:** A Chrome extension that detects AI-generated listings on Etsy using AI-powered analysis.
**Problem:** Etsy shoppers had no reliable way to tell if a listing was truly handmade or generated by AI. Listing photos and descriptions were becoming increasingly polished and suspicious, leaving buyers unsure if they were supporting real artisans or AI-operated storefronts.
**Solution:** We built a Chrome extension that adds a one-click "Check Listing" button to any Etsy page. It analyzes the listing's title, description, and images to produce an AI Confidence Score with clear labels - Likely Handmade, Possibly AI-Assisted, or Highly Suspect.
**Results:** A freemium model with $5/mo Pro tier handling payments through Stripe. Shipped as a full ecosystem spanning a Chrome extension, a marketing website, and a shared Supabase backend handling auth, credits, and subscriptions.
**Metrics:** Pro Tier: $5/mo
**Tech Stack:** Next.js, Supabase, Stripe, Chrome Extensions API, AI/LLM Analysis
**Link:** `https://www.handmadechecker.com`
**Featured:** true
**pubDate:** 2025-06-15

**Markdown body sections:**

**The Problem:** Etsy's marketplace is built on the promise of handmade goods. But as AI-generated images and product descriptions become more convincing, shoppers can no longer trust what they see. Listings that look handmade might be AI-generated storefronts with no actual craftsmanship behind them. Existing solutions required manual inspection and expertise. Most shoppers simply had no way to know.

**The Approach:** We designed Handmade Checker as a complete ecosystem with three integrated parts:
- **Chrome Extension:** The extension injects a "Check Listing" button directly into Etsy's product pages. One click sends the listing data (title, description, and main image) to our analysis backend that uses Google Gemini and returns a clear, actionable verdict.
- **Marketing Website:** A Next.js site (`handmadechecker.com`) serves as the storefront, handling landing page with feature overview and testimonials, pricing page comparing Free vs Pro tiers, Chrome Web Store install funnel, and blog for SEO and user education.
- **Shared Backend:** Both the extension and website share a single Supabase project for user authentication (auth handoff between extension and website via URL hash parameters), credit management (Free users get limited checks per day, Pro users get more), Stripe subscription billing ($5/mo or $48/year), and Edge Functions for checkout sessions, webhooks, and credit management.

**Key Results:**
- Clean auth handoff between the extension and website using URL hash-based session tokens
- Scalable credit system preventing abuse while keeping the free tier viable
- Freemium model with real conversion to paid subscriptions

---

## Content Collection: Blog

Collection defined in `src/content.config.ts` with Zod schema. Glob loader from `src/content/blog/`.

### Blog Schema
- `title` (string, required)
- `summary` (string, required)
- `pubDate` (date, required)
- `image` (string, optional)
- `tags` (array of strings, optional)

### Blog Post: "Building With AI in 2025 — What Actually Works"

**pubDate:** 2025-07-10
**Tags:** AI, IndieDev, Lessons
**Summary:** After a year of shipping AI-powered tools, here's what I've learned about building products that real people will pay for.

**Full body:**

**The hype is loud, the results are quiet** — Everyone's talking about AI. The VC-backed startups, the Twitter threads with 50k likes, the newsletters promising you'll 10x your output. But after spending a year actually building and shipping AI-powered products — real tools that real people pay for — I've learned that most of the advice out there is noise. Here's what actually works.

**Start with the problem, not the model** — The biggest trap I see: picking a model first, then looking for a problem to solve with it. "I want to build something with Claude" or "I'm going to make a GPT wrapper" — these are backwards. The products that have worked for me started with an annoying, specific problem that I or someone I knew was dealing with. AI happened to be the best tool for solving it. Not the other way around.

**Ship fast, charge early** — When I built Handmade Checker, I shipped the first working version in under two weeks. It was ugly. It had bugs. But it did the core thing: detect AI-generated listings on Etsy. I charged from day one. Free tier with daily limits, Pro tier at $5/month. Charging early answers the only question that matters: will anyone actually pay for this? Too many indie hackers build for months, launch, and then discover nobody wants to pay. Charge on day one. If nobody converts, you learned something valuable in two weeks instead of six months.

**The tech stack matters less than you think** — Use what you know. I've built products with Next.js, with Python, with Chrome extensions — the tech stack never made the difference between success and failure. What mattered: how fast I could ship, how well I understood the problem, and whether I was building something people actually wanted.

**Support is your competitive advantage** — As a solo developer, you have one advantage that bigger companies can't match: you. The person who built the product answers support emails. The person who answers support emails fixes the bugs. When a user of Handmade Checker emails me about a false positive, I can trace through the code, find the issue, and deploy a fix — sometimes within hours. No ticket system. No triage queue. Just me and the code. That's a superpower. Don't outsource it.

**What's next** — I'm continuing to build. More products, more custom builds, more tools that solve real problems. If you've got an idea or a problem that needs solving, reach out. I'm always happy to talk shop.

---

## Backend API (Firebase Cloud Functions)

File: `functions/index.js` — Express app mounted as `api` function.

### POST `/api/contact`
- Validates `name`, `email`, `message` are present and non-empty
- Validates email format with regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Saves to Firestore `contact_messages` collection with `{name, email, company, message, created_at}`
- Async syncs to Brevo CRM (non-blocking, errors logged)
- Returns `{success: true}` on success

### POST `/api/subscribe`
- Validates `email` is present and valid format
- Validates `source` field (defaults to "website")
- Saves to Firestore `subscribers` collection (doc keyed by email) with `{email, source, created_at}`
- Async syncs to Brevo CRM (non-blocking, errors logged)
- Returns `{success: true}` on success

### Environment Secrets
- `BREVO_API_KEY` — Brevo API key for CRM sync
- `BREVO_LIST_ID` — Brevo contact list ID

### Settings
- Max instances: 10
- CORS: enabled

---

## UI Component Behaviors

### Scroll-reveal animation
- `reveal.js` uses `IntersectionObserver` with `threshold: 0.05`, `rootMargin: "0px 0px -30px 0px"`
- Elements with class `.reveal` get `.revealed` class when intersecting viewport
- CSS transitions: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)`, `transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)`
- Delay classes: `reveal-delay-1` through `reveal-delay-5` (0.08s to 0.40s)

### Header scroll behavior
- Transparent at top of page
- At `scrollY > 60px`: adds `bg-white/90`, `backdrop-blur-md`, `shadow-sm`, border color `var(--color-border)`

### Back-to-top button
- Appears at `scrollY > 300px`
- Smooth scroll to top on click

### FAQ accordions (main FAQ page)
- `.faq-toggle` buttons toggle next sibling `.faq-content`
- Uses `grid-template-rows: 0fr` / `1fr` for smooth animation
- Chevron rotates 180deg when open
- Filter buttons: click to filter by category (`data-category`), click again to show all

### Product FAQ accordions (product detail page)
- Identical mechanism but using `.app-faq-toggle` class

### Waitlist form / modal
- `WaitlistForm.astro` — reusable form posting to `/api/subscribe` with hidden `source` field set to `moss-crawl-waitlist`
- Bell icon, "Get notified when it launches" heading, email input, "Notify Me" button
- Success: "You're on the list! I'll let you know when Moss Crawl launches."
- Modal: fixed overlay with close via X, click-outside, or ESC

### Contact form
- Posts to `/api/contact` via fetch
- Loading state disables button, shows "Sending..."
- Success: "Thanks! I'll get back to you within 24 hours." (green text)
- Error: "Something went wrong. Please try again or email me directly." (red text)

### Cal.com embed
- Script loads from `https://app.cal.com/embed/embed.js`
- `calLink: "moss-ai-studio/30min"`
- Layout: month_view, uses slots view on small screens
- Inline embed in `#my-cal-inline-30min` div

### CTA tab switching
- Two tabs: "Book a Call" and "Send a Message"
- Active tab: white bg, text color, shadow
- Inactive tab: muted text color
- Keyboard navigation: ArrowLeft/ArrowRight cycles tabs

### Image lightbox (product detail page)
- Click `.product-image-btn` to open full-screen overlay
- Close via X button, click outside, or ESC key
- Image constrained to `max-h-[90vh] max-w-[90vw]`

### Moss ball bounce (Hero)
- Continuous CSS float animation (6s infinite)
- Click interaction: adds/removes `.bounce` class for a 0.55s bounce animation

---

## SEO / Structured Data

### Layout defaults
- Title: "Moss AI Studio — Indie AI Software & Custom Automation"
- Description: "Buy ready-to-use AI apps or hire me to build custom automation tools. Every product built, tested, and supported by a solo developer in Portland, OR."
- Canonical: `https://mossaistudio.com` (or page-specific)
- OG image: `https://mossaistudio.com/images/moss-ai-studio-logo.jpg`
- Twitter card: `summary_large_image`

### JSON-LD Structured Data
- **Layout.astro:** `SoftwareApplication` schema — name, description, URL, applicationCategory (BusinessApplication), operatingSystem (Windows, Mac, Chrome), offers
- **Project detail page:** `BreadcrumbList` schema — Home → Projects → [Project Name]

---

## Images / Assets

| Path | Usage |
|---|---|
| `/images/moss_ball_logo.png` | Logo (hero, header, footer) |
| `/images/moss-ai-studio-logo.jpg` | OG image |
| `/images/tarlow-cropped-headshot-small.jpg` | About section portrait |
| `/images/coming-soon.png` | Moss Crawl placeholder |
| `/images/handmade-checker-results.png` | Handmade Checker screenshot |
| `/images/custom-app-development.png` | (not directly referenced in source) |
| `/images/personalized-tools.png` | (not directly referenced in source) |
| `/images/private-consultation.png` | (not directly referenced in source) |
| `/images/products/handmade-checker-big-panel.png` | Handmade Checker product image |
| `/favicon.ico` | Favicon |
| `/favicon.svg` | Favicon (SVG) |

Product images are referenced as `/images/products/<slug>.png` from `public/images/products/`.

---

## Environment / Configuration

### Astro config (`astro.config.mjs`)
- Site URL: `https://mossaistudio.com`
- Integrations: `@astrojs/sitemap`
- Vite plugins: `@tailwindcss/vite`

### Firebase config (`firebase.json`)
- Functions source: `functions/`
- Hosting public: `dist/`
- Rewrites: `/api{,/**}` → `api` function
- Emulators: functions (5001), hosting (5005), firestore (8081), UI enabled

### CI
- Push to `master` → `.github/workflows/deploy.yml`
- Builds and deploys to GitHub Pages
