"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import { 
  Code2, 
  Copy, 
  Check, 
  Building2, 
  FileText, 
  MapPin, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Globe, 
  Rss,
  Radio,
  FileCode2,
  Route,
  Layers
} from "lucide-react";
import { SITE_URL, CONTACT } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface JsonLdGeneratorProps {
  domain?: string;
}

export type SchemaType = "Organization" | "Article" | "LocalBusiness" | "FAQPage" | "BreadcrumbList" | "FullGraph" | "RssFeed" | "AtomFeed";

interface SchemaOptionCard {
  id: SchemaType;
  title: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
}

const SCHEMA_CARDS: SchemaOptionCard[] = [
  {
    id: "Organization",
    title: "Organization Schema",
    badge: "JSON-LD",
    desc: "Brand entity, logo & contact info for Google Knowledge Graph.",
    icon: Building2
  },
  {
    id: "Article",
    title: "Article / TechBlog",
    badge: "JSON-LD",
    desc: "Headline, author & date published for Google News & Discover.",
    icon: FileText
  },
  {
    id: "LocalBusiness",
    title: "Local Business",
    badge: "JSON-LD",
    desc: "Address, geo-coordinates & phone for Google Map Pack.",
    icon: MapPin
  },
  {
    id: "FAQPage",
    title: "FAQ Page Schema",
    badge: "JSON-LD",
    desc: "Question & answer pairs for collapsible Google SERP rich snippets.",
    icon: HelpCircle
  },
  {
    id: "BreadcrumbList",
    title: "Breadcrumb Schema",
    badge: "JSON-LD",
    desc: "Navigation trail shown under the page title in Google search results.",
    icon: Route
  },
  {
    id: "FullGraph",
    title: "All-in-One @graph (All Types)",
    badge: "JSON-LD",
    desc: "One valid script with Organization, Person, WebSite, Service, FAQ & Breadcrumb.",
    icon: Layers
  },
  {
    id: "RssFeed",
    title: "RSS 2.0 Feed Tag",
    badge: "XML Tag",
    desc: "Standard RSS 2.0 xml channel tags for blog feed indexing.",
    icon: Rss
  },
  {
    id: "AtomFeed",
    title: "Atom Feed Tag",
    badge: "XML Tag",
    desc: "Modern W3C Atom 1.0 feed header & entry tags.",
    icon: Radio
  }
];

