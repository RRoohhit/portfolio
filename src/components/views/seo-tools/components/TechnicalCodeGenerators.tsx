"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import { 
  Code2, 
  Copy, 
  Check, 
  Download, 
  Globe, 
  FileText, 
  Radio, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Layers, 
  Share2, 
  Lock, 
  Rss, 
  Bot, 
  Database,
  FolderArchive,
  Building2,
  HelpCircle,
  Route,
  LayoutGrid,
  HardDrive,
  KeyRound,
  Gauge
} from "lucide-react";
import { CONTACT } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface TechnicalCodeGeneratorsProps {
  domain: string;
  projectPath: string;
  onRequireDomain: () => void;
}

export type ToolKey = 
  | "sitemap"
  | "canonical"
  | "twitter"
  | "openGraph"
  | "jsonLd"
  | "jsonLdAll"
  | "organization"
  | "faqSchema"
  | "breadcrumbs"
  | "seoHead"
  | "llmsTxt"
  | "aiMeta"
  | "sitemapFull"
  | "htaccess"
  | "robotsTxt"
  | "swJs"
  | "rssXml"
  | "atomXml"
  | "feedJson"
  | "webConfig"
  | "manifestJson"
  | "securityHeaders"
  | "humansTxt"
  | "perfHints";

export interface ToolDef {
  id: ToolKey;
  number: number;
  name: string;
  filename: string;
  fileType: "xml" | "html" | "json" | "txt" | "js" | "htaccess" | "config";
  category: "Crawler Directives" | "Meta & Social" | "Feeds & Syndication" | "Server & PWA" | "AI Search & GEO" | "Performance & Caching";
  description: string;
  mimeType: string;
}

