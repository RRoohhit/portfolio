"use client";
import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/portfolioData";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { ProjectCaseStudy } from "@/types";
import {
  Code2,
  Search,
  Calendar,
  User,
  Filter,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectsPage: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(CASE_STUDIES[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "SEO Optimization", "Web Development", "Full Stack App"];

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
          <span>Verified Case Studies &amp; Quantifiable Proof</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Project Showcase &amp; Growth Engineering
          </h1>
          <p className="text-xs sm:text-sm text-white/60 max-w-3xl leading-relaxed">
            Explore Rohit Gupta&apos;s full stack web development &amp; technical SEO portfolio. Filter by service category or test the interactive side-by-side performance slider below.
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
          <span>Select A Project Case Study ({filteredProjects.length} Available)</span>
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

                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2 bg-black rounded border border-white/10">
                        <span className="text-[9px] sm:text-[10px] text-white/40 uppercase block">Primary Metric</span>
                        <span className="text-emerald-400 font-bold text-[11px] sm:text-xs">{project.metrics[0].improvement} ({project.metrics[0].after})</span>
                      </div>
                      <div className="p-2 bg-black rounded border border-white/10">
                        <span className="text-[9px] sm:text-[10px] text-white/40 uppercase block">Speed Score</span>
                        <span className="text-white font-bold text-[11px] sm:text-xs">{project.lighthouse.after.performance}/100 Lighthouse</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs font-mono">
                      <div className="flex flex-wrap gap-1">
                        {project.toolsUsed.slice(0, 3).map((tool, idx) => (
                          <span key={idx} className="text-[9px] text-white/60 bg-white/10 px-2 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => selectProject(project.id)}
                        className={`text-xs font-bold flex items-center gap-1 ${isSelected ? "text-white" : "text-white/60 group-hover:text-white"}`}
                      >
                        <span>{isSelected ? "Active View" : "Inspect Case Study"}</span>
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
            <div className="flex items-center gap-3 text-xs font-mono text-white/60">
              <div className="flex items-center gap-1.5 bg-black px-3 py-1.5 rounded-xl border border-white/10">
                <User className="w-3.5 h-3.5 text-white/40" />
                <span>{selectedProject.client}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black px-3 py-1.5 rounded-xl border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-white/40" />
                <span>{selectedProject.timeline}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed font-light">
            {selectedProject.summary}
          </p>

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

        {/* Interactive Before/After Slider Component */}
        <BeforeAfterSlider project={selectedProject} />
      </motion.div>

    </div>
  );
};