export const JsonLdGenerator: React.FC<JsonLdGeneratorProps> = ({ domain }) => {
  const [schemaType, setSchemaType] = useState<SchemaType>("Organization");
  const { copied, copy } = useCopyToClipboard();
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

  const domainValue = domain?.trim() ? domain.trim().replace(/\/$/, "") : "";

  // Organization state
  const [orgName, setOrgName] = useState("Rohit Gupta Full Stack & SEO Services");
  const [orgUrl, setOrgUrl] = useState(domainValue || SITE_URL);
  const [orgLogo, setOrgLogo] = useState(`${SITE_URL}/logo.png`);
  const [orgEmail, setOrgEmail] = useState<string>(CONTACT.email);
  const [orgPhone, setOrgPhone] = useState<string>(CONTACT.phone);
  const [orgSameAs, setOrgSameAs] = useState("https://github.com/rohitgupta, https://linkedin.com/in/rohitgupta");
  const [orgDesc, setOrgDesc] = useState("Full stack web development and technical SEO services — Core Web Vitals, schema markup and white-hat rankings.");

  // Article state
  const [articleTitle, setArticleTitle] = useState("Achieving 99+ Core Web Vitals Score on Next.js App Router");
  const [articleDesc, setArticleDesc] = useState("Comprehensive guide on dynamic import splitting and image optimization for Google SERP rank #1.");
  const [articleAuthor, setArticleAuthor] = useState("Rohit Gupta");
  const [articleDate, setArticleDate] = useState("2026-08-07");
  const [articlePublisher, setArticlePublisher] = useState("Rohit Gupta Digital");

  // Local Business state
  const [bizName, setBizName] = useState("Rohit Gupta SEO Specialist Noida & Delhi");
  const [bizAddress, setBizAddress] = useState("Sector 63, Noida");
  const [bizCity, setBizCity] = useState("Noida");
  const [bizRegion, setBizRegion] = useState("Uttar Pradesh");
  const [bizPostal, setBizPostal] = useState("201301");
  const [bizPrice, setBizPrice] = useState("₹₹₹");

  // FAQ Page state
  const [faq1Q, setFaq1Q] = useState("How long does it take to see SEO results?");
  const [faq1A, setFaq1A] = useState("With technical SEO and Core Web Vitals speed optimizations, initial ranking jumps occur in 2 to 4 weeks.");
  const [faq2Q, setFaq2Q] = useState("What SEO tools do you use?");
  const [faq2A, setFaq2A] = useState("We leverage Google Search Console, Ahrefs, Semrush, Screaming Frog, and custom PageSpeed insights scripts.");

  // RSS Feed state
  const [rssTitle, setRssTitle] = useState("Rohit Gupta - Technical SEO & Web Engineering Blog");
  const [rssDesc, setRssDesc] = useState("Latest case studies on Next.js performance optimization, Core Web Vitals, and White Hat SEO strategies.");
  const [rssLink, setRssLink] = useState(SITE_URL);
  const [rssFeedUrl, setRssFeedUrl] = useState(`${SITE_URL}/feed.xml`);
  const [rssLang, setRssLang] = useState("en-us");
  const [rssItemTitle, setRssItemTitle] = useState("Achieving 99+ Core Web Vitals Score on Next.js App Router");
  const [rssItemLink, setRssItemLink] = useState(`${SITE_URL}/blog/nextjs-core-web-vitals`);
  const [rssItemDate, setRssItemDate] = useState("Fri, 07 Aug 2026 00:00:00 GMT");

  // Atom Feed state
  const [atomTitle, setAtomTitle] = useState("Rohit Gupta Engineering & SEO Feed");
  const [atomSubtitle, setAtomSubtitle] = useState("Insights on full-stack web development and search engine optimization.");
  const [atomSelfLink, setAtomSelfLink] = useState(`${SITE_URL}/atom.xml`);
  const [atomHomeLink, setAtomHomeLink] = useState(SITE_URL);
  const [atomAuthorName, setAtomAuthorName] = useState("Rohit Gupta");
  const [atomAuthorEmail, setAtomAuthorEmail] = useState<string>(CONTACT.email);
  const [atomEntryTitle, setAtomEntryTitle] = useState("Next.js & React Development Services Overview");
  const [atomEntryLink, setAtomEntryLink] = useState(`${SITE_URL}/blog/react-development-services`);

  const generateOutput = () => {
    if (schemaType === "Organization") {
      const sameAsArray = orgSameAs.split(",").map((s) => s.trim()).filter(Boolean);
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": orgName,
        "url": orgUrl,
        "logo": orgLogo,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": orgPhone,
          "contactType": "customer service",
          "email": orgEmail
        },
        "sameAs": sameAsArray
      }, null, 2);
    }

    if (schemaType === "Article") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": articleTitle,
        "description": articleDesc,
        "author": {
          "@type": "Person",
          "name": articleAuthor
        },
        "publisher": {
          "@type": "Organization",
          "name": articlePublisher
        },
        "datePublished": articleDate,
        "dateModified": articleDate
      }, null, 2);
    }

    if (schemaType === "LocalBusiness") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": bizName,
        "image": `${SITE_URL}/office.jpg`,
        "telephone": orgPhone,
        "priceRange": bizPrice,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": bizAddress,
          "addressLocality": bizCity,
          "addressRegion": bizRegion,
          "postalCode": bizPostal,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6271",
          "longitude": "77.3726"
        }
      }, null, 2);
    }

    if (schemaType === "FAQPage") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": faq1Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq1A
            }
          },
          {
            "@type": "Question",
            "name": faq2Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq2A
            }
          }
        ]
      }, null, 2);
    }

    if (schemaType === "BreadcrumbList") {
      const siteUrl = orgUrl.replace(/\/$/, "");
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${siteUrl}/services` },
          { "@type": "ListItem", "position": 3, "name": "About", "item": `${siteUrl}/about` },
          { "@type": "ListItem", "position": 4, "name": "Contact", "item": `${siteUrl}/contact` }
        ]
      }, null, 2);
    }

    if (schemaType === "FullGraph") {
      const siteUrl = orgUrl.replace(/\/$/, "");
      const sameAsArray = orgSameAs.split(",").map((s) => s.trim()).filter(Boolean);
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            "name": orgName,
            "url": siteUrl,
            "logo": orgLogo,
            "description": orgDesc,
            "email": orgEmail,
            "telephone": orgPhone,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": orgPhone,
              "contactType": "customer service",
              "email": orgEmail
            },
            "sameAs": sameAsArray
          },
          {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            "name": orgName,
            "url": siteUrl,
            "worksFor": { "@id": `${siteUrl}/#organization` },
            "sameAs": sameAsArray
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": orgName,
            "publisher": { "@id": `${siteUrl}/#organization` },
            "inLanguage": "en"
          },
          {
            "@type": "ProfessionalService",
            "@id": `${siteUrl}/#service`,
            "name": orgName,
            "url": siteUrl,
            "image": orgLogo,
            "telephone": orgPhone,
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": bizAddress,
              "addressLocality": bizCity,
              "addressRegion": bizRegion,
              "postalCode": bizPostal,
              "addressCountry": "IN"
            },
            "provider": { "@id": `${siteUrl}/#organization` },
            "areaServed": [
              { "@type": "City", "name": "Noida" },
              { "@type": "City", "name": "Delhi" },
              { "@type": "Country", "name": "India" }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": `${siteUrl}/#faq`,
            "mainEntity": [
              {
                "@type": "Question",
                "name": faq1Q,
                "acceptedAnswer": { "@type": "Answer", "text": faq1A }
              },
              {
                "@type": "Question",
                "name": faq2Q,
                "acceptedAnswer": { "@type": "Answer", "text": faq2A }
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${siteUrl}/#breadcrumbs`,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": `${siteUrl}/services` },
              { "@type": "ListItem", "position": 3, "name": "Contact", "item": `${siteUrl}/contact` }
            ]
          },
          {
            "@type": "TechArticle",
            "@id": `${siteUrl}/#article`,
            "headline": articleTitle,
            "description": articleDesc,
            "author": {
              "@type": "Person",
              "name": articleAuthor
            },
            "publisher": { "@id": `${siteUrl}/#organization` },
            "datePublished": articleDate,
            "dateModified": articleDate,
            "mainEntityOfPage": siteUrl
          }
        ]
      }, null, 2);
    }

    if (schemaType === "RssFeed") {
      return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${rssTitle}</title>
    <link>${rssLink}</link>
    <description>${rssDesc}</description>
    <language>${rssLang}</language>
    <atom:link href="${rssFeedUrl}" rel="self" type="application/rss+xml" />
    <item>
      <title>${rssItemTitle}</title>
      <link>${rssItemLink}</link>
      <description>${rssDesc}</description>
      <pubDate>${rssItemDate}</pubDate>
      <guid>${rssItemLink}</guid>
    </item>
  </channel>
</rss>`;
    }

    if (schemaType === "AtomFeed") {
      return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${atomTitle}</title>
  <subtitle>${atomSubtitle}</subtitle>
  <link href="${atomSelfLink}" rel="self"/>
  <link href="${atomHomeLink}"/>
  <updated>2026-08-07T00:00:00Z</updated>
  <id>${atomHomeLink}/</id>
  <author>
    <name>${atomAuthorName}</name>
    <email>${atomAuthorEmail}</email>
  </author>
  <entry>
    <title>${atomEntryTitle}</title>
    <link href="${atomEntryLink}"/>
    <id>${atomEntryLink}</id>
    <updated>2026-08-07T00:00:00Z</updated>
    <summary>${atomSubtitle}</summary>
  </entry>
</feed>`;
    }

    return "{}";
  };

  const codeOutput = generateOutput();

  const handleCopy = () => {
    copy(codeOutput);
    triggerConfetti(`${schemaType} snippet copied to clipboard!`, "copy");
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([codeOutput], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${schemaType.toLowerCase()}-snippet.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    triggerConfetti(`${schemaType.toLowerCase()}-snippet.txt downloaded successfully!`, "download");
  };

  const handleDownloadFile = () => {
    const isXml = schemaType === "RssFeed" || schemaType === "AtomFeed";
    const ext = isXml ? "xml" : "json";
    const mime = isXml ? "application/xml" : "application/json";

    const blob = new Blob([codeOutput], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${schemaType.toLowerCase()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    triggerConfetti(`${schemaType.toLowerCase()}.${ext} downloaded successfully!`, "download");
  };

  const handleSelectType = (type: SchemaType) => {
    setSchemaType(type);
    triggerConfetti(`${type} template loaded!`, "generate");
  };

  const renderCodeFormatted = () => {
    if (schemaType === "RssFeed" || schemaType === "AtomFeed") {
      return codeOutput;
    }
    return `<script type="application/ld+json">\n${codeOutput}\n</script>`;
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-8 shadow-2xl">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-4 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
          <Code2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>SERP & Schema Generator Engine</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
          Schema Markup, RSS & Atom Feed Tag Generator
        </h3>
        <p className="text-xs text-white/70 max-w-2xl leading-relaxed">
          Generate valid Google rich result JSON-LD schemas or W3C compliant RSS 2.0 & Atom 1.0 XML feed tags with instant preview, copy to clipboard, and multi-format text download.
        </p>
      </div>

      {/* CARD-BASED LAYOUT WITH HOVER ANIMATIONS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-white/50">
          <span>Select Schema or Feed Generator Format:</span>
          <span className="text-emerald-400">{SCHEMA_CARDS.length} Available Generators</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {SCHEMA_CARDS.map((card) => {
            const isActive = schemaType === card.id;
            const IconComponent = card.icon;

            return (
              <motion.button
                key={card.id}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectType(card.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between space-y-3 ${
                  isActive
                    ? "bg-white text-black border-white shadow-2xl"
                    : "bg-zinc-900/90 text-white border-white/10 hover:border-emerald-500/50 hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isActive 
                      ? "bg-black text-emerald-400 border-black" 
                      : "bg-white/5 border-white/10 text-emerald-400"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    isActive
                      ? "bg-black text-emerald-400"
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  }`}>
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold font-mono tracking-tight uppercase">
                    {card.title}
                  </h4>
                  <p className={`text-xs mt-1 leading-snug font-sans ${isActive ? "text-zinc-700" : "text-white/60"}`}>
                    {card.desc}
                  </p>
                </div>

                {isActive && (
                  <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono font-bold text-emerald-600 uppercase">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Selected Active Template
                    </span>
                    <span>→</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Form Input + Code Output Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        
        {/* Input Form Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-3 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
            <span className="text-white/70 uppercase font-bold">Configure Parameters:</span>
            <span className="text-emerald-400 font-bold">{schemaType}</span>
          </div>

          {schemaType === "Organization" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Organization Name</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Organization Description</label>
                <input
                  type="text"
                  value={orgDesc}
                  onChange={(e) => setOrgDesc(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Website URL</label>
                  <input
                    type="text"
                    value={orgUrl}
                    onChange={(e) => setOrgUrl(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Logo Image URL</label>
                  <input
                    type="text"
                    value={orgLogo}
                    onChange={(e) => setOrgLogo(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={orgPhone}
                    onChange={(e) => setOrgPhone(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Contact Email</label>
                  <input
                    type="text"
                    value={orgEmail}
                    onChange={(e) => setOrgEmail(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Social Profiles (SameAs, comma separated)</label>
                <input
                  type="text"
                  value={orgSameAs}
                  onChange={(e) => setOrgSameAs(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          )}

          {schemaType === "BreadcrumbList" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Website URL (Home)</label>
                <input
                  type="text"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed">
                Generates a valid BreadcrumbList with Home → Services → About → Contact. Add matching visible breadcrumbs on the page for best results.
              </p>
            </div>
          )}

          {(schemaType === "FullGraph") && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Organization Name</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Website URL</label>
                <input
                  type="text"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Logo Image URL</label>
                <input
                  type="text"
                  value={orgLogo}
                  onChange={(e) => setOrgLogo(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Phone</label>
                  <input
                    type="text"
                    value={orgPhone}
                    onChange={(e) => setOrgPhone(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Email</label>
                  <input
                    type="text"
                    value={orgEmail}
                    onChange={(e) => setOrgEmail(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Social Profiles (comma separated)</label>
                <input
                  type="text"
                  value={orgSameAs}
                  onChange={(e) => setOrgSameAs(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          )}

          {schemaType === "Article" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Article Headline</label>
                <input
                  type="text"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Description / Summary</label>
                <textarea
                  rows={2}
                  value={articleDesc}
                  onChange={(e) => setArticleDesc(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Author Name</label>
                  <input
                    type="text"
                    value={articleAuthor}
                    onChange={(e) => setArticleAuthor(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Publish Date</label>
                  <input
                    type="date"
                    value={articleDate}
                    onChange={(e) => setArticleDate(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
            </div>
          )}

          {schemaType === "LocalBusiness" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Business Name</label>
                <input
                  type="text"
                  value={bizName}
                  onChange={(e) => setBizName(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Street Address</label>
                  <input
                    type="text"
                    value={bizAddress}
                    onChange={(e) => setBizAddress(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">City</label>
                  <input
                    type="text"
                    value={bizCity}
                    onChange={(e) => setBizCity(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">State / Region</label>
                  <input
                    type="text"
                    value={bizRegion}
                    onChange={(e) => setBizRegion(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={bizPostal}
                    onChange={(e) => setBizPostal(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
            </div>
          )}

          {schemaType === "FAQPage" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Question 1</label>
                <input
                  type="text"
                  value={faq1Q}
                  onChange={(e) => setFaq1Q(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 mb-2"
                />
                <textarea
                  rows={2}
                  value={faq1A}
                  onChange={(e) => setFaq1A(e.target.value)}
                  placeholder="Answer 1..."
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>

              <div className="pt-2 border-t border-white/10">
                <label className="text-white/80 font-bold block mb-1">Question 2</label>
                <input
                  type="text"
                  value={faq2Q}
                  onChange={(e) => setFaq2Q(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 mb-2"
                />
                <textarea
                  rows={2}
                  value={faq2A}
                  onChange={(e) => setFaq2A(e.target.value)}
                  placeholder="Answer 2..."
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>
            </div>
          )}

          {schemaType === "RssFeed" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Channel Title</label>
                <input
                  type="text"
                  value={rssTitle}
                  onChange={(e) => setRssTitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Channel Description</label>
                <textarea
                  rows={2}
                  value={rssDesc}
                  onChange={(e) => setRssDesc(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Home Website Link</label>
                  <input
                    type="text"
                    value={rssLink}
                    onChange={(e) => setRssLink(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Feed XML Self Link</label>
                  <input
                    type="text"
                    value={rssFeedUrl}
                    onChange={(e) => setRssFeedUrl(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Sample Item Title</label>
                <input
                  type="text"
                  value={rssItemTitle}
                  onChange={(e) => setRssItemTitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          )}

          {schemaType === "AtomFeed" && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-white/80 font-bold block mb-1">Atom Feed Title</label>
                <input
                  type="text"
                  value={atomTitle}
                  onChange={(e) => setAtomTitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Feed Subtitle</label>
                <input
                  type="text"
                  value={atomSubtitle}
                  onChange={(e) => setAtomSubtitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-white/80 font-bold block mb-1">Author Name</label>
                  <input
                    type="text"
                    value={atomAuthorName}
                    onChange={(e) => setAtomAuthorName(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-bold block mb-1">Author Email</label>
                  <input
                    type="text"
                    value={atomAuthorEmail}
                    onChange={(e) => setAtomAuthorEmail(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Sample Entry Title</label>
                <input
                  type="text"
                  value={atomEntryTitle}
                  onChange={(e) => setAtomEntryTitle(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Output Column */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider">
              Generated Code Output:
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleDownloadTxt}
                className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-[10px] font-mono font-bold flex items-center gap-1 border border-white/20"
                title="Download as .txt File"
              >
                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download .txt</span>
              </button>

              <button
                onClick={handleDownloadFile}
                className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-[10px] font-mono font-bold flex items-center gap-1 border border-white/20"
                title="Download Native File"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download .{schemaType === "RssFeed" || schemaType === "AtomFeed" ? "xml" : "json"}</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded bg-white text-black text-[10px] font-mono font-bold hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-md"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied Code!" : "Copy to Clipboard"}</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-black rounded-xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold border border-emerald-500/30">
              {schemaType === "RssFeed" || schemaType === "AtomFeed" ? "Valid XML Feed" : "Valid JSON-LD"}
            </div>

            <pre className="text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-80 scrollbar-thin leading-relaxed">
              {renderCodeFormatted()}
            </pre>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-mono text-white/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {schemaType === "RssFeed" || schemaType === "AtomFeed"
                ? "Embed this XML feed tag inside your feed.xml or atom.xml endpoint for feed aggregator discovery."
                : "Embed this snippet inside your Next.js <head> or Layout component to enable Google Rich Results."}
            </span>
          </div>
        </div>

      </div>

      {/* POSITIVE FEEDBACK FRAMER-MOTION CONFETTI */}
      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />

    </div>
  );
};
