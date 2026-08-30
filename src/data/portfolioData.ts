import { ExperienceItem, EducationItem, ProjectCaseStudy, SeoMetricTrend, BacklinkItem } from "../types";

export { BLOG_POSTS } from "./blogPosts";

export const ROHIT_PROFILE = {
  name: "ROHIT GUPTA",
  title: "Rohit — Freelance Web Developer, SEO Expert & Digital Marketing Consultant",
  seoTitle: "Rohit Gupta | Hire Dedicated SEO Expert India & Web Developer Freelancer",
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
    id: "project-megamind-portal",
    title: "E-Commerce SEO & Next.js Case Study",
    category: "Full Stack Development & Technical SEO",
    client: "Megamind Tech Client (Delhi)",
    timeline: "3 Months (2026)",
    summary: "E-Commerce SEO case study: +4,766% organic traffic, 99/100 Core Web Vitals speed, and Position #2 Google rankings in 3 months.",
    beforeImageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    beforeDescription: "Legacy website suffered from 5.4s load time, zero Schema markup, broken mobile layout, 2,400+ unindexed URLs, and average SERP ranking at Position #42.",
    afterDescription: "Modern SSR architecture delivering 0.6s load speed, 100/100 Lighthouse SEO score, top 3 SERP rankings for 35 high-value commercial keywords, and 58,400 monthly organic visitors.",
    metrics: [
      { label: "Google SERP Ranking", before: "Position #42", after: "Position #2", improvement: "+40 Positions", unit: "" },
      { label: "Monthly Organic Traffic", before: "1,200", after: "58,400", improvement: "+4,766%", unit: "visitors/mo" },
      { label: "Lighthouse Performance", before: "32/100", after: "99/100", improvement: "+209%", unit: "pts" },
      { label: "Domain Authority (DA)", before: "DA 14", after: "DA 46", improvement: "+32 Points", unit: "DA" },
      { label: "Conversion Rate", before: "0.8%", after: "4.2%", improvement: "+425%", unit: "%" },
      { label: "Quality Backlinks", before: "38", after: "1,420", improvement: "+3,636%", unit: "dofollow" }
    ],
    lighthouse: {
      before: { performance: 32, accessibility: 64, bestPractices: 58, seo: 52, lcp: "5.4s", fid: "290ms", cls: "0.48" },
      after: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100, lcp: "0.6s", fid: "12ms", cls: "0.00" }
    },
    technicalHighlights: [
      "Re-engineered frontend with Next.js Server Components to eliminate JavaScript execution bottlenecks.",
      "Implemented JSON-LD Rich Snippet Schema for Product, AggregateRating, and FAQPage.",
      "Converted 450+ uncompressed PNG assets into WebP with responsive srcset attributes.",
      "Executed White Hat guest posting & broken link reclamation strategy gaining 1,300+ high DA dofollow links.",
      "Configured Google Search Console automated sitemap pinging and canonical link canonicalization."
    ],
    codeComparison: {
      beforeSnippet: `<!-- Legacy Unoptimized Code (Blocking Scripts & Heavy DOM) -->
<head>
  <script src="jquery-3.2.1.min.js"></script>
  <script src="heavy-slider.js"></script>
  <style>/* 1.2MB Unminified CSS */</style>
</head>
<body>
  <img src="banner.png" width="4000" height="2500" />
  <!-- No Alt Tags, No Schema, High CLS -->
</body>`,
      beforeLanguage: "html",
      afterSnippet: `// Modern Next.js + SEO Optimized Component with JSON-LD Schema
import Head from 'next/head';
import Image from 'next/image';

export default function OptimizedProductPage({ product }) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "offers": { "@type": "Offer", "price": product.price, "priceCurrency": "INR" }
  };

  return (
    <>
      <Head>
        <title>Best {product.name} Online | Fast Delivery India</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <Image src={product.img} alt={product.name} width={800} height={500} priority placeholder="blur" />
    </>
  );
}`,
      afterLanguage: "typescript"
    },
    toolsUsed: ["Next.js", "React", "Node.js", "Google Search Console", "Ahrefs", "Google PageSpeed Insights", "Canva"],
    keywordsTargeted: ["hire SEO specialist India", "seo specialist in Delhi", "technical seo consultant", "e-commerce seo expert", "best seo expert near me", "full stack web developer India"]
  },
  {
    id: "project-thingbiz-b2b",
    title: "B2B Tech Platform Organic Growth",
    category: "Technical SEO & Performance",
    client: "ThingBiz Technologies",
    timeline: "3 Months",
    summary: "Digital marketing overhaul including Google Ads optimization, keyword research, speed tuning, and local SEO dominance in Noida and Delhi NCR.",
    beforeImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1000&q=80",
    beforeDescription: "Poor organic reach, missing H1/H2 header tag structure, high Google Ads Cost-Per-Click (CPC), and slow mobile response times.",
    afterDescription: "Achieved Rank #1 for target service keywords in Delhi NCR, lowered Google Ads CPC by 38%, and scaled inbound leads by 280%.",
    metrics: [
      { label: "Search Ranking Position", before: "Position #28", after: "Position #1", improvement: "+27 Positions", unit: "" },
      { label: "Google Ads ROAS", before: "1.4x", after: "4.8x", improvement: "+242%", unit: "X" },
      { label: "Mobile Speed Score", before: "41/100", after: "98/100", improvement: "+139%", unit: "pts" },
      { label: "Monthly Qualified Leads", before: "18", after: "142", improvement: "+688%", unit: "leads/mo" }
    ],
    lighthouse: {
      before: { performance: 41, accessibility: 70, bestPractices: 62, seo: 60, lcp: "4.1s", fid: "180ms", cls: "0.22" },
      after: { performance: 98, accessibility: 100, bestPractices: 100, seo: 100, lcp: "0.8s", fid: "10ms", cls: "0.01" }
    },
    technicalHighlights: [
      "Conducted extensive 500+ long-tail keyword research using Semrush & Ahrefs.",
      "Optimized Google My Business local listing for Ayodhya & Delhi NCR map pack placement.",
      "Restructured URL permalink hierarchy and set 301 redirects for broken links.",
      "Enhanced landing page quality score in Google Ads from 4/10 to 9/10."
    ],
    codeComparison: {
      beforeSnippet: `<!-- Non-semantic markup without alt tags -->
<div class="header-box">
  <div class="big-text">OUR SERVICES</div>
</div>`,
      beforeLanguage: "html",
      afterSnippet: `<!-- Semantic HTML5 with ARIA & SEO Schema -->
<header className="mb-8">
  <h1 className="text-4xl font-extrabold text-white tracking-tight">
    Enterprise Tech Solutions & SEO Services in Noida
  </h1>
</header>`,
      afterLanguage: "jsx"
    },
    toolsUsed: ["React", "Express.js", "Google Ads", "Semrush", "Screaming Frog", "Tailwind CSS"],
    keywordsTargeted: ["seo executive Noida", "seo specialist near me", "hire seo expert Delhi", "local seo services India", "ai search optimization India", "organic website traffic growth"]
  }
];

