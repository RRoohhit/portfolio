"use client";
import React, { useState } from "react";
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from "recharts";
import { Cpu, BarChart2, PieChart, CheckCircle2, Award, Sparkles } from "lucide-react";

export const SKILLS_METRICS = [
  { skill: "Core Web Vitals", fullSkill: "Core Web Vitals & Speed", score: 99, category: "Performance" },
  { skill: "React & Next.js", fullSkill: "React.js & Next.js SSR", score: 98, category: "Frontend" },
  { skill: "Technical SEO", fullSkill: "Technical SEO & Schema", score: 97, category: "SEO" },
  { skill: "Keyword Research", fullSkill: "Keyword Intent Clustering", score: 96, category: "SEO" },
  { skill: "Link Building", fullSkill: "White-Hat Link Building", score: 95, category: "Off-Page" },
  { skill: "SERP Analytics", fullSkill: "SERP & Competitor Audit", score: 95, category: "SEO" },
  { skill: "Node & APIs", fullSkill: "Node.js & Express APIs", score: 94, category: "Backend" },
  { skill: "Google Ads", fullSkill: "Google Ads & PPC Strategy", score: 92, category: "Growth" },
];

export const SkillsRadarChart: React.FC = () => {
  const [chartType, setChartType] = useState<"radar" | "bar">("radar");

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>Interactive Data Visualization</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Technical & SEO Skill Proficiency Matrix
          </h3>
          <p className="text-xs text-white/60">
            Recharts powered radar and bar analysis illustrating Rohit Gupta's core technical capabilities.
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex items-center gap-1 bg-black p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setChartType("radar")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              chartType === "radar"
                ? "bg-white text-black font-bold shadow"
                : "text-white/60 hover:text-white"
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>Radar View</span>
          </button>
          <button
            onClick={() => setChartType("bar")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              chartType === "bar"
                ? "bg-white text-black font-bold shadow"
                : "text-white/60 hover:text-white"
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Bar View</span>
          </button>
        </div>
      </div>

      {/* Recharts Visualization Box */}
      <div className="w-full h-[320px] sm:h-[380px] bg-black/60 rounded-xl border border-white/10 p-2 sm:p-4 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "radar" ? (
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_METRICS}>
              <PolarGrid stroke="#333333" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fill: "#ffffff", fontSize: 11, fontFamily: "monospace" }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#555555" tick={{ fill: "#888888", fontSize: 9 }} />
              <Radar
                name="Proficiency Level (%)"
                dataKey="score"
                stroke="#ffffff"
                fill="#ffffff"
                fillOpacity={0.25}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#050505",
                  borderColor: "#333333",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontFamily: "monospace"
                }}
                formatter={(value: any) => [`${value}% Score`, "Proficiency"]}
              />
            </RadarChart>
          ) : (
            <BarChart data={SKILLS_METRICS} margin={{ top: 20, right: 20, left: -10, bottom: 20 }}>
              <XAxis 
                dataKey="skill" 
                stroke="#666666" 
                tick={{ fill: "#ffffff", fontSize: 10, fontFamily: "monospace" }}
                interval={0}
                angle={-15}
                textAnchor="end"
              />
              <YAxis stroke="#666666" domain={[0, 100]} tick={{ fill: "#888888", fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#050505",
                  borderColor: "#333333",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontFamily: "monospace"
                }}
                formatter={(value: any) => [`${value}% Score`, "Proficiency"]}
              />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {SKILLS_METRICS.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.score >= 98 ? "#ffffff" : entry.score >= 95 ? "#e4e4e7" : "#a1a1aa"} 
                  />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Key Skill Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SKILLS_METRICS.map((item, idx) => (
          <div key={idx} className="p-3 bg-black border border-white/10 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-mono uppercase text-white/50">
              <span>{item.category}</span>
              <span className="text-white font-bold">{item.score}%</span>
            </div>
            <div className="text-xs font-bold text-white font-mono truncate">{item.skill}</div>
          </div>
        ))}
      </div>

    </div>
  );
};