export const TOOLS_LIST: ToolDef[] = [
  { id: "sitemap", number: 1, name: "Automated Dynamic Sitemap Script", filename: "sitemap-generator.js", fileType: "js", category: "Crawler Directives", description: "Node script that auto-scans app tabs, routes, and blog posts to output sitemap.xml.", mimeType: "text/javascript" },
  { id: "canonical", number: 2, name: "Canonical Tags Snippet", filename: "canonical.html", fileType: "html", category: "Meta & Social", description: "Prevents duplicate content penalties by explicitly declaring target domain canonical URLs.", mimeType: "text/html" },
  { id: "twitter", number: 3, name: "Twitter Cards Meta Tags", filename: "twitter-cards.html", fileType: "html", category: "Meta & Social", description: "Rich social preview cards for X (Twitter) with summary_large_image and site handle.", mimeType: "text/html" },
  { id: "openGraph", number: 4, name: "Open Graph Social Meta Tags", filename: "open-graph.html", fileType: "html", category: "Meta & Social", description: "Facebook, LinkedIn & WhatsApp link preview meta tags.", mimeType: "text/html" },
  { id: "seoHead", number: 5, name: "Complete SEO Head Tags Bundle", filename: "seo-head-tags.html", fileType: "html", category: "Meta & Social", description: "Title, description, canonical, hreflang, GEO tags, Open Graph & Twitter in one drop-in head block.", mimeType: "text/html" },
  { id: "jsonLd", number: 6, name: "JSON-LD Schema Markup", filename: "schema.jsonld", fileType: "json", category: "Meta & Social", description: "Google Rich Snippet structured data for Organization, Person, and TechArticles.", mimeType: "application/json" },
  { id: "jsonLdAll", number: 7, name: "JSON-LD All Types @graph Bundle", filename: "schema-all.jsonld", fileType: "json", category: "Meta & Social", description: "Organization + Person + WebSite + Service + FAQ + Breadcrumb + Article in one valid @graph.", mimeType: "application/json" },
  { id: "organization", number: 8, name: "Organization Schema (Full Structure)", filename: "organization.json", fileType: "json", category: "Meta & Social", description: "Knowledge Graph entity with logo, contactPoint, address, geo, areaServed & sameAs.", mimeType: "application/json" },
  { id: "faqSchema", number: 9, name: "FAQ Page Schema (FAQPage)", filename: "faq-schema.json", fileType: "json", category: "Meta & Social", description: "Question & answer pairs eligible for Google collapsible FAQ rich snippets.", mimeType: "application/json" },
  { id: "breadcrumbs", number: 10, name: "Breadcrumb Schema (BreadcrumbList)", filename: "breadcrumbs.json", fileType: "json", category: "Meta & Social", description: "Valid hierarchical navigation trail displayed as breadcrumbs in Google search results.", mimeType: "application/json" },
  { id: "llmsTxt", number: 11, name: "LLMs.txt Directive File", filename: "llms.txt", fileType: "txt", category: "AI Search & GEO", description: "Standard text specification for AI crawlers like Gemini, ChatGPT, Claude & Perplexity.", mimeType: "text/plain" },
  { id: "aiMeta", number: 12, name: "AI Search / AEO / GEO Optimization", filename: "ai-seo-optimization.html", fileType: "html", category: "AI Search & GEO", description: "GEO meta tags, direct-answer AEO snippet and entity hints for AI Overviews, ChatGPT & Bing.", mimeType: "text/html" },
  { id: "sitemapFull", number: 13, name: "Full XML Sitemap File", filename: "sitemap.xml", fileType: "xml", category: "Crawler Directives", description: "Valid W3C XML Sitemap listing all pages with lastmod timestamps and priorities.", mimeType: "application/xml" },
  { id: "htaccess", number: 14, name: ".htaccess Apache Server File", filename: ".htaccess", fileType: "htaccess", category: "Server & PWA", description: "Apache directives for Brotli/Gzip compression, browser caching, SSL force & 301 redirects.", mimeType: "text/plain" },
  { id: "robotsTxt", number: 15, name: "Robots.txt Crawl Control", filename: "robots.txt", fileType: "txt", category: "Crawler Directives", description: "Rules for Googlebot, Bingbot, and AI bots with sitemap pointer.", mimeType: "text/plain" },
  { id: "swJs", number: 16, name: "Service Worker PWA (sw.js)", filename: "sw.js", fileType: "js", category: "Server & PWA", description: "Offline caching, Core Web Vitals speed acceleration, and PWA assets installation.", mimeType: "text/javascript" },
  { id: "manifestJson", number: 17, name: "PWA Manifest (manifest.json)", filename: "manifest.json", fileType: "json", category: "Server & PWA", description: "Installable web app manifest with icons, shortcuts, theme & start_url.", mimeType: "application/json" },
  { id: "rssXml", number: 18, name: "RSS 2.0 Feed (rss.xml)", filename: "rss.xml", fileType: "xml", category: "Feeds & Syndication", description: "Valid RSS 2.0 feed for blog post syndication and RSS readers.", mimeType: "application/xml" },
  { id: "atomXml", number: 19, name: "Atom Feed (atom.xml)", filename: "atom.xml", fileType: "xml", category: "Feeds & Syndication", description: "Standard W3C Atom 1.0 feed for modern news aggregators.", mimeType: "application/xml" },
  { id: "feedJson", number: 20, name: "JSON Feed (feed.json)", filename: "feed.json", fileType: "json", category: "Feeds & Syndication", description: "Lightweight JSON Feed format standard v1.1 for developer tools.", mimeType: "application/json" },
  { id: "webConfig", number: 21, name: "IIS web.config File", filename: "web.config", fileType: "config", category: "Server & PWA", description: "Microsoft IIS / Azure static web server configuration for MIME types and compression.", mimeType: "application/xml" },
  { id: "securityHeaders", number: 22, name: "Security & Performance Headers", filename: "security-headers.txt", fileType: "txt", category: "Server & PWA", description: "HSTS, CSP, Permissions-Policy, Referrer-Policy and cache-control hardening rules.", mimeType: "text/plain" },
  { id: "humansTxt", number: 23, name: "humans.txt Credit File", filename: "humans.txt", fileType: "txt", category: "Crawler Directives", description: "Team, standards & tech credit file leveraged by crawlers and tech recruiters.", mimeType: "text/plain" },
  { id: "perfHints", number: 24, name: "Performance & Preload Hints", filename: "performance-preload-hints.html", fileType: "html", category: "Performance & Caching", description: "Preconnect, dns-prefetch, preload, fetchpriority and caching directives for Lighthouse 100.", mimeType: "text/html" },
];

const CATEGORIES = ["All", "Crawler Directives", "Meta & Social", "Feeds & Syndication", "Server & PWA", "AI Search & GEO", "Performance & Caching"] as const;

// ---------- Dependency-free ZIP (STORE method) builder for batch downloads ----------
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

const crc32 = (buf: Uint8Array): number => {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
};

