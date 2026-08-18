"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Monitor,
  Smartphone,
  Globe,
  Star,
  CheckCircle2,
  Code2,
  Sparkles,
  AlertCircle,
  Share2,
  HelpCircle,
  DollarSign,
  Calendar,
  Layers,
  ExternalLink,
  Info,
} from "lucide-react";
import { SITE_URL, CONTACT } from "@/config/site";
import { CopyButton } from "./ui/CopyButton";
import { SectionHeader } from "./ui/SectionHeader";

// Approximate Arial 16px/14px pixel widths per character
function estimatePixelWidth(text: string, fontSizePx = 18): number {
  let px = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[iIl1'|!.,:]/.test(char)) px += fontSizePx * 0.35;
    else if (/[wWM@#$]/.test(char)) px += fontSizePx * 0.9;
    else if (/[A-Z]/.test(char)) px += fontSizePx * 0.68;
    else px += fontSizePx * 0.55;
  }
  return Math.round(px);
}

export const SerpMetaPreview: React.FC = () => {
  const [previewMode, setPreviewMode] = useState<"google" | "opengraph" | "twitter">("google");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [title, setTitle] = useState("Rohit Gupta | Rank #1 Technical SEO Specialist & Full Stack Developer");
  const [description, setDescription] = useState(
    "Rohit Gupta is a Full Stack Developer & Technical SEO Specialist in Delhi NCR. Specializing in Next.js speed optimization, Core Web Vitals 99+ scores, and White-Hat Google rankings."
  );
  const [url, setUrl] = useState(`${SITE_URL}/seo-specialist`);
  const [keyword, setKeyword] = useState("technical seo specialist");
  const [ogImage, setOgImage] = useState("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80");

  // Rich Snippet Feature Toggles
  const [enableStarRating, setEnableStarRating] = useState(true);
  const [enableProductPrice, setEnableProductPrice] = useState(false);
  const [enableFaqSnippet, setEnableFaqSnippet] = useState(false);
  const [enableDateBadge, setEnableDateBadge] = useState(true);
  const [enableSiteLinks, setEnableSiteLinks] = useState(false);

  // Character & Pixel Width calculations
  const titleChars = title.length;
  const descChars = description.length;
  const titlePx = useMemo(() => estimatePixelWidth(title, 20), [title]);
  const maxTitlePx = device === "mobile" ? 480 : 580;
  const maxDescPx = device === "mobile" ? 900 : 1580;

  const isTitleOk = titleChars >= 45 && titleChars <= 60 && titlePx <= maxTitlePx;
  const isDescOk = descChars >= 130 && descChars <= 165;

  const keywordInTitle = keyword.trim() ? title.toLowerCase().includes(keyword.trim().toLowerCase()) : true;
  const keywordInDesc = keyword.trim() ? description.toLowerCase().includes(keyword.trim().toLowerCase()) : true;
  const keywordInUrl = keyword.trim() ? url.toLowerCase().includes(keyword.trim().toLowerCase()) : true;

  const generateSchemaJsonLd = () => {
    const schemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rohit Gupta",
        jobTitle: "Full Stack Developer & Technical SEO Specialist",
        url: url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ayodhya / Delhi NCR",
          addressCountry: "IN",
        },
        telephone: CONTACT.phone,
        email: CONTACT.email,
        ...(enableStarRating && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "48",
          },
        }),
      },
    ];

    if (enableFaqSnippet) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What technical SEO services does Rohit Gupta provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Core Web Vitals optimization, JSON-LD Schema markup, crawlability audits, Next.js performance tuning, and white-hat link building.",
            },
          },
        ],
      });
    }

    return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2);
  };

  const titleTagHtml = `<title>${title}</title>`;
  const metaDescriptionHtml = `<meta name="description" content="${description}" />`;
  const ogMetaHtml = `<meta property="og:title" content="${title}" />\n<meta property="og:description" content="${description}" />\n<meta property="og:image" content="${ogImage}" />\n<meta property="og:url" content="${url}" />\n<meta name="twitter:card" content="summary_large_image" />`;

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      
      {/* Header */}
      <SectionHeader
        badge="Multi-Platform SERP & Social Cards"
        title="Google SERP, OpenGraph & Twitter Card Previewer"
        description="Simulate real-time rendered Google Search snippets, star ratings, FAQ accordions, Facebook/LinkedIn OpenGraph, and X Twitter Cards with pixel-width gauges."
        icon={Search}
        right={
          <div className="flex flex-wrap items-center gap-1 bg-black p-1 rounded-xl border border-white/10 self-start sm:self-auto">
            {(["google", "opengraph", "twitter"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setPreviewMode(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  previewMode === m ? "bg-white text-black font-bold shadow" : "text-white/60 hover:text-white"
                }`}
              >
                {m === "google" ? "Google SERP" : m === "opengraph" ? "OpenGraph (FB/LinkedIn)" : "X (Twitter)"}
              </button>
            ))}
          </div>
        }
      />

      {/* Inputs & Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Form Inputs */}
        <div className="space-y-4">
          
          {/* Title Tag Input + Pixel Width Indicator */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <label className="text-white font-bold">SEO Title Tag (&lt;title&gt;)</label>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/50">{titlePx} / {maxTitlePx}px</span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${isTitleOk ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
                  {titleChars} Chars
                </span>
              </div>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors input-glow"
            />
            {/* Title Pixel Width Gauge Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  titlePx > maxTitlePx ? "bg-rose-500" : titlePx >= maxTitlePx * 0.75 ? "bg-emerald-400" : "bg-amber-400"
                }`}
                style={{ width: `${Math.min(100, (titlePx / maxTitlePx) * 100)}%` }}
              />
            </div>
          </div>

          {/* Meta Description Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <label className="text-white font-bold">Meta Description</label>
              <span className={`px-2 py-0.5 rounded text-[10px] ${isDescOk ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
                {descChars} / 160 Chars
              </span>
            </div>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors resize-none input-glow"
            />
          </div>

          {/* Primary Keyword Placement Inspector */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <label className="text-white font-bold">Target Keyword Check</label>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-white/60">placement check</span>
            </div>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. technical seo specialist"
              className="w-full bg-black border border-white/20 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors input-glow"
            />
            <div className="flex flex-wrap gap-2 pt-0.5">
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${keywordInTitle ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-rose-500/20 text-rose-300 border border-rose-500/30"}`}>
                <CheckCircle2 className="w-3 h-3" />
                {keywordInTitle ? "In Title" : "Missing in Title"}
              </span>
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${keywordInDesc ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-rose-500/20 text-rose-300 border border-rose-500/30"}`}>
                <CheckCircle2 className="w-3 h-3" />
                {keywordInDesc ? "In Meta Description" : "Missing in Description"}
              </span>
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${keywordInUrl ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"}`}>
                <CheckCircle2 className="w-3 h-3" />
                {keywordInUrl ? "In URL Slug" : "Not in URL Slug"}
              </span>
            </div>
          </div>

          {/* URL & OG Image URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-mono text-white font-bold">Page Canonical URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-white font-bold">OpenGraph Image URL</label>
              <input
                type="text"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Rich Snippet Feature Toggles Box */}
          <div className="p-4 bg-black border border-white/10 rounded-2xl space-y-2.5">
            <span className="text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider block">
              Rich Snippet Feature Toggles:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-white/80">
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-300">
                <input type="checkbox" checked={enableStarRating} onChange={(e) => setEnableStarRating(e.target.checked)} className="rounded bg-black border-white/20 text-emerald-400 focus:ring-0 w-3.5 h-3.5" />
                <span>Star Ratings</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-300">
                <input type="checkbox" checked={enableFaqSnippet} onChange={(e) => setEnableFaqSnippet(e.target.checked)} className="rounded bg-black border-white/20 text-emerald-400 focus:ring-0 w-3.5 h-3.5" />
                <span>FAQ Accordion</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-300">
                <input type="checkbox" checked={enableDateBadge} onChange={(e) => setEnableDateBadge(e.target.checked)} className="rounded bg-black border-white/20 text-emerald-400 focus:ring-0 w-3.5 h-3.5" />
                <span>Publish Date</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-300">
                <input type="checkbox" checked={enableProductPrice} onChange={(e) => setEnableProductPrice(e.target.checked)} className="rounded bg-black border-white/20 text-emerald-400 focus:ring-0 w-3.5 h-3.5" />
                <span>Product Price</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-300">
                <input type="checkbox" checked={enableSiteLinks} onChange={(e) => setEnableSiteLinks(e.target.checked)} className="rounded bg-black border-white/20 text-emerald-400 focus:ring-0 w-3.5 h-3.5" />
                <span>Site Links</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Preview Box */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider">
              {previewMode === "google" ? `Google SERP Snippet (${device.toUpperCase()})` : previewMode === "opengraph" ? "Facebook & LinkedIn Card Preview" : "X (Twitter) Summary Card"}
            </span>
            {previewMode === "google" && (
              <div className="flex items-center gap-1 bg-black p-1 rounded-lg border border-white/10">
                <button onClick={() => setDevice("desktop")} className={`px-2 py-0.5 text-[10px] font-mono rounded ${device === "desktop" ? "bg-white text-black font-bold" : "text-white/50"}`}>Desktop</button>
                <button onClick={() => setDevice("mobile")} className={`px-2 py-0.5 text-[10px] font-mono rounded ${device === "mobile" ? "bg-white text-black font-bold" : "text-white/50"}`}>Mobile</button>
              </div>
            )}
          </div>

          {previewMode === "google" ? (
            <div className={`p-5 rounded-2xl bg-[#202124] text-[#bdc1c6] font-sans shadow-2xl transition-all duration-300 border border-zinc-700 ${
              device === "mobile" ? "max-w-sm mx-auto" : "w-full"
            }`}>
              <div className="space-y-1.5">
                {/* Site Favicon & Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-[#dadce0] truncate">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Globe className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-xs font-semibold text-[#f1f3f4] leading-tight">Rohit Gupta SEO</span>
                    <span className="text-[11px] text-[#bdc1c6] truncate">{url}</span>
                  </div>
                </div>

                {/* SERP Title Link */}
                <h3 className="text-base sm:text-lg text-[#8ab4f8] font-normal hover:underline cursor-pointer leading-snug line-clamp-2">
                  {title || "Page Title Here"}
                </h3>

                {/* Rich Snippet Ratings & Price */}
                {(enableStarRating || enableProductPrice) && (
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#bdc1c6] font-mono py-0.5">
                    {enableStarRating && (
                      <div className="flex items-center gap-1">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[#e8eaed] font-bold">5.0</span>
                        <span>(48 reviews)</span>
                      </div>
                    )}
                    {enableProductPrice && (
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        ₹4,999 • In Stock
                      </span>
                    )}
                  </div>
                )}

                {/* SERP Description */}
                <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-3">
                  {enableDateBadge && <span className="text-[#80868b] mr-1">Aug 16, 2026 —</span>}
                  {description || "Meta description will appear here on Google search results."}
                </p>

                {/* FAQ Accordion Snippet */}
                {enableFaqSnippet && (
                  <div className="pt-2 mt-2 border-t border-zinc-700/60 space-y-1 text-xs">
                    <div className="text-[11px] text-[#8ab4f8] font-semibold">Q: What technical SEO services does Rohit Gupta provide?</div>
                    <div className="text-[11px] text-[#bdc1c6] pl-2 leading-relaxed">A: Core Web Vitals optimization, JSON-LD Schema markup, crawlability audits, and Next.js speed optimization.</div>
                  </div>
                )}

                {/* Site Links */}
                {enableSiteLinks && (
                  <div className="grid grid-cols-2 gap-2 pt-2 mt-2 border-t border-zinc-700/60 text-xs">
                    <div>
                      <span className="text-[#8ab4f8] font-semibold block hover:underline">Services</span>
                      <span className="text-[10px] text-[#bdc1c6] line-clamp-1">Technical SEO &amp; Web Dev</span>
                    </div>
                    <div>
                      <span className="text-[#8ab4f8] font-semibold block hover:underline">Free SEO Tools</span>
                      <span className="text-[10px] text-[#bdc1c6] line-clamp-1">24+ Web Crawl Directives</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : previewMode === "opengraph" ? (
            /* OpenGraph Card Preview */
            <div className="rounded-2xl bg-[#18191a] text-white overflow-hidden border border-zinc-700 shadow-2xl space-y-0 font-sans">
              <div className="h-44 bg-zinc-900 overflow-hidden relative">
                {/* eslint-disable-next-html-element-suppression */}
                <img src={ogImage} alt="OpenGraph Preview" width={1200} height={630} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-1 bg-[#242526]">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                  {url.replace(/^https?:\/\//, "").split("/")[0]}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">{title}</h4>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">{description}</p>
              </div>
            </div>
          ) : (
            /* Twitter Card Preview */
            <div className="rounded-2xl bg-black text-white overflow-hidden border border-zinc-800 shadow-2xl space-y-0 font-sans">
              <div className="h-44 bg-zinc-900 overflow-hidden relative">
                {/* eslint-disable-next-html-element-suppression */}
                <img src={ogImage} alt="Twitter Card Preview" width={1200} height={630} className="w-full h-full object-cover" />
              </div>
              <div className="p-3.5 space-y-1 bg-black">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  {url.replace(/^https?:\/\//, "").split("/")[0]}
                </span>
                <h4 className="text-xs font-bold text-white line-clamp-1">{title}</h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{description}</p>
              </div>
            </div>
          )}

          <div className="p-3 bg-black border border-white/10 rounded-xl flex items-start gap-2 text-[10px] font-mono text-white/60">
            <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>Google truncates titles at ~580px (~60 chars) on desktop and ~480px on mobile. Use title pixel width bar to avoid truncated titles.</span>
          </div>

        </div>

      </div>

      {/* Generated Schema JSON-LD Code Snippet */}
      <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Generated JSON-LD Schema Snippet</span>
          </div>
          <CopyButton text={generateSchemaJsonLd()} label="Copy Schema Code" copiedLabel="Copied JSON-LD!" />
        </div>
        <pre className="p-3 bg-[#0a0a0a] rounded-lg text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-48 scrollbar-thin">
          {generateSchemaJsonLd()}
        </pre>
      </div>

      {/* Ready-to-paste head tags */}
      <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Complete HTML &lt;head&gt; Meta Tags &amp; OpenGraph Snippet</span>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton text={titleTagHtml} label="Copy <title>" />
            <CopyButton text={metaDescriptionHtml} label="Copy Meta" />
            <CopyButton text={ogMetaHtml} label="Copy All Meta" />
          </div>
        </div>
        <pre className="p-3 bg-[#0a0a0a] rounded-lg text-[11px] font-mono text-emerald-300 overflow-x-auto whitespace-pre-wrap scrollbar-thin">
{titleTagHtml}
{metaDescriptionHtml}
{ogMetaHtml}
        </pre>
      </div>

    </div>
  );
};
