import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile, readdir, stat } from "fs/promises";
import { existsSync, readFileSync, readdirSync } from "fs";
import path from "path";
import AdmZip from "adm-zip";

export const runtime = "nodejs";
export const maxDuration = 120; // 2 minutes for large projects

interface UploadResult {
  success: boolean;
  projectId: string;
  fileCount: number;
  framework?: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.name.endsWith(".zip")) {
      return NextResponse.json(
        { error: "Only ZIP files are supported" },
        { status: 400 }
      );
    }

    // Validate file size (max 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 50MB limit" },
        { status: 400 }
      );
    }

    // Generate project ID
    const projectId = `project-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    
    // Create upload directory
    const uploadDir = path.join(process.cwd(), "temp-uploads", projectId);
    await mkdir(uploadDir, { recursive: true });

    // Save uploaded file
    const filePath = path.join(uploadDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    // Extract ZIP file (with zip-slip + zip-bomb protection)
    const zip = new AdmZip(buffer);
    const extractPath = path.join(uploadDir, "extracted");
    await mkdir(extractPath, { recursive: true });

    try {
      const entries = zip.getEntries();
      const MAX_ENTRIES = 10000;
      const MAX_UNCOMPRESSED = 500 * 1024 * 1024; // 500MB

      if (entries.length > MAX_ENTRIES) {
        throw new Error(`ZIP contains too many files (${entries.length} > ${MAX_ENTRIES} limit)`);
      }

      let totalUncompressed = 0;
      for (const entry of entries) {
        const entryName = entry.entryName.replace(/\\/g, "/");
        totalUncompressed += entry.header.size;

        // Zip-slip: reject absolute paths or path traversal
        if (entryName.startsWith("/") || /^[a-zA-Z]:/.test(entryName) || entryName.split("/").includes("..")) {
          throw new Error(`ZIP contains an unsafe file path: ${entryName}`);
        }
      }

      if (totalUncompressed > MAX_UNCOMPRESSED) {
        throw new Error(
          `ZIP expands to ${(totalUncompressed / 1024 / 1024).toFixed(0)}MB which exceeds the ${MAX_UNCOMPRESSED / 1024 / 1024}MB limit`
        );
      }

      zip.extractAllTo(extractPath, true);
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to extract ZIP file", details: error instanceof Error ? error.message : "Unknown error" },
        { status: 400 }
      );
    }

    // Analyze extracted files
    const analysis = await analyzeProject(extractPath);

    // Clean up uploaded ZIP (keep extracted files for further analysis)
    // await unlink(filePath);

    return NextResponse.json({
      success: true,
      projectId,
      extractedPath: extractPath,
      ...analysis,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to process upload", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

async function analyzeProject(projectPath: string): Promise<{
  fileCount: number;
  framework?: string;
  routes: string[];
  components: string[];
  files: any[];
  folders: any[];
}> {
  const files: any[] = [];
  const folders: any[] = [];
  let routes: string[] = [];
  let components: string[] = [];
  let fileCount = 0;
  let framework: string | undefined;

  // Detect framework
  framework = detectFramework(projectPath);

  // Scan directory
  await scanDirectory(projectPath, "", files, folders, framework);

  // Extract routes based on framework
  if (framework) {
    routes = extractRoutes(projectPath, framework, files);
  }

  // Extract components
  const tempComponents = files
    .filter(f => 
      f.path.match(/\.(tsx?|jsx?|vue)$/) && 
      !f.path.includes(".test.") &&
      !f.path.includes(".spec.")
    )
    .map(f => f.path);
  components = tempComponents;

  fileCount = files.length;

  return {
    fileCount,
    framework,
    routes,
    components,
    files,
    folders,
  };
}

function detectFramework(projectPath: string): string | undefined {
  const packageJsonPath = path.join(projectPath, "package.json");
  
  if (existsSync(/*turbopackIgnore: true*/ packageJsonPath)) {
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      if (dependencies.next) return "Next.js";
      if (dependencies.react && !dependencies.next) return "React";
      if (dependencies.vue) return "Vue";
      if (dependencies.nuxt) return "Nuxt";
      if (dependencies.astro) return "Astro";
      if (dependencies["@sveltejs/kit"]) return "Svelte";
      if (dependencies["@angular/core"]) return "Angular";
    } catch {
      // Invalid package.json, continue with directory detection
    }
  }

  // Directory-based detection
  if (existsSync(/*turbopackIgnore: true*/ path.join(projectPath, "app")) || existsSync(/*turbopackIgnore: true*/ path.join(projectPath, "pages"))) {
    return "Next.js";
  }
  if (existsSync(/*turbopackIgnore: true*/ path.join(projectPath, "src"))) {
    return "React/Vue";
  }

  return undefined;
}

async function scanDirectory(
  dirPath: string,
  relativePath: string,
  files: any[],
  folders: any[],
  framework?: string
): Promise<void> {
  const entries = await readdir(dirPath);

  for (const entryName of entries) {
    const fullPath = path.join(dirPath, entryName);
    const entryRelativePath = path.join(relativePath, entryName);
    const stats = await stat(fullPath);

    // Skip hidden files and common directories
    if (entryName.startsWith(".") || 
        entryName === "node_modules" ||
        entryName === ".next" ||
        entryName === "dist" ||
        entryName === "build" ||
        entryName === ".git") {
      continue;
    }

    if (stats.isDirectory()) {
      folders.push({
        path: entryRelativePath,
        fileCount: 0, // Will be calculated
      });

      await scanDirectory(fullPath, entryRelativePath, files, folders, framework);
    } else {
      const fileContent = await readFile(fullPath, "utf-8").catch(() => "");

      files.push({
        path: entryRelativePath,
        size: stats.size,
        type: getFileType(entryName),
        content: fileContent.substring(0, 10000), // Limit content size
      });
    }
  }
}

function getFileType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const typeMap: Record<string, string> = {
    ".js": "javascript",
    ".jsx": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".vue": "vue",
    ".css": "css",
    ".scss": "scss",
    ".less": "less",
    ".html": "html",
    ".json": "json",
    ".md": "markdown",
    ".svg": "svg",
    ".png": "image",
    ".jpg": "image",
    ".jpeg": "image",
  };
  return typeMap[ext] || "unknown";
}

function extractRoutes(projectPath: string, framework: string, files: any[]): string[] {
  const routes: string[] = [];

  if (framework === "Next.js") {
    // App Router (root or src/)
    for (const appDir of [path.join(projectPath, "app"), path.join(projectPath, "src", "app")]) {
      if (existsSync(/*turbopackIgnore: true*/ appDir)) {
        extractNextAppRoutes(appDir, "", routes);
      }
    }

    // Pages Router (root or src/)
    for (const pagesDir of [path.join(projectPath, "pages"), path.join(projectPath, "src", "pages")]) {
      if (existsSync(/*turbopackIgnore: true*/ pagesDir)) {
        extractNextPagesRoutes(pagesDir, "", routes);
      }
    }
  }

  // Vue/Nuxt/React fallback: treat top-level view/page directories as routes
  if (routes.length === 0) {
    const viewDirs = ["src/views", "src/pages", "views", "pages"];
    for (const dir of viewDirs) {
      const fullDir = path.join(/*turbopackIgnore: true*/ projectPath, dir);
      if (existsSync(/*turbopackIgnore: true*/ fullDir)) {
        extractGenericRoutes(fullDir, dir.replace(/^src\//, ""), routes);
      }
    }
  }

  return Array.from(new Set(routes));
}

function extractGenericRoutes(dirPath: string, basePath: string, routes: string[]): void {
  const entries = readdirSync(/*turbopackIgnore: true*/ dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const newBasePath = basePath ? `/${basePath}/${entry.name}` : `/${entry.name}`;
      extractGenericRoutes(fullPath, newBasePath, routes);
    } else if (entry.name.match(/\.(tsx?|jsx?|vue)$/) && !entry.name.startsWith("_")) {
      const routeName = entry.name.replace(/\.(tsx?|jsx?|vue)$/, "");
      if (routeName === "index") {
        routes.push(basePath || "/");
      } else {
        const routePath = basePath ? `/${basePath}/${routeName}` : `/${routeName}`;
        routes.push(routePath);
      }
    }
  }
}

function extractNextAppRoutes(dirPath: string, basePath: string, routes: string[]): void {
  const entries = readdirSync(/*turbopackIgnore: true*/ dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Handle route groups (parentheses)
      const routeName = entry.name.replace(/^\(|\)$/g, "");
      const newBasePath = basePath ? `/${basePath}/${routeName}` : `/${routeName}`;
      extractNextAppRoutes(fullPath, newBasePath, routes);
    } else if (entry.name === "page.tsx" || entry.name === "page.js") {
      routes.push(basePath || "/");
    } else if (entry.name.match(/\[.*\]\.(tsx?|js)$/)) {
      // Dynamic routes
      const dynamicName = entry.name.replace(/\[(.*?)\].*/, ":$1");
      const routePath = basePath ? `${basePath}/${dynamicName}` : `/${dynamicName}`;
      routes.push(routePath);
    }
  }
}

function extractNextPagesRoutes(dirPath: string, basePath: string, routes: string[]): void {
  const entries = readdirSync(/*turbopackIgnore: true*/ dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const newBasePath = basePath ? `/${basePath}/${entry.name}` : `/${entry.name}`;
      extractNextPagesRoutes(fullPath, newBasePath, routes);
    } else if (entry.name === "index.tsx" || entry.name === "index.js") {
      routes.push(basePath || "/");
    } else if (entry.name.match(/^[^_].*\.(tsx?|js)$/)) {
      const routeName = entry.name.replace(/\.(tsx?|js)$/, "");
      const routePath = basePath ? `${basePath}/${routeName}` : `/${routeName}`;
      routes.push(routePath);
    }
  }
}
