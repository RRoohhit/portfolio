import { ExperienceItem, EducationItem, ProjectCaseStudy, SeoMetricTrend, BacklinkItem } from "../types";

export { BLOG_POSTS } from "./blogPosts";

export const ROHIT_PROFILE = {
  name: "ROHIT GUPTA",
  title: "Rohit — Freelance Web Developer, SEO Expert & Digital Marketing Consultant",
  seoTitle: "SEO Expert in India | Digital Marketing & Web Development | Rohit Gupta",
  phone: "+91 96966 21216",
  email: "rohitguptacodec96@gmail.com",
  location: "Mamura, Sector 66, Noida, Uttar Pradesh (Current) · Ayodhya, Uttar Pradesh – 272130 (Permanent)",
  serving:
    "Serving clients across all of India — Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Lucknow, Ayodhya & 100+ cities — plus remote clients worldwide (USA, UK, UAE, Canada, Australia & more)",
  summary: "Rohit Gupta is a top-rated SEO expert, full-stack web developer freelancer, and digital marketing consultant with 2+ years of verified White Hat SEO experience. He works with businesses across all of India and with remote clients internationally — from Mumbai startups to London eCommerce brands to US SaaS companies. Whether you need to hire an SEO expert in India, hire a dedicated SEO specialist, hire an SEO expert team, engage a custom WordPress development company, or optimize for AI search (AEO tools, ChatGPT & Google AI Overviews), Rohit delivers sub-second speeds (99/100 Core Web Vitals) and sustainable #1 Google rankings — in India or anywhere in the world.",
  certifications: [
    { title: "Infosys Certified", course: "Core Java Programming Revisited", issuer: "Infosys" },
    { title: "Cisco Certified", course: "Computer Networks Essentials", issuer: "Cisco" }
  ],
  areasOfInterest: [
    "Hire SEO Expert India & Dedicated SEO Services",
    "WordPress Development Company & Custom Themes",
    "Technical SEO & Core Web Vitals Optimization",
    "White Hat SEO Firm & Link Building",
    "Answer Engine Optimization (AEO Tools & GEO)",
    "Full Stack React & Next.js Development",
    "Rohit Digital Marketing Services & Google Ads",
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "SEO Specialist & Web Developer",
    company: "Megamind Technosoft",
    location: "Pandav Nagar Complex, Ganesh Nagar, Delhi – 110092",
    period: "2026 – Present",
    isCurrent: true,
    responsibilities: [
      "Design and develop responsive, scalable, and SEO-friendly websites using React.js, Next.js, and Node.js.",
      "Optimize website speed, Core Web Vitals (LCP < 1.2s, INP < 50ms, CLS = 0), and overall performance.",
      "Implement advanced Technical SEO, On-Page SEO, and Off-Page link velocity strategies.",
      "Perform automated Keyword Research, Competitor SERP Analysis, and programmatic SEO audits.",
      "Manage Google Ads campaigns, improve quality scores, and drive high-intent organic conversion traffic."
    ]
  },
  {
    id: "exp-2",
    role: "SEO Specialist & Developer",
    company: "Thingbiz Hightech Private Limited",
    location: "Sector-63, Noida, Uttar Pradesh",
    period: "2025 – 2026",
    isCurrent: false,
    responsibilities: [
      "Executed On-Page, Off-Page, and Technical SEO strategies across multiple high-traffic client portals.",
      "Performed in-depth Keyword Research, Competitor Analysis, and automated crawl audits using Semrush & Ahrefs.",
      "Optimized website performance to improve Google search rankings and generate organic traffic surges.",
      "Managed and optimized Google Ads campaigns with high ROI and targeted landing page performance.",
      "Implemented ethical White Hat SEO techniques, schema structured data, and advanced link building."
    ]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "Dronacharya Group of Institutions, AKTU University, Greater Noida, UP",
    period: "2021 – 2025",
    grade: "CGPA: 7.32 | 68%"
  },
  {
    degree: "Intermediate (Class XII) – UP Board",
    institution: "Adarsh Inter College, Makhaura Dham, Basti",
    period: "2020 – 2021",
    grade: "61%"
  },
  {
    degree: "High School (Class X) – UP Board",
    institution: "Adarsh Inter College, Makhaura Dham, Basti",
    period: "2019 – 2020",
    grade: "71%"
  }
];