export const buildZip = (files: { name: string; content: string }[]): Blob => {
  const encoder = new TextEncoder();
  const parts: BlobPart[] = [];
  const central: BlobPart[] = [];
  let offset = 0;
  const now = new Date();
  const dosTime = ((now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1)) & 0xffff;
  const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();

  for (const f of files) {
    const nameBuf = encoder.encode(f.name);
    const dataBuf = encoder.encode(f.content);
    const crc = crc32(dataBuf);

    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(6, 0x0800, true);
    lh.setUint16(8, 0, true); // compression: store
    lh.setUint16(10, dosTime, true);
    lh.setUint16(12, dosDate, true);
    lh.setUint32(14, crc, true);
    lh.setUint32(18, dataBuf.length, true);
    lh.setUint32(22, dataBuf.length, true);
    lh.setUint16(26, nameBuf.length, true);
    lh.setUint16(28, 0, true); // extra field length
    parts.push(new Uint8Array(lh.buffer), nameBuf, dataBuf);

    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, 0, true);
    ch.setUint16(12, dosTime, true);
    ch.setUint16(14, dosDate, true);
    ch.setUint32(16, crc, true);
    ch.setUint32(20, dataBuf.length, true);
    ch.setUint32(24, dataBuf.length, true);
    ch.setUint16(28, nameBuf.length, true);
    ch.setUint16(30, 0, true); // extra field length
    ch.setUint16(32, 0, true); // file comment length
    ch.setUint16(34, 0, true); // disk number start
    ch.setUint16(36, 0, true); // internal file attributes
    ch.setUint32(38, 0, true); // external file attributes
    ch.setUint32(42, offset, true); // relative offset of local header
    central.push(new Uint8Array(ch.buffer), nameBuf);
    offset += 30 + nameBuf.length + dataBuf.length;
  }

  const centralSize = central.reduce((s, c) => s + (c as Uint8Array).length, 0);
  const eocd = new DataView(new ArrayBuffer(22));
  eocd.setUint32(0, 0x06054b50, true);
  eocd.setUint16(4, 0, true);
  eocd.setUint16(6, 0, true);
  eocd.setUint16(8, files.length, true);
  eocd.setUint16(10, files.length, true);
  eocd.setUint32(12, centralSize, true);
  eocd.setUint32(16, offset, true);
  eocd.setUint16(20, 0, true);
  parts.push(...central, new Uint8Array(eocd.buffer));
  return new Blob(parts, { type: "application/zip" });
};

const domainHash = (domain: string): string => {
  let h = 0;
  for (let i = 0; i < domain.length; i++) h = (h * 31 + domain.charCodeAt(i)) >>> 0;
  return h.toString(36);
};

