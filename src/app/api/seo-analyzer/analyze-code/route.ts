import { NextRequest, NextResponse } from "next/server";
import { readFile, readdir, stat } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export const runtime = "nodejs";
export const maxDuration = 60;

const SOURCE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".vue", ".svelte"];
const INDEX_CANDIDATES = ["", ".ts", ".tsx", ".js", ".jsx", "/index.ts", "/index.tsx", "/index.js", "/index.jsx"];

interface CodeAnalysisResult {
  success: boolean;
  projectId: string;
  dependencies: Dependency[];
  components: ComponentAnalysis[];
  architectureIssues: ArchitectureIssue[];
  circularDependencies: CircularDependency[];
}

interface Dependency {
  source: string;
  target: string;
  type: "import" | "require" | "dynamic";
}

interface ComponentAnalysis {
  path: string;
  name: string;
  type: "functional" | "class" | "unknown";
  imports: number;
  exported: boolean;
  size: number;
  complexity: "low" | "medium" | "high";
}

interface ArchitectureIssue {
  id: string;
  type: "page-specific-component" | "deep-import" | "large-component" | "duplicate-code";
  severity: "low" | "medium" | "high";
  file: string;
  description: string;
  recommendation: string;
}

interface CircularDependency {
  files: string[];
  path: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { projectId, projectPath } = await request.json();
    
    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    // Only allow analysis of projects previously uploaded through /api/seo-analyzer/upload.
    // The client may pass a projectPath but it MUST resolve inside the temp-uploads
    // sandbox for this project — arbitrary filesystem paths are rejected.
    const uploadsRoot = path.resolve(process.cwd(), "temp-uploads");
    let analysisPath = path.resolve(process.cwd(), "temp-uploads", String(projectId), "extracted");

    if (typeof projectPath === "string" && projectPath.trim()) {
      const candidate = path.resolve(String(projectPath));
      if (!candidate.startsWith(uploadsRoot + path.sep)) {
        return NextResponse.json(
          { error: "Project path must be within the uploads directory" },
          { status: 400 }
        );
      }
      analysisPath = candidate;
    }

    if (!existsSync(/*turbopackIgnore: true*/ analysisPath)) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    // Perform code analysis
    const result = await analyzeCodeStructure(analysisPath);