export const TECHNICAL_SKILLS = [
  { category: "Frontend & CMS", items: ["React.js", "Next.js", "WordPress Development", "WooCommerce", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "Backend Development", items: ["Node.js", "Express.js", "REST API Development", "Middleware", "SSR / SSG / ISR"] },
  { category: "Databases & DevOps", items: ["MongoDB", "MySQL", "PostgreSQL", "Git / GitHub", "Docker", "Vercel", "Linux / Nginx"] },
  { category: "SEO & Growth", items: ["Technical SEO", "White Hat SEO", "Hire Dedicated SEO", "On-Page SEO", "Off-Page SEO", "Schema JSON-LD", "Core Web Vitals", "Google Search Console", "Google Ads"] },
  { category: "AI Search & AEO", items: ["AEO Tools", "GEO Optimization", "ChatGPT Search", "Perplexity AI", "llms.txt Engineering", "AI Overviews"] }
];

export const SEO_TOOLS = [
  { name: "Google Search Console", desc: "Index monitoring, sitemaps, coverage & query performance analysis", icon: "Search" },
  { name: "Google Ads & Keyword Planner", desc: "Pay-Per-Click campaign management & search volume forecasting", icon: "TrendingUp" },
  { name: "Ahrefs & Semrush", desc: "Competitor gap analysis, backlink health & keyword rank tracking", icon: "Target" },
  { name: "Google PageSpeed Insights", desc: "Lighthouse audit, Core Web Vitals analysis & lab performance metric tracking", icon: "Zap" },
  { name: "Screaming Frog SEO Spider", desc: "Technical crawl audits, duplicate content detection & canonical checks", icon: "Bug" },
  { name: "AEO Tools & AI Accelerators", desc: "Perplexity API, Gemini AI & OpenAI LLMs for semantic content optimization & schema generation", icon: "Cpu" }
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "megamindindia-dynamic-website-seo",
    title: "MegaMind India — Dynamic Biometric & Security Website (Next.js + Supabase)",
    category: "Full Stack Development & Technical SEO",
    client: "MegaMind Technosoft, New Delhi",
    timeline: "2025 – 2026 · Designed, built & SEO-optimized from scratch",
    summary:
      "Maine megamindindia.in ko zero se banaya hai — 511+ products wala dynamic catalog, admin panel se products aur blogs manage karne ka system, aur saath me complete SEO setup: technical SEO, on-page, off-page base, local SEO, Google Business Profile, aur AI search (AEO/GEO) taaki Google ke saath ChatGPT, Perplexity aur AI Overviews se bhi enquiries aayein.",
    liveUrl: "https://www.megamindindia.in/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Admin Panel CMS", "Technical SEO", "Local SEO", "AEO/GEO"],
    beforeImageUrl: "/projects/megamindindia-home.gif",
    afterImageUrl: "/projects/megamindindia-home.gif",
    beforeDescription:
      "Shuruaat me koi structured, fast aur SEO-ready website nahi thi — products aur blogs manually manage karne padte, category-wise pages missing the, aur Google Maps, local search aur AI search ke liye proper setup nahi tha.",
    afterDescription:
      "Ab ek proper dynamic website live hai — Supabase-backed admin panel se products aur blogs khud add hote hain, 511+ hardware models ka searchable catalog, category pages, product finder, GST calculator, quote cart, aur SEO + AEO + GEO foundation ke saath. Screenshot upar live homepage ka hai.",
    metrics: [
      { label: "Product Catalog", before: "Manual / unstructured", after: "511+ models live", improvement: "Dynamic CMS", unit: "" },
      { label: "Content Management", before: "Developer-dependent", after: "Self-managed admin panel", improvement: "Zero-code updates", unit: "" },
      { label: "Site Architecture", before: "Flat pages", after: "Category + product + blog hierarchy", improvement: "Crawl-ready", unit: "" },
      { label: "SEO Foundations Shipped", before: "0", after: "20+ setups", improvement: "Full setup", unit: "" },
      { label: "Local + GBP Setup", before: "Missing", after: "NAP + Delhi HQ + Maps linked", improvement: "Local-ready", unit: "" },
      { label: "AI-Search Readiness", before: "Unstructured", after: "FAQ + entity content", improvement: "AEO/GEO ready", unit: "" }
    ],
    technicalHighlights: [
      "Next.js + TypeScript + Tailwind me scratch se build — Supabase se dynamic products aur blogs, admin panel se bina code ke updates.",
      "Product, Blog, FAQ aur LocalBusiness JSON-LD schema, XML sitemap, robots.txt aur clean URL architecture.",
      "On-page SEO: keyword-mapped titles, meta descriptions, H1–H3 structure, image alt tags aur category-to-product internal linking.",
      "Local SEO + Google Business Profile: Delhi HQ (Pandav Nagar, Ganesh Nagar) NAP consistency, service-area pages aur Maps linkage.",
      "AEO/GEO: FAQ sections, entity-based copy aur structured content taaki ChatGPT, Perplexity, Gemini aur Google AI Overviews cite kar sakein.",
      "Lead paths: quote cart, call buttons, WhatsApp, contact forms — har page enquiry ke liye optimized."
    ],
    codeComparison: {
      beforeSnippet: `<!-- Pehle: static list, har product haath se add karna padta -->\n<div class="product-list">\n  <div class="item">Fingerprint Device 1</div>\n  <div class="item">Fingerprint Device 2</div>\n  <!-- naya product = HTML edit + upload -->\n</div>\n<!-- No schema, no sitemap logic, no CMS -->`,
      beforeLanguage: "html",
      afterSnippet: `// Ab: Supabase se dynamic products + Product JSON-LD schema\nimport { createClient } from '@/lib/supabase';\n\nexport async function getProducts(category: string) {\n  const supabase = createClient();\n  const { data } = await supabase\n    .from('products')\n    .select('id, name, slug, price, image, specs')\n    .eq('category', category)\n    .eq('published', true);\n  return data ?? [];\n}\n\n// Har product page par Product + Breadcrumb schema,\n// XML sitemap auto-update, admin panel se publish.`,
      afterLanguage: "typescript"
    },
    toolsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google Search Console", "Google Business Profile", "Screaming Frog", "Ahrefs / Semrush"],
    keywordsTargeted: ["biometric attendance system india", "access control systems delhi", "hire seo expert india", "technical seo specialist", "local seo services delhi ncr", "google business profile optimization", "aeo geo ai search optimization", "off page seo backlink services"]

  },
  {
    id: "attendancesolution-website-seo",
    title: "AttendanceSolution.in — Biometric Software & Services Website (HTML + Tailwind)",
    category: "Web Development & SEO",
    client: "MegaMind Technosoft — Attendance Solution division",
    timeline: "2025 – 2026 · Designed, built & SEO-optimized from scratch",
    summary:
      "attendancesolution.in maine scratch se banayi hai — biometric attendance machines ke saath cloud HRMS software ko samjhane wali clean, fast marketing website. HTML, CSS, JavaScript aur Tailwind par built, aur is par bhi full SEO kiya: technical, on-page, local, GBP support, aur AI-search-friendly content.",
    liveUrl: "https://attendancesolution.in/",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "On-Page SEO", "Local SEO", "AEO/GEO"],
    beforeImageUrl: "/projects/attendancesolution-home.gif",
    afterImageUrl: "/projects/attendancesolution-home.gif",
    beforeDescription:
      "Pehle software aur hardware ki story alag-alag jagah bikhri thi — user ko samajh nahi aata tha kaunsi device, kaunsa software, aur demo ya quote kahan se le. Search aur Maps se consistent leads nahi aa rahe the.",
    afterDescription:
      "Ab ek focused, fast aur SEO-ready website live hai — software features, device compatibility, industries aur support paths ek jagah, clear call/WhatsApp/quote CTAs ke saath. Screenshot upar live homepage ka hai.",
    metrics: [
      { label: "Website Build", before: "No dedicated page", after: "Live from scratch", improvement: "New launch", unit: "" },
      { label: "Core Sections", before: "Scattered info", after: "Software + devices + support", improvement: "One journey", unit: "" },
      { label: "Lead Actions", before: "Unclear CTAs", after: "Call + WhatsApp + quote", improvement: "Every page", unit: "" },
      { label: "SEO Foundations Shipped", before: "0", after: "15+ setups", improvement: "Full setup", unit: "" },
      { label: "Mobile Experience", before: "Desktop-first", after: "Mobile-first Tailwind UI", improvement: "Responsive", unit: "" },
      { label: "AI-Search Readiness", before: "Unstructured", after: "FAQ + HowTo-style content", improvement: "AEO/GEO ready", unit: "" }
    ],
    technicalHighlights: [
      "HTML + CSS + JavaScript + Tailwind me scratch se lightweight build — bina heavy framework ke fast load.",
      "On-page SEO: search-intent headings, meta tags, internal links (megamindindia.in ke saath cross-linking), image optimization.",
      "Technical SEO: semantic HTML, mobile-first responsive layout, sitemap + robots + Search Console setup.",
      "Local SEO support: Noida/Delhi NCR service areas, Maps + contact consistency, reviews aur citations ka base.",
      "AEO/GEO: simple FAQ aur software-how-it-works content taaki AI answers me brand mention ho sake.",
      "Conversion focus: sticky call/WhatsApp buttons, demo/quote forms, device-to-software journey mapping."
    ],
    codeComparison: {
      beforeSnippet: `<!-- Pehle: plain page, na structure na SEO -->\n<div>\n  <div>ATTENDANCE SOFTWARE</div>\n  <p>Contact us for details.</p>\n</div>\n<!-- No headings, no meta, no CTAs -->`,
      beforeLanguage: "html",
      afterSnippet: `<!-- Ab: semantic HTML + SEO meta + clear CTAs -->\n<header>\n  <h1>Biometric Attendance Software with Cloud HRMS in India</h1>\n  <p>Devices + mobile app + payroll-ready reports — demo lo.</p>\n</header>\n<meta name="description"\n  content="Biometric attendance machines + cloud HRMS software: live demo, installation & support across India." />\n<a href="tel:+919818442254">Call for Free Demo</a>\n<a href="https://wa.me/919696621216">WhatsApp Us</a>`,
      afterLanguage: "html"
    },
    toolsUsed: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Google Search Console", "Google Business Profile", "PageSpeed Insights"],
    keywordsTargeted: ["biometric attendance software india", "attendance management system delhi", "hire seo expert india", "on page seo services", "local seo services noida", "google business profile expert", "technical seo specialist", "backlink building services"]

  }
];

