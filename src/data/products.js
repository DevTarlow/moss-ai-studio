export const products = [
  {
    slug: "handmade-checker",
    name: "Handmade Checker",
    image: "/images/products/handmade-checker-big-panel.png",
    tagline: "Instantly check any Etsy listing to see if it was made using AI. One click, a clear score.",
    platform: "Chrome Extension",
    description: [
      "A Chrome extension that adds a one-click \"Check Listing\" button to any Etsy product page.",
      "It analyzes the listing's title, description, and images to produce an AI Confidence Score with clear labels: Likely Handmade, Possibly AI-Assisted, or Highly Suspect.",
      "Built on a freemium model with a Pro tier that handles payments via Stripe.",
    ],
    features: [
      "One-click scan - click \"Check Listing\" on any Etsy page",
      "AI Confidence Score - Likely Handmade, Possibly AI-Assisted, or Highly Suspect",
      "Detailed evidence - see specific reasons behind every score",
      "Privacy-first - only analyzes listing title, description, and main photo",
      "Pro tier: 100 checks/day, full history, and auto-scan",
    ],
    pricing: [
      { label: "Free", price: "$0", period: null, description: "10 checks/day" },
      { label: "Pro", price: "$5", period: "/mo", description: "100 checks/day, detailed evidence" },
      { label: "Pro Annual", price: "$48", period: "/yr", description: "100 checks/day, save $12/year" },
    ],
    screenshots: ["/images/handmade-checker-results.png"],
    buyLink: "https://www.handmadechecker.com",
    externalBuy: true,
    productFaqs: [
      {
        q: "Does Handmade Checker work on Etsy only?",
        a: "Yes, the extension is built specifically for Etsy listing pages. I may expand to other marketplaces in the future based on user demand.",
      },
      {
        q: "How accurate is the AI detection?",
        a: "The tool uses Google Gemini to analyze listing text and images. It's quite good at spotting obvious AI-generated content - overly polished product photos with unnatural lighting, and generic AI-written descriptions. That said, no detection tool is perfect. I recommend using it as a tool to aid your decision-making when shopping.",
      },
      {
        q: "Will Etsy ban me for using this?",
        a: "No. The extension only reads publicly visible listing data that your browser already loads. It doesn't interact with Etsy's servers in any way beyond what a normal page visit does.",
      },
      {
        q: "What do I get with the Pro plan?",
        a: "Pro gives you 100 checks per day instead of 10, detailed explanations behind every AI Confidence Score, a full check history so you can review previous results, and auto-scan that runs on every listing page you visit without clicking.",
      },
      {
        q: "Can I cancel my Pro subscription anytime?",
        a: "Yes. You can cancel anytime from your account page on handmadechecker.com. Your Pro features remain active until the end of your current billing period.",
      },
    ],
  },
  {
    slug: "moss-crawl",
    name: "Moss Crawl",
    comingSoon: true,
    image: "/images/coming-soon.png",
    tagline: "Desktop app that scrapes web pages and scores them against your target keywords.",
    platform: "Desktop (Windows/Mac)",
    description:
      "Stop guessing what content ranks. MossCrawl lets you point, crawl, and score - see exactly how any page aligns with your SEO targets, niche keywords, or content filters.",
    features: [
      "Drop in keywords → get scored results per page",
      "Full local processing — your data never leaves your machine",
      "Export-ready reports for SEO research, niche discovery, content filtering",
    ],
    pricing: [{ label: "Pro License", price: "$39", period: "one-time", description: "Lifetime access, free updates" }],
    buyLink: "#",
    externalBuy: false,
    productFaqs: [
      {
        q: "When will Moss Crawl be released?",
        a: "I'm actively developing Moss Crawl and plan to launch early August. Join the waitlist below to get notified as soon as it's available, plus any early-bird pricing.",
      },
      {
        q: "Does Moss Crawl work on Mac and Windows?",
        a: "Yes. Moss Crawl is built as a cross-platform desktop application and runs on both Windows and macOS.",
      },
      {
        q: "What does the license include?",
        a: "The $39 license gives you lifetime access to Moss Crawl with free updates. You can install it on up to 3 computers you own. If you ever need to move it to a new machine, just deactivate the old one.",
      },
      {
        q: "Does Moss Crawl respect robots.txt?",
        a: "Moss Crawl follows standard crawling etiquette. It identifies itself with a user agent and respects robots.txt directives. It's designed for research and analysis, not aggressive scraping.",
      },
    ],
  },
];