    return NextResponse.json({
      success: true,
      projectId,
      ...result,
    });

  } catch (error) {
    console.error("Code analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze code", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

async function analyzeCodeStructure(projectPath: string): Promise<{
  dependencies: Dependency[];
  components: ComponentAnalysis[];
  architectureIssues: ArchitectureIssue[];
  circularDependencies: CircularDependency[];
}> {
  const dependencies: Dependency[] = [];
  const components: ComponentAnalysis[] = [];
  const architectureIssues: ArchitectureIssue[] = [];
  const circularDependencies: CircularDependency[] = [];

  // Find all source files
  const sourceFiles = await findSourceFiles(projectPath);

  // Analyze each file
  for (const file of sourceFiles) {
    const filePath = path.join(projectPath, file);
    const content = await readFile(filePath, "utf-8");
    const relativePath = file;

    // Extract imports
    const fileImports = extractImports(content, relativePath, projectPath);
    dependencies.push(...fileImports);

    // Analyze component (if applicable)
    if (isComponentFile(file)) {
      const component = analyzeComponent(content, relativePath);
      component.size = (await stat(filePath)).size;
      components.push(component);

      // Check for architecture issues
      const issues = detectArchitectureIssues(component, content, relativePath, sourceFiles);
      architectureIssues.push(...issues);
    }
  }

  // Detect circular dependencies
  const circularDeps = detectCircularDependencies(dependencies, projectPath);
  circularDependencies.push(...circularDeps);

  return {
    dependencies,
    components,
    architectureIssues,
    circularDependencies,
  };
}

async function findSourceFiles(projectPath: string): Promise<string[]> {
  const sourceFiles: string[] = [];

  async function scanDirectory(dirPath: string, relativePath: string = "") {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const entryRelativePath = path.join(relativePath, entry.name);

      // Skip common directories
      if (entry.name === "node_modules" || 
          entry.name === ".next" ||
          entry.name === "dist" ||
          entry.name === "build" ||
          entry.name.startsWith(".")) {
        continue;
      }

      if (entry.isDirectory()) {
        await scanDirectory(fullPath, entryRelativePath);
      } else {
        const ext = path.extname(entry.name);
        if (SOURCE_EXTENSIONS.includes(ext)) {
          sourceFiles.push(entryRelativePath);
        }
      }
    }
  }

  await scanDirectory(projectPath);
  return sourceFiles;
}

/** Resolves a relative import specifier to the actual file path (or null). */
function resolveImport(
  importerFile: string,
  specifier: string,
  projectPath: string
): string | null {
  const normalizedSpec = specifier.split("?")[0].split("#")[0];
  if (!normalizedSpec.startsWith(".")) return null; // package/alias import - not a local edge

  const importerDir = path.dirname(path.join(projectPath, importerFile));
  const resolved = path.resolve(importerDir, normalizedSpec);

  for (const candidate of INDEX_CANDIDATES) {
    const fullPath = resolved + candidate;
    if (existsSync(/*turbopackIgnore: true*/ fullPath)) {
      return path.relative(projectPath, fullPath).replace(/\\/g, "/");
    }
  }
  return null;
}

function extractImports(content: string, filePath: string, projectPath: string): Dependency[] {
  const imports: Dependency[] = [];
  const seen = new Set<string>();

  const addImport = (specifier: string, type: Dependency["type"]) => {
    if (seen.has(`${type}:${specifier}`)) return;
    seen.add(`${type}:${specifier}`);
    imports.push({
      source: filePath,
      target: specifier,
      type,
    });
  };

  // ES6 imports
  const es6ImportRegex = /^import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+)?['"]([^'"]+)['"]/gm;
  let match;
  while ((match = es6ImportRegex.exec(content)) !== null) {
    addImport(match[1], "import");
  }

  // CommonJS requires
  const requireRegex = /require\(['"]([^'"]+)['"]\)/g;
  while ((match = requireRegex.exec(content)) !== null) {
    addImport(match[1], "require");
  }

  // Dynamic imports
  const dynamicImportRegex = /import\(['"]([^'"]+)['"]\)/g;
  while ((match = dynamicImportRegex.exec(content)) !== null) {
    addImport(match[1], "dynamic");
  }

  return imports;
}

function isComponentFile(filePath: string): boolean {
  return /\.(tsx?|jsx?|vue|svelte)$/.test(filePath);
}

function analyzeComponent(content: string, filePath: string): ComponentAnalysis {
  const name = extractComponentName(content, filePath);
  const type = detectComponentType(content);
  const imports = countImports(content);
  const exported = isExported(content);
  const complexity = calculateComplexity(content);

  return {
    path: filePath,
    name,
    type,
    imports,
    exported,
    size: 0, // Will be set by caller
    complexity,
  };
}

function extractComponentName(content: string, filePath: string): string {
  // Try to extract component name from file
  const fileName = path.basename(filePath, path.extname(filePath));
  
  // Look for function component declaration
  const functionMatch = content.match(/(?:export\s+)?(?:const|function)\s+(\w+)\s*=\s*(?:\([^)]*\)\s*=>|function)/);
  if (functionMatch) return functionMatch[1];
  
  // Look for class component
  const classMatch = content.match(/class\s+(\w+)\s+extends/);
  if (classMatch) return classMatch[1];
  
  // Default to filename
  return fileName;
}