// Sample demo data for the interactive SEO tools playground (clearly labeled
// as "Sample/Demo" in the UI — not client results).
export const SEO_METRIC_TRENDS: SeoMetricTrend[] = [
  { date: "Week 1", organicTraffic: 1200, serpPosition: 28, domainRating: 18, backlinks: 12 },
  { date: "Week 2", organicTraffic: 2400, serpPosition: 22, domainRating: 21, backlinks: 24 },
  { date: "Week 3", organicTraffic: 5100, serpPosition: 16, domainRating: 24, backlinks: 48 },
  { date: "Week 4", organicTraffic: 6800, serpPosition: 14, domainRating: 26, backlinks: 64 },
  { date: "Week 5", organicTraffic: 8400, serpPosition: 12, domainRating: 28, backlinks: 86 }
];

// Sample demo backlink rows for the dashboard playground UI.
export const BACKLINKS_DATA: BacklinkItem[] = [
  { domain: "example-news-site.com", authority: 72, type: "Dofollow", status: "Active", targetPage: "/services/technical-seo" },
  { domain: "example-dev-blog.com", authority: 65, type: "Dofollow", status: "Active", targetPage: "/projects/megamindindia-dynamic-website-seo" },
  { domain: "example-forum.com", authority: 58, type: "Nofollow", status: "Monitored", targetPage: "/blog/" },
  { domain: "example-directory.com", authority: 52, type: "Dofollow", status: "Monitored", targetPage: "/services/local-seo" },
  { domain: "example-magazine.com", authority: 68, type: "Dofollow", status: "Active", targetPage: "/case-studies/megamindindia-dynamic-website-seo" },
  { domain: "example-startup-list.com", authority: 61, type: "Nofollow", status: "New", targetPage: "/" }
];

