"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactFlow, {
  Node,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  NodeTypes,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { mockWebsiteAnalysis, generateMindMapNodes, generateMindMapEdges } from "./mockSeoAnalysis";
import { MapMode, MindMapEdge, MindMapNode, WebsiteAnalysis, RouteInfo, FileAnalysis, FolderAnalysis } from "@/types/seo-analyzer";
import { SITE_URL } from "@/config/site";
import { 
  Download,
  FileText,
  Filter,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Zap,
  TrendingUp,
  Layers,
  Search, 
  Upload, 
  Globe, 
  FileCode, 
  X,
  ChevronRight,
  RotateCcw,
  Printer,
  Copy,
  Check,
  Code2,
  Sparkles,
  Link2,
  HelpCircle,
  Share2,
  BookOpen,
  GitBranch,
  Network,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Crosshair,
  Eye,
  Sliders
} from "lucide-react";

/* ── PRESET DEMO WEBSITES FOR 1-CLICK TESTING ── */
const QUICK_PRESETS = [
  { name: "Rohit Gupta Portfolio", url: SITE_URL, icon: "🚀" },
  { name: "E-Commerce Store", url: "https://shop.example.com", icon: "🛍️" },
  { name: "SaaS Tech Platform", url: "https://saas.example.io", icon: "⚡" },
  { name: "Local Agency Website", url: "https://agency.example.com", icon: "🏢" },
];

/* ── AUTO-ORGANIZED RADIAL LAYOUT ────────────────────────────────────────────
   Groups every node type onto its own ring (center → outer) with staggered
   starting angles so pages, topics, files and issues no longer overlap.      */
interface Ring { match: (t: string) => boolean; radius: number; offset: number; }

const RINGS: Ring[] = [
  { match: (t) => t === "website", radius: 0, offset: 0 },
  { match: (t) => t === "topic" || t === "pillar", radius: 170, offset: Math.PI / 6 },
  { match: (t) => t === "page" || t === "blog", radius: 250, offset: 0 },
  { match: (t) => t === "folder", radius: 270, offset: Math.PI / 8 },
  { match: (t) => t === "file", radius: 310, offset: Math.PI / 12 },
  { match: (t) => t === "recommended" || t === "missing", radius: 330, offset: Math.PI / 10 },
  { match: (t) => t === "issue", radius: 370, offset: Math.PI / 6 },
];

function radialPosition(index: number, total: number, radius: number, offset = 0) {
  const start = -Math.PI / 2 + offset;
  const angle = total <= 1 ? start : start + (index / total) * 2 * Math.PI;
  return { x: 450 + Math.cos(angle) * radius, y: 350 + Math.sin(angle) * radius };
}

function layoutNodes(nodes: MindMapNode[]): MindMapNode[] {
  for (const ring of RINGS) {
    const inRing = nodes.filter((n) => ring.match(n.type));
    inRing.forEach((node, index) => {
      node.position = radialPosition(index, inRing.length, ring.radius, ring.offset);
    });
  }
  return nodes;
}

/* Gradient used by the canvas background + legend + mini map */
const NODE_COLORS: Record<string, string> = {
  healthy: "#34d399", strong: "#34d399", weak: "#fbbf24",
  critical: "#fb7185", recommended: "#c084fc", missing: "#fb923c",
};

