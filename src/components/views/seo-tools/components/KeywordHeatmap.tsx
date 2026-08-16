"use client";
import React, { useState } from "react";
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  Tooltip, 
  Cell, 
  ReferenceArea, 
  BarChart, 
  Bar 
} from "recharts";
import { 
  Flame, 
  Search, 
  Filter, 
  CheckCircle2, 
  TrendingUp, 
  ScatterChart as ScatterIcon, 
  BarChart2, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export interface KeywordData {
  id: string;
  keyword: string;
  category: "Technical SEO" | "Next.js Dev" | "Core Web Vitals" | "Google Ads" | "Local SEO";
  searchVolume: number;
  difficulty: number; // 0-100
  rohitRank: number; // 1, 2, 3 etc.
  cpc: string;
  cpcValue: number;
  intent: "Transactional" | "Commercial" | "Informational";
  trafficGrowth: string;
}

export const KEYWORDS_LIST: KeywordData[] = [
  { id: "kw-1", keyword: "Technical SEO Specialist Delhi", category: "Technical SEO", searchVolume: 14800, difficulty: 42, rohitRank: 1, cpc: "₹185.00", cpcValue: 185, intent: "Transactional", trafficGrowth: "+340%" },
  { id: "kw-2", keyword: "Next.js Speed Optimization Expert", category: "Next.js Dev", searchVolume: 12200, difficulty: 38, rohitRank: 1, cpc: "₹210.00", cpcValue: 210, intent: "Transactional", trafficGrowth: "+410%" },
  { id: "kw-3", keyword: "Core Web Vitals LCP Fix Noida", category: "Core Web Vitals", searchVolume: 8900, difficulty: 29, rohitRank: 1, cpc: "₹140.00", cpcValue: 140, intent: "Commercial", trafficGrowth: "+290%" },
  { id: "kw-4", keyword: "Schema JSON-LD Rich Snippet Audit", category: "Technical SEO", searchVolume: 18500, difficulty: 55, rohitRank: 2, cpc: "₹195.00", cpcValue: 195, intent: "Informational", trafficGrowth: "+520%" },
  { id: "kw-5", keyword: "Google Ads Specialist Noida Sector-63", category: "Google Ads", searchVolume: 9600, difficulty: 48, rohitRank: 1, cpc: "₹260.00", cpcValue: 260, intent: "Transactional", trafficGrowth: "+380%" },
  { id: "kw-6", keyword: "React.js Full Stack Freelancer Ayodhya", category: "Next.js Dev", searchVolume: 6400, difficulty: 21, rohitRank: 1, cpc: "₹120.00", cpcValue: 120, intent: "Transactional", trafficGrowth: "+610%" },
  { id: "kw-7", keyword: "Ecommerce PageSpeed 99 Score Fix", category: "Core Web Vitals", searchVolume: 22100, difficulty: 64, rohitRank: 2, cpc: "₹310.00", cpcValue: 310, intent: "Commercial", trafficGrowth: "+450%" },
  { id: "kw-8", keyword: "White Hat Backlink Audit India", category: "Technical SEO", searchVolume: 11300, difficulty: 36, rohitRank: 1, cpc: "₹160.00", cpcValue: 160, intent: "Commercial", trafficGrowth: "+280%" },
  { id: "kw-9", keyword: "Local SEO Google Map Pack Rank #1", category: "Local SEO", searchVolume: 15400, difficulty: 45, rohitRank: 1, cpc: "₹175.00", cpcValue: 175, intent: "Transactional", trafficGrowth: "+490%" },
  { id: "kw-10", keyword: "Ahrefs & Semrush Keyword Clustering", category: "Technical SEO", searchVolume: 8200, difficulty: 31, rohitRank: 2, cpc: "₹130.00", cpcValue: 130, intent: "Informational", trafficGrowth: "+320%" }
];

export const KeywordHeatmap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [chartView, setChartView] = useState<"scatter" | "bars">("scatter");

  const categories = ["All", "Technical SEO", "Next.js Dev", "Core Web Vitals", "Google Ads", "Local SEO"];

  const filteredKeywords = KEYWORDS_LIST.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.keyword.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (kd: number) => {
    if (kd < 35) return "#34d399"; // emerald
    if (kd < 55) return "#fbbf24"; // amber
    return "#f43f5e"; // rose
  };

  const getDifficultyBgClass = (kd: number) => {
    if (kd < 35) return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    if (kd < 55) return "bg-amber-500/20 text-amber-300 border-amber-500/30";
    return "bg-rose-500/20 text-rose-300 border-rose-500/30";
  };

  const getDifficultyLabel = (kd: number) => {
    if (kd < 35) return "Low Difficulty (Easy Rank)";
    if (kd < 55) return "Medium Competition";
    return "High Competition Zone";
  };

  // Custom Recharts Scatter Tooltip
  const CustomScatterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data: KeywordData = payload[0].payload;
      return (
        <div className="bg-black/95 border border-white/20 p-3.5 rounded-xl shadow-2xl text-xs font-mono space-y-1.5 z-50">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1">
            <span className="font-bold text-white max-w-[200px] truncate">{data.keyword}</span>
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
              Rank #{data.rohitRank}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-white/80">
            <div>Category: <span className="text-white font-bold">{data.category}</span></div>
            <div>Search Vol: <span className="text-white font-bold">{data.searchVolume.toLocaleString()}</span></div>
            <div>Difficulty: <span className="font-bold" style={{ color: getDifficultyColor(data.difficulty) }}>{data.difficulty}/100</span></div>
            <div>Est. CPC: <span className="text-emerald-400 font-bold">{data.cpc}</span></div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Search Authority & Density Matrix</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Keyword Difficulty Heatmap & Market Landscape
          </h3>
          <p className="text-xs text-white/60">
            Recharts visualization of competitive density zones: Search Volume vs. Keyword Difficulty (KD).
          </p>
        </div>

        {/* View Switcher & Search input */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 bg-black p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setChartView("scatter")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                chartView === "scatter"
                  ? "bg-white text-black font-bold shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ScatterIcon className="w-3.5 h-3.5" />
              <span>Scatter Matrix</span>
            </button>
            <button
              onClick={() => setChartView("bars")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                chartView === "bars"
                  ? "bg-white text-black font-bold shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Density Bars</span>
            </button>
          </div>

          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search keyword..."
              className="w-full bg-black border border-white/20 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                isActive
                  ? "bg-white text-black font-bold shadow"
                  : "bg-black text-white/60 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* RECHARTS VISUALIZATION CONTAINER */}
      <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-widest flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Recharts Landscape Map (Color-Coded Difficulty Zones)</span>
          </span>

          {/* Legend Color Pills */}
          <div className="flex items-center gap-3 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-white/80">Low KD (0-35)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="text-white/80">Medium KD (36-55)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="text-white/80">High KD (56-100)</span>
            </div>
          </div>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            {chartView === "scatter" ? (
              <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
                {/* Background Density Zone Shading */}
                <ReferenceArea {...({ y1: 0, y2: 35, fill: "#10b981", fillOpacity: 0.08, stroke: "#34d399", strokeDasharray: "3 3", label: { value: "Easy Zone (KD < 35)", fill: "#34d399", fontSize: 10, position: "insideTopLeft" } } as any)} />
                <ReferenceArea {...({ y1: 35, y2: 55, fill: "#f59e0b", fillOpacity: 0.08, stroke: "#fbbf24", strokeDasharray: "3 3", label: { value: "Moderate Zone (KD 35-55)", fill: "#fbbf24", fontSize: 10, position: "insideTopLeft" } } as any)} />
                <ReferenceArea {...({ y1: 55, y2: 100, fill: "#f43f5e", fillOpacity: 0.08, stroke: "#f43f5e", strokeDasharray: "3 3", label: { value: "High Competition (KD > 55)", fill: "#f43f5e", fontSize: 10, position: "insideTopLeft" } } as any)} />

                <XAxis 
                  type="number" 
                  dataKey="searchVolume" 
                  name="Search Volume" 
                  unit=" visits"
                  stroke="#666" 
                  fontSize={10} 
                  fontFamily="monospace"
                  domain={[5000, 25000]}
                />
                <YAxis 
                  type="number" 
                  dataKey="difficulty" 
                  name="Keyword Difficulty" 
                  unit=" KD"
                  stroke="#666" 
                  fontSize={10} 
                  fontFamily="monospace"
                  domain={[0, 100]}
                />
                <ZAxis type="number" dataKey="cpcValue" range={[100, 400]} />
                <Tooltip content={<CustomScatterTooltip />} />
                <Scatter name="Keywords" data={filteredKeywords}>
                  {filteredKeywords.map((entry) => (
                    <Cell 
                      key={entry.id} 
                      fill={getDifficultyColor(entry.difficulty)} 
                      stroke="#ffffff"
                      strokeWidth={1.5}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            ) : (
              <BarChart data={filteredKeywords} margin={{ top: 10, right: 10, bottom: 30, left: 0 }}>
                <XAxis 
                  dataKey="keyword" 
                  stroke="#666" 
                  fontSize={9} 
                  fontFamily="monospace"
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis stroke="#666" fontSize={10} fontFamily="monospace" domain={[0, 100]} />
                <Tooltip 
                  formatter={(value: any) => [`${value}/100 KD`, "Difficulty"]}
                  contentStyle={{ backgroundColor: "#000", borderColor: "#333", borderRadius: "8px", fontSize: "11px", fontFamily: "monospace" }}
                />
                <Bar dataKey="difficulty" radius={[6, 6, 0, 0]}>
                  {filteredKeywords.map((entry) => (
                    <Cell key={entry.id} fill={getDifficultyColor(entry.difficulty)} />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Keyword Detailed Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredKeywords.map((item) => (
          <div 
            key={item.id}
            className="p-4 bg-black border border-white/10 rounded-xl space-y-3 hover:border-white/30 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[9px] font-mono uppercase text-white/40 font-bold">{item.category} • {item.intent}</span>
                <h4 className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors leading-snug">
                  {item.keyword}
                </h4>
              </div>
              
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span className="text-xs font-mono font-bold">Rank #{item.rohitRank}</span>
              </div>
            </div>

            {/* Difficulty Bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-white/60">Keyword Difficulty (KD)</span>
                <span className={`px-1.5 py-0.2 rounded border text-[9px] font-bold uppercase ${getDifficultyBgClass(item.difficulty)}`}>
                  {item.difficulty}/100 • {getDifficultyLabel(item.difficulty)}
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{ 
                    width: `${item.difficulty}%`,
                    backgroundColor: getDifficultyColor(item.difficulty) 
                  }}
                ></div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-1.5 bg-white/5 rounded border border-white/5">
                <div className="text-[9px] text-white/40 uppercase">Monthly Vol</div>
                <div className="font-bold text-white">{item.searchVolume.toLocaleString()}</div>
              </div>
              <div className="p-1.5 bg-white/5 rounded border border-white/5">
                <div className="text-[9px] text-white/40 uppercase">Est. CPC</div>
                <div className="font-bold text-white">{item.cpc}</div>
              </div>
              <div className="p-1.5 bg-white/5 rounded border border-white/5">
                <div className="text-[9px] text-white/40 uppercase">Traffic Growth</div>
                <div className="font-bold text-emerald-400">{item.trafficGrowth}</div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