export const TechnicalCodeGenerators: React.FC<TechnicalCodeGeneratorsProps> = ({
  domain,
  projectPath,
  onRequireDomain
}) => {
  const [selectedToolId, setSelectedToolId] = useState<ToolKey>("sitemap");
  const { copied, copy } = useCopyToClipboard();
  const [batchDownloading, setBatchDownloading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [confetti, setConfetti] = useState<{ show: boolean; message: string; type: "copy" | "download" | "generate" }>({
    show: false,
    message: "",
    type: "copy"
  });

  const triggerConfetti = (message: string, type: "copy" | "download" | "generate") => {
    setConfetti({ show: true, message, type });
    setTimeout(() => {
      setConfetti((prev) => ({ ...prev, show: false }));
    }, 2800);
  };

  const cleanDomain = domain.trim() ? domain.trim().replace(/\/$/, "") : "https://yourwebsite.com";
  const hasDomain = Boolean(domain.trim());

  const currentTool = TOOLS_LIST.find((t) => t.id === selectedToolId) || TOOLS_LIST[0];

  const filteredTools = TOOLS_LIST.filter((t) => {
    if (selectedCategory === "All") return true;
    return t.category === selectedCategory;
  });

  // Code Generator Functions according to selected tool
  const getGeneratedCode = (toolKey: ToolKey): string => {
    const today = new Date().toISOString().split("T")[0];
    const nowUtc = new Date().toUTCString();
    const nowIso = new Date().toISOString();
    const siteName = domain.replace(/^https?:\/\//, "").split(".")[0];
    const titleCaseSite = siteName.replace(/(^|-)([a-z])/g, (_m, _p, c: string) => c.toUpperCase());

    switch (toolKey) {
      case "sitemap":
        return `// Automated Dynamic Sitemap Generator Script
// Place in your project root or scripts/generate-sitemap.js
// Usage: node scripts/generate-sitemap.js
const fs = require('fs');

const DOMAIN = '${cleanDomain.replace(/\/$/, "")}';
const routes = ['/', '/projects', '/seo-tools', '/blog', '/contact'];
const blogPosts = [
  'technical-seo-nextjs',
  'schema-jsonld-guide',
  'whitehat-link-building'
];

function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = [
    ...routes.map(r => \`
  <url>
    <loc>\${DOMAIN}\${r}</loc>
    <lastmod>\${lastmod}</lastmod>
    <changefreq>\${r === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>\${r === '/' ? '1.0' : '0.8'}</priority>
  </url>\`),
    ...blogPosts.map(slug => \`
  <url>
    <loc>\${DOMAIN}/blog/\${slug}</loc>
    <lastmod>\${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\`)
  ];

  const xml = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${urls.join('')}
</urlset>\`;

  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log(\`✔ Sitemap generated at ./public/sitemap.xml for \${DOMAIN}\`);
}

generateSitemap();`;

      case "canonical":
        return `<!-- Canonical Link Tags for ${cleanDomain} -->
<!-- Add one canonical per page; the href must match the page's final indexed URL exactly. -->
<link rel="canonical" href="${cleanDomain}/" />
<link rel="alternate" hreflang="en" href="${cleanDomain}/" />
<link rel="alternate" hreflang="x-default" href="${cleanDomain}/" />`;

      case "twitter":
        return `<!-- Twitter / X Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@${siteName}" />
<meta name="twitter:creator" content="@${siteName}" />
<meta name="twitter:title" content="${titleCaseSite} | Home" />
<meta name="twitter:description" content="Official website of ${titleCaseSite}. Updated ${today}." />
<meta name="twitter:image" content="${cleanDomain}/og-image.jpg" />`;

      case "openGraph":
        return `<!-- Open Graph Social Preview Meta Tags -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${cleanDomain}/" />
<meta property="og:site_name" content="${titleCaseSite}" />
<meta property="og:title" content="${titleCaseSite} | Home" />
<meta property="og:description" content="Official website of ${titleCaseSite}. Explore products, services and latest updates." />
<meta property="og:image" content="${cleanDomain}/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${titleCaseSite} preview image" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="en_IN" />`;

      case "seoHead":
        return `<!-- ============================================================
  COMPLETE SEO HEAD TAGS for ${cleanDomain}
  Paste inside the <head> of every page; update per-page title/description.
============================================================ -->
<title>${titleCaseSite} | Home & Official Website</title>
<meta name="description" content="${titleCaseSite} — official website with products, services and resources. Discover everything about ${titleCaseSite} at ${cleanDomain}." />
<meta name="keywords" content="${titleCaseSite.toLowerCase()}, ${siteName} website, ${siteName} official, ${titleCaseSite.toLowerCase()} services" />
<meta name="author" content="${titleCaseSite}" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#050505" />

<!-- Canonical & Hreflang -->
<link rel="canonical" href="${cleanDomain}/" />
<link rel="alternate" hreflang="en" href="${cleanDomain}/" />
<link rel="alternate" hreflang="x-default" href="${cleanDomain}/" />

<!-- GEO Targeting Meta Tags -->
<meta name="geo.region" content="IN" />
<meta name="geo.placename" content="India" />
<meta name="geo.position" content="26.795;82.199" />
<meta name="ICBM" content="26.795, 82.199" />
<meta name="language" content="en" />
<meta name="distribution" content="global" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${cleanDomain}/" />
<meta property="og:site_name" content="${titleCaseSite}" />
<meta property="og:title" content="${titleCaseSite} | Home" />
<meta property="og:description" content="Official website of ${titleCaseSite}. Discover products, services and updates." />
<meta property="og:image" content="${cleanDomain}/og-image.jpg" />
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${titleCaseSite} | Home" />
<meta name="twitter:description" content="Official website of ${titleCaseSite}." />
<meta name="twitter:image" content="${cleanDomain}/og-image.jpg" />

<!-- Feed Discovery Links -->
<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="${cleanDomain}/rss.xml" />
<link rel="alternate" type="application/atom+xml" title="Atom Feed" href="${cleanDomain}/atom.xml" />
<link rel="alternate" type="application/feed+json" title="JSON Feed" href="${cleanDomain}/feed.json" />
<link rel="sitemap" type="application/xml" href="${cleanDomain}/sitemap.xml" />`;

      case "jsonLd":
        return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "${cleanDomain}/#person",
      "name": "${titleCaseSite} Owner",
      "url": "${cleanDomain}",
      "jobTitle": "Founder / Manager",
      "worksFor": { "@id": "${cleanDomain}/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "${cleanDomain}/#organization",
      "name": "${titleCaseSite}",
      "url": "${cleanDomain}",
      "logo": "${cleanDomain}/logo.png",
      "publisher": { "@id": "${cleanDomain}/#person" }
    },
    {
      "@type": "WebSite",
      "@id": "${cleanDomain}/#website",
      "url": "${cleanDomain}",
      "name": "${titleCaseSite}",
      "publisher": { "@id": "${cleanDomain}/#organization" }
    }
  ]
}
</script>`;

      case "jsonLdAll":
        return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "${cleanDomain}/#organization",
      "name": "${titleCaseSite}",
      "url": "${cleanDomain}",
      "logo": "${cleanDomain}/logo.png",
      "description": "Official organization behind ${cleanDomain}.",
      "email": "hello@${siteName}.com",
      "telephone": "${CONTACT.phone}",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "${CONTACT.phone}",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": ["en"]
      },
      "sameAs": []
    },
    {
      "@type": "Person",
      "@id": "${cleanDomain}/#person",
      "name": "${titleCaseSite} Team",
      "url": "${cleanDomain}",
      "worksFor": { "@id": "${cleanDomain}/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "${cleanDomain}/#website",
      "url": "${cleanDomain}",
      "name": "${titleCaseSite}",
      "publisher": { "@id": "${cleanDomain}/#organization" },
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "${cleanDomain}/#webpage",
      "url": "${cleanDomain}/",
      "name": "${titleCaseSite} Home",
      "isPartOf": { "@id": "${cleanDomain}/#website" },
      "about": { "@id": "${cleanDomain}/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "${cleanDomain}/#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${cleanDomain}/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "${cleanDomain}/about" },
        { "@type": "ListItem", "position": 3, "name": "Contact", "item": "${cleanDomain}/contact" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ${titleCaseSite}?",
          "acceptedAnswer": { "@type": "Answer", "text": "${titleCaseSite} is the official website published at ${cleanDomain}, sharing products, services and information." }
        },
        {
          "@type": "Question",
          "name": "How can I contact ${titleCaseSite}?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can reach ${titleCaseSite} through the contact page at ${cleanDomain}/contact or by phone on ${CONTACT.phone}." }
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "${cleanDomain}/#article",
      "headline": "Getting Started with ${titleCaseSite}",
      "description": "A complete guide covering everything available on ${cleanDomain}.",
      "author": { "@id": "${cleanDomain}/#person" },
      "publisher": { "@id": "${cleanDomain}/#organization" },
      "datePublished": "${today}",
      "dateModified": "${today}",
      "mainEntityOfPage": "${cleanDomain}/"
    }
  ]
}
</script>`;

      case "organization":
        return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "${cleanDomain}/#organization",
  "name": "${titleCaseSite}",
  "url": "${cleanDomain}",
  "logo": "${cleanDomain}/logo.png",
  "description": "Official organization of ${titleCaseSite} — ${cleanDomain}.",
  "foundingDate": "2019",
  "email": "hello@${siteName}.com",
  "telephone": "${CONTACT.phone}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "000000",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.795",
    "longitude": "82.199"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "${CONTACT.phone}",
    "contactType": "customer service",
    "email": "hello@${siteName}.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["en", "hi"]
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "Worldwide" }
  ],
  "sameAs": [
    "https://www.facebook.com/${siteName}",
    "https://www.linkedin.com/company/${siteName}",
    "https://twitter.com/${siteName}"
  ]
}
</script>`;

      case "faqSchema":
        return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to see SEO results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With correct technical SEO fixes, initial ranking improvements typically appear within 3–6 weeks. Sustainable top rankings usually take 3–6 months depending on keyword competition and domain authority."
      }
    },
    {
      "@type": "Question",
      "name": "Why is website speed important for SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google uses Core Web Vitals (LCP, INP, CLS) as page experience ranking signals. Faster pages rank higher, get crawled more efficiently, and convert better."
      }
    },
    {
      "@type": "Question",
      "name": "What is structured data (JSON-LD)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JSON-LD schema markup helps search engines understand page content and enables rich results such as FAQ sections, breadcrumbs, reviews and knowledge panels."
      }
    },
    {
      "@type": "Question",
      "name": "Does my website need a sitemap.xml and robots.txt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A sitemap helps crawlers discover all indexable pages, and robots.txt controls what should or should not be crawled. Both are required for efficient indexing of ${cleanDomain}."
      }
    }
  ]
}
</script>`;

      case "breadcrumbs":
        return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "${cleanDomain}/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "${cleanDomain}/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SEO Tools",
      "item": "${cleanDomain}/seo-tools"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blog",
      "item": "${cleanDomain}/blog"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Contact",
      "item": "${cleanDomain}/contact"
    }
  ]
}
</script>`;

      case "llmsTxt":
        return `# LLMs.txt for ${cleanDomain}
