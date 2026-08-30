export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface MetricComparison {
  label: string;
  before: string | number;
  after: string | number;
  improvement: string;
  unit?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  timeline: string;
  summary: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeDescription: string;
  afterDescription: string;
  metrics: MetricComparison[];
  lighthouse: {
    before: { performance: number; accessibility: number; bestPractices: number; seo: number; lcp: string; fid: string; cls: string };
    after: { performance: number; accessibility: number; bestPractices: number; seo: number; lcp: string; fid: string; cls: string };
  };
  technicalHighlights: string[];
  codeComparison: {
    beforeSnippet: string;
    beforeLanguage: string;
    afterSnippet: string;
    afterLanguage: string;
  };
  toolsUsed: string[];
  keywordsTargeted: string[];
}

export interface SeoMetricTrend {
  date: string;
  organicTraffic: number;
  serpPosition: number;
  domainRating: number;
  backlinks: number;
}

export interface BacklinkItem {
  domain: string;
  authority: number;
  type: "Dofollow" | "Nofollow";
  status: "Active" | "New" | "Monitored";
  targetPage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  h1?: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: string;
  faqs?: { question: string; answer: string }[];
}

export interface AuditVital {
  name: string;
  current: string;
  target: string;
  status: "poor" | "warning" | "good";
  impact: string;
}

export interface AuditCategoryScore {
  score: number;
  label: string;
}

export interface AuditBottleneck {
  title: string;
  type: "Critical" | "High" | "Medium" | "Low";
  fix: string;
}

export interface AuditProjection {
  trafficIncrease: string;
  loadSpeedDrop: string;
  conversionSurge: string;
}

export interface QuickAuditResult {
  domain: string;
  overallScore: number;
  projectedScore: number;
  timestamp: string;
  vitals: AuditVital[];
  categories: Record<"performance" | "accessibility" | "bestPractices" | "seo", AuditCategoryScore>;
  bottlenecks: AuditBottleneck[];
  projections: AuditProjection;
}