// ============================================================
// HIRING-INTENT SEO DATA — keywords companies actually search
// when they look for an SEO specialist / expert to hire
// ============================================================

export const HIRING_SERVICES = [
  {
    title: "Hire Dedicated SEO Expert India",
    desc: "A dedicated senior technical SEO specialist and consultant who audits, optimizes and ranks your business #1 on Google & AI search.",
    badges: ["Hire SEO Expert India", "Hire Dedicated SEO Expert", "Hire Professional SEO Expert"]
  },
  {
    title: "Hire SEO Expert Team",
    desc: "A full-spectrum SEO powerhouse managing technical architecture, authoritative White Hat links, and conversion content roadmaps.",
    badges: ["Hire SEO Expert Team", "Hire SEO Experts", "Dedicated SEO Team India"]
  },
  {
    title: "WordPress Development Company",
    desc: "Custom Gutenberg theme development, WooCommerce scaling, sub-second speed optimization, and Headless Next.js architecture.",
    badges: ["WordPress Development Company", "WooCommerce Experts", "Custom WordPress India"]
  },
  {
    title: "White Hat SEO Firm & Services",
    desc: "100% Google Search Essentials compliant organic strategies that build long-term domain authority with zero penalty risks.",
    badges: ["White Hat SEO Services", "White Hat SEO Firm", "Penalty-Free SEO India"]
  },
  {
    title: "Local SEO Services in Noida & NCR",
    desc: "Google Business Profile optimization, local citations and Map Pack 3-Pack rankings to dominate local customer searches in Noida.",
    badges: ["SEO Expert in Noida", "Local SEO Services in Noida", "GBP 3-Pack Noida"]
  },
  {
    title: "AEO Tools & AI Search Optimization",
    desc: "Answer Engine Optimization (AEO/GEO) to ensure your brand is cited across ChatGPT Search, Perplexity AI, and Google AI Overviews.",
    badges: ["AEO Tools India", "ChatGPT Optimization", "AI Overviews Citation"]
  }
] as const;