# Information for AI Crawlers (Gemini, ChatGPT, Claude, Perplexity)

# Site Info
Title: ${titleCaseSite}
URL: ${cleanDomain}
Description: Official website of ${titleCaseSite}. Products, services, documentation and contact information.

# Primary Pages
- Home: ${cleanDomain}/
- About: ${cleanDomain}/about
- Projects: ${cleanDomain}/projects
- SEO Tools & Generators: ${cleanDomain}/seo-tools
- Technical Articles: ${cleanDomain}/blog
- Contact: ${cleanDomain}/contact

# Key Facts Extraction (for AI search engines)
- ${titleCaseSite} operates at ${cleanDomain}
- Phone: ${CONTACT.phone}
- Email: hello@${siteName}.com
- Last verified: ${today}`;

      case "aiMeta":
        return `<!-- ============================================================
  AI SEARCH / AEO / GEO OPTIMIZATION BLOCK for ${cleanDomain}
  Improves visibility in Google AI Overviews, ChatGPT, Gemini,
  Bing Copilot and Perplexity by clarifying entities and answers.
============================================================ -->
<meta name="ai-content-rating" content="high" />
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />
<meta name="yandex" content="index, follow" />

<!-- GEO: entity + answer clarity meta (generative engine optimization) -->
<meta name="entity-type" content="Organization" />
<meta name="site-category" content="${titleCaseSite}" />
<meta name="answerable:question" content="What is ${titleCaseSite}?" />
<meta name="answerable:answer" content="${titleCaseSite} is the official website at ${cleanDomain} providing information, products and services. Contact: ${CONTACT.phone}." />

