"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import { buildZip } from "./TechnicalCodeGenerators";
import {
  PackageOpen,
  Download,
  Loader2,
  CheckCircle2,
  Sparkles,
  ListChecks,
  AlertCircle,
  Lock,
  FileCode2,
  Rocket
} from "lucide-react";
import { CONTACT } from "@/config/site";

interface AllInOneGeneratorProps {
  domain: string;
  onRequireDomain: () => void;
}

const DEPLOY_STEPS = [
  "Paste seo-head-tags.html into the <head> of your layout template and customise title/description per page.",
  "Add schema-all.jsonld in a <script type=\"application/ld+json\"> block on your homepage.",
  "Upload robots.txt, sitemap.xml, llms.txt, rss.xml, atom.xml, feed.json, humans.txt, .htaccess, web.config, manifest.json, sw.js and security-headers.txt to your website root.",
  "Register sw.js in your browser JS with navigator.serviceWorker.register('/sw.js') and link manifest.json via <link rel=\"manifest\" href=\"/manifest.json\">.",
  "Verify in Google Search Console: submit sitemap.xml, test robots.txt, request indexing.",
  "Test with PageSpeed Insights & Schema Validator after deployment.",
];

const pageList = (pages: string): string[] =>
  pages.split(",").map((p) => p.trim().replace(/^\/+/, "")).filter(Boolean);