export const LOCAL_COVERAGE = [
  {
    city: "Noida",
    region: "Uttar Pradesh / Delhi NCR",
    heading: "SEO Expert in Noida & Local SEO Services",
    blurb: "Rank #1 for your Noida business in Sector-18, Sector-62, Sector-63, Greater Noida & the whole NCR market. Local SEO services in Noida, high-speed web builds, and Google Maps dominance.",
    tags: ["SEO expert in Noida", "Local SEO services in Noida", "SEO specialist in Noida", "WordPress development Noida"]
  },
  {
    city: "Delhi",
    region: "Delhi NCR",
    heading: "SEO Expert in Delhi — Hire Dedicated SEO",
    blurb: "From Connaught Place to South Delhi — proven Delhi SEO strategy for service businesses, e-commerce, and corporate portals seeking Rank #1 SERP & higher organic sales.",
    tags: ["Hire SEO expert Delhi", "SEO specialist in Delhi", "SEO expert in Delhi", "Digital marketing Delhi"]
  },
  {
    city: "Gurgaon",
    region: "Haryana / Delhi NCR",
    heading: "SEO Specialist in Gurgaon",
    blurb: "Gurgaon's startup and B2B scene gets fast, scalable SEO — technical audits, content, schema and Core Web Vitals that convert enterprise search into pipeline.",
    tags: ["SEO specialist in Gurgaon", "SEO expert Gurgaon", "B2B SEO Gurgaon", "Hire SEO Gurgaon"]
  },
  {
    city: "Ghaziabad",
    region: "Uttar Pradesh / Delhi NCR",
    heading: "SEO Expert in Ghaziabad",
    blurb: "Local & national rankings for Ghaziabad businesses — legal, education, e-commerce and real-estate niches competing in Delhi NCR search.",
    tags: ["SEO specialist in Ghaziabad", "SEO expert in Ghaziabad", "Google Ads Ghaziabad"]
  },
  {
    city: "Lucknow",
    region: "Uttar Pradesh",
    heading: "SEO Specialist in Lucknow",
    blurb: "Full-stack SEO for Lucknow's growing education, healthcare and retail sectors, serving from central UP with pan-India campaign reach.",
    tags: ["SEO specialist in Lucknow", "SEO expert UP", "SEO agency Lucknow UP"]
  },
  {
    city: "Ayodhya",
    region: "Uttar Pradesh",
    heading: "SEO Specialist in Ayodhya",
    blurb: "Ayodhya heritage & hospitality projects — tourism SEO, local guides and geo-targeted visibility for the fast-growing Ayodhya economy.",
    tags: ["SEO specialist in Ayodhya", "Local SEO Ayodhya", "SEO company UP"]
  },
  {
    city: "Mumbai",
    region: "Maharashtra",
    heading: "SEO Expert in Mumbai — Pan India & Global Reach",
    blurb: "Rank #1 for Mumbai businesses across Andheri, Bandra, BKC, Lower Parel & Navi Mumbai — technical SEO, local SEO, eCommerce scaling and white hat link building for India's most competitive market.",
    tags: ["SEO expert in Mumbai", "SEO services Mumbai", "Digital marketing Mumbai", "Ecommerce SEO Mumbai"]
  },
  {
    city: "Bengaluru",
    region: "Karnataka",
    heading: "SEO Specialist in Bengaluru",
    blurb: "Bengaluru's SaaS, fintech & startup ecosystem gets modern, technical-first SEO — Core Web Vitals, programmatic SEO, content clusters and AI search optimization that convert developer-heavy markets.",
    tags: ["SEO expert in Bangalore", "SaaS SEO Bengaluru", "Tech SEO India", "SEO agency Bangalore"]
  },
  {
    city: "Hyderabad",
    region: "Telangana",
    heading: "SEO Expert in Hyderabad",
    blurb: "Hyderabad's pharma, IT & real estate sectors rank with full-stack SEO — technical audits, Google Business Profile optimization, and high-intent content built for the city's fast-growing economy.",
    tags: ["SEO expert in Hyderabad", "SEO services Hyderabad", "Local SEO Hyderabad", "Real estate SEO India"]
  },
  {
    city: "Chennai",
    region: "Tamil Nadu",
    heading: "SEO Specialist in Chennai",
    blurb: "From T Nagar retailers to OMR and ECR businesses — white hat SEO, Google Maps dominance and conversion-focused web development for Chennai's diverse commercial landscape.",
    tags: ["SEO expert in Chennai", "SEO company Chennai", "Local SEO Chennai", "Backlink building Chennai"]
  },
  {
    city: "Pune",
    region: "Maharashtra",
    heading: "SEO Expert in Pune",
    blurb: "Pune's automotive, IT and education sectors gain durable rankings through technical SEO, topical authority content and AI-ready structured data — served remotely from anywhere in India.",
    tags: ["SEO expert in Pune", "SEO services Pune", "Hire SEO specialist Pune", "EdTech SEO India"]
  },
  {
    city: "Kolkata",
    region: "West Bengal",
    heading: "SEO Specialist in Kolkata",
    blurb: "Kolkata businesses in heritage trade, education and manufacturing rank with nationwide SEO campaigns — white hat link building and Google Business Profile dominance across West Bengal.",
    tags: ["SEO expert in Kolkata", "SEO services Kolkata", "Local SEO West Bengal", "Hire SEO expert India"]
  }
] as const;