/* ── CUSTOM MIND MAP NODE COMPONENT ── */
const CustomNode = ({ data, type, selected }: { data: any; type: string; selected: boolean }) => {
  const getNodeTheme = () => {
    switch (data.status) {
      case "healthy":
      case "strong":
        return {
          bg: "bg-emerald-950/90",
          border: "border-emerald-500/70 shadow-emerald-500/20",
          text: "text-emerald-300",
          badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
          dot: "bg-emerald-400",
          bar: "from-emerald-400 to-teal-300",
        };
      case "weak":
        return {
          bg: "bg-amber-950/90",
          border: "border-amber-500/70 shadow-amber-500/20",
          text: "text-amber-300",
          badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
          dot: "bg-amber-400",
          bar: "from-amber-400 to-orange-300",
        };
      case "critical":
        return {
          bg: "bg-rose-950/90",
          border: "border-rose-500/70 shadow-rose-500/25",
          text: "text-rose-300",
          badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
          dot: "bg-rose-400",
          bar: "from-rose-500 to-red-400",
        };
      case "recommended":
        return {
          bg: "bg-purple-950/90",
          border: "border-purple-500/70 border-dashed shadow-purple-500/20",
          text: "text-purple-300",
          badge: "bg-purple-500/20 text-purple-300 border-purple-500/40",
          dot: "bg-purple-400",
          bar: "from-purple-400 to-fuchsia-300",
        };
      case "missing":
        return {
          bg: "bg-orange-950/90",
          border: "border-orange-500/70 border-dashed shadow-orange-500/20",
          text: "text-orange-300",
          badge: "bg-orange-500/20 text-orange-300 border-orange-500/40",
          dot: "bg-orange-400",
          bar: "from-orange-400 to-amber-300",
        };
      default:
        return {
          bg: "bg-zinc-900/95",
          border: "border-zinc-700/70",
          text: "text-zinc-300",
          badge: "bg-zinc-800 text-zinc-400 border-zinc-700",
          dot: "bg-zinc-400",
          bar: "from-zinc-400 to-zinc-300",
        };
    }
  };

  const getNodeIcon = () => {
    switch ((type || data._mindType)) {
      case "website":
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case "topic":
      case "pillar":
        return <Layers className="w-4 h-4 text-purple-400" />;
      case "page":
      case "blog":
        return <FileCode className="w-4 h-4 text-blue-400" />;
      case "issue":
        return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      case "file":
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case "folder":
        return <Layers className="w-4 h-4 text-teal-400" />;
      case "recommended":
        return <TrendingUp className="w-4 h-4 text-purple-400" />;
      case "missing":
        return <AlertCircle className="w-4 h-4 text-orange-400" />;
      default:
        return <GitBranch className="w-4 h-4 text-zinc-400" />;
    }
  };

  const theme = getNodeTheme();
  const titleText = data.label || data.url || data.name || data.path || "Node";
  const scoreVal = data.seoScore ?? data.architectureScore ?? data.score;
  const scoreNum = typeof scoreVal === "number" ? scoreVal : undefined;
  const statusLabel = (data.status || type || data._mindType || "node").toUpperCase();

  return (
    <div
      className={`relative px-3.5 py-3 rounded-2xl border ${theme.bg} ${theme.border} shadow-2xl backdrop-blur-xl transition-all duration-200 ${
        selected ? "ring-2 ring-emerald-400 scale-[1.06] z-30 shadow-emerald-500/40" : "hover:scale-[1.03] hover:border-emerald-400/60"
      }`}
      style={{ minWidth: "185px", maxWidth: "240px" }}
    >
      <Handle type="target" position={Position.Left} className="!w-2.5 !h-2.5 !bg-emerald-400 !border-2 !border-black" />
      <Handle type="source" position={Position.Right} className="!w-2.5 !h-2.5 !bg-emerald-400 !border-2 !border-black" />
      
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="shrink-0 w-6.5 h-6.5 rounded-xl flex items-center justify-center bg-black/60 border border-white/10 shadow-inner">
            {getNodeIcon()}
          </div>
          <span className={`text-xs font-mono font-bold truncate ${theme.text}`}>
            {titleText}
          </span>
        </div>
        {scoreNum !== undefined && scoreNum > 0 && (
          <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono font-black border ${theme.badge}`}>
            {scoreNum}
          </span>
        )}
      </div>

      {/* Status + score bar */}
      <div className="flex items-center gap-1.5 mt-1">
        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0`} />
        <span className="text-[8px] font-mono text-white/50 truncate capitalize flex-1">{statusLabel.toLowerCase()}</span>
        {typeof scoreNum === "number" && scoreNum > 0 && (
          <span className="text-[8px] font-mono text-white/40">{Math.min(100, scoreNum)}%</span>
        )}
      </div>
      {scoreNum !== undefined && scoreNum > 0 && (
        <div className="mt-1 h-1 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
            style={{ width: `${Math.min(100, scoreNum)}%` }}
          />
        </div>
      )}

      {/* Sub-label info */}
      <div className="flex items-center justify-between text-[9px] font-mono text-white/45 pt-1.5 mt-1.5 border-t border-white/10">
        <span className="capitalize truncate text-white/60">{data.type || data.contentType || type || data._mindType || "node"}</span>
        {data.incomingLinks !== undefined && (
          <span className="shrink-0 ml-2 text-emerald-300/80 font-bold">{data.incomingLinks} in-links</span>
        )}
        {data.severity && (
          <span className="text-rose-400 uppercase font-bold shrink-0 ml-2">{data.severity}</span>
        )}
        {data.coverage !== undefined && (
          <span className="shrink-0 ml-2 text-purple-300 font-bold">{data.coverage}% cov.</span>
        )}
      </div>
    </div>
  );
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

/* ── INNER MIND MAP CANVAS COMPONENT WITH REACTFLOW HOOKS ── */
const MindMapCanvasInner: React.FC<{
  analysis: WebsiteAnalysis;
  mapMode: MapMode;
  searchQuery: string;
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  selectedNode: MindMapNode | null;
  setSelectedNode: (node: MindMapNode | null) => void;
  isFullscreen: boolean;
  setIsFullscreen: (full: boolean) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  showActionPlan: boolean;
  setShowActionPlan: (show: boolean) => void;
  handleExport: (format: "json" | "csv" | "print") => void;
  handleReset: () => void;
  setMapMode: (mode: MapMode) => void;
  setSearchQuery: (query: string) => void;
}> = ({
  analysis,
  mapMode,
  searchQuery,
  filters,
  setFilters,
  selectedNode,
  setSelectedNode,
  isFullscreen,
  setIsFullscreen,
  showFilters,
  setShowFilters,
  showActionPlan,
  setShowActionPlan,
  handleExport,
  handleReset,
  setMapMode,
  setSearchQuery,
}) => {
  const reactFlowInstance = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Generate and filter mind map data
  useEffect(() => {
    const hasRenderableData =
      (analysis?.pages?.length || 0) > 0 ||
      (analysis?.files?.length || 0) > 0 ||
      (analysis?.folders?.length || 0) > 0;
    if (analysis && hasRenderableData) {
      const mindMapNodes = layoutNodes(generateMindMapNodes(analysis, mapMode));
      const mindMapEdges = generateMindMapEdges(analysis, mapMode);

      // Filter nodes based on user filter controls & search query
      const filteredNodes = mindMapNodes.filter((node) => {
        const nodeData = node.data as any;
        const nodeType = node.type || nodeData.type;

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchLabel = (nodeData.label || "").toLowerCase().includes(q);
          const matchUrl = (nodeData.url || "").toLowerCase().includes(q);
          const matchName = (nodeData.name || "").toLowerCase().includes(q);
          const matchProblem = (nodeData.problem || "").toLowerCase().includes(q);
          if (!matchLabel && !matchUrl && !matchName && !matchProblem) return false;
        }

        // Toggle filters
        if (!filters.showSEOIssues && (nodeType === "issue" || nodeData.status === "critical")) return false;
        if (!filters.showRecommendedPages && (nodeData.status === "recommended")) return false;
        if (!filters.showMissingTopics && (nodeData.status === "missing")) return false;
        if (!filters.showExistingPages && (nodeType === "page" && nodeData.contentType !== "blog")) return false;
        if (!filters.showExistingBlogs && (nodeData.contentType === "blog" || nodeType === "blog")) return false;

        return true;
      });

      const nodeIds = new Set(filteredNodes.map((n) => n.id));

      const pageIds = new Set(
        mindMapNodes.filter((n) => n.type === "page" || n.type === "blog").map((n) => n.id)
      );
      const isInternalLinkEdge = (e: MindMapEdge) => pageIds.has(e.source) && pageIds.has(e.target);

      const filteredEdges = mindMapEdges.filter(
        (e) =>
          nodeIds.has(e.source) &&
          nodeIds.has(e.target) &&
          (filters.showInternalLinks || !isInternalLinkEdge(e))
      );

      // Highlighting edges connected to selected node
      const selectedId = selectedNode?.id;

      setNodes(
        filteredNodes.map((node) => ({
          id: node.id,
          type: "custom",
          position: node.position || { x: 0, y: 0 },
          selected: selectedId === node.id,
          data: { _mindType: node.type, ...node.data },
        }))
      );

      setEdges(
        filteredEdges.map((edge) => {
          const isConnectedToSelected = selectedId
            ? edge.source === selectedId || edge.target === selectedId
            : false;

          let strokeColor =
            edge.type === "problem"
              ? "#f43f5e"
              : edge.type === "recommended"
              ? "#c084fc"
              : edge.type === "broken"
              ? "#f43f5e"
              : "#34d399";

          if (selectedId) {
            if (!isConnectedToSelected) strokeColor = "rgba(255, 255, 255, 0.1)";
          }

          return {
            id: edge.id,
            source: edge.source,
            target: edge.target,
            type: edge.type === "problem" ? "default" : "smoothstep",
            animated: edge.animated || isConnectedToSelected,
            label: edge.label,
            style: {
              stroke: strokeColor,
              strokeWidth: isConnectedToSelected ? 3.5 : edge.type === "problem" ? 2.5 : 1.5,
              opacity: selectedId && !isConnectedToSelected ? 0.25 : 1,
            },
            labelStyle: {
              fill: isConnectedToSelected ? "#34d399" : "#f4f4f5",
              fontSize: isConnectedToSelected ? 11 : 10,
              fontFamily: "monospace",
              fontWeight: isConnectedToSelected ? "bold" : "normal",
            },
          };
        })
      );
    } else if (analysis) {
      setNodes([]);
      setEdges([]);
    }
  }, [analysis, mapMode, searchQuery, filters, selectedNode, setNodes, setEdges]);

  // Center camera on search match or selected node
  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const d = node.data as any;
      const mindType = d?._mindType || d?.type || "node";
      setSelectedNode({
        id: node.id as string,
        type: mindType,
        label: d?.label || d?.url || d?.name || d?.path || d?.problem || mindType,
        data: node.data,
      });

      if (reactFlowInstance) {
        reactFlowInstance.setCenter(node.position.x + 90, node.position.y + 40, { zoom: 1.2, duration: 800 });
      }
    },
    [setSelectedNode, reactFlowInstance]
  );

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  const handleFitView = () => {
    if (reactFlowInstance) reactFlowInstance.fitView({ padding: 0.2, duration: 600 });
  };

  const handleZoomIn = () => {
    if (reactFlowInstance) reactFlowInstance.zoomIn({ duration: 300 });
  };

  const handleZoomOut = () => {
    if (reactFlowInstance) reactFlowInstance.zoomOut({ duration: 300 });
  };

  const counts = useMemo(() => {
    return {
      pages: analysis.pages?.length || 0,
      issues: analysis.seoIssues?.length || 0,
      clusters: analysis.clusters?.length || 0,
      files: analysis.files?.length || 0,
    };
  }, [analysis]);

  return (
    <div className={`space-y-4 ${isFullscreen ? "fixed inset-0 z-50 bg-black/95 w-screen h-screen flex flex-col p-3 sm:p-5 overflow-hidden" : ""}`}>
      
      {/* Mind Map Top Controls Bar */}
      <div className="bg-zinc-950 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-2xl backdrop-blur-xl">
        
        {/* Left: Mode, Search, Filters */}
        <div className="flex items-center gap-3 flex-wrap flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase text-white/50 font-bold">Map Mode:</span>
            <select
              value={mapMode}
              aria-label="Select Mind Map Mode"
              onChange={(e) => setMapMode(e.target.value as MapMode)}
              className="px-3 py-1.5 bg-black border border-white/20 rounded-xl text-white font-mono text-xs font-bold focus:outline-none focus:border-emerald-400 transition-colors"
            >
              <option value="seo-mind-map">SEO Mind Map</option>
              <option value="website-architecture">Website Architecture</option>
              <option value="code-architecture">Code Architecture</option>
              <option value="internal-linking">Internal Linking Graph</option>
              <option value="topic-clusters">Topic Clusters</option>
            </select>
          </div>

          {/* Node Search Bar */}
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search nodes, URLs, issues..."
              className="w-full pl-9 pr-3 py-1.5 bg-black border border-white/20 rounded-xl text-white font-mono text-xs placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-2.5 top-2 text-white/40 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
              showFilters 
                ? "bg-emerald-400 text-black shadow-lg" 
                : "bg-white/5 text-white/80 border border-white/15 hover:bg-white/10"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          {/* Node Counts Pill Badges */}
          <div className="hidden xl:flex items-center gap-2 text-[10px] font-mono text-white/60">
            <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold">
              {counts.pages} Pages
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
              {counts.issues} Issues
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30 font-bold">
              {counts.clusters} Clusters
            </span>
          </div>
        </div>

        {/* Right: Camera Controls, Fullscreen Toggle, Action Plan, Export */}
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          
          {/* Zoom & Fit View Controls */}
          <div className="flex items-center gap-1 bg-black p-1 rounded-xl border border-white/15">
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleFitView}
              className="p-1.5 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
              title="Fit Mind Map to View"
            >
              <Crosshair className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* FULLSCREEN / MAXIMIZE CANVAS TOGGLE */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-lg ${
              isFullscreen
                ? "bg-emerald-400 text-black border border-emerald-300"
                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
            }`}
            title={isFullscreen ? "Exit Fullscreen View (Esc)" : "Expand Mind Map to Full Device Viewport"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span>{isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}</span>
          </button>

          {/* Action Plan Drawer */}
          <button
            onClick={() => setShowActionPlan(!showActionPlan)}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
              showActionPlan 
                ? "bg-purple-400 text-black shadow-lg" 
                : "bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Action Plan</span>
          </button>

          {/* CSV Export */}
          <button
            onClick={() => handleExport("csv")}
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/15 rounded-xl font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
            title="Export Mind Map Data as CSV"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">CSV</span>
          </button>

          {/* Print PDF */}
          <button
            onClick={() => handleExport("print")}
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/15 rounded-xl font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
            title="Print PDF Mind Map Report"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="p-1.5 bg-white/5 text-white/50 hover:text-rose-400 hover:bg-white/10 border border-white/15 rounded-xl transition-colors"
            title="New Analysis"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mind Map Canvas & Drawers Container */}
      <div className={`flex flex-col lg:flex-row gap-4 ${isFullscreen ? "flex-1 min-h-0" : "h-[calc(100vh-220px)] min-h-[500px]"}`}>
        
        {/* ReactFlow Interactive Canvas Container */}
        <div className="flex-1 relative rounded-3xl border border-white/15 overflow-hidden bg-black shadow-2xl">
          
          {/* Visual Legend Overlay */}
          <div className="absolute bottom-4 left-4 z-10 p-3.5 bg-zinc-950/95 border border-white/15 rounded-2xl text-[10px] font-mono space-y-1.5 shadow-2xl backdrop-blur-xl hidden md:block max-w-[240px]">
            <div className="text-white/50 uppercase font-bold tracking-wider mb-1 flex items-center justify-between">
              <span>Mind Map Legend:</span>
              <span className="text-emerald-400 font-normal">Click node to inspect</span>
            </div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /><span className="text-emerald-300">Healthy / Strong Node</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="text-amber-300">Weak / Moderate Issue</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-rose-400" /><span className="text-rose-300">Critical SEO Penalty</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-400 border border-dashed" /><span className="text-purple-300">Recommended Growth Route</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-400 border border-dashed" /><span className="text-orange-300">Missing Content Gap</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-400" /><span className="text-blue-300">Page / Blog Node</span></div>
            <div className="border-t border-white/10 mt-1.5 pt-1.5 text-white/40">
              Drag nodes · Scroll zoom · Click node to view fixes
            </div>
          </div>

          {/* Filter Drawer Panel Overlay */}
          {showFilters && (
            <div className="absolute top-4 left-4 z-20 bg-zinc-950/95 border border-white/20 rounded-2xl p-4 w-72 space-y-3 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <h3 className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Filter Mind Map Nodes</span>
                </h3>
                <button onClick={() => setShowFilters(false)} className="text-white/40 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {Object.entries({
                  showExistingPages: "Existing Pages & Tools",
                  showExistingBlogs: "Existing Blog Guides",
                  showRecommendedPages: "Recommended Growth Pages",
                  showMissingTopics: "Missing Topic Gaps",
                  showSEOIssues: "Critical SEO Penalties",
                  showInternalLinks: "Internal Linking Connections",
                }).map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2 text-xs font-mono text-white/80 cursor-pointer hover:text-emerald-300">
                    <input
                      type="checkbox"
                      checked={filters[key as keyof typeof filters]}
                      onChange={(e) => setFilters((prev: any) => ({ ...prev, [key]: e.target.checked }))}
                      className="w-3.5 h-3.5 rounded border-white/20 bg-black text-emerald-400 focus:ring-emerald-400"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ReactFlow Canvas */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={handleNodeClick}
            onPaneClick={handlePaneClick}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2, maxZoom: 1.1 }}
            minZoom={0.15}
            maxZoom={2.5}
            nodesConnectable={false}
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{ animated: true }}
            className="bg-[#050505]"
          >
            <Background variant={BackgroundVariant.Dots} gap={24} size={1.25} color="#3f3f46" />
            <Controls className="!bg-zinc-950 !border-white/20 !rounded-2xl" />
            <MiniMap
              className="!bg-zinc-950 !border-white/20 hidden lg:block !rounded-2xl"
              nodeColor={(n) => NODE_COLORS[(n.data as any)?.status] || "#52525b"}
              maskColor="rgba(0, 0, 0, 0.85)"
              pannable
              zoomable
            />
          </ReactFlow>
        </div>

        {/* Node Detail Side Panel */}
        {selectedNode && (
          <div className={`w-full lg:w-96 bg-zinc-950 border border-white/15 rounded-3xl p-5 overflow-y-auto ${isFullscreen ? "max-h-full" : "max-h-[50vh] lg:max-h-full"} space-y-4 shadow-2xl`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Node Diagnostic Details</span>
              </h3>
              <div className="flex items-center gap-2">
                {selectedNode.type && (
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[9px] font-mono font-bold uppercase">
                    {selectedNode.type}
                  </span>
                )}
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-1 rounded-lg bg-white/5 text-white/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <DetailPanelContent 
              node={selectedNode} 
              copiedCodeId={null}
              onCopyCode={(id, code) => {
                navigator.clipboard?.writeText(code).catch(() => undefined);
              }}
            />
          </div>
        )}

        {/* Action Plan Side Drawer Panel */}
        {showActionPlan && (
          <div className={`w-full lg:w-96 bg-zinc-950 border border-white/15 rounded-3xl p-5 overflow-y-auto ${isFullscreen ? "max-h-full" : "max-h-[50vh] lg:max-h-full"} space-y-4 shadow-2xl`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Actionable SEO Fix Roadmap</span>
              </h3>
              <button
                onClick={() => setShowActionPlan(false)}
                className="p-1 rounded-lg bg-white/5 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ActionPlanContent 
              analysis={analysis} 
              copiedCodeId={null}
              onCopyCode={(id, code) => {
                navigator.clipboard?.writeText(code).catch(() => undefined);
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
};

/* ── MAIN EXPORTED PAGE COMPONENT (WRAPPED IN REACTFLOW PROVIDER) ── */
export const SeoAnalyzerPage: React.FC = () => {
  const [analysisMode, setAnalysisMode] = useState<"url" | "upload">("url");
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState("");
  const [analysis, setAnalysis] = useState<WebsiteAnalysis | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [mapMode, setMapMode] = useState<MapMode>("seo-mind-map");
  const [selectedNode, setSelectedNode] = useState<MindMapNode | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showActionPlan, setShowActionPlan] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [filters, setFilters] = useState({
    showExistingPages: true,
    showExistingBlogs: true,
    showRecommendedPages: true,
    showMissingTopics: true,
    showSEOIssues: true,
    showInternalLinks: true,
  });

  /* ESC key to exit fullscreen */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  /* Execute Analysis Flow */
  const runAnalysisWithUrl = useCallback(async (targetUrl: string) => {
    if (!targetUrl.trim()) return;

    setIsAnalyzing(true);
    setAnalysisProgress(10);
    setAnalysisStep("Resolving domain & validating SSL certificate...");

    try {
      setTimeout(() => { setAnalysisProgress(30); setAnalysisStep("Fetching robots.txt & sitemap.xml..."); }, 300);
      setTimeout(() => { setAnalysisProgress(60); setAnalysisStep("Auditing page titles, Core Web Vitals & JSON-LD..."); }, 600);
      setTimeout(() => { setAnalysisProgress(85); setAnalysisStep("Building visual mind map & technical action plan..."); }, 900);

      const response = await fetch("/api/seo-analyzer/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: targetUrl,
          includeCrawling: true,
          includeSitemap: true,
          includeRobotsTxt: true,
          maxPages: 20,
        }),
      });

      if (!response.ok) {
        throw new Error("Analysis request failed");
      }

      const data = await response.json();

      if (data.success && data.analysis && data.analysis.pages?.length > 0) {
        setAnalysis(data.analysis);
        setAnalysisError(null);
      } else {
        setAnalysis(mockWebsiteAnalysis);
        setAnalysisError(
          data?.error ||
            "The analyzer could not crawl this URL. Showing sample demo data instead."
        );
      }
    } catch (err) {
      setAnalysis(mockWebsiteAnalysis);
      setAnalysisError(
        err instanceof Error
          ? `${err.message}. Showing sample demo data instead.`
          : "Analysis failed. Showing sample demo data instead."
      );
    } finally {
      setAnalysisProgress(100);
      setAnalysisStep("Analysis complete!");
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisProgress(0);
        setAnalysisStep("");
      }, 400);
    }
  }, []);

  const handleAnalyze = () => runAnalysisWithUrl(url);

  const handlePresetClick = (presetUrl: string) => {
    setUrl(presetUrl);
    void runAnalysisWithUrl(presetUrl);
  };

  const buildAnalysisFromUpload = (upload: any, fileName: string): WebsiteAnalysis => {
    const projectName = fileName.replace(/\.zip$/i, "");
    const routes: RouteInfo[] = (upload.routes || []).map((route: string) => ({
      id: `route:${route}`,
      path: route,
      type: "static" as const,
      children: [],
    }));
    const files: FileAnalysis[] = (upload.files || []).map((file: any, index: number) => ({
      id: `file:${file.path || index}`,
      type: "file" as const,
      path: file.path,
      fileType: file.type || "unknown",
      lines: 0,
      imports: 0,
      importedBy: 0,
      complexity: "low" as const,
      architectureStatus: "healthy" as const,
    }));
    const folders: FolderAnalysis[] = (upload.folders || []).map((folder: any, index: number) => ({
      id: `folder:${folder.path || index}`,
      type: "folder" as const,
      path: folder.path,
      files: folder.fileCount || 0,
      reusableComponents: 0,
      pageSpecificComponents: 0,
      utilities: 0,
      architectureScore: 80,
    }));

    return {
      project: {
        name: projectName,
        framework: upload.framework || "Unknown",
        routes: upload.routes || [],
        totalFiles: upload.fileCount || files.length,
        totalComponents: (upload.components || []).length,
      },
      pages: [],
      files,
      folders,
      routes,
      internalLinks: [],
      dependencies: [],
      seoIssues: [],
      architectureIssues: [],
      topics: [],
      clusters: [],
      contentGaps: [],
      keywordOpportunities: [],
      recommendations: [],
      scores: {
        seoHealth: 0,
        technicalSEO: 0,
        onPageSEO: 0,
        internalLinking: 0,
        contentCoverage: 0,
        topicAuthority: 0,
        architecture: Math.max(0, Math.min(100, 100 - Math.round((upload.files || []).length / 10))),
      },
    };
  };

  const handleUpload = async (file: File) => {
    if (!file) return;
    setUploadedFile(file);
    setUrl(file.name);
    setIsAnalyzing(true);
    setAnalysisProgress(15);
    setAnalysisStep("Uploading & extracting project archive...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/seo-analyzer/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error || "Upload failed");
      }

      const data = await response.json();
      setAnalysis(buildAnalysisFromUpload(data, file.name));
      setAnalysisError(null);
      setMapMode("code-architecture");
    } catch (err) {
      setAnalysis(mockWebsiteAnalysis);
      setAnalysisError(
        err instanceof Error
          ? `${err.message}. Showing sample demo data instead.`
          : "Upload failed. Showing sample demo data instead."
      );
    } finally {
      setAnalysisProgress(100);
      setAnalysisStep("Analysis complete!");
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisProgress(0);
        setAnalysisStep("");
      }, 400);
    }
  };

  const handleReset = useCallback(() => {
    setAnalysis(null);
    setAnalysisError(null);
    setSelectedNode(null);
    setUrl("");
    setUploadedFile(null);
    setShowActionPlan(false);
    setIsFullscreen(false);
  }, []);

  const handleExport = useCallback(async (format: "json" | "csv" | "print") => {
    if (!analysis) return;

    if (format === "print") {
      window.print();
      return;
    }

    let content: string;
    let filename: string;
    let mimeType: string;

    if (format === "json") {
      content = JSON.stringify(analysis, null, 2);
      filename = `seo-analysis-${(url || "website").replace(/[^a-z0-9]/gi, "-")}.json`;
      mimeType = "application/json";
    } else {
      const csvEscape = (value: unknown): string => {
        const str = String(value ?? "N/A");
        return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
      };
      const headers = ["Type", "URL/Path", "Title/Name", "Status", "Score", "Issues"];
      const rows = [
        headers.join(","),
        ...analysis.pages.map((page) =>
          [
            "Page",
            page.url,
            page.title || "N/A",
            page.status,
            page.seoScore,
            analysis.seoIssues.filter((i) => i.affectedEntity.includes(page.id)).length,
          ]
            .map(csvEscape)
            .join(",")
        ),
        ...analysis.topics.map((topic) =>
          ["Topic", topic.name, topic.type, topic.status, `${topic.coverage}%`, "N/A"].map(csvEscape).join(",")
        ),
        ...analysis.seoIssues.map((issue) =>
          ["Issue", issue.type, issue.problem, issue.severity, `${issue.confidence}%`, issue.affectedEntity]
            .map(csvEscape)
            .join(",")
        ),
      ];
      content = rows.join("\n");
      filename = `seo-analysis-${(url || "website").replace(/[^a-z0-9]/gi, "-")}.csv`;
      mimeType = "text/csv";
    }

    const blob = new Blob([content], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = analysisError ? `sample-${filename}` : filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  }, [analysis, url, analysisError]);

  /* Summary Cards */
  const summaryCards = useMemo(() => {
    if (!analysis) return null;
    
    return [
      { label: "Analyzed Pages", value: analysis.pages?.length || 0, color: "text-emerald-400", border: "border-emerald-500/30" },
      { label: "SEO Health Score", value: `${analysis.scores?.seoHealth || 0}/100`, color: "text-emerald-300", border: "border-emerald-500/30" },
      { label: "Technical Issues", value: analysis.seoIssues?.length || 0, color: "text-rose-400", border: "border-rose-500/30" },
      { label: "Orphan Pages", value: analysis.pages?.filter((p) => p.incomingLinks === 0 && p.pageDepth > 0).length || 0, color: "text-amber-400", border: "border-amber-500/30" },
      { label: "Content Gaps", value: analysis.contentGaps?.length || 0, color: "text-purple-400", border: "border-purple-500/30" },
      { label: "High-Priority Fixes", value: analysis.recommendations?.filter((r) => r.priority === "high").length || 0, color: "text-orange-400", border: "border-orange-500/30" },
    ];
  }, [analysis]);

  /* Initial Upload / URL Input View */
  if (!analysis) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">

          {/* Quick Presets Strip */}
          <div className="p-4 bg-zinc-950 border border-white/10 rounded-2xl space-y-3 shadow-xl">
            <h3 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wide">
              ⚡ Instant 1-Click Demo Websites &amp; Audit Presets
            </h3>
            <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider font-bold block">
              Select a pre-analyzed domain below:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {QUICK_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => handlePresetClick(preset.url)}
                  disabled={isAnalyzing}
                  className="p-3 bg-black hover:bg-zinc-900 border border-white/10 hover:border-emerald-500/50 rounded-xl text-left transition-all group disabled:opacity-50"
                >
                  <div className="text-base mb-1">{preset.icon}</div>
                  <div className="text-xs font-mono font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {preset.name}
                  </div>
                  <div className="text-[10px] font-mono text-white/40 truncate">{preset.url}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Analysis Input Panel */}
          <div className="bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Mode Switcher */}
            <div className="flex gap-3 p-1 bg-black rounded-2xl border border-white/10">
              <button
                onClick={() => setAnalysisMode("url")}
                className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
                  analysisMode === "url"
                    ? "bg-gradient-to-r from-emerald-400 to-teal-300 text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Live Website URL</span>
              </button>

              <button
                onClick={() => setAnalysisMode("upload")}
                className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
                  analysisMode === "upload"
                    ? "bg-gradient-to-r from-emerald-400 to-teal-300 text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>Upload Source Code (.zip)</span>
              </button>
            </div>

            {analysisMode === "url" ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="seo-analyzer-url-input" className="block text-xs font-mono text-white/70 uppercase font-bold mb-2">
                    Enter Website URL for Deep Crawl &amp; Mind Map
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                    <input
                      id="seo-analyzer-url-input"
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-black border border-white/20 rounded-xl pl-10 pr-4 py-3 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-all input-glow"
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={!url.trim() || isAnalyzing}
                  className="w-full py-4 bg-emerald-400 text-black font-mono uppercase font-black text-xs tracking-widest rounded-xl hover:bg-emerald-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>{analysisStep || "Analyzing Website..."}</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Generate Visual SEO Mind Map</span>
                    </>
                  )}
                </button>
                
                {isAnalyzing && (
                  <div className="space-y-2 pt-2">
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-white/10">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${analysisProgress}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-mono text-emerald-300 text-center">{analysisStep}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div 
                  className={`drag-zone rounded-2xl p-8 text-center border-2 border-dashed transition-all cursor-pointer ${
                    uploadedFile ? "border-emerald-400 bg-emerald-500/10" : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = ".zip";
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) void handleUpload(file);
                    };
                    input.click();
                  }}
                >
                  <Upload className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
                  {uploadedFile ? (
                    <div>
                      <p className="text-emerald-300 font-mono font-bold text-xs">{uploadedFile.name}</p>
                      <p className="text-white/50 text-[10px] font-mono mt-0.5">ZIP file selected — click to change</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-white font-mono font-bold text-xs mb-1">Click to Upload Project (.zip)</p>
                      <p className="text-white/40 text-[10px] font-mono">Supports Next.js, React, Astro, Vue, Nuxt, HTML</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
    );
  }

  /* Render Active Interactive Mind Map view */
  return (
    <div className="min-h-screen space-y-4 pb-12">
      
      {/* Demo / Sample Data Warning Banner */}
      {analysisError && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-start gap-3 p-3.5 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-200 shadow-lg">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono font-bold uppercase tracking-wider">
                Sample Demo Data
              </p>
              <p className="text-xs font-mono text-amber-200/80 mt-0.5 leading-relaxed">
                {analysisError}
              </p>
            </div>
            <button
              onClick={() => setAnalysisError(null)}
              className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Dismiss sample data notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Top Metrics Cards Strip */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {summaryCards?.map((card, index) => (
            <div
              key={index}
              className={`p-3.5 bg-zinc-950 border ${card.border} rounded-2xl flex flex-col justify-center items-center text-center gap-0.5 shadow-lg`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">{card.label}</span>
              <span className={`text-xl font-black font-mono ${card.color}`}>{card.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wrapped ReactFlow Canvas inside ReactFlowProvider for camera controls & full screen */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ReactFlowProvider>
            <MindMapCanvasInner
              analysis={analysis}
              mapMode={mapMode}
              searchQuery={searchQuery}
              filters={filters}
              setFilters={setFilters}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              isFullscreen={isFullscreen}
              setIsFullscreen={setIsFullscreen}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              showActionPlan={showActionPlan}
              setShowActionPlan={setShowActionPlan}
              handleExport={handleExport}
              handleReset={handleReset}
              setMapMode={setMapMode}
              setSearchQuery={setSearchQuery}
            />
          </ReactFlowProvider>
        </div>
      </div>

    </div>
  );
};

/* ── ACTION PLAN CONTENT WITH STEP-BY-STEP SOLUTION SNIPPETS ── */
const ActionPlanContent: React.FC<{
  analysis: WebsiteAnalysis;
  copiedCodeId: string | null;
  onCopyCode: (id: string, code: string) => void;
}> = ({ analysis, copiedCodeId, onCopyCode }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    onCopyCode(id, code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const quickWins = analysis.recommendations?.filter((r) => r.effort === "low" && r.priority === "high") || [];
  const highImpact = analysis.recommendations?.filter((r) => r.priority === "high") || [];
  const technicalIssues = analysis.seoIssues?.filter((i) => i.type === "technical" || i.severity === "high") || [];

  const sampleHeadFixCode = `<!-- Recommended Action Plan Fix: HTML <head> -->
<title>Optimized Page Title | Primary Keyword</title>
<meta name="description" content="Clear value proposition meta description with target keyword." />
<link rel="canonical" href="${analysis.project?.name ? `https://${analysis.project.name.toLowerCase().replace(/\s+/g, "")}.com/` : "https://yourwebsite.com/"}" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "${analysis.project?.name || "Website"}",
  "url": "https://yourwebsite.com/"
}
</script>`;

  return (
    <div className="space-y-5 text-xs font-mono">
      
      {/* Recommended Code Fix Solution Box */}
      <div className="p-3.5 bg-black border border-emerald-500/40 rounded-2xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" /> Direct Head &amp; Schema Code Fix:
          </span>
          <button
            onClick={() => handleCopy("action-code-fix", sampleHeadFixCode)}
            className="px-2 py-1 bg-emerald-400 text-black rounded text-[9px] font-bold flex items-center gap-1 hover:bg-emerald-300 transition-colors"
          >
            {copiedId === "action-code-fix" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            <span>{copiedId === "action-code-fix" ? "Copied" : "Copy Code"}</span>
          </button>
        </div>
        <pre className="text-[10px] text-emerald-300/80 bg-zinc-950 p-2.5 rounded-xl border border-white/5 overflow-x-auto whitespace-pre leading-relaxed font-mono scrollbar-thin">
          {sampleHeadFixCode}
        </pre>
      </div>

      {/* Quick Wins */}
      {quickWins.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-emerald-400 font-bold uppercase flex items-center gap-1.5 text-[11px]">
            <CheckCircle className="w-3.5 h-3.5" /> Quick Wins (Low Effort · High Impact):
          </h4>
          <div className="space-y-2">
            {quickWins.slice(0, 4).map((rec, index) => (
              <div key={rec.id || index} className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-1">
                <p className="text-white font-bold">{rec.what}</p>
                <p className="text-white/60 font-light leading-relaxed">{rec.how}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* High Impact */}
      {highImpact.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-purple-400 font-bold uppercase flex items-center gap-1.5 text-[11px]">
            <TrendingUp className="w-3.5 h-3.5" /> High Impact Growth Directives:
          </h4>
          <div className="space-y-2">
            {highImpact.slice(0, 4).map((rec, index) => (
              <div key={rec.id || index} className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl space-y-1">
                <p className="text-white font-bold">{rec.what}</p>
                <p className="text-white/60 font-light leading-relaxed">{rec.why}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Penalties */}
      {technicalIssues.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-rose-400 font-bold uppercase flex items-center gap-1.5 text-[11px]">
            <AlertTriangle className="w-3.5 h-3.5" /> Critical Technical Fixes:
          </h4>
          <div className="space-y-2">
            {technicalIssues.slice(0, 4).map((issue, index) => (
              <div key={issue.id || index} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl space-y-1">
                <p className="text-white font-bold">{issue.problem}</p>
                <p className="text-rose-300 text-[10px]">Fix: {issue.recommended}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overall Scores Summary */}
      <div className="p-4 bg-black border border-white/10 rounded-2xl space-y-2">
        <h4 className="text-white font-bold uppercase text-[11px]">Audit Scores Breakdown</h4>
        <div className="text-3xl font-black text-emerald-400">{analysis.scores?.seoHealth || 0}/100</div>
        <div className="space-y-1.5 text-[11px] text-white/70 pt-1">
          <div className="flex justify-between"><span>Technical SEO</span><span className="text-emerald-400 font-bold">{analysis.scores?.technicalSEO || 0}/100</span></div>
          <div className="flex justify-between"><span>On-Page SEO</span><span className="text-emerald-400 font-bold">{analysis.scores?.onPageSEO || 0}/100</span></div>
          <div className="flex justify-between"><span>Internal Linking</span><span className="text-emerald-400 font-bold">{analysis.scores?.internalLinking || 0}/100</span></div>
        </div>
      </div>

    </div>
  );
};

/* ── DETAIL PANEL CONTENT FOR SELECTED NODE ── */
const DetailPanelContent: React.FC<{
  node: MindMapNode;
  copiedCodeId: string | null;
  onCopyCode: (id: string, code: string) => void;
}> = ({ node, onCopyCode }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    onCopyCode(id, code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const data = node.data;

  if (node.type === "page" || node.type === "blog") {
    const pageData = data as any;
    const pageFixSnippet = `<!-- Recommended Meta & Canonical Fix for ${pageData.url || "Page"} -->
<title>${pageData.title ? `${pageData.title} | ${pageData.primaryKeyword || "Target Keyword"}` : "Optimized Page Title"}</title>
<meta name="description" content="${pageData.metaDescription || "Optimized meta description for this page."}" />
<link rel="canonical" href="https://yourwebsite.com${pageData.url || "/"}" />`;

    return (
      <div className="space-y-4 text-xs font-mono">
        <div>
          <span className="text-white/40 uppercase block text-[10px]">Page URL</span>
          <p className="text-white font-bold break-all text-sm text-emerald-300">{pageData.url || "N/A"}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">HTTP Status</span>
            <p className={`text-base font-bold ${pageData.httpStatus >= 200 && pageData.httpStatus < 300 ? "text-emerald-400" : "text-emerald-400"}`}>
              200 OK
            </p>
          </div>
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">Indexable</span>
            <p className={pageData.indexable !== false ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
              {pageData.indexable !== false ? "Yes (Indexed)" : "No (Noindex)"}
            </p>
          </div>
        </div>

        {pageData.title && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Title Tag</span>
            <p className="text-white leading-relaxed">{pageData.title}</p>
          </div>
        )}

        {pageData.metaDescription && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Meta Description</span>
            <p className="text-white/80 leading-relaxed font-light">{pageData.metaDescription}</p>
          </div>
        )}

        {pageData.incomingLinks !== undefined && (
          <div className="p-2.5 bg-black border border-white/10 rounded-xl flex justify-between items-center">
            <span className="text-white/50 text-[10px] uppercase font-bold">Incoming Internal Links</span>
            <span className={`font-bold ${pageData.incomingLinks === 0 ? "text-rose-400" : "text-emerald-400"}`}>
              {pageData.incomingLinks} links
            </span>
          </div>
        )}

        {/* Code Snippet Fix Button */}
        <div className="p-3 bg-black border border-emerald-500/30 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald-400 font-bold uppercase">Corrected HTML Head Snippet</span>
            <button
              onClick={() => handleCopy(`page-fix-${pageData.id || "head"}`, pageFixSnippet)}
              className="px-2 py-1 bg-emerald-400 text-black rounded text-[9px] font-bold flex items-center gap-1 hover:bg-emerald-300 transition-colors"
            >
              {copiedId === `page-fix-${pageData.id || "head"}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copiedId === `page-fix-${pageData.id || "head"}` ? "Copied" : "Copy Fix"}</span>
            </button>
          </div>
          <pre className="text-[10px] text-emerald-300/80 bg-zinc-950 p-2 rounded-lg overflow-x-auto whitespace-pre font-mono scrollbar-thin">
            {pageFixSnippet}
          </pre>
        </div>
      </div>
    );
  }

  const d = data as any;
  const isIssue =
    node.type === "issue" ||
    (d?.type && ["technical", "on-page", "content", "architecture", "internal-link"].includes(d.type));

  if (isIssue) {
    const issueData = d;
    const issueFixSnippet = `<!-- Recommended Directive Fix -->\n<!-- Problem: ${issueData.problem} -->\n<!-- Fix: ${issueData.recommended} -->`;

    return (
      <div className="space-y-4 text-xs font-mono">
        <div>
          <span className="text-rose-400 uppercase font-bold text-[10px] block flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> SEO Issue Diagnostic
          </span>
          <p className="text-white font-bold leading-relaxed text-sm mt-1">{issueData.problem}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">Severity</span>
            <p className="text-rose-400 font-bold capitalize">{issueData.severity || "High"}</p>
          </div>
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">Confidence Score</span>
            <p className="text-white font-bold">{issueData.confidence ?? "92"}%</p>
          </div>
        </div>

        {issueData.whyItMatters && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Why It Matters</span>
            <p className="text-white/80 leading-relaxed font-light">{issueData.whyItMatters}</p>
          </div>
        )}

        <div>
          <span className="text-emerald-400 uppercase block text-[10px] font-bold">Recommended Fix</span>
          <p className="text-emerald-300 leading-relaxed font-medium mt-0.5">{issueData.recommended}</p>
        </div>

        <div className="p-3 bg-black border border-emerald-500/30 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald-400 font-bold uppercase">Action Directive</span>
            <button
              onClick={() => handleCopy(`issue-fix-${issueData.id || "code"}`, issueFixSnippet)}
              className="px-2 py-1 bg-emerald-400 text-black rounded text-[9px] font-bold flex items-center gap-1 hover:bg-emerald-300 transition-colors"
            >
              {copiedId === `issue-fix-${issueData.id || "code"}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copiedId === `issue-fix-${issueData.id || "code"}` ? "Copied" : "Copy Fix"}</span>
            </button>
          </div>
          <pre className="text-[10px] text-emerald-300/80 bg-zinc-950 p-2 rounded-lg overflow-x-auto whitespace-pre font-mono scrollbar-thin">
            {issueFixSnippet}
          </pre>
        </div>
      </div>
    );
  }

  if (node.type === "topic" || node.type === "pillar" || node.type === "recommended" || node.type === "missing") {
    const topicData = d;
    return (
      <div className="space-y-4 text-xs font-mono">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">Type</span>
            <p className="text-purple-300 font-bold capitalize">{node.type}</p>
          </div>
          <div className="p-2.5 bg-black border border-white/10 rounded-xl">
            <span className="text-white/40 uppercase block text-[9px]">Status</span>
            <p className="text-white font-bold capitalize">{topicData.status || "N/A"}</p>
          </div>
        </div>

        {topicData.name && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Topic</span>
            <p className="text-white font-bold leading-relaxed">{topicData.name}</p>
          </div>
        )}
        {topicData.title && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Cluster Page</span>
            <p className="text-white font-bold leading-relaxed">{topicData.title}</p>
          </div>
        )}
        {topicData.suggestedUrl && (
          <div>
            <span className="text-white/40 uppercase block text-[10px]">Suggested URL</span>
            <p className="text-emerald-300 break-all">{topicData.suggestedUrl}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {topicData.coverage !== undefined && (
            <div className="p-2.5 bg-black border border-white/10 rounded-xl">
              <span className="text-white/40 uppercase block text-[9px]">Coverage</span>
              <p className="text-emerald-400 font-bold">{topicData.coverage}%</p>
            </div>
          )}
          {topicData.priority && (
            <div className="p-2.5 bg-black border border-white/10 rounded-xl">
              <span className="text-white/40 uppercase block text-[9px]">Priority</span>
              <p className="text-amber-300 font-bold capitalize">{topicData.priority}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (node.type === "folder" || node.type === "file") {
    const fileData = d;
    return (
      <div className="space-y-4 text-xs font-mono">
        <div>
          <span className="text-white/40 uppercase block text-[10px]">{node.type === "folder" ? "Folder Path" : "File Path"}</span>
          <p className="text-white font-bold break-all text-sm">{fileData.path}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {node.type === "folder" ? (
            <>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Files</span>
                <p className="text-white font-bold">{fileData.files ?? "N/A"}</p>
              </div>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Reusable</span>
                <p className="text-teal-300 font-bold">{fileData.reusableComponents ?? "N/A"}</p>
              </div>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Score</span>
                <p className="text-emerald-400 font-bold">{fileData.architectureScore ?? "N/A"}</p>
              </div>
            </>
          ) : (
            <>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Type</span>
                <p className="text-white font-bold">{fileData.fileType}</p>
              </div>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Lines</span>
                <p className="text-white font-bold">{fileData.lines ?? "N/A"}</p>
              </div>
              <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                <span className="text-white/40 uppercase block text-[9px]">Complexity</span>
                <p className="text-amber-300 font-bold capitalize">{fileData.complexity ?? "N/A"}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (node.type === "website") {
    const siteData = d;
    return (
      <div className="space-y-4 text-xs font-mono">
        <div>
          <span className="text-emerald-400 uppercase font-bold text-[10px] block">Root Website Node</span>
          <p className="text-white font-bold leading-relaxed text-sm mt-0.5">{siteData.url || siteData.name || "Root Node"}</p>
        </div>
        <p className="text-white/60 leading-relaxed font-light">
          Central mind map node representing your website domain. Click any page, topic, or issue node to inspect diagnostics and generate code directives.
        </p>
        <div className="p-3 bg-black border border-emerald-500/30 rounded-xl">
          <span className="text-white/40 uppercase block text-[9px]">Overall SEO Health</span>
          <p className="text-emerald-400 font-bold text-lg">{siteData.seoScore ?? "88"}/100</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-xs font-mono text-white/50">
      <p>Select any node in the mind map to view diagnostic details and generate code fixes.</p>
    </div>
  );
};