export const AllInOneGenerator: React.FC<AllInOneGeneratorProps> = ({ domain, onRequireDomain }) => {
  const [siteName, setSiteName] = useState("My Business");
  const [tagline, setTagline] = useState("Trusted services & solutions");
  const [about, setAbout] = useState("We deliver high-quality services to customers across India and worldwide — fast, reliable and transparent.");
  const [keywords, setKeywords] = useState("services, solutions, business");
  const [phone, setPhone] = useState<string>(CONTACT.phone);
  const [email, setEmail] = useState("hello@yourbusiness.com");
  const [logoUrl, setLogoUrl] = useState("/logo.png");
  const [city, setCity] = useState("Noida");
  const [state, setState] = useState("Uttar Pradesh");
  const [socials, setSocials] = useState("https://facebook.com, https://linkedin.com");
  const [pages, setPages] = useState("index.html, about.html, services.html, blog.html, contact.html");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [confetti, setConfetti] = useState<{ show: boolean; message: string; type: "copy" | "download" | "generate" }>({ show: false, message: "", type: "download" });

  const triggerConfetti = (message: string, type: "copy" | "download" | "generate") => {
    setConfetti({ show: true, message, type });
    setTimeout(() => setConfetti((prev) => ({ ...prev, show: false })), 2800);
  };

  const cleanDomain = domain.trim() ? domain.trim().replace(/\/$/, "") : "";
  const hasDomain = Boolean(cleanDomain);
  const base = cleanDomain.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const socialsArr = useMemo(() => socials.split(",").map((s) => s.trim()).filter(Boolean), [socials]);
  const pagesArr = pageList(pages);
  const today = new Date().toISOString().split("T")[0];
  const nowIso = new Date().toISOString();
  const cacheTag = Array.from(base).reduce((h: number, c: string) => (h * 31 + c.charCodeAt(0)) >>> 0, 0).toString(36);

  const buildFiles = (): { name: string; content: string }[] => {
    const sitemapUrls = pagesArr
      .map((p, i) => {
        const slug = p === "index.html" ? "/" : `/${p.replace(/\.html?$/i, "")}`;
        const prio = p === "index.html" ? "1.0" : i <= 3 ? "0.8" : "0.6";
        return `  <url>\n    <loc>${cleanDomain}${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${prio}</priority>\n  </url>`;
      })
      .join("\n");

    const rssItems = pagesArr
      .slice(0, 8)
      .map((p) => {
        const slug = p === "index.html" ? "/" : `/${p.replace(/\.html?$/i, "")}`;
        return `    <item>\n      <title>${siteName} — ${p}</title>\n      <link>${cleanDomain}${slug}</link>\n      <guid>${cleanDomain}${slug}</guid>\n      <pubDate>${nowIso}</pubDate>\n      <description>${tagline} — page on ${siteName}.</description>\n    </item>`;
      })
      .join("\n");

    return [
      {
        name: "seo-directives/seo-head-tags.html",
        content: `<!-- ===== COMPLETE SEO HEAD for ${cleanDomain} ===== -->
<title>${siteName} | ${tagline}</title>
<meta name="description" content="${about.slice(0, 155)}" />
<meta name="keywords" content="${keywords}" />
<meta name="author" content="${siteName}" />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#050505" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
<link rel="canonical" href="${cleanDomain}/" />
<link rel="alternate" hreflang="en" href="${cleanDomain}/" />
<link rel="alternate" hreflang="x-default" href="${cleanDomain}/" />
<meta name="geo.region" content="IN" />
<meta name="geo.placename" content="${city}, ${state}" />
<meta name="geo.position" content="26.795;82.199" />
<meta name="ICBM" content="26.795, 82.199" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${cleanDomain}/" />
<meta property="og:site_name" content="${siteName}" />
<meta property="og:title" content="${siteName} | ${tagline}" />
<meta property="og:description" content="${about.slice(0, 155)}" />
<meta property="og:image" content="${cleanDomain}${logoUrl.startsWith("/") ? logoUrl : "/" + logoUrl}" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${siteName} | ${tagline}" />
<meta name="twitter:description" content="${about.slice(0, 155)}" />
<meta name="twitter:image" content="${cleanDomain}${logoUrl.startsWith("/") ? logoUrl : "/" + logoUrl}" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="${cleanDomain}/rss.xml" />
<link rel="alternate" type="application/atom+xml" title="Atom" href="${cleanDomain}/atom.xml" />
<link rel="alternate" type="application/feed+json" title="JSON Feed" href="${cleanDomain}/feed.json" />
<link rel="manifest" href="${cleanDomain}/manifest.json" />`,
      },
      {
        name: "seo-directives/schema-all.jsonld",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${cleanDomain}/#organization`,
              name: siteName,
              url: cleanDomain,
              logo: `${cleanDomain}${logoUrl.startsWith("/") ? logoUrl : "/" + logoUrl}`,
              description: about,
              email,
              telephone: phone,
              address: { "@type": "PostalAddress", addressLocality: city, addressRegion: state, addressCountry: "IN" },
              contactPoint: { "@type": "ContactPoint", telephone: phone, contactType: "customer service", email, areaServed: "Worldwide" },
              sameAs: socialsArr,
            },
            {
              "@type": "WebSite",
              "@id": `${cleanDomain}/#website`,
              url: cleanDomain,
              name: `${siteName} | ${tagline}`,
              publisher: { "@id": `${cleanDomain}/#organization` },
              inLanguage: "en",
            },
            {
              "@type": "ProfessionalService",
              "@id": `${cleanDomain}/#service`,
              name: siteName,
              url: cleanDomain,
              telephone: phone,
              priceRange: "₹₹",
              address: { "@type": "PostalAddress", addressLocality: city, addressRegion: state, addressCountry: "IN" },
              provider: { "@id": `${cleanDomain}/#organization` },
              areaServed: [{ "@type": "City", name: city }, { "@type": "Country", name: "India" }],
              makesOffer: keywords.split(",").map((k, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name: k.trim() } })),
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${cleanDomain}/#breadcrumbs`,
              itemListElement: pagesArr.slice(0, 5).map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.replace(/\.html?$/i, ""),
                item: `${cleanDomain}${p === "index.html" ? "/" : "/" + p.replace(/\.html?$/i, "")}`,
              })),
            },
            {
              "@type": "FAQPage",
              "@id": `${cleanDomain}/#faq`,
              mainEntity: [
                { "@type": "Question", name: `What does ${siteName} do?`, acceptedAnswer: { "@type": "Answer", text: about } },
                { "@type": "Question", name: `How do I contact ${siteName}?`, acceptedAnswer: { "@type": "Answer", text: `Call ${phone} or email ${email}.` } },
              ],
            },
          ],
        }, null, 2),
      },
      {
        name: "seo-directives/organization.json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${cleanDomain}/#organization`,
          name: siteName,
          url: cleanDomain,
          logo: `${cleanDomain}${logoUrl.startsWith("/") ? logoUrl : "/" + logoUrl}`,
          description: about,
          email,
          telephone: phone,
          address: { "@type": "PostalAddress", addressLocality: city, addressRegion: state, addressCountry: "IN" },
          contactPoint: { "@type": "ContactPoint", telephone: phone, contactType: "customer service", email, areaServed: "Worldwide" },
          sameAs: socialsArr,
        }, null, 2),
      },
      {
        name: "seo-directives/breadcrumbs.json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: pagesArr.slice(0, 5).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.replace(/\.html?$/i, ""),
            item: `${cleanDomain}${p === "index.html" ? "/" : "/" + p.replace(/\.html?$/i, "")}`,
          })),
        }, null, 2),
      },
      {
        name: "seo-directives/faq-schema.json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: `What does ${siteName} do?`, acceptedAnswer: { "@type": "Answer", text: about } },
            { "@type": "Question", name: `Where is ${siteName} located?`, acceptedAnswer: { "@type": "Answer", text: `${city}, ${state}, India. Serving clients worldwide.` } },
            { "@type": "Question", name: `How do I contact ${siteName}?`, acceptedAnswer: { "@type": "Answer", text: `Call ${phone} or email ${email}.` } },
          ],
        }, null, 2),
      },
      {
        name: "seo-directives/robots.txt",
        content: `# Robots.txt for ${cleanDomain}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# AI Model Crawlers
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

Sitemap: ${cleanDomain}/sitemap.xml
Sitemap: ${cleanDomain}/feed.json`,
      },
      {
        name: "seo-directives/sitemap.xml",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`,
      },
      {
        name: "seo-directives/llms.txt",
        content: `# LLMs.txt for ${cleanDomain}
Title: ${siteName} | ${tagline}
URL: ${cleanDomain}
Description: ${about}

# Primary Pages
${pagesArr.map((p) => `- ${p.replace(/\.html?$/i, "").replace(/^./, (c) => c.toUpperCase())}: ${cleanDomain}${p === "index.html" ? "/" : "/" + p.replace(/\.html?$/i, "")}`).join("\n")}

# Key Facts
- Organisation: ${siteName}
- Location: ${city}, ${state}, India
- Contact: ${phone} | ${email}
- Keywords: ${keywords}
- Last verified: ${today}`,
      },
      {
        name: "seo-directives/ai-seo-optimization.html",
        content: `<!-- AI Search / AEO / GEO block for ${cleanDomain} -->
<meta name="ai-content-rating" content="high" />
<meta name="entity-type" content="Organization" />
<meta name="site-category" content="${siteName}" />
<meta name="answerable:question" content="What is ${siteName}?" />
<meta name="answerable:answer" content="${siteName} at ${cleanDomain} — ${about.slice(0, 120)} Contact ${phone}." />

<article itemscope itemtype="https://schema.org/FAQPage">
  <h1 itemprop="headline">${siteName} — Official Website</h1>
  <p itemprop="description"><strong>Short answer:</strong> ${about}</p>
  <h2>What services does ${siteName} offer?</h2>
  <p>${keywords.split(",").map((k) => k.trim()).join(", ")} — full details at ${cleanDomain}.</p>
  <h2>How to contact ${siteName}</h2>
  <p>Call ${phone} or email ${email}. Located in ${city}, ${state}, India.</p>
</article>`,
      },
      {
        name: "seo-directives/.htaccess",
        content: `# .htaccess for ${cleanDomain}
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^(.*)$ https://${base}/$1 [L,R=301]

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

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

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"`,
      },
      {
        name: "seo-directives/sw.js",
        content: `// Service Worker for ${siteName} — ${cleanDomain}
const CACHE_NAME = '${cacheTag}-v1';
const STATIC_ASSETS = ['/', '/offline.html', '/manifest.json', '/favicon.ico'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request).then((c) => c || caches.match('/offline.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});`,
      },
      {
        name: "seo-directives/manifest.json",
        content: JSON.stringify({
          name: siteName,
          short_name: siteName.slice(0, 12),
          description: `${tagline} — ${cleanDomain}.`,
          start_url: "/",
          scope: "/",
          display: "standalone",
          background_color: "#050505",
          theme_color: "#050505",
          lang: "en",
          icons: [
            { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
            { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
          ],
        }, null, 2),
      },
      {
        name: "seo-directives/rss.xml",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName} — Updates</title>
    <link>${cleanDomain}</link>
    <description>${tagline}</description>
    <language>en-us</language>
    <lastBuildDate>${nowIso}</lastBuildDate>
    <atom:link href="${cleanDomain}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`,
      },
      {
        name: "seo-directives/atom.xml",
        content: `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${siteName} — Atom Feed</title>
  <subtitle>${tagline}</subtitle>
  <link href="${cleanDomain}/" />
  <link rel="self" href="${cleanDomain}/atom.xml" />
  <updated>${nowIso}</updated>
  <id>${cleanDomain}/</id>
  <author>
    <name>${siteName}</name>
    <email>${email}</email>
  </author>
${pagesArr.slice(0, 8).map((p) => {
          const slug = p === "index.html" ? "/" : `/${p.replace(/\.html?$/i, "")}`;
          return `  <entry>
    <title>${siteName} — ${p}</title>
    <link href="${cleanDomain}${slug}" />
    <id>${cleanDomain}${slug}</id>
    <updated>${nowIso}</updated>
    <summary>${tagline}</summary>
  </entry>`;
        }).join("\n")}
</feed>`,
      },
      {
        name: "seo-directives/feed.json",
        content: JSON.stringify({
          version: "https://jsonfeed.org/version/1.1",
          title: `${siteName} Feed`,
          home_page_url: `${cleanDomain}/`,
          feed_url: `${cleanDomain}/feed.json`,
          description: tagline,
          authors: [{ name: siteName, url: cleanDomain }],
          items: pagesArr.slice(0, 8).map((p) => ({
            id: `${cleanDomain}/${p === "index.html" ? "" : p.replace(/\.html?$/i, "")}`,
            url: `${cleanDomain}${p === "index.html" ? "/" : "/" + p.replace(/\.html?$/i, "")}`,
            title: `${siteName} — ${p}`,
            content_text: tagline,
            date_published: nowIso,
          })),
        }, null, 2),
      },
      {
        name: "seo-directives/web.config",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".avif" mimeType="image/avif" />
      <mimeMap fileExtension=".xml" mimeType="application/xml" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
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
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />
  </system.webServer>
</configuration>`,
      },
      {
        name: "seo-directives/security-headers.txt",
        content: `# Security headers for ${cleanDomain}
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
Header always set Cross-Origin-Opener-Policy "same-origin"
Header always set Cross-Origin-Resource-Policy "same-site"
Header always set Content-Security-Policy "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' data:; connect-src 'self'"`,
      },
      {
        name: "seo-directives/humans.txt",
        content: `/* TEAM */
${siteName}
Contact: ${email} | ${phone}
Location: ${city}, ${state}, India

/* SITE */
This site was built with accessibility and performance in mind.
Last update: ${today}
Standards: HTML5, CSS3, WCAG 2.1 AA`,
      },
      {
        name: "seo-directives/performance-preload-hints.html",
        content: `<!-- Performance hints for ${cleanDomain} — add to <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="//cdn.${base.split(".")[0]}.com" />
<link rel="preload" as="image" href="${cleanDomain}/hero-lcp.webp" fetchpriority="high" />
<link rel="preload" as="font" type="font/woff2" href="${cleanDomain}/fonts/main-var.woff2" crossorigin />
<link rel="preload" as="style" href="${cleanDomain}/critical.css" onload="this.onload=null;this.rel='stylesheet'" />
<script src="${cleanDomain}/app.js" defer></script>
<meta http-equiv="Cache-Control" content="public, max-age=3600" />
<!-- Targets: LCP < 2.5s | INP < 200ms | CLS < 0.1 -->
<!-- Convert rasters to WebP/AVIF, set width/height on images, lazy-load below-the-fold -->
<!-- Serve brotli/gzip via .htaccess & security-headers.txt -->
<!-- Keep bundle under 170KB gzipped; split non-critical JS with defer -->`,
      },
      {
        name: "seo-directives/sitemap-generator.js",
        content: `// Dynamic sitemap generator for ${cleanDomain}
const fs = require("fs");
const DOMAIN = "${cleanDomain}";
const pages = [${pagesArr.map((p) => `"${p}"`).join(", ")}];

const xml = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map((p, i) => \`
  <url>
    <loc>\${DOMAIN}\${p === "index.html" ? "/" : "/" + p.replace(/\\.html?$/i, "")}</loc>
    <lastmod>\${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>\${i === 0 ? "1.0" : "0.8"}</priority>
  </url>\`).join("")}
</urlset>\`;

fs.writeFileSync("./sitemap.xml", xml);
console.log("✔ sitemap.xml generated for ${cleanDomain}");`,
      },
      {
        name: "DEPLOYMENT-CHECKLIST.md",
        content: `# Deployment Checklist — ${siteName} (${cleanDomain})

Generated ${today} — ${pagesArr.length} pages, ${keywords.split(",").length} keywords.

## 1. Upload to website root
- seo-directives/robots.txt        → /robots.txt
- seo-directives/sitemap.xml       → /sitemap.xml
- seo-directives/llms.txt          → /llms.txt
- seo-directives/.htaccess         → /.htaccess (Apache only)
- seo-directives/web.config        → /web.config (IIS only)
- seo-directives/sw.js             → /sw.js
- seo-directives/manifest.json     → /manifest.json
- seo-directives/rss.xml           → /rss.xml
- seo-directives/atom.xml          → /atom.xml
- seo-directives/feed.json         → /feed.json
- seo-directives/security-headers.txt → apply to server config
- seo-directives/humans.txt        → /humans.txt

## 2. HTML templates
- seo-directives/seo-head-tags.html → <head> of layout/template
- seo-directives/schema-all.jsonld → homepage <script type="application/ld+json">
- seo-directives/breadcrumbs.json / faq-schema.json / organization.json → relevant pages
- seo-directives/performance-preload-hints.html → <head> of templates

## 3. JS/PWA
- Register sw.js: navigator.serviceWorker.register('/sw.js')
- Link manifest: <link rel="manifest" href="/manifest.json">

## 4. Verify
- Google Search Console: submit sitemap, test robots.txt, request indexing
- schema.org validator: validate schema-all.jsonld
- PageSpeed Insights: confirm LCP < 2.5s, INP < 200ms, CLS < 0.1`,
      },
    ];
  };

  const handleGenerate = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    setGenerating(true);
    setTimeout(() => {
      const files = buildFiles();
      const zip = buildZip(files);
      const url = URL.createObjectURL(zip);
      const a = document.createElement("a");
      a.href = url;
      a.download = "seo-all-in-one-kit.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setGenerating(false);
      setGenerated(true);
      triggerConfetti(`All-in-One SEO kit generated — ${files.length} files!`, "download");
    }, 300);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-8 shadow-2xl">
      <div className="border-b border-white/10 pb-4 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
          <PackageOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>All-in-One SEO Deployment Kit</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
          One Form, Everything Your Website Needs
        </h3>
        <p className="text-xs text-white/70 max-w-3xl leading-relaxed">
          Enter your complete business data once — get every production file customized: full SEO head, complete JSON-LD graph, robots.txt, sitemap.xml, llms.txt, .htaccess, sw.js, manifest.json, RSS/Atom/JSON feeds, web.config, security headers, performance hints and a deployment checklist — all in one ZIP.
        </p>
      </div>

      {!hasDomain && (
        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl flex items-center justify-between gap-2 text-xs font-mono text-amber-300">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Set your website domain in the bar above — every generated file needs it.</span>
          </div>
          <button onClick={onRequireDomain} className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase rounded hover:bg-amber-300 transition-colors shrink-0">
            Set Domain
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FORM */}
        <div className="space-y-3 text-xs font-mono">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/80 font-bold block mb-1">Business / Site Name *</label>
              <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-white/80 font-bold block mb-1">Tagline</label>
              <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
          </div>
          <div>
            <label className="text-white/80 font-bold block mb-1">About / Description</label>
            <textarea rows={2} value={about} onChange={(e) => setAbout(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/80 font-bold block mb-1">Keywords (comma separated)</label>
              <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-white/80 font-bold block mb-1">Logo Path (/logo.png)</label>
              <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/80 font-bold block mb-1">Phone</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-white/80 font-bold block mb-1">Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/80 font-bold block mb-1">City</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-white/80 font-bold block mb-1">State</label>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
            </div>
          </div>
          <div>
            <label className="text-white/80 font-bold block mb-1">Social Profiles (comma separated)</label>
            <input type="text" value={socials} onChange={(e) => setSocials(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
          </div>
          <div>
            <label className="text-white/80 font-bold block mb-1">Pages (comma separated — drives sitemap, breadcrumbs & feeds)</label>
            <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400" />
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full py-3 bg-gradient-to-r from-emerald-400 to-teal-300 text-black font-mono font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 disabled:opacity-60"
          >
            {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
            {generating ? "Generating Kit..." : "Generate Complete SEO Kit (ZIP)"}
          </button>

          {generated && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-[11px] font-mono text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Kit downloaded! Follow the included DEPLOYMENT-CHECKLIST.md to go live.
            </motion.div>
          )}

          <div className="p-3 bg-zinc-900/80 border border-white/10 rounded-xl flex items-center gap-2 text-[10px] font-mono text-white/50">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            All files are generated locally in your browser — your business data never leaves this device.
          </div>
        </div>

        {/* DEPLOYMENT CHECKLIST */}
        <div className="p-4 bg-zinc-900/80 border border-white/10 rounded-2xl space-y-3 h-fit">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">
            <ListChecks className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deployment Steps (included in ZIP as checklist)</span>
          </div>
          {DEPLOY_STEPS.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-[11px] text-white/70 leading-relaxed">
              <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono text-[9px] font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}

          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 mb-3">
              <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{hasDomain ? `Files will be generated for ${cleanDomain}` : "Files generated after domain is set"}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["seo-head-tags.html", "schema-all.jsonld", "organization.json", "breadcrumbs.json", "faq-schema.json", "robots.txt", "sitemap.xml", "llms.txt", "ai-seo-optimization.html", ".htaccess", "sw.js", "manifest.json", "rss.xml", "atom.xml", "feed.json", "web.config", "security-headers.txt", "humans.txt", "performance-preload-hints.html", "sitemap-generator.js", "DEPLOYMENT-CHECKLIST.md"].map((f) => (
                <span key={f} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono text-emerald-300">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />
    </div>
  );
};