/** Countries & regions Rohit Gupta serves remotely as an international SEO & web expert. */
export const INTERNATIONAL_COVERAGE = [
  {
    country: "United States & Canada",
    region: "North America",
    heading: "SEO Expert for US & Canadian Companies",
    blurb: "Rank on Google.com & Bing across US states — hreflang setup, English-language keyword strategy, local citations and fast Core Web Vitals for North American audiences.",
    tags: ["US SEO expert", "Canada SEO specialist", "North America SEO", "hire SEO expert USA"]
  },
  {
    country: "United Kingdom & Europe",
    region: "UK · EU",
    heading: "SEO Services for UK & European Brands",
    blurb: "Google.co.uk rankings, GDPR-safe tracking, .co.uk / ccTLD architecture and cultural content localization for UK, Germany, France and European eCommerce brands.",
    tags: ["UK SEO expert", "Europe SEO services", "London SEO", "EU multi-lingual SEO"]
  },
  {
    country: "UAE & Middle East",
    region: "Gulf · GCC",
    heading: "SEO Expert for UAE & Gulf Businesses",
    blurb: "Rank in Dubai, Abu Dhabi & Saudi Arabia — Arabic-English keyword strategy, Google Maps position, and localized content for Gulf eCommerce and real estate brands.",
    tags: ["UAE SEO expert", "Dubai SEO services", "Gulf SEO", "Arabic SEO"]
  },
  {
    country: "Australia & New Zealand",
    region: "Oceania",
    heading: "SEO Specialist for Australia & NZ",
    blurb: "Google.com.au and NZ rankings with Australian English keyword mapping, local citation building and high-speed web builds that satisfy strict LCP/INP targets.",
    tags: ["Australia SEO expert", "NZ SEO services", "Sydney SEO", "Melbourne SEO"]
  },
  {
    country: "Singapore & Southeast Asia",
    region: "APAC",
    heading: "SEO for Singapore & SEA Markets",
    blurb: "Multi-lingual SEO across Singapore, Malaysia & Indonesia — regional search intent, structured data and scalable eCommerce SEO for fast-growing APAC brands.",
    tags: ["Singapore SEO expert", "SEA SEO services", "APAC SEO", "Multi-country SEO"]
  },
  {
    country: "Rest of the World",
    region: "100% Remote · Worldwide",
    heading: "Global SEO & Web Development — Anywhere",
    blurb: "From your office, anywhere on Earth: remote-first SEO consultants, technical audits, AI search (AEO) and full-stack development delivered in English & Hindi.",
    tags: ["international SEO", "remote SEO services", "global web developer", "hire remote SEO expert"]
  }
] as const;

