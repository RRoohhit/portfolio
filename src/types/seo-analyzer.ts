// SEO Analyzer - Structured Data Model Types

export type NodeType = 
  | "website"
  | "topic"
  | "pillar"
  | "page"
  | "blog"
  | "recommended"
  | "missing"
  | "issue"
  | "file"
  | "folder"
  | "component";

export type NodeStatus = 
  | "healthy"
  | "strong"
  | "weak"
  | "critical"
  | "recommended"
  | "missing";

export type SearchIntent = 
  | "informational"
  | "commercial"
  | "transactional"
  | "navigational"
  | "local";

export type ContentType = 
  | "service"
  | "product"
  | "category"
  | "location"
  | "comparison"
  | "guide"
  | "tutorial"
  | "faq"
  | "case-study"
  | "blog"
  | "tool"
  | "glossary"
  | "landing"
  | "contact";

export type MapMode = 
  | "seo-mind-map"
  | "website-architecture"
  | "code-architecture"
  | "internal-linking"
  | "topic-clusters";

export type Severity = "low" | "medium" | "high" | "critical";

export interface ProjectInfo {
  name: string;
  framework: string;
  version?: string;
  routes: string[];
  totalFiles: number;
  totalComponents: number;
}

export interface PageAnalysis {
  id: string;
  type: "page" | "blog";
  url: string;
  title?: string;
  metaDescription?: string;
  h1?: string;
  canonical?: string;
  indexable: boolean;
  httpStatus?: number;
  wordCount?: number;
  images?: number;
  imagesMissingAlt?: number;
  internalLinks: number;
  externalLinks: number;
  incomingLinks: number;
  pageDepth: number;
  topic?: string;
  searchIntent?: SearchIntent;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  schema?: string[];
  seoScore: number;
  contentScore: number;
  internalLinkingScore: number;
  status: NodeStatus;
  contentType?: ContentType;
}

export interface FileAnalysis {
  id: string;
  type: "file";
  path: string;
  fileType: string;
  lines: number;
  imports: number;
  importedBy: number;
  complexity: "low" | "medium" | "high";
  usedBy?: string;
  architectureStatus?: "healthy" | "warning" | "problem";
}

export interface FolderAnalysis {
  id: string;
  type: "folder";
  path: string;
  files: number;
  reusableComponents: number;
  pageSpecificComponents: number;
  utilities: number;
  architectureScore: number;
}

export interface RouteInfo {
  id: string;
  path: string;
  type: "static" | "dynamic" | "catch-all";
  parent?: string;
  children: string[];
}

export interface InternalLink {
  id: string;
  from: string;
  to: string;
  anchorText?: string;
  status: "existing" | "broken" | "recommended" | "missing";
  priority?: "low" | "medium" | "high";
}

export interface Dependency {
  id: string;
  source: string;
  target: string;
  type: "import" | "export" | "circular" | "require" | "dynamic";
}

export interface SEOIssue {
  id: string;
  type: "technical" | "on-page" | "content" | "architecture" | "internal-link";
  severity: Severity;
  confidence: number;
  problem: string;
  evidence: string[];
  whyItMatters: string;
  recommended: string;
  affectedEntity: string;
}

export interface ArchitectureIssue {
  id: string;
  severity: Severity;
  confidence: number;
  problem: string;
  evidence: string[];
  whyItMatters: string;
  recommended: string;
  affectedEntity: string;
  type?: "page-specific-component" | "deep-import" | "large-component" | "duplicate-code";
  file?: string;
  description?: string;
  recommendation?: string;
}

export interface CircularDependency {
  id: string;
  files: string[];
  path: string[];
}

export interface Topic {
  id: string;
  name: string;
  type: "main" | "sub" | "cluster";
  coverage: number;
  existingPages: number;
  recommendedPages: number;
  status: NodeStatus;
}

export interface TopicCluster {
  id: string;
  pillar: string;
  pillarUrl?: string;
  clusters: ClusterPage[];
  coverage: number;
}

export interface ClusterPage {
  id: string;
  title: string;
  url?: string;
  suggestedUrl?: string;
  status: "existing" | "recommended" | "missing";
  searchIntent?: SearchIntent;
  primaryKeyword?: string;
  priority: "low" | "medium" | "high";
}

export interface ContentGap {
  id: string;
  topic: string;
  currentCoverage: number;
  coverage: "weak" | "moderate" | "strong";
  recommendedPillar: string;
  recommendedClusterPages: ClusterPage[];
  recommendedContent?: ClusterPage[];
  priority: "low" | "medium" | "high";
}

export interface KeywordOpportunity {
  id: string;
  keyword: string;
  searchVolume?: number;
  difficulty?: number;
  opportunity: "low" | "medium" | "high";
  recommendedContentType: ContentType;
  suggestedUrl?: string;
  relatedTerms?: string[];
}

export interface Recommendation {
  id: string;
  type: "technical" | "content" | "architecture" | "internal-link";
  what: string;
  where: string;
  why: string;
  how: string;
  priority: "low" | "medium" | "high";
  effort: "low" | "medium" | "high";
  confidence: number;
  evidence: string[];
}

export interface WebsiteScores {
  seoHealth: number;
  technicalSEO: number;
  onPageSEO: number;
  internalLinking: number;
  contentCoverage: number;
  topicAuthority: number;
  architecture: number;
}

export interface MindMapNode {
  id: string;
  type: NodeType;
  label: string;
  status?: NodeStatus;
  data: PageAnalysis | FileAnalysis | FolderAnalysis | Topic | SEOIssue | ClusterPage;
  position?: { x: number; y: number };
}

export interface MindMapEdge {
  id: string;
  source: string;
  target: string;
  type: "existing" | "recommended" | "broken" | "problem" | "missing";
  label?: string;
  animated?: boolean;
}

export interface WebsiteAnalysis {
  project: ProjectInfo;
  pages: PageAnalysis[];
  files: FileAnalysis[];
  folders: FolderAnalysis[];
  routes: RouteInfo[];
  internalLinks: InternalLink[];
  dependencies: Dependency[];
  seoIssues: SEOIssue[];
  architectureIssues: ArchitectureIssue[];
  topics: Topic[];
  clusters: TopicCluster[];
  contentGaps: ContentGap[];
  keywordOpportunities: KeywordOpportunity[];
  recommendations: Recommendation[];
  scores: WebsiteScores;
}

export interface AnalysisJob {
  id: string;
  projectId: string;
  status: "queued" | "analyzing" | "completed" | "failed";
  progress: number;
  currentStep: string;
  createdAt: Date;
  completedAt?: Date;
}
