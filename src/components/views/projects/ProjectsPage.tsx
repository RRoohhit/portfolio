"use client";
import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ProjectLiveBreakdown } from "@/components/shared/ProjectLiveBreakdown";
import { ProjectCaseStudy } from "@/types";
import {
  Code2,
  Search,
  Calendar,
  User,
  Filter,
  Layers,
  ArrowRight,
  ExternalLink,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectsPage: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(CASE_STUDIES[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "SEO Optimization", "Web Development", "Full Stack Development"];

  const matchesCategory = (category: string): boolean => {
    if (categoryFilter === "All") return true;
    const haystack = category.toLowerCase();
    const normalized = haystack.replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ");
    const terms = categoryFilter.toLowerCase().split(/\s+/);
    return terms.some((t) => normalized.includes(t) || haystack.includes(t));
  };

  const filteredProjects = CASE_STUDIES.filter((p) => {
    const matchesCat = matchesCategory(p.category);
    const matchesSearch =
      !searchQuery.trim() ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.toolsUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  const selectedProject = CASE_STUDIES.find((p) => p.id === selectedProjectId) || CASE_STUDIES[0];

  const selectProject = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  return (
    <div className="space-y-12">
      
      {/* Top Banner */}
      <div className="bg-white/5 border border-white/10 p-5 sm:p-8 lg:p-10 rounded-2xl space-y-5 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
          <Code2 className="w-3.5 h-3.5" />
          <span>Live Client Websites — Designed, Built &amp; SEO-Optimized</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Live Client Projects — Built From Scratch &amp; Ranked With SEO
          </h1>
          <p className="text-xs sm:text-sm text-white/60 max-w-3xl leading-relaxed">
            Ye dono website maine khud scratch se design, develop aur SEO-optimize ki hain — neeche har project ka live link, tech stack aur homepage screenshot ke saath poora SEO breakdown (technical, on-page, off-page base, local SEO, GBP, AEO/GEO) diya hai.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase text-white/40 font-bold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-black text-white/60 border border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:max-w-xs">
            <label htmlFor="projects-search-query" className="sr-only">Search projects</label>
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="projects-search-query"
              name="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project or tech..."
              aria-label="Search projects by name or technology"
              className="w-full bg-black border border-white/20 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm font-mono text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
            />
          </div>

        </div>
      </div>

      {/* Grid of Project Cards */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono uppercase text-white/50 tracking-widest font-bold flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>Live Client Projects ({filteredProjects.length} Live Websites)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Inspect case study: ${project.title}`}
                  onClick={() => selectProject(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      selectProject(project.id);
                    }
                  }}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? "bg-black border-white shadow-2xl ring-1 ring-white"
                      : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">{project.client}</span>
                    </div>

                    {/* Live homepage screenshot */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                      <img
                        src={project.afterImageUrl}
                        alt={`${project.title} — live homepage screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-44 sm:h-52 object-cover object-top"
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light">
                      {project.summary}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2 bg-black rounded border border-white/10">
                        <span className="text-[9px] sm:text-[10px] text-white/40 uppercase block">Timeline</span>
                        <span className="text-emerald-400 font-bold text-[11px] sm:text-xs">{project.timeline}</span>
                      </div>
                      <div className="p-2 bg-black rounded border border-white/10">
                        <span className="text-[9px] sm:text-[10px] text-white/40 uppercase block">Status</span>
                        <span className="text-white font-bold text-[11px] sm:text-xs">Live Website</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-400 text-black font-black uppercase tracking-wider text-[10px] hover:bg-emerald-300 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        type="button"
                        onClick={() => selectProject(project.id)}
                        className={`inline-flex items-center gap-1 text-xs font-bold ${isSelected ? "text-white" : "text-white/60 hover:text-white"}`}
                      >
                        <span>{isSelected ? "Active View" : "Read SEO Breakdown"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Selected Project Case Study Summary & Before/After Interactive Comparison */}
      <motion.div
        key={selectedProject.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">{selectedProject.category}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{selectedProject.title}</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 text-black font-black uppercase tracking-wider text-[11px] hover:bg-emerald-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center gap-1.5 bg-black px-3 py-2 rounded-xl border border-white/10 text-white/60">
                <User className="w-3.5 h-3.5 text-white/40" />
                <span>{selectedProject.client}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black px-3 py-2 rounded-xl border border-white/10 text-white/60">
                <Calendar className="w-3.5 h-3.5 text-white/40" />
                <span>{selectedProject.timeline}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed font-light">
            {selectedProject.summary}
          </p>

          {/* Tech stack pills */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-white/50 uppercase font-bold flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tech Stack Used:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Targeted Keywords Pill Cloud */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-white/50 uppercase font-bold flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Targeted Organic Search Keywords:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.keywordsTargeted.map((kw, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-black border border-white/10 text-xs font-mono text-white/80">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live website breakdown — single screenshot, no fake before/after slider */}
        <ProjectLiveBreakdown project={selectedProject} />
      </motion.div>

    </div>
  );
};
