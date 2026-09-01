"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Sparkles,
  CheckCircle2,
  X,
  MessageCircle,
  Phone,
  ArrowRight,
  Copy,
  Check,
  Tag,
  BookOpen,
} from "lucide-react";
import { FAQ_DATA, FaqItem } from "@/data/faqData";
import { useAudit } from "@/components/providers/AuditProvider";
import { ROHIT_PROFILE } from "@/data/portfolioData";

export { FAQ_DATA } from "@/data/faqData";
export type { FaqItem } from "@/data/faqData";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Hiring & Pricing": { bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/30" },
  "Technical SEO": { bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30" },
  "Strategy": { bg: "bg-amber-500/15", text: "text-amber-300", border: "border-amber-500/30" },
  "Web Development": { bg: "bg-blue-500/15", text: "text-blue-300", border: "border-blue-500/30" },
  "Local SEO": { bg: "bg-violet-500/15", text: "text-violet-300", border: "border-violet-500/30" },
  "AI & Technical SEO": { bg: "bg-purple-500/15", text: "text-purple-300", border: "border-purple-500/30" },
  "Google Ads & Speed": { bg: "bg-rose-500/15", text: "text-rose-300", border: "border-rose-500/30" },
};

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const { openAudit } = useAudit();

  // Extract unique categories + count map
  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: FAQ_DATA.length };
    FAQ_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return Object.keys(counts).map((cat) => ({
      name: cat,
      count: counts[cat],
    }));
  }, []);

  // Filtered FAQ items based on category & search
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchQ = item.question.toLowerCase().includes(q);
      const matchA = item.answer.toLowerCase().includes(q);
      const matchKw = item.keywords.some((k) => k.toLowerCase().includes(q));
      return matchQ || matchA || matchKw;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleCopyAnswer = (idx: number, answerText: string) => {
    navigator.clipboard?.writeText(answerText).catch(() => undefined);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden isolate">
      
      {/* Background glow ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>SEO Knowledge Base &amp; Hiring Guide</span>
        </div>
        
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
          Frequently Asked Questions About <span className="text-gradient">SEO Services &amp; Hiring</span>
        </h3>
        
        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
          Clear, transparent answers from Rohit Gupta on hiring SEO experts, Core Web Vitals, AI search optimization (AEO/GEO), rankings timelines, and technical web architecture.
        </p>
      </div>

      {/* Search Bar + Category Pills Strip */}
      <div className="space-y-4 max-w-4xl mx-auto">
        
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-white/40 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any topic, question or keyword (e.g. Next.js, pricing, speed, backlinks)..."
            className="w-full bg-black/80 border border-white/15 rounded-2xl pl-11 pr-10 py-3 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-all input-glow"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3.5 text-white/40 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10 scale-[1.02]"
                    : "bg-black/50 text-white/60 border border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black ${
                    isActive ? "bg-black/15 text-black" : "bg-white/10 text-white/50"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3 max-w-4xl mx-auto">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const style = categoryColors[item.category] || {
              bg: "bg-emerald-500/15",
              text: "text-emerald-300",
              border: "border-emerald-500/30",
            };

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-black border-white/30 shadow-2xl shadow-emerald-500/5 ring-1 ring-white/10"
                    : "bg-zinc-950/70 border-white/10 hover:border-white/20 hover:bg-zinc-950"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[9px] font-mono font-bold text-emerald-400">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border ${style.bg} ${style.text} ${style.border}`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {item.question}
                    </h4>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "bg-emerald-400 text-black border-emerald-300 rotate-180 shadow-lg shadow-emerald-500/30"
                        : "bg-white/5 border-white/10 text-white/60 group-hover:text-white group-hover:bg-white/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 space-y-4 border-t border-white/10 pt-4 animate-in fade-in-50 duration-200">
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {item.answer}
                    </p>

                    {/* Footer bar inside answer: Keywords + Copy button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Tag className="w-3 h-3 text-white/40 shrink-0" />
                        {item.keywords.map((kw, kIdx) => (
                          <span
                            key={kIdx}
                            className="text-[9px] font-mono text-emerald-300/80 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleCopyAnswer(idx, item.answer)}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-[10px] font-mono transition-colors flex items-center gap-1.5"
                        title="Copy answer text"
                      >
                        {copiedIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIdx === idx ? "Copied" : "Copy Answer"}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-black/60 border border-white/10 rounded-2xl space-y-3">
            <BookOpen className="w-8 h-8 text-white/30 mx-auto" />
            <p className="text-xs font-mono text-white/60">No FAQ questions matched &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-3 py-1.5 bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl hover:bg-emerald-300 transition-colors"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Conversion CTA Card */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-black border border-emerald-500/30 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Have a Specific SEO Question for Your Website?</span>
            </div>
            <p className="text-xs text-white/70 font-light max-w-lg leading-relaxed">
              Get a 1-on-1 technical review of your site&apos;s crawlability, Core Web Vitals, and keyword opportunities with Rohit Gupta.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${ROHIT_PROFILE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Hi Rohit, I have a question about my website SEO."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#20bd5a] transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={openAudit}
              className="px-4 py-2.5 bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Free SEO Audit</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};