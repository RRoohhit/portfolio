"use client";
import React, { useMemo, useState } from "react";
import {
  Search,
  Download,
  TrendingUp,
  Target,
  IndianRupee,
  Filter,
  Sparkles,
  Lightbulb,
  FileSpreadsheet,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";

export type KeywordIntent = "Transactional" | "Commercial" | "Informational";

export interface KeywordIdea {
  id: string;
  keyword: string;
  intent: KeywordIntent;
  volume: number;      // est. monthly searches
  difficulty: number;  // 0-100
  cpc: number;         // est. CPC in INR
  priority: number;    // opportunity score 0-100
}

interface ModifierDef {
  suffix: string;
  intent: KeywordIntent;
  volumeBoost: number;
  difficultyAdd: number;
  cpcBoost: number;
}

const MODIFIERS: ModifierDef[] = [
  { suffix: "", intent: "Transactional", volumeBoost: 1.0, difficultyAdd: 0, cpcBoost: 1.0 },
  { suffix: "near me", intent: "Transactional", volumeBoost: 0.9, difficultyAdd: 4, cpcBoost: 1.15 },
  { suffix: "price", intent: "Transactional", volumeBoost: 0.55, difficultyAdd: 8, cpcBoost: 1.35 },
  { suffix: "cost", intent: "Transactional", volumeBoost: 0.5, difficultyAdd: 8, cpcBoost: 1.35 },
  { suffix: "services", intent: "Transactional", volumeBoost: 0.85, difficultyAdd: 2, cpcBoost: 1.2 },
  { suffix: "company", intent: "Transactional", volumeBoost: 0.65, difficultyAdd: 6, cpcBoost: 1.2 },
  { suffix: "agency", intent: "Transactional", volumeBoost: 0.7, difficultyAdd: 5, cpcBoost: 1.25 },
  { suffix: "expert", intent: "Transactional", volumeBoost: 0.45, difficultyAdd: 10, cpcBoost: 1.3 },
  { suffix: "specialist", intent: "Transactional", volumeBoost: 0.5, difficultyAdd: 8, cpcBoost: 1.3 },
  { suffix: "hire", intent: "Transactional", volumeBoost: 0.4, difficultyAdd: 12, cpcBoost: 1.4 },
  { suffix: "free", intent: "Transactional", volumeBoost: 0.35, difficultyAdd: 14, cpcBoost: 0.7 },
  { suffix: "best", intent: "Commercial", volumeBoost: 0.95, difficultyAdd: 14, cpcBoost: 1.1 },
  { suffix: "top", intent: "Commercial", volumeBoost: 0.8, difficultyAdd: 13, cpcBoost: 1.05 },
  { suffix: "reviews", intent: "Commercial", volumeBoost: 0.55, difficultyAdd: 12, cpcBoost: 1.05 },
  { suffix: "for small business", intent: "Commercial", volumeBoost: 0.45, difficultyAdd: 9, cpcBoost: 1.15 },
  { suffix: "online", intent: "Commercial", volumeBoost: 0.5, difficultyAdd: 6, cpcBoost: 1.15 },
  { suffix: "in India", intent: "Commercial", volumeBoost: 0.75, difficultyAdd: 5, cpcBoost: 1.1 },
  { suffix: "affordable", intent: "Commercial", volumeBoost: 0.6, difficultyAdd: 7, cpcBoost: 0.9 },
  { suffix: "how to", intent: "Informational", volumeBoost: 0.6, difficultyAdd: 7, cpcBoost: 0.65 },
  { suffix: "what is", intent: "Informational", volumeBoost: 0.55, difficultyAdd: 6, cpcBoost: 0.6 },
  { suffix: "guide", intent: "Informational", volumeBoost: 0.4, difficultyAdd: 9, cpcBoost: 0.7 },
  { suffix: "tips", intent: "Informational", volumeBoost: 0.45, difficultyAdd: 8, cpcBoost: 0.7 },
  { suffix: "for beginners", intent: "Informational", volumeBoost: 0.35, difficultyAdd: 11, cpcBoost: 0.6 },
  { suffix: "vs", intent: "Commercial", volumeBoost: 0.5, difficultyAdd: 10, cpcBoost: 0.95 },
];

const PAGE_SIZE = 12;

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const intentConfig: Record<
  KeywordIntent,
  { classes: string; dot: string; label: string }
> = {
  Transactional: {
    classes: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    dot: "bg-emerald-400",
    label: "Transactional",
  },
  Commercial: {
    classes: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    dot: "bg-sky-400",
    label: "Commercial",
  },
  Informational: {
    classes: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    dot: "bg-amber-400",
    label: "Informational",
  },
};

export const KeywordResearchTool: React.FC = () => {
  const [seed, setSeed] = useState("technical SEO specialist");
  const [intentFilter, setIntentFilter] = useState<"All" | KeywordIntent>("All");
  const [sortBy, setSortBy] = useState<"priority" | "volume" | "difficulty">("priority");
  const [page, setPage] = useState(1);

  const ideas = useMemo<KeywordIdea[]>(() => {
    const clean = seed.trim().toLowerCase().replace(/\s+/g, " ");
    if (!clean) return [];
    const seedHash = hashString(clean);
    const seedVol = 900 + (seedHash % 4200);
    const seedKd = 12 + (seedHash % 40);
    const seedCpc = 40 + (seedHash % 160);

    return MODIFIERS.map((mod, i) => {
      const kw = mod.suffix ? `${mod.suffix} ${clean}` : clean;
      const vol = Math.round(
        seedVol * mod.volumeBoost * (0.85 + ((seedHash + i * 13) % 30) / 100)
      );
      const diff = clamp(
        Math.round(seedKd + mod.difficultyAdd + ((seedHash + i * 7) % 9)),
        4,
        96
      );
      const cpc = Math.round(seedCpc * mod.cpcBoost);
      const priority = clamp(
        Math.round(60 + (vol / 8000) * 30 - (diff - 40) * 0.55 + cpc / 20),
        5,
        99
      );
      return { id: `kw-${i}`, keyword: kw, intent: mod.intent, volume: vol, difficulty: diff, cpc, priority };
    }).sort((a, b) => b.priority - a.priority);
  }, [seed]);

  const filtered = useMemo(() => {
    let list = ideas;
    if (intentFilter !== "All") list = list.filter((i) => i.intent === intentFilter);
    const sorted = [...list];
    if (sortBy === "volume") sorted.sort((a, b) => b.volume - a.volume);
    else if (sortBy === "difficulty") sorted.sort((a, b) => a.difficulty - b.difficulty);
    else sorted.sort((a, b) => b.priority - a.priority);
    return sorted;
  }, [ideas, intentFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 when filters change
  const applyFilter = (f: "All" | KeywordIntent) => {
    setIntentFilter(f);
    setPage(1);
  };
  const applySort = (s: "priority" | "volume" | "difficulty") => {
    setSortBy(s);
    setPage(1);
  };

  const exportCsv = () => {
    if (filtered.length === 0) return;
    const rows = [
      ["Keyword", "Intent", "Est. Monthly Volume", "Difficulty (0-100)", "Est. CPC (INR)", "Priority Score"],
      ...filtered.map((k) => [
        k.keyword,
        k.intent,
        String(k.volume),
        String(k.difficulty),
        String(k.cpc),
        String(k.priority),
      ]),
    ];
    const csv = rows
      .map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `keyword-research-${seed.trim().replace(/\s+/g, "-").slice(0, 40)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const diffColor = (d: number) =>
    d <= 29
      ? "text-emerald-400 bg-emerald-500/10"
      : d <= 49
      ? "text-amber-400 bg-amber-500/10"
      : "text-rose-400 bg-rose-500/10";

  const diffBarColor = (d: number) =>
    d <= 29 ? "bg-emerald-400" : d <= 49 ? "bg-amber-400" : "bg-rose-400";

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Keyword Research &amp; Idea Generator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Find High-Potential Long-Tail Keywords Instantly
        </h3>
        <p className="text-xs text-white/60 mt-1 max-w-2xl leading-relaxed">
          Enter a seed keyword to get {MODIFIERS.length} related keyword ideas with estimated volume,
          difficulty, CPC, intent, and a priority score. Export to CSV for your client reports.
        </p>
      </div>

      {/* Input */}
      <div className="p-4 sm:p-5 bg-black border border-white/15 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            <input
              value={seed}
              onChange={(e) => { setSeed(e.target.value); setPage(1); }}
              onKeyDown={(e) => e.key === "Enter" && setPage(1)}
              placeholder="Enter a seed keyword, e.g. cake shop, lawyer, gym…"
              className="w-full pl-9 pr-3 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/15 input-glow"
            />
          </div>
          <button
            onClick={() => setPage(1)}
            className="px-5 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Generate Ideas
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase pt-1 border-t border-white/10">
          <span className="flex items-center gap-1 text-white/50 font-bold">
            <Filter className="w-3 h-3" /> Intent:
          </span>
          {(["All", "Transactional", "Commercial", "Informational"] as const).map((f) => (
            <button
              key={f}
              onClick={() => applyFilter(f)}
              className={`px-2.5 py-1 rounded-lg border transition-all font-bold ${
                intentFilter === f
                  ? "bg-white text-black border-white shadow-sm"
                  : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="flex items-center gap-1 text-white/50 font-bold ml-1">
            <Target className="w-3 h-3" /> Sort:
          </span>
          {(["priority", "volume", "difficulty"] as const).map((s) => (
            <button
              key={s}
              onClick={() => applySort(s)}
              className={`px-2.5 py-1 rounded-lg border transition-all font-bold ${
                sortBy === s
                  ? "bg-white text-black border-white shadow-sm"
                  : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {s === "priority" ? "Priority" : s === "volume" ? "Volume" : "Easy→Hard"}
            </button>
          ))}
          <button
            onClick={exportCsv}
            disabled={filtered.length === 0}
            className="ml-auto px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Export CSV ({filtered.length})
          </button>
        </div>
      </div>

      {filtered.length > 0 && (
        <div className="space-y-5">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-black rounded-xl border border-white/10">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-1">Keywords Found</div>
              <div className="text-xl font-black text-white">{filtered.length}</div>
            </div>
            <div className="p-3 bg-black rounded-xl border border-white/10">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-1">Total Est. Volume</div>
              <div className="text-xl font-black text-emerald-400">
                {filtered.reduce((s, k) => s + k.volume, 0).toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-black rounded-xl border border-white/10">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-1">Top Priority Score</div>
              <div className="text-xl font-black text-amber-400">
                {filtered.length ? filtered[0].priority : 0}
              </div>
            </div>
          </div>

          {/* Keywords Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {paginated.map((k) => {
              const ic = intentConfig[k.intent];
              return (
                <div
                  key={k.id}
                  className="p-4 bg-black border border-white/10 rounded-xl space-y-3 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200 group"
                >
                  {/* Intent + Keyword */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase border mb-1.5 ${ic.classes}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${ic.dot} shrink-0`} />
                        {ic.label}
                      </span>
                      <h4 className="text-sm font-bold text-white font-mono leading-snug group-hover:text-emerald-400 transition-colors break-words">
                        {k.keyword}
                      </h4>
                    </div>
                    {/* Priority */}
                    <div className="text-right shrink-0">
                      <div className="text-[9px] font-mono uppercase text-white/40 font-bold">Priority</div>
                      <div
                        className={`text-2xl font-black leading-none mt-0.5 ${
                          k.priority >= 80
                            ? "text-emerald-400"
                            : k.priority >= 55
                            ? "text-amber-400"
                            : "text-white/40"
                        }`}
                      >
                        {k.priority}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/5 space-y-0.5">
                      <div className="text-[9px] text-white/40 uppercase flex items-center justify-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> Volume
                      </div>
                      <div className="font-bold text-white text-xs">{k.volume.toLocaleString()}</div>
                      <div className="text-[8px] text-white/30">/month</div>
                    </div>
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/5 space-y-0.5">
                      <div className="text-[9px] text-white/40 uppercase flex items-center justify-center gap-0.5">
                        <Target className="w-2.5 h-2.5" /> KD
                      </div>
                      <div className={`font-bold text-xs px-1 rounded ${diffColor(k.difficulty)}`}>
                        {k.difficulty}/100
                      </div>
                      <div className="text-[8px] text-white/30">
                        {k.difficulty <= 29 ? "Easy" : k.difficulty <= 49 ? "Medium" : "Hard"}
                      </div>
                    </div>
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/5 space-y-0.5">
                      <div className="text-[9px] text-white/40 uppercase flex items-center justify-center gap-0.5">
                        <IndianRupee className="w-2.5 h-2.5" /> CPC
                      </div>
                      <div className="font-bold text-white text-xs">₹{k.cpc}</div>
                      <div className="text-[8px] text-white/30">est.</div>
                    </div>
                  </div>

                  {/* KD Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${diffBarColor(k.difficulty)}`}
                      style={{ width: `${k.difficulty}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="text-xs font-mono text-white/40">
                Page {page} of {totalPages} · {filtered.length} keywords
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                        page === pageNum
                          ? "bg-white text-black"
                          : "text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-white/60 leading-relaxed">
              Estimates are derived deterministically from the seed keyword for planning and
              prioritization — validate final numbers in{" "}
              <strong className="text-white/90">Google Keyword Planner / Search Console</strong>{" "}
              before committing budget. Target high &quot;Priority&quot; scores (high volume × low
              difficulty × decent CPC) first.
            </p>
          </div>
        </div>
      )}

      {seed.trim() && filtered.length === 0 && (
        <div className="py-12 text-center space-y-2">
          <Lightbulb className="w-8 h-8 text-white/20 mx-auto" />
          <p className="text-white/50 text-sm">No results for this filter combination.</p>
          <button onClick={() => applyFilter("All")} className="text-xs text-emerald-400 hover:text-emerald-300 font-mono transition-colors">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
