"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import {
  Bot,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Download,
  FileText,
  Braces,
  ListChecks,
  Lightbulb,
  Globe,
  Wand2
} from "lucide-react";
import { CONTACT } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface AiSearchOptimizerProps {
  domain: string;
  onRequireDomain: () => void;
}

type OutputTab = "geo-meta" | "aeo-content" | "llms" | "entity-json";

const CHECKLIST = [
  "Write a direct answer in the first 40–60 words of every page — answer engines cite the first paragraph.",
  "Use one clear H1 per page that matches the page intent and the title tag.",
  "Add FAQPage schema so AI engines can pull verified Q&A answers.",
  "Keep entity data consistent (name, phone, address) across Google, social and your site (NAP consistency).",
  "Publish a llms.txt file that summarizes your site for AI crawlers.",
  "Use natural, conversational headings (What / How / Why / Best) that match voice & AI queries.",
  "Add GEO meta tags (geo.region, ICBM) for location-based generative results.",
  "Include one 'authoritative' summary paragraph with citations-friendly stats and sources.",
  "Optimize for featured snippets: tables, lists, numbered steps and short definitions.",
  "Add BreadcrumbList + Organization schema to strengthen the entity graph.",
];

export const AiSearchOptimizer: React.FC<AiSearchOptimizerProps> = ({ domain, onRequireDomain }) => {
  const [tab, setTab] = useState<OutputTab>("geo-meta");
  const { copied, copy } = useCopyToClipboard();
  const [confetti, setConfetti] = useState<{ show: boolean; message: string; type: "copy" | "download" | "generate" }>({
    show: false,
    message: "",
    type: "copy"
  });
  const confettiTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (confettiTimer.current) clearTimeout(confettiTimer.current);
    };
  }, []);

  const triggerConfetti = (message: string, type: "copy" | "download" | "generate") => {
    setConfetti({ show: true, message, type });
    if (confettiTimer.current) clearTimeout(confettiTimer.current);
    confettiTimer.current = setTimeout(() => setConfetti((prev) => ({ ...prev, show: false })), 2800);
  };

  const cleanDomain = domain.trim() ? domain.trim().replace(/\/$/, "") : "";
  const hasDomain = Boolean(cleanDomain);
  const siteName = useMemo(() => {
    if (!cleanDomain) return "Your Website";
    const host = cleanDomain.replace(/^https?:\/\//, "").replace(/^www\./, "");
    return host.split(".")[0].replace(/(^|-)([a-z])/g, (_m, _p, c: string) => c.toUpperCase());
  }, [cleanDomain]);

  const [about, setAbout] = useState("Full stack web development and technical SEO services — Core Web Vitals, schema markup and white-hat rankings for businesses in India and worldwide.");
  const [keywords, setKeywords] = useState("technical SEO, SEO specialist, website speed optimization, Core Web Vitals, local SEO India");
  const [faq1Q, setFaq1Q] = useState("What services does this website offer?");
  const [faq1A, setFaq1A] = useState("The website provides full stack web development and technical SEO services including website speed optimization, Core Web Vitals fixes, schema markup and white-hat link building.");
  const [faq2Q, setFaq2Q] = useState("How can I contact you?");
  const [faq2A, setFaq2A] = useState("You can reach out through the contact page or by phone. Average response time is under 24 hours.");
  const [phone, setPhone] = useState<string>(CONTACT.phone);
  const [email, setEmail] = useState("hello@yourwebsite.com");

  const geoMeta = `<!-- AI SEARCH / GEO META BLOCK — paste inside <head> -->
<meta name="ai-content-rating" content="high" />
<meta name="entity-type" content="Organization" />
<meta name="site-category" content="${siteName}" />
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />

<!-- GEO: location + language clarity for generative engines -->
<meta name="geo.region" content="IN" />
<meta name="geo.placename" content="India" />
<meta name="geo.position" content="26.795;82.199" />
<meta name="ICBM" content="26.795, 82.199" />
<meta name="language" content="en" />
<meta name="distribution" content="global" />

<!-- AEO: directly answerable Q&A for ChatGPT / Gemini / AI Overviews -->
<meta name="answerable:question" content="What is ${siteName}?" />
<meta name="answerable:answer" content="${siteName} is the official website at ${cleanDomain} offering ${keywords.split(",")[0]?.trim() || "professional services"} — contact ${phone}." />

<link rel="alternate" type="text/plain" href="${cleanDomain}/llms.txt" title="LLMs.txt" />`;

  const aeoContent = `<article>
  <h1>${siteName} — Direct Answer</h1>
  <p>
    <strong>${siteName}</strong> is the official website at ${cleanDomain} that provides
    ${keywords.split(",").slice(0, 3).join(", ")}. ${about}
    Contact: <a href="tel:${phone.replace(/\s/g, "")}">${phone}</a> | ${email}
  </p>

  <h2>What does ${siteName} do?</h2>
  <p>${about}</p>

  <h2>Why choose ${siteName}?</h2>
  <ul>
    <li>Verified results with transparent reporting</li>
    <li>Fast response times (under 24 hours)</li>
    <li>Clear pricing with milestone-based work</li>
  </ul>

  <h2>How to get started?</h2>
  <ol>
    <li>Visit ${cleanDomain}</li>
    <li>Review the services and case studies</li>
    <li>Request a free quote via the contact page</li>
  </ol>
</article>

<!-- FAQ snippet (mirrors FAQPage schema) -->
<h2>Frequently asked questions</h2>
<details>
  <summary>${faq1Q}</summary>
  <p>${faq1A}</p>
</details>
<details>
  <summary>${faq2Q}</summary>
  <p>${faq2A}</p>
</details>`;

  const llmsTxt = `# LLMs.txt for ${cleanDomain}
# Information for AI Crawlers (Gemini, ChatGPT, Claude, Perplexity)

# Site Info
Title: ${siteName}
URL: ${cleanDomain}
Description: ${about}

# Primary Pages
- Home: ${cleanDomain}/
- Services: ${cleanDomain}/services
- Projects: ${cleanDomain}/projects
- SEO Tools: ${cleanDomain}/seo-tools
- Blog: ${cleanDomain}/blog
- Contact: ${cleanDomain}/contact

# Key Facts
- Organisation: ${siteName}
- Contact: ${phone} | ${email}
- Keywords: ${keywords}
- Last verified: ${new Date().toISOString().split("T")[0]}

# Core Topics
${keywords.split(",").map((k: string) => `- ${k.trim()}`).join("\n")}`;

  const entityJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "${cleanDomain}/#organization",
      "name": "${siteName}",
      "url": "${cleanDomain}",
      "description": "${about}",
      "telephone": "${phone}",
      "email": "${email}",
      "knowsAbout": ${JSON.stringify(keywords.split(",").map((k) => k.trim()))},
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "${cleanDomain}/#website",
      "url": "${cleanDomain}",
      "name": "${siteName}",
      "publisher": { "@id": "${cleanDomain}/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "${faq1Q}",
          "acceptedAnswer": { "@type": "Answer", "text": "${faq1A}" }
        },
        {
          "@type": "Question",
          "name": "${faq2Q}",
          "acceptedAnswer": { "@type": "Answer", "text": "${faq2A}" }
        }
      ]
    }
  ]
}`;

  const output = tab === "geo-meta" ? geoMeta : tab === "aeo-content" ? aeoContent : tab === "llms" ? llmsTxt : entityJson;
  const fileName = tab === "geo-meta" ? "ai-seo-geo-meta.html" : tab === "aeo-content" ? "aeo-answer-content.html" : tab === "llms" ? "llms.txt" : "ai-entity-graph.json";

  const handleCopy = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    copy(output);
    triggerConfetti(`${fileName} copied to clipboard!`, "copy");
  };

  const handleDownload = () => {
    if (!hasDomain) {
      onRequireDomain();
      return;
    }
    const mime = tab === "entity-json" ? "application/json" : tab === "llms" ? "text/plain" : "text/html";
    const blob = new Blob([output], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerConfetti(`${fileName} downloaded!`, "download");
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-8 shadow-2xl">
      <div className="border-b border-white/10 pb-4 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
          <Bot className="w-3.5 h-3.5 text-emerald-400" />
          <span>AI Search / AEO / GEO Optimization Engine</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
          Rank in ChatGPT, Gemini, AI Overviews & Bing Copilot
        </h3>
        <p className="text-xs text-white/70 max-w-3xl leading-relaxed">
          Answer Engine Optimization (AEO) makes Google rank your page; Generative Engine Optimization (GEO) makes AI engines cite it. Fill the site data once — get ready-to-paste GEO meta, direct-answer content, llms.txt and the AI entity graph.
        </p>
      </div>

      {!hasDomain && (
        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl flex items-center justify-between gap-2 text-xs font-mono text-amber-300">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Enter your website domain in the bar above — every output below is bound to it.</span>
          </div>
          <button
            onClick={onRequireDomain}
            className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase rounded hover:bg-amber-300 transition-colors shrink-0"
          >
            Set Domain
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: DATA INPUT */}
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
            <span className="text-white/70 uppercase font-bold">Site Data (feeds all outputs):</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1"><Globe className="w-3.5 h-3.5" />{cleanDomain || "no domain"}</span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div>
              <label className="text-white/80 font-bold block mb-1">Short Description (About)</label>
              <textarea
                rows={2}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
              />
            </div>
            <div>
              <label className="text-white/80 font-bold block mb-1">Primary Keywords (comma separated)</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-white/80 font-bold block mb-1">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
            <div className="pt-2 border-t border-white/10 grid grid-cols-1 gap-3">
              <div>
                <label className="text-white/80 font-bold block mb-1">FAQ 1 — Question</label>
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
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>
              <div>
                <label className="text-white/80 font-bold block mb-1">FAQ 2 — Question</label>
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
                  className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>
            </div>
          </div>

          {/* AI-SEO CHECKLIST */}
          <div className="p-4 bg-zinc-900/80 border border-white/10 rounded-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">
              <ListChecks className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI Visibility Checklist (10 points)</span>
            </div>
            {CHECKLIST.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-white/70 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: OUTPUT */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {([
              { id: "geo-meta", label: "GEO Meta & Head", icon: Wand2 },
              { id: "aeo-content", label: "AEO Answer Content", icon: FileText },
              { id: "llms", label: "llms.txt", icon: Sparkles },
              { id: "entity-json", label: "AI Entity Graph", icon: Braces }
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded-xl font-mono text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                  tab === t.id
                    ? "bg-white text-black shadow-lg border-white"
                    : "bg-white/5 text-white/70 hover:text-white border-white/10 hover:bg-white/10"
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            ))}

            <div className="flex-1" />

            <button
              onClick={handleCopy}
              disabled={!hasDomain}
              className={`px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase flex items-center gap-1.5 border transition-colors ${
                hasDomain ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed"
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              onClick={handleDownload}
              disabled={!hasDomain}
              className={`px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase flex items-center gap-1.5 transition-colors ${
                hasDomain ? "bg-white text-black hover:bg-zinc-200" : "bg-white/5 text-white/30 cursor-not-allowed"
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
          </div>

          <div className="p-4 bg-black rounded-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-2 right-3 text-[9px] text-white/30 font-bold uppercase tracking-widest">{fileName}</div>
            <pre className="text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-96 scrollbar-thin leading-relaxed mt-4">
              {output}
            </pre>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-mono text-white/80">
            <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {tab === "geo-meta" && "Paste the GEO block into your <head>. Keep the direct answer under 60 words — AI engines quote it verbatim."}
              {tab === "aeo-content" && "Replace greeting copy with this direct-answer block. Wrap lists/steps in semantic HTML so snippet generators can parse them."}
              {tab === "llms" && "Upload this file to your site root (e.g. yourdomain.com/llms.txt) and link it in robots.txt sitemap section."}
              {tab === "entity-json" && "Inline this graph via <script type=\"application/ld+json\"> in the page head to strengthen your entity signals for AI crawlers."}
            </span>
          </div>
        </div>
      </div>

      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />
    </div>
  );
};