<!-- AEO: direct-answer block visible your users AND extractable by answer engines -->
<article itemprop="mainEntityOfPage" itemscope itemtype="https://schema.org/FAQPage">
  <h1 itemprop="headline">${titleCaseSite} — Official Information Hub</h1>
  <p itemprop="description"><strong>Short answer:</strong> ${titleCaseSite} (${cleanDomain}) is the official website covering all products, services, prices and contact details.</p>

  <h2>What services does ${titleCaseSite} offer?</h2>
  <p>Visit ${cleanDomain} for the complete service list with pricing, timelines and documentation.</p>

  <h2>How to contact ${titleCaseSite}?</h2>
  <p>Call ${CONTACT.phone} or use the contact form at ${cleanDomain}/contact. Average response time is under 24 hours.</p>
</article>

<!-- Keep headings keyword-rich with a direct answer in the first 40 words:
     AI answers engines extract the first paragraph as the citation snippet. -->`;

      case "sitemapFull":
        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${cleanDomain}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${cleanDomain}/projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${cleanDomain}/seo-tools</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${cleanDomain}/ai-lab</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${cleanDomain}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${cleanDomain}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

      case "htaccess":
        return `# Apache .htaccess Rules for ${cleanDomain}
# 1) Force HTTPS + WWW canonicalization
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^(.*)$ https://${cleanDomain.replace(/^https?:\/\//, "")}/$1 [L,R=301]

# 2) Enable Compression (Gzip/Deflate)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json application/xml image/svg+xml
  <IfModule mod_setenvif.c>
    BrowserMatch ^Mozilla/4 gzip-only-text/html
    BrowserMatch ^Mozilla/4\\.0[678] no-gzip
    BrowserMatch \\bMSIE !no-gzip !gzip-only-text/html
  </IfModule>
</IfModule>

# 3) Leverage Browser Caching (Cache-Control + Expires)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# 4) Security Headers
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# 5) Block bad bots
<IfModule mod_rewrite.c>
  RewriteCond %{HTTP_USER_AGENT} (ahrefs|semrush|mj12bot|dotbot|petalbot) [NC]
  RewriteRule .* - [F,L]
</IfModule>`;

      case "robotsTxt":
        return `# Robots.txt for ${cleanDomain}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/static/development/
Disallow: /private/
Disallow: /tmp/

# AI Model Crawlers (explicit consent for indexing/answering)
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: Amazonbot
Allow: /

# Sitemap Location
Sitemap: ${cleanDomain}/sitemap.xml`;

      case "swJs":
        return `// Service Worker for ${cleanDomain} (sw.js)
// Version the cache per deploy; bump to force clients to refresh assets.
const CACHE_NAME = '${siteName}-cache-' + '${domainHash(cleanDomain)}' + '-v1';
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: instant response from cache, then update in background.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  const isPage = event.request.mode === 'navigate';
  const strategy = isPage ? 'network-first' : 'stale-while-revalidate';

  if (strategy === 'network-first') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/offline.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});`;

      case "manifestJson":
        return `{
  "name": "${titleCaseSite}",
  "short_name": "${titleCaseSite.slice(0, 12)}",
  "description": "Official PWA app for ${titleCaseSite} — ${cleanDomain}.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#050505",
  "theme_color": "#050505",
  "categories": ["business", "productivity"],
  "lang": "en",
  "dir": "ltr",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "shortcuts": [
    {
      "name": "Home",
      "short_name": "Home",
      "url": "/",
      "icons": [{ "src": "/icons/icon-192x192.png", "sizes": "192x192" }]
    },
    {
      "name": "Contact",
      "short_name": "Contact",
      "url": "/contact",
      "icons": [{ "src": "/icons/icon-192x192.png", "sizes": "192x192" }]
    }
  ]
}`;

      case "rssXml":
        return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${titleCaseSite} — Updates & Blog</title>
    <link>${cleanDomain}</link>
    <description>Latest updates, articles and news from ${titleCaseSite}.</description>
    <language>en-us</language>
    <lastBuildDate>${nowUtc}</lastBuildDate>
    <atom:link href="${cleanDomain}/rss.xml" rel="self" type="application/rss+xml" />

    <item>
      <title>Latest Update from ${titleCaseSite}</title>
      <link>${cleanDomain}/blog/latest-update</link>
      <guid>${cleanDomain}/blog/latest-update</guid>
      <pubDate>${nowUtc}</pubDate>
      <description>Fresh information published on the official blog of ${titleCaseSite}.</description>
    </item>
  </channel>
</rss>`;

      case "atomXml":
        return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${titleCaseSite} — Atom Feed</title>
  <subtitle>Official Atom feed for ${cleanDomain}</subtitle>
  <link href="${cleanDomain}/" />
  <link rel="self" href="${cleanDomain}/atom.xml" />
  <updated>${nowIso}</updated>
  <id>${cleanDomain}/</id>
  <author>
    <name>${titleCaseSite}</name>
    <email>hello@${siteName}.com</email>
  </author>

  <entry>
    <title>Latest Update from ${titleCaseSite}</title>
    <link href="${cleanDomain}/blog/latest-update" />
    <id>${cleanDomain}/blog/latest-update</id>
    <updated>${nowIso}</updated>
    <summary>Fresh information published on the official blog of ${titleCaseSite}.</summary>
  </entry>
