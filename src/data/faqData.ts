export interface FaqItem {
  question: string;
  answer: string;
  keywords: string[];
  category: "Technical SEO" | "Web Development" | "Google Ads & Speed" | "Strategy" | "Hiring & Pricing" | "Local SEO" | "AI & Technical SEO";
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "How do I hire a reliable SEO specialist near me in India?",
    answer: "Look for an SEO specialist in India with proven, verifiable case studies, quantitative ranking results (SERP position, organic traffic, Core Web Vitals), White Hat methodology, and a transparent reporting system. Rohit Gupta offers a free website SEO audit with a clear ranking roadmap before you commit any budget.",
    keywords: ["hire SEO specialist India", "SEO expert near me", "SEO services India"],
    category: "Hiring & Pricing"
  },
  {
    question: "How much does it cost to hire an SEO expert in India?",
    answer: "SEO specialist services in India typically range from ₹15,000 to ₹80,000 per month for monthly SEO; one-time SEO audits start near ₹5,000–₹10,000. Rates vary by competition, industry, and the number of targeted keywords. Contact Rohit Gupta for an exact, requirement-based quote with milestone pricing.",
    keywords: ["SEO cost India", "hire SEO expert price", "SEO retainer India"],
    category: "Hiring & Pricing"
  },
  {
    question: "Where can I find the best SEO specialist in Noida or Delhi?",
    answer: "The best SEO specialists are proven by results, not location. Rohit Gupta works from Ayodhya and is available for on-site and remote projects in Noida, Delhi, Gurgaon, Ghaziabad, Lucknow, Greater Noida and all of India. Book a call to verify rankings and growth reports before hiring.",
    keywords: ["SEO specialist Noida", "SEO expert Delhi", "SEO consultant NCR"],
    category: "Local SEO"
  },
  {
    question: "What is the difference between an SEO specialist, SEO executive and SEO consultant in India?",
    answer: "An SEO executive executes day-to-day on-page/off-page tasks, an SEO specialist plans and improves technical/strategic campaigns, and an SEO consultant advises and audits across business goals. For end-to-end growth you need a specialist who also builds — Rohit Gupta is a full stack web developer and technical SEO specialist in one.",
    keywords: ["SEO executive India", "SEO specialist role", "SEO consultant hiring"],
    category: "Hiring & Pricing"
  },
  {
    question: "How long does SEO take to show results in India?",
    answer: "After technical SEO corrections, Google typically re-crawls within 7–14 days. Rank improvements begin within 3–6 weeks and sustainable #1 rankings usually in 3–6 months, depending on keyword competition and domain authority. New websites in India usually see organic traffic growth within 60–90 days.",
    keywords: ["SEO timeline India", "how long SEO results", "Google ranking time"],
    category: "Strategy"
  },
  {
    question: "Why should I hire Rohit Gupta as my SEO expert?",
    answer: "Rohit combines 2 years of White-hat SEO with real full stack development (React, Next.js). He has optimized 200+ websites, delivered 4,700%+ organic traffic surges, 99/100 Core Web Vitals, and Rank #1 results for both local Delhi/Noida businesses and global clients.",
    keywords: ["hire Rohit Gupta", "SEO expert India", "full stack web developer SEO"],
    category: "Hiring & Pricing"
  },
  {
    question: "What is the difference between White Hat SEO and Black Hat SEO?",
    answer: "White Hat SEO follows Google Search Essentials with ethical technical and content strategies that build durable rankings. Black Hat SEO uses shortcuts (PBNs, cloaking, keyword stuffing) that trigger permanent Google SpamBrain penalties. Rohit only uses proven White-hat, AI-search-ready methods.",
    keywords: ["White Hat SEO", "Google SpamBrain", "Ethical SEO"],
    category: "Strategy"
  },
  {
    question: "Does website speed and Core Web Vitals matter for ranking #1 on Google?",
    answer: "Yes. Page experience signals like LCP (under 2.5s), INP (under 200ms) and CLS (under 0.1) are Google ranking factors and directly affect Google Ads Quality Score. Rohit re-engineers websites to 99–100/100 Lighthouse so they rank higher and convert better.",
    keywords: ["Core Web Vitals", "Lighthouse 100", "Google ranking speed"],
    category: "Technical SEO"
  },
  {
    question: "Can my website rank in AI search (ChatGPT, Google AI Overviews, Bing Copilot)?",
    answer: "Yes. AI search relies on entity graph signals, JSON-LD structured data and clear E-E-A-T content. Rohit implements schema-rich, entity-focused optimization so your business gets cited across Google AI Overviews, ChatGPT and Bing Copilot — protecting your traffic in the AI era.",
    keywords: ["AI search optimization", "Google AI Overviews", "ChatGPT SEO India"],
    category: "AI & Technical SEO"
  },
  {
    question: "How does Rohit Gupta approach Keyword Research, SERP Intent Clustering, and Backlink Audit?",
    answer: "Rohit utilizes Ahrefs, Semrush, and Screaming Frog to group high-converting transactional and informational keywords into semantic clusters. He performs backlink audits to disavow toxic links while building high DA dofollow contextual backlinks via genuine guest posting and broken link reclamation.",
    keywords: ["Keyword Research", "Ahrefs & Semrush", "Backlink Audit"],
    category: "Strategy"
  },
  {
    question: "Does website loading speed directly affect Google Ads Quality Score and Cost-Per-Click (CPC)?",
    answer: "Yes! Google Ads calculates Landing Page Experience as a core component of Quality Score (1-10). A fast, responsive Next.js/React landing page with sub-second TTFB and low bounce rate elevates your Quality Score, which directly decreases your Cost-Per-Click (CPC) by 25% to 40% while increasing Ad Rank placement.",
    keywords: ["Google Ads CPC", "Quality Score", "ROAS Optimization"],
    category: "Google Ads & Speed"
  },
  {
    question: "What is the difference between On-Page SEO and Off-Page SEO?",
    answer: "On-Page SEO covers everything you control inside your website — title tags, meta descriptions, headings, content quality, internal links, schema markup and Core Web Vitals. Off-Page SEO covers everything outside it — backlinks, brand mentions, citations, guest posts and digital PR. Both build authority; on-page makes your page relevant, off-page makes it trustworthy. Rohit Gupta applies a combined on-page + off-page strategy across 200+ websites.",
    keywords: ["On-Page SEO", "Off-Page SEO", "SEO strategy India"],
    category: "Strategy"
  },
  {
    question: "How many backlinks do I need to rank #1 on Google?",
    answer: "There is no fixed number. Google ranks by the quality and authority of referring domains, relevance of links, and anchor-text distribution, not raw link count. A single editorial link from a high-DA, industry-relevant site can outrank hundreds of low-quality directory links. A predictable cadence of 5–15 quality backlinks per month, with 70%+ branded anchors, builds durable authority. Rohit builds links through genuine guest posts, broken-link reclamation and digital PR.",
    keywords: ["backlinks quantity", "link building", "Google ranking authority"],
    category: "Strategy"
  },
  {
    question: "Which is better for SEO: Next.js or React.js?",
    answer: "For SEO, Next.js wins almost every time. Plain React apps are client-side rendered, so search engines and AI crawlers often see an empty shell. Next.js gives you server-side rendering, static generation and incremental static regeneration out of the box, which means fully crawlable HTML, near-instant LCP and native image/metadata optimization. Rohit builds SEO-first sites on Next.js 15 while using React for app-like interfaces inside them.",
    keywords: ["Next.js SEO", "React SEO", "React vs Next.js"],
    category: "Web Development"
  },
  {
    question: "WordPress vs Shopify: which platform should I choose?",
    answer: "Choose WordPress when you need full content control, blogging strength and unlimited customization via themes, plugins and full theme/plugin development. Choose Shopify when you need a fast-to-launch, secure, out-of-the-box e-commerce store with managed hosting, Shopify SEO apps and fewer maintenance concerns. Both are strong if developed correctly — Rohit builds and optimizes WordPress and Shopify stores with structured data, speed and conversion-first design.",
    keywords: ["WordPress vs Shopify", "e-commerce platform", "Shopify SEO India"],
    category: "Web Development"
  },
  {
    question: "What is the MERN stack and can a MERN website rank on Google?",
    answer: "MERN stands for MongoDB, Express.js, React and Node.js — a JavaScript-only stack for building full stack web apps. SEO on MERN is possible but needs care: because React renders client-side, you must add server-side rendering, prerendering or hybrid rendering so crawlers get HTML. The safest path is to pair React UI with a Next.js layer for public pages. For 200+ client sites, Rohit delivers MERN and Next.js architectures that keep both developer speed and Google crawlability.",
    keywords: ["MERN stack developer", "MERN SEO", "full stack web development"],
    category: "Web Development"
  },
  {
    question: "How do I hire a dedicated SEO expert or hire an SEO expert team in India?",
    answer: "You can hire Rohit Gupta directly as your dedicated SEO specialist or deploy a full SEO expert team. Rohit offers transparent monthly retainers covering technical audits, Core Web Vitals (99/100), keyword clustering, 100% White Hat contextual link building, and AI search optimization with zero agency overhead.",
    keywords: ["hire dedicated seo expert india", "hire seo expert team", "hire seo specialist", "hiring an seo expert"],
    category: "Hiring & Pricing"
  },
  {
    question: "Do you offer WordPress development company services for custom themes and WooCommerce?",
    answer: "Yes! Rohit provides custom WordPress development company solutions including bespoke native Gutenberg themes, WooCommerce store optimization, sub-second speed tuning (LCP < 1.2s), malware cleanup, and Headless WordPress architectures using Next.js 15 frontends.",
    keywords: ["wordpress development company", "wordpress development company in india", "woocommerce development", "custom wordpress development"],
    category: "Web Development"
  },
  {
    question: "What are the top AEO tools available in India for AI search optimization?",
    answer: "The leading AEO tools available in India include Perplexity Pro / API, Semrush AI Search Overviews Tracker, Ahrefs Web Explorer, Schema App JSON-LD entity graph builders, and Rohit Gupta's proprietary AI Lab tools for generating llms.txt and AI bot crawler directives.",
    keywords: ["aeo tools available in india for ai search", "AEO tools India", "AI search optimization tools", "ChatGPT SEO tools"],
    category: "AI & Technical SEO"
  },
  {
    question: "Where can I read client reviews for Rohit Web Developer & SEO Expert Freelancer in Noida?",
    answer: "You can read verified client reviews and case study feedback on the Testimonials page (/testimonials/) as well as on verified LinkedIn and Google profiles. Rohit has an established track record across Delhi NCR and global clients for 4,700%+ organic traffic growth.",
    keywords: ["rohit web developer & seo expert freelancer noida reviews", "rohit gupta reviews", "seo expert in noida reviews"],
    category: "Hiring & Pricing"
  },
  {
    question: "What are the best SEO tools in India in 2026 for small businesses?",
    answer: "For Indian small businesses, start free with Google Search Console, Keyword Planner, PageSpeed Insights, Google Trends and the Google Business Profile dashboard. When budgets allow, Semrush Pro or Ahrefs Lite (₹5,000–₹8,600/month billed annually) add Indian-language keyword volume, rank tracking and backlink analysis. Screaming Frog is a one-time ~₹15,000 licence for deep technical crawls.",
    keywords: ["best seo tools india", "seo tools price india", "free seo tools for small business"],
    category: "Strategy"
  },
  {
    question: "Is SEO or Google Ads better for my business in 2026?",
    answer: "Google Ads gives instant visibility the day your campaign launches, ideal for promotions, launches and local competition where budgets are strong. SEO builds durable, compounding rankings that keep delivering after the work is done, but takes 3–6 months. Most successful clients run both — ads for immediate leads, SEO for long-term margins — and most should shift budget toward SEO after ranking gains materialise.",
    keywords: ["seo vs google ads", "SEO or Google Ads better India", "digital marketing ROI"],
    category: "Google Ads & Speed"
  },
  {
    question: "Can a new website rank on Google? How long does it take?",
    answer: "Yes, but plan a 6–12 month horizon. New domains lack trust and backlinks, so the winning strategy is targeting low-competition long-tail keywords, publishing genuinely helpful content weekly, earning 5–15 quality white hat links per month, and fixing every technical weakness early. Rohit Gupta typically sees new Indian websites on page one for easy-medium keywords within 3–5 months and sustainable #1 positions in 6–12 months.",
    keywords: ["new website seo", "how long new website rank google", "SEO for new website India"],
    category: "Strategy"
  },
  {
    question: "What does a professional SEO audit include in 2026?",
    answer: "A modern SEO audit covers crawlability and indexation, duplicate and thin content, Core Web Vitals field data, internal linking and site architecture, schema/structured data validation, backlink health and toxic link detection, keyword ranking benchmarks, local SEO and Google Business Profile health, mobile usability, and AI search readiness (llms.txt, entity signals, AI-overview citability). Rohit Gupta delivers a prioritised fix roadmap with effort estimates for every finding.",
    keywords: ["SEO audit checklist", "technical SEO audit cost", "free website SEO audit"],
    category: "Technical SEO"
  },
  {
    question: "Do you provide SEO services for eCommerce stores (WooCommerce and Shopify)?",
    answer: "Yes. Rohit Gupta specialises in eCommerce SEO for WooCommerce and Shopify stores: product page schema, category page optimisation, cannibalisation fixes, faceted navigation cleansing, Core Web Vitals speed optimisation, and AI-search-ready descriptions. Deliverables include ranking tracking for product keywords and technical fixes executed directly in the store's codebase.",
    keywords: ["ecommerce seo india", "shopify seo expert", "woocommerce seo services"],
    category: "Technical SEO"
  },
  {
    question: "Is SEO worth it for small local businesses in 2026?",
    answer: "For local businesses, SEO is the highest-ROI channel available because local searches mean ready-to-buy customers. The fastest wins come from the Google Maps 3-Pack via a fully optimised Google Business Profile, steady reviews and local citations — often ranking within 4–8 weeks — followed by geo-targeted landing pages for 'near me' and city + service queries. Rohit Gupta's local SEO services in Noida, Delhi and India are built exactly around this sequence.",
    keywords: ["is seo worth it", "local SEO ROI India", "SEO for local business"],
    category: "Local SEO"
  }
];