function detectComponentType(content: string): "functional" | "class" | "unknown" {
  if (content.includes("class ") && content.includes("extends")) {
    return "class";
  }
  if (content.includes("=>") || content.match(/function\s+\w+\s*\(/)) {
    return "functional";
  }
  return "unknown";
}

function countImports(content: string): number {
  const importMatches = content.match(/^import\s+/gm);
  const requireMatches = content.match(/require\(/g);
  return (importMatches?.length || 0) + (requireMatches?.length || 0);
}

function isExported(content: string): boolean {
  return content.includes("export default") || content.includes("export const") || content.includes("export function");
}

function calculateComplexity(content: string): "low" | "medium" | "high" {
  const lines = content.split("\n").length;
  const functions = (content.match(/function\s+\w+/g) || []).length;
  const arrows = (content.match(/=>/g) || []).length;
  const conditionals = (content.match(/if\s*\(/g) || []).length;
  const loops = (content.match(/for\s*\(|while\s*\(/g) || []).length;

  const complexityScore = lines * 0.1 + functions * 2 + arrows * 1 + conditionals * 1.5 + loops * 2;

  if (complexityScore < 20) return "low";
  if (complexityScore < 50) return "medium";
  return "high";
}

function detectArchitectureIssues(
  component: ComponentAnalysis,
  content: string,
  filePath: string,
  allFiles: string[]
): ArchitectureIssue[] {
  const issues: ArchitectureIssue[] = [];

  // Check for page-specific components in shared directories
  if (isInSharedDirectory(filePath) && isPageSpecific(component, content, allFiles)) {
    issues.push({
      id: `arch-issue-${Date.now()}-${Math.random()}`,
      type: "page-specific-component",
      severity: "medium",
      file: filePath,
      description: `Component "${component.name}" appears to be page-specific but is located in a shared directory`,
      recommendation: `Consider moving to a feature-specific directory (e.g., features/[feature]/components/)`,
    });
  }

  // Check for large components
  if (component.complexity === "high") {
    issues.push({
      id: `arch-issue-${Date.now()}-${Math.random()}`,
      type: "large-component",
      severity: "low",
      file: filePath,
      description: `Component "${component.name}" has high complexity (${component.complexity})`,
      recommendation: `Consider breaking down into smaller, more focused components`,
    });
  }

  // Check for deep imports
  const deepImports = detectDeepImports(content, filePath);
  if (deepImports.length > 0) {
    issues.push({
      id: `arch-issue-${Date.now()}-${Math.random()}`,
      type: "deep-import",
      severity: "low",
      file: filePath,
      description: `Component contains deep imports that may break with refactoring`,
      recommendation: `Use barrel exports or restructure to reduce import depth`,
    });
  }

  return issues;
}

function isInSharedDirectory(filePath: string): boolean {
  const sharedPatterns = [
    /components\//i,
    /common\//i,
    /shared\//i,
    /ui\//i,
  ];
  return sharedPatterns.some(pattern => pattern.test(filePath));
}

function isPageSpecific(component: ComponentAnalysis, content: string, allFiles: string[]): boolean {
  // Heuristic: if component name contains page-specific terms
  const pageSpecificTerms = ["page", "home", "about", "contact", "pricing", "dashboard"];
  const lowerName = component.name.toLowerCase();
  
  if (pageSpecificTerms.some(term => lowerName.includes(term))) {
    return true;
  }

  // Check if component is only imported by one file (would need import graph analysis)
  // For now, use a simpler heuristic
  return false;
}

function detectDeepImports(content: string, filePath: string): string[] {
  const deepImports: string[] = [];
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    // Count path segments
    const segments = importPath.split(/[\/\\]/).filter(s => s && s !== "." && s !== "..");
    if (segments.length > 3) {
      deepImports.push(importPath);
    }
  }

  return deepImports;
}

function detectCircularDependencies(
  dependencies: Dependency[],
  projectPath: string
): CircularDependency[] {
  const circularDeps: CircularDependency[] = [];
  const graph = new Map<string, string[]>();
  const cycleKeySet = new Set<string>();

  // Resolve relative imports to actual files so cycles are detected accurately
  for (const dep of dependencies) {
    const resolvedTarget = resolveImport(dep.source, dep.target, projectPath);
    if (!resolvedTarget) continue; // package import - cannot form a cycle

    const sourceFile = dep.source.replace(/\\/g, "/");
    if (!graph.has(sourceFile)) {
      graph.set(sourceFile, []);
    }
    graph.get(sourceFile)!.push(resolvedTarget);
  }

  // Detect cycles using DFS
  const visited = new Set<string>();
  const recursionStack = new Set<string>();

  function dfs(node: string, path: string[]): void {
    visited.add(node);
    recursionStack.add(node);
    path.push(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, [...path]);
      } else if (recursionStack.has(neighbor)) {
        // Found a cycle
        const cycleStart = path.indexOf(neighbor);
        const cyclePath = [...path.slice(cycleStart), neighbor];
        const cycleKey = [...cyclePath].sort().join("->");
        if (!cycleKeySet.has(cycleKey)) {
          cycleKeySet.add(cycleKey);
          circularDeps.push({
            files: cyclePath,
            path: cyclePath,
          });
        }
      }
    }

    recursionStack.delete(node);
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node, []);
    }
  }

  return circularDeps;
}