</feed>`;

      case "feedJson":
        return `{
  "version": "https://jsonfeed.org/version/1.1",
  "title": "${titleCaseSite} Feed",
  "home_page_url": "${cleanDomain}/",
  "feed_url": "${cleanDomain}/feed.json",
  "description": "Official JSON Feed for ${cleanDomain}.",
  "authors": [
    {
      "name": "${titleCaseSite}",
      "url": "${cleanDomain}"
    }
  ],
  "items": [
    {
      "id": "${cleanDomain}/blog/latest-update",
      "url": "${cleanDomain}/blog/latest-update",
      "title": "Latest Update from ${titleCaseSite}",
      "content_text": "Fresh information published on the official blog of ${titleCaseSite}.",
      "date_published": "${nowIso}"
    }
  ]
}`;

      case "webConfig":
        return `<?xml version="1.0" encoding="UTF-8"?>
<!-- IIS web.config for ${cleanDomain} -->
<configuration>
  <system.webServer>
    <staticContent>
      <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".avif" mimeType="image/avif" />
      <mimeMap fileExtension=".xml" mimeType="application/xml" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
      <mimeMap fileExtension=".txt" mimeType="text/plain" />
      <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
    </staticContent>
    <httpProtocol>
      <customHeaders>
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-Frame-Options" value="SAMEORIGIN" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
        <add name="Strict-Transport-Security" value="max-age=31536000; includeSubDomains" />
      </customHeaders>
    </httpProtocol>
    <rewrite>
      <rules>
        <rule name="Force HTTPS" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="off" ignoreCase="true" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
        </rule>
      </rules>
    </rewrite>
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />
  </system.webServer>
</configuration>`;

      case "securityHeaders":
        return `# ============================================================
# RECOMMENDED SECURITY & PERFORMANCE HEADERS for ${cleanDomain}
# Apache: paste into .htaccess  |  Nginx: inside server {}  |  Next.js: in next.config.ts
# ============================================================

# ── 1. Next.js App Router (next.config.ts) ──
// Copy into next.config.ts inside module.exports / defineConfig:
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1, max-image-preview:large' },
      ],
    },
  ];
}

# ── 2. Apache (.htaccess) ──
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
Header always set X-Robots-Tag "index, follow, max-snippet:-1, max-image-preview:large"

# ── 3. Nginx (nginx.conf) ──
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header X-Robots-Tag "index, follow, max-snippet:-1, max-image-preview:large" always;`;

      case "humansTxt":
        return `/* TEAM */
${titleCaseSite}
Contact: hello@${siteName}.com | ${CONTACT.phone}
Location: India (Remote / Worldwide)

/* THANKS */
Built with modern web standards, strict SemVer and open tools.
Hosting & CDN: ${cleanDomain}

/* SITE */
Standards: HTML5, CSS3, WCAG 2.1 AA
Last update: ${today}
Backend: Next.js / React / Node.js`;

      case "perfHints":
        return `<!-- ============================================================
  PERFORMANCE & PRELOAD HINTS for ${cleanDomain}
  Drop into <head> — improves LCP, TTFB and FCP on Lighthouse/PageSpeed.
============================================================ -->

<!-- Preconnect critical third-party origins (only what pages actually use) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- DNS prefetch for asset CDNs -->
<link rel="dns-prefetch" href="//cdn.${siteName}.com" />

<!-- Preload the LCP image (the largest above-the-fold image) -->
<link rel="preload" as="image" href="${cleanDomain}/hero-lcp.webp" fetchpriority="high" />

<!-- Preload critical fonts (woff2 only) -->
<link rel="preload" as="font" type="font/woff2" href="${cleanDomain}/fonts/inter-var.woff2" crossorigin />

<!-- Preload critical CSS entry -->
<link rel="preload" as="style" href="${cleanDomain}/critical.css" onload="this.onload=null;this.rel='stylesheet'" />

<!-- Defer & lazy-load everything else -->
<script src="${cleanDomain}/app.js" defer></script>

<!-- Meta cache-control hint for document responses -->
<meta http-equiv="Cache-Control" content="public, max-age=3600" />

<!-- Image budget rules of thumb:
     1. Convert all raster images to WebP/AVIF (60-80% smaller)
     2. Set explicit width/height to eliminate CLS
     3. lazy-load every image below the fold
     4. Serve responsive srcset sizes -->