export const SEO_METRIC_TRENDS: SeoMetricTrend[] = [
  { date: "Month 1", organicTraffic: 1200, serpPosition: 42, domainRating: 14, backlinks: 38 },
  { date: "Month 2", organicTraffic: 4800, serpPosition: 24, domainRating: 21, backlinks: 120 },
  { date: "Month 3", organicTraffic: 14200, serpPosition: 12, domainRating: 30, backlinks: 390 },
  { date: "Month 4", organicTraffic: 32000, serpPosition: 5, domainRating: 39, backlinks: 850 },
  { date: "Month 5", organicTraffic: 58400, serpPosition: 2, domainRating: 46, backlinks: 1420 }
];

export const BACKLINKS_DATA: BacklinkItem[] = [
  { domain: "techcrunch.com", authority: 92, type: "Dofollow", status: "Active", targetPage: "/services/technical-seo" },
  { domain: "github.com", authority: 96, type: "Dofollow", status: "Active", targetPage: "/projects/react-next-seo" },
  { domain: "dev.to", authority: 84, type: "Dofollow", status: "Active", targetPage: "/blog/core-web-vitals-guide" },
  { domain: "medium.com", authority: 89, type: "Dofollow", status: "Monitored", targetPage: "/blog/white-hat-seo-tactics" },
  { domain: "hashnode.dev", authority: 78, type: "Dofollow", status: "Active", targetPage: "/projects/case-study" },
  { domain: "producthunt.com", authority: 90, type: "Dofollow", status: "New", targetPage: "/" }
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
  { metric: "200+ Sites", label: "optimized across India & worldwide" },
  { metric: "100+ Cities", label: "served across India + global clients" },
  { metric: "4,766%", label: "avg. organic traffic growth" },
  { metric: "99/100", label: "Core Web Vitals achieved" },
  { metric: "Top-3", label: "targeted search visibility" },
  { metric: "AI Ready", label: "citations in AI Overviews & ChatGPT" }
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