export const WHY_HIRE = [
  { metric: "2 Live Sites", label: "designed, built & SEO-optimized from scratch" },
  { metric: "2+ Years", label: "SEO + web development experience" },
  { metric: "Full-Stack", label: "Next.js, Tailwind, Supabase builds" },
  { metric: "SEO + AEO + GEO", label: "technical, local, GBP & AI search" },
  { metric: "Pan-India", label: "Delhi NCR based, remote worldwide" },
  { metric: "White Hat", label: "ethical SEO practices only" }
] as const;

export const SEO_KEYWORD_CITIES = [
  "Hire SEO Expert India",
  "Hire Dedicated SEO Expert India",
  "Hire SEO Specialist",
  "Hire Professional SEO Expert",
  "Hire SEO Expert Team",
  "WordPress Development Company",
  "SEO Expert in Noida",
  "Local SEO Services in Noida",
  "White Hat SEO Services",
  "White Hat SEO Firm",
  "Rohit Web Developer & SEO Expert Freelancer",
  "Rohit Digital Marketing Services",
  "AEO Tools Available in India for AI Search",
  "SEO Expert in Delhi",
  "SEO Specialist in Gurgaon",
  "SEO Expert near Me",
  "SEO Services in India",
  "Technical SEO Specialist",
  "SEO Expert in Mumbai",
  "SEO Expert in Bangalore",
  "SEO Expert in Hyderabad",
  "SEO Expert in Chennai",
  "SEO Expert in Pune",
  "SEO Expert in Kolkata",
  "International SEO Expert",
  "US SEO Expert",
  "UK SEO Expert",
  "UAE SEO Expert",
  "Australia SEO Expert",
  "Hire Remote SEO Expert"
] as const;
