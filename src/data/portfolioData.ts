import { ExperienceItem, EducationItem, ProjectCaseStudy, SeoMetricTrend, BacklinkItem } from "../types";

export { BLOG_POSTS } from "./blogPosts";

export const ROHIT_PROFILE = {
  name: "ROHIT GUPTA",
  title: "Full Stack Web Developer & Technical SEO Specialist",
  seoTitle: "SEO Specialist & Expert | Hire SEO Consultant in Noida, Delhi & India",
  phone: "+91 96966 21216",
  email: "rohitguptacodec96@gmail.com",
  location: "Ayodhya, Uttar Pradesh – 272130",
  serving: "Serving Noida, Delhi, Gurgaon, Ghaziabad, Lucknow, Ayodhya & all of India — remote worldwide",
  summary: "Passionate and results-driven SEO Specialist and Full Stack Web Developer with 2 years of White Hat SEO experience. I help companies across Noida, Delhi and all of India rank #1 on Google and win AI search (ChatGPT, Google AI Overviews, Copilot). Proven record: 200+ websites optimized, 4,700%+ organic traffic and 99/100 Core Web Vitals. Businesses hire me as their SEO specialist, SEO consultant or SEO executive to turn technical audits, keyword research, schema and speed into verifiable revenue growth.",
  certifications: [
    { title: "Infosys Certified", course: "Core Java Programming Revisited", issuer: "Infosys" },
    { title: "Cisco Certified", course: "Computer Networks Essentials", issuer: "Cisco" }
  ],
  areasOfInterest: [
    "Full Stack Web Development",
    "Search Engine Optimization (SEO)",
    "Artificial Intelligence (AI)",
    "Modern Web Technologies",
    "Open Source Development",
    "Cloud Computing & DevOps",
    "Performance Optimization"
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
  { category: "Frontend Development", items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
  { category: "Backend Development", items: ["Node.js", "Express.js", "REST API Development", "Middleware", "SSR / SSG"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma / Mongoose"] },
  { category: "SEO & Growth", items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "White Hat SEO", "Keyword Research", "Google Search Console", "Google Ads", "Schema JSON-LD"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Canva", "Postman", "VS Code"] }
];

export const SEO_TOOLS = [
  { name: "Google Search Console", desc: "Index monitoring, sitemaps, coverage & query performance analysis", icon: "Search" },
  { name: "Google Ads & Keyword Planner", desc: "Pay-Per-Click campaign management & search volume forecasting", icon: "TrendingUp" },
  { name: "Ahrefs & Semrush", desc: "Competitor gap analysis, backlink health & keyword rank tracking", icon: "Target" },
  { name: "Google PageSpeed Insights", desc: "Lighthouse audit, Core Web Vitals analysis & lab performance metric tracking", icon: "Zap" },
  { name: "Screaming Frog SEO Spider", desc: "Technical crawl audits, duplicate content detection & canonical checks", icon: "Bug" },
  { name: "AI SEO Accelerators", desc: "Gemini AI & OpenAI LLMs for semantic content optimization & schema generation", icon: "Cpu" }
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "project-megamind-portal",
    title: "E-Commerce Tech Platform: 400% Organic Traffic Surge & Core Web Vitals Re-Architecture",
    category: "Full Stack Development & Technical SEO",
    client: "Megamind Tech Client (Delhi)",
    timeline: "3 Months (2026)",
    summary: "Rebuilt a bloated legacy PHP WordPress store into a blazingly fast Next.js / React SSR web app paired with comprehensive White Hat Technical SEO, schema JSON-LD injection, and automated backlink monitoring.",
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
    title: "B2B Tech Portal Optimization: Rank #1 Dominance & High-Intent Conversion Engine",
    category: "On-Page, Off-Page & Technical SEO Strategy",
    client: "Thingbiz Hightech (Noida Sector-63)",
    timeline: "4 Months (2025-2026)",
    summary: "Complete digital marketing overhaul including Google Ads campaign optimization, keyword gap research, speed tuning, and local SEO dominance in Noida/Delhi NCR.",
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
    title: "Hire SEO Specialist",
    desc: "A dedicated technical SEO specialist who audits, optimizes and ranks your website #1 on Google & AI search.",
    badges: ["SEO Specialist Near Me", "SEO Expert for Hire", "SEO Services India"]
  },
  {
    title: "Hire SEO Executive",
    desc: "Hands-on SEO executive managing on-page, off-page, keyword and content execution every week on schedule.",
    badges: ["SEO Executive Near Me", "SEO Executive in Noida", "SEO Executive in Delhi"]
  },
  {
    title: "SEO Consultant India",
    desc: "Strategy-level SEO consultant aligning your campaigns with revenue goals, market share and AI search trends.",
    badges: ["SEO Consultant Noida", "SEO Consultant Delhi", "Freelance SEO Consultant India"]
  },
  {
    title: "Technical SEO Audit & Fix",
    desc: "Deep-crawl technical audit across Core Web Vitals, indexing, schema, redirects and internal link architecture.",
    badges: ["Technical SEO Specialist", "Website Speed Optimization", "Core Web Vitals Expert"]
  },
  {
    title: "Local SEO — Dominating Map Pack",
    desc: "Google Business Profile, local citations and 'near me' rankings to capture customers searching in your city.",
    badges: ["SEO Services Near Me", "Local SEO Noida", "Local SEO Delhi"]
  },
  {
    title: "E-Commerce SEO Expert",
    desc: "Product page architecture, category funnels and schema for Shopify, WooCommerce and custom Next.js stores.",
    badges: ["E-Commerce SEO Expert", "Online Store Ranking", "PDP Schema Optimization"]
  }
] as const;

export const LOCAL_COVERAGE = [
  {
    city: "Noida",
    region: "Uttar Pradesh / Delhi NCR",
    heading: "SEO Specialist in Noida",
    blurb: "Rank #1 for your Noida business in Sector-18, Sector-63, Greater Noida & the whole NCR market. Local SEO, high-speed web builds and Google Maps dominance for startups and enterprises.",
    tags: ["SEO specialist in Noida", "SEO executive in Noida", "SEO services in Noida", "SEO company Noida"]
  },
  {
    city: "Delhi",
    region: "Delhi NCR",
    heading: "SEO Expert in Delhi",
    blurb: "From Connaught Place to Janakpuri — proven Delhi SEO strategy for service businesses, e-commerce, and corporate portals seeking Rank #1 SERP & higher organic sales.",
    tags: ["SEO specialist in Delhi", "SEO expert in Delhi", "SEO services Delhi", "Digital marketing Delhi"]
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
  }
] as const;

export const WHY_HIRE = [
  { metric: "200+ Sites", label: "optimized & ranked across India" },
  { metric: "2 Years", label: "White Hat SEO & Dev experience" },
  { metric: "4,766%", label: "avg. organic traffic growth" },
  { metric: "99/100", label: "Core Web Vitals guarantee" },
  { metric: "Rank #1", label: "targeted keyword positioning" },
  { metric: "AI Ready", label: "citations in AI Overviews & ChatGPT" }
] as const;

export const SEO_KEYWORD_CITIES = [
  "SEO Specialist in Noida",
  "SEO Expert in Delhi",
  "SEO Specialist in Gurgaon",
  "SEO Expert in Ghaziabad",
  "SEO Specialist in Lucknow",
  "SEO Executive in India",
  "SEO Specialist near Me",
  "SEO Expert near Me",
  "SEO Services in India",
  "Hire SEO Specialist",
  "Freelance SEO Expert India",
  "SEO Consultant in Delhi NCR",
  "Technical SEO Specialist",
  "Local SEO Services near Me",
  "E-Commerce SEO Expert India"
] as const;