<!-- Core Web Vitals targets: LCP < 2.5s | INP < 200ms | CLS < 0.1 -->`;

      default:
        return "// Code generator ready";
    }
  };

  const currentCode = getGeneratedCode(selectedToolId);

  const handleCopyCode = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    copy(currentCode);
    triggerConfetti(`${currentTool.filename} directive copied!`, "copy");
  };

  const triggerBlobDownload = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSingleFile = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    triggerBlobDownload(currentCode, currentTool.filename, currentTool.mimeType);
    triggerConfetti(`${currentTool.filename} downloaded!`, "download");
  };

  const handleBatchDownloadAll = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    setBatchDownloading(true);

    const files = TOOLS_LIST.map((tool) => ({
      name: `seo-directives/${tool.filename}`,
      content: getGeneratedCode(tool.id)
    }));

    // Async so the spinner paints before the zip is built
    setTimeout(() => {
      const zip = buildZip(files);
      const url = URL.createObjectURL(zip);
      const link = document.createElement("a");
      link.href = url;
      link.download = "seo-directives-bundle.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setBatchDownloading(false);
      triggerConfetti(`All ${TOOLS_LIST.length} SEO technical directives downloaded as ZIP!`, "download");
    }, 250);
  };

  return (
    <div className="space-y-6">
      
      {/* Category Pills & Info Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-white uppercase">{TOOLS_LIST.length} Technical SEO & Web Directive Generators</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-white text-black font-bold shadow"
                      : "bg-black text-white/60 border border-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Batch Download Button */}
          <button
            onClick={handleBatchDownloadAll}
            className="px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold uppercase rounded-lg hover:bg-emerald-500/30 transition-all flex items-center gap-1.5 shrink-0"
          >
            <FolderArchive className="w-3.5 h-3.5 text-emerald-400" />
            <span>{batchDownloading ? "Packaging..." : `Download All ${TOOLS_LIST.length} Files (ZIP)`}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Side Framer Motion Cards, Right Side Code Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side Tool Cards with Framer Motion Hover Effects */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-1 scrollbar-thin">
          <AnimatePresence>
            {filteredTools.map((tool) => {
              const isSelected = selectedToolId === tool.id;
              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    onClick={() => {
                      setSelectedToolId(tool.id);
                      triggerConfetti(`${tool.name} snippet generated!`, "generate");
                    }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                      isSelected 
                        ? "bg-white text-black border-white shadow-xl ring-2 ring-emerald-400/40" 
                        : "bg-black/80 text-white/80 border-white/10 hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                        isSelected 
                          ? "bg-black text-white border-black" 
                          : "bg-white/5 border-white/10 text-emerald-400"
                      }`}>
                        #{tool.number}
                      </div>

                      <div>
                        <div className="text-xs font-mono font-bold tracking-tight">
                          {tool.name}
                        </div>
                        <div className={`text-[10px] font-mono mt-0.5 line-clamp-1 ${
                          isSelected ? "text-zinc-700 font-semibold" : "text-white/40 font-light"
                        }`}>
                          {tool.filename} • {tool.description}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                        isSelected 
                          ? "bg-black/10 text-black border border-black/20" 
                          : "bg-white/10 text-white/60"
                      }`}>
                        {tool.fileType}
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Side Live Code Output & Blob API Download Panel */}
        <div className="lg:col-span-7 bg-black border border-white/15 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-2xl relative">
          
          {/* Domain Warning Banner if domain is empty */}
          {!hasDomain && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl flex items-center justify-between gap-2 text-xs font-mono text-amber-300"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Domain required! Input website domain above to generate valid URLs.</span>
              </div>
              <button
                onClick={onRequireDomain}
                className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase rounded hover:bg-amber-300 transition-colors shrink-0"
              >
                Set Domain
              </button>
            </motion.div>
          )}

          {/* Generator Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded">
                  #{currentTool.number} {currentTool.category}
                </span>
                <span className="text-xs font-mono text-white/50">{currentTool.filename}</span>
              </div>
              <h3 className="text-lg font-bold text-white font-mono mt-1">
                {currentTool.name}
              </h3>
            </div>

            {/* Copy & Blob API Download Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-3.5 py-2 bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-white/20 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>

              <button
                onClick={handleDownloadSingleFile}
                className="px-3.5 py-2 bg-white text-black text-xs font-mono font-bold uppercase rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {currentTool.filename}</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Panel with Syntax Display */}
          <div className="relative rounded-xl border border-white/10 bg-[#09090b] p-4 font-mono text-xs overflow-x-auto min-h-[380px] max-h-[480px] scrollbar-thin">
            <div className="absolute top-2 right-3 text-[9px] text-white/30 font-bold uppercase tracking-widest">
              {currentTool.fileType} • {cleanDomain}
            </div>
            <pre className="text-emerald-300 leading-relaxed font-mono selection:bg-emerald-500 selection:text-black">
              {currentCode}
            </pre>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> W3C & Google Webmaster Directive
            </span>
            <span>Domain: <strong className="text-white">{cleanDomain}</strong></span>
          </div>

        </div>

      </div>

      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />

    </div>
  );
};