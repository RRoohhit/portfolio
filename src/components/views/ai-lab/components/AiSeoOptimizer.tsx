"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Search, Copy, Check, Send, AlertCircle, FileText, Code, Cpu, Target, ArrowRight } from "lucide-react";

export const AiSeoOptimizer: React.FC = () => {
  const [targetKeyword, setTargetKeyword] = useState("Technical SEO Specialist Delhi");
  const [industry, setIndustry] = useState("Full Stack Web Development & Digital Marketing");
  const [currentContent, setCurrentContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [usedFallback, setUsedFallback] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    };
  }, []);

  const handleRunOptimizer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetKeyword.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/seo/ai-optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetKeyword,
          industry,
          currentContent,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        setResult(resData.data);
        setUsedFallback(false);
      } else if (resData.fallback) {
        setResult(resData.fallback);
        setUsedFallback(true);
      } else {
        throw new Error(resData.error || "Failed to generate AI recommendations.");
      }
    } catch (err: any) {
      console.error(err);
      setError("An error occurred while communicating with Gemini AI. Showing standard optimization plan.");
      setUsedFallback(true);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiedKey(key);
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-extrabold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by Gemini 3.6 Flash Server Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            AI-Driven Content & Keyword Optimizer
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Enter a focus keyword, topic, or content draft. Rohit's server-side AI model will generate tailored meta tags, LSI keyword clusters, structured JSON-LD schema, and speed optimization strategies.
          </p>
        </div>
      </div>

      {/* Optimizer Input Form */}
      <form onSubmit={handleRunOptimizer} className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-zinc-300 font-bold mb-2">
              Target Keyword / Focus Search Query *
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={targetKeyword}
                onChange={(e) => setTargetKeyword(e.target.value)}
                placeholder="e.g., Technical SEO Specialist Ayodhya"
                className="w-full bg-black border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors font-mono"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 font-bold mb-2">
              Industry / Niche Context
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g., E-commerce, Full Stack Web Development, Google Ads"
              className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-zinc-300 font-bold mb-2">
            Optional Draft Content or URL Summary
          </label>
          <textarea
            rows={2}
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            placeholder="Paste raw text or landing page summary here for AI analysis..."
            className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs font-extrabold hover:bg-zinc-200 transition-all disabled:opacity-50 shadow-lg shadow-white/5"
          >
            {loading ? (
              <>
                <Cpu className="w-4 h-4 animate-spin" />
                <span>Running Gemini AI Analysis...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate AI SEO Plan</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-in fade-in-50 duration-300">
          
          {usedFallback && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="text-xs font-mono leading-relaxed">
                Gemini API key is not configured, so this is a standard rule-based SEO plan rather than AI-generated output. Add GEMINI_API_KEY to enable live AI generation.
              </p>
            </div>
          )}

          {/* Content Score & Intent Bar */}
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-black border border-emerald-500/40 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-emerald-400 font-mono">{result.contentScore || 94}</span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase">Score</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">AI Search Optimization Grade</h3>
                <p className="text-xs text-zinc-400">Targeting query: <span className="text-white font-mono font-bold">{targetKeyword}</span></p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Intent: {result.searchIntent}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(JSON.stringify(result, null, 2), "all-json")}
              className="px-4 py-2 rounded-xl bg-black hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono flex items-center gap-2"
            >
              {copiedKey === "all-json" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Full Strategy</span>
            </button>
          </div>

          {/* Meta Tags & LSI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Meta Title & Description */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>SERP Meta Tags (Title & Description)</span>
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-black rounded-xl border border-zinc-800 space-y-1">
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Meta Title</span>
                    <span>{result.metaTitle?.length || 0} / 60 chars</span>
                  </div>
                  <div className="text-white font-mono font-bold text-sm">{result.metaTitle}</div>
                </div>

                <div className="p-3 bg-black rounded-xl border border-zinc-800 space-y-1">
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Meta Description</span>
                    <span>{result.metaDescription?.length || 0} / 155 chars</span>
                  </div>
                  <div className="text-zinc-300 text-xs">{result.metaDescription}</div>
                </div>
              </div>
            </div>

            {/* LSI & Semantic Keyword Cluster */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Recommended LSI & Semantic Keywords</span>
              </h4>

              <div className="flex flex-wrap gap-2 pt-2">
                {result.lsiKeywords?.map((kw: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-black border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-zinc-500 transition-colors"
                  >
                    + {kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Heading Structure & Technical Fixes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Heading Hierarchy */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span>Recommended Heading Structure</span>
              </h4>

              <div className="space-y-2 text-xs font-mono">
                {result.headingStructure?.map((item: any, idx: number) => (
                  <div key={idx} className="p-2.5 bg-black rounded-xl border border-zinc-800 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold">{item.tag}</span>
                    <span className="text-zinc-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schema JSON-LD */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span>Generated JSON-LD Schema Snippet</span>
                </h4>
                <button
                  onClick={() => copyToClipboard(result.jsonLdSchema, "schema")}
                  className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                >
                  {copiedKey === "schema" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy Schema</span>
                </button>
              </div>

              <pre className="p-3 bg-black rounded-xl border border-zinc-800 text-[11px] font-mono text-purple-200 overflow-x-auto h-44">
                <code>{result.jsonLdSchema}</code>
              </pre>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
