import { fetchWithLimit, assertPublicUrl } from "./security";

export interface Issue {
  severity: "critical" | "warning" | "passed";
  title: string;
  detail: string;
  fix: string;
}

export interface OnPageResult {
  success: boolean;
  requestedUrl: string;
  finalUrl: string;
  fetchedAt: string;
  response: { status: number; contentType: string; sizeBytes: number; durationMs: number };
  analysis: {
    score: number;
    grade: string;
    counts: Record<string, number>;
    title: string;
    metaDescription: string;
    metaKeywords: string;
    canonical: string;
    viewport: string;
    robotsMeta: string;
    lang: string;
    charsetDeclared: boolean;
    og: { ogTitle: string; ogDesc: string; ogImage: string };
    twitterCard: string;
    hreflang: string[];
    h1s: string[];
    schemaTypes: string[];
  };
  issues: Issue[];
}

export interface AuditFinding {
  type: "critical" | "warning" | "passed";
  title: string;
  description: string;
  fix: string;
}

const escapeHtml = (html: string): string =>
  html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const stripTags = (html: string): string =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();

const findAll = (html: string, pattern: RegExp, limit = 20): string[] => {
  const out: string[] = [];
  const re = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null && out.length < limit) {
    out.push(m[1] !== undefined ? m[1] : m[0]);
  }
  return out;
};

const metaContent = (html: string, name: string): string => {
  const m =
    html.match(
      new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']`, "i")
    ) ||
    html.match(
      new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`, "i")
    );
  return m ? escapeHtml(m[1].trim()) : "";
};

const titleOf = (html: string): string => {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? escapeHtml(m[1].trim()) : "";
};

/** Fetches + parses a public URL and produces a full on-page SEO analysis. */
export async function analyzePage(rawUrl: string): Promise<OnPageResult> {
  const target = assertPublicUrl(rawUrl);

  const startedAt = Date.now();
  const res = await fetchWithLimit(target.toString(), {
    timeoutMs: 15000,
    maxBytes: 3 * 1024 * 1024,
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      accept: "text/html,application/xhtml+xml",
      "accept-language": "en-US,en;q=0.9",
    },
  });
  const durationMs = Date.now() - startedAt;

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
    throw new Error(`URL is not an HTML page (content-type: ${contentType})`);
  }

  const html = res.text;
  const finalUrl = res.url || target.toString();
  const finalHost = new URL(finalUrl).hostname.replace(/^www\./, "");

  // -------- PARSING --------
  const title = titleOf(html);
  const metaDescription = metaContent(html, "description");
  const metaKeywords = metaContent(html, "keywords");
  const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || "";
  const canonicalHref = canonicalTag.match(/href=["']([^"']*)["']/i)?.[1] || "";
  const viewport = metaContent(html, "viewport") ? "present" : "missing";
  const robotsMeta = metaContent(html, "robots") || "not set (defaults to index,follow)";
  const ogTitle = metaContent(html, "og:title");
  const ogDesc = metaContent(html, "og:description");
  const ogImage = metaContent(html, "og:image");
  const twitterCard = metaContent(html, "twitter:card");
  const hreflangTags = findAll(
    html,
    /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*>/i,
    10
  );
  const h1s = findAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi, 10).map(stripTags).filter(Boolean);
  const h2Count = (html.match(/<h2[\s>]/gi) || []).length;
  const h3Count = (html.match(/<h3[\s>]/gi) || []).length;

  const imgTags = findAll(html, /<img[\s\S]*?>/gi, 200);
  const imagesTotal = imgTags.length;
  const imagesNoAlt = imgTags.filter((img) => !/<img[^>]*\balt=/.test(img)).length;
  const imagesNoSize = imgTags.filter(
    (img) =>
      !/<img[^>]*\b(width|height)=/.test(img) && !/<img[^>]*\b(?:srcset=|loading=["']?lazy)/i.test(img)
  ).length;

  const schemaScripts = findAll(
    html,
    /<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi,
    20
  );
  const schemaTypes = schemaScripts
    .map((s) => {
      const outer = s.replace(/<\/?script[^>]*>/gi, "");
      const tMatch = outer.match(/["']@type["']\s*:\s*["']([^"']+)["']/);
      return tMatch ? tMatch[1] : "Unknown";
    })
    .filter(Boolean);

  const wordCount = stripTags(html).split(/\s+/).filter(Boolean).length;
  const htmlBytes = Buffer.byteLength(html, "utf8");
  const textBytes = Buffer.byteLength(stripTags(html), "utf8");
  const textRatio = htmlBytes > 0 ? Math.round((textBytes / htmlBytes) * 100) : 0;

  const langAttr = html.match(/<html[^>]*\blang=["']([^"']+)["']/i)?.[1] || "";
  const charsetDeclared = /<meta[^>]*charset=/i.test(html);
  const metaRefresh = /<meta[^>]*http-equiv=["']refresh["']/i.test(html);

  const linkTags = findAll(html, /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi, 300);
  const internalLinks = linkTags.filter(
    (href) => href.startsWith("/") || href.toLowerCase().includes(finalHost.toLowerCase())
  ).length;
  const externalLinks = linkTags.length - internalLinks;
  const emptyAnchors = (html.match(/<a\b[^>]*href=["']#["'][^>]*>/gi) || []).length;

  const frames = (html.match(/<iframe[\s>]/gi) || []).length;
  const inlineStyles = (html.match(/style=["']/gi) || []).length;
  const externalCss = (html.match(/<link[^>]*rel=["']stylesheet["']/gi) || []).length;
  const externalJs = (html.match(/<script[^>]*src=/gi) || []).length;
  const inlineScripts = (html.match(/<script(?![^>]*src)[^>]*>/gi) || []).length;

  // -------- ISSUES --------
  const issues: Issue[] = [];

  if (!title)
    issues.push({ severity: "critical", title: "Missing <title> tag", detail: "No <title> found in the document head.", fix: "Add a unique, keyword-rich title under 60 characters — it is the most important on-page ranking element." });
  else if (title.length > 60)
    issues.push({ severity: "warning", title: "Title tag too long", detail: `Title is ${title.length} characters (limit ~60).`, fix: "Shorten the title so it is not truncated in Google SERPs. Keep primary keyword at the start." });

  if (!metaDescription)
    issues.push({ severity: "warning", title: "Missing meta description", detail: "No meta description found.", fix: "Write a 140–160 character description with the primary keyword and a clear value proposition." });
  else if (metaDescription.length < 70)
    issues.push({ severity: "warning", title: "Meta description too short", detail: `Description is ${metaDescription.length} characters (recommended 140–160).`, fix: "Expand the description to 140–160 characters to maximise SERP real estate." });

  if (!canonicalHref)
    issues.push({ severity: "warning", title: "Canonical tag missing", detail: "No rel=canonical found.", fix: "Add <link rel=\"canonical\" href=\"https://host/path/\" /> pointing to the definitive URL of this page." });
  else if (canonicalHref.toLowerCase() !== finalUrl.toLowerCase() && canonicalHref.toLowerCase() !== target.toString().toLowerCase())
    issues.push({ severity: "warning", title: "Canonical points to a different URL", detail: `Canonical is ${canonicalHref}.`, fix: "Point the canonical to the exact indexed version of this URL to avoid duplicate content signals." });

  if (viewport === "missing")
    issues.push({ severity: "critical", title: "Viewport meta missing", detail: "No viewport settings found — mobile usability will fail.", fix: "Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />." });

  if (!charsetDeclared)
    issues.push({ severity: "critical", title: "Charset not declared", detail: "Document encoding is not specified.", fix: "Add <meta charset=\"utf-8\" /> as the first element inside <head>." });

  if (!langAttr)
    issues.push({ severity: "warning", title: "Missing lang attribute", detail: "<html> has no lang attribute.", fix: 'Set <html lang="en"> to enable correct translation & screen reader behavior.' });

  if (h1s.length === 0)
    issues.push({ severity: "critical", title: "Missing H1 heading", detail: "The page has no <h1>.", fix: "Use exactly one H1 that matches the page topic and primary keyword." });
  else if (h1s.length > 1)
    issues.push({ severity: "warning", title: "Multiple H1 headings", detail: `${h1s.length} H1 headings found.`, fix: "Keep exactly one H1; demote the remaining headings to H2/H3." });

  if (imagesTotal === 0)
    issues.push({ severity: "warning", title: "No images found", detail: "The page contains no <img> elements.", fix: "Add relevant images with descriptive alt text — visual content improves engagement and image search." });
  else if (imagesNoAlt > 0)
    issues.push({ severity: "warning", title: `${imagesNoAlt} of ${imagesTotal} images missing alt text`, detail: "Images without alt attributes hurt accessibility and image SEO.", fix: "Write descriptive alt text for every meaningful image; use empty alt=\"\" for decorative ones." });

  if (schemaTypes.length === 0)
    issues.push({ severity: "warning", title: "No JSON-LD structured data", detail: "No application/ld+json scripts detected.", fix: "Add Organization, WebSite and (where relevant) FAQPage / BreadcrumbList schemas." });

  if (!ogTitle || !ogImage)
    issues.push({ severity: "warning", title: "Incomplete Open Graph tags", detail: "Social previews will render poorly.", fix: "Add og:title, og:description, og:image (1200x630) and og:url." });

  if (!twitterCard)
    issues.push({ severity: "warning", title: "Twitter card not set", detail: "No twitter:card meta found.", fix: "Add summary_large_image Twitter card tags." });

  if (wordCount < 300)
    issues.push({ severity: "warning", title: "Thin content", detail: `Only ~${wordCount} visible words.`, fix: "Expand the page to 600+ words with original, helpful sections (H2 blocks, lists, FAQs)." });

  if (metaRefresh)
    issues.push({ severity: "critical", title: "Meta refresh redirect detected", detail: "Meta refresh is bad practice for SEO.", fix: "Replace with a 301 server-side redirect." });

  if (frames > 0)
    issues.push({ severity: "warning", title: `${frames} iframe(s) found`, detail: "Frames can block indexing and hurt performance.", fix: "Replace iframes with native embeds or links where possible." });

  if (hreflangTags.length === 0)
    issues.push({ severity: "warning", title: "No hreflang tags", detail: "International targeting hints are missing.", fix: "Add hreflang alternates if the site serves multiple languages or regions." });

  if (/noindex/i.test(robotsMeta))
    issues.push({ severity: "critical", title: "Page is set to noindex", detail: `robots meta contains "noindex" (${robotsMeta}).`, fix: "Remove noindex from the robots meta tag so search engines can index this page." });
  else if (/nofollow/i.test(robotsMeta))
    issues.push({ severity: "warning", title: "Page is set to nofollow", detail: `robots meta contains "nofollow" (${robotsMeta}).`, fix: "Remove nofollow if you want crawled links on this page to pass authority." });

  if (h2Count === 0 && wordCount >= 300)
    issues.push({ severity: "warning", title: "No H2 subheadings", detail: "Content has no H2 sections to structure topics.", fix: "Break content into scannable H2 sections — this improves readability and keyword targeting." });

  if (internalLinks < 3)
    issues.push({ severity: "warning", title: "Very few internal links", detail: `Only ${internalLinks} internal link(s) detected.`, fix: "Add contextual internal links (3+) to related pages to spread authority and aid crawling." });

  if (emptyAnchors > 0)
    issues.push({ severity: "warning", title: `${emptyAnchors} empty (\"#\") links`, detail: "Links pointing to '#' waste crawl budget and provide no value.", fix: "Point links to real URLs or remove placeholder hrefs." });

  if (imagesTotal > 0 && imagesNoSize > 0)
    issues.push({ severity: "warning", title: `${imagesNoSize} images missing width/height`, detail: "Images without explicit dimensions risk causing layout shift (CLS).", fix: "Set width and height attributes, or use a lazy-loading/sizes strategy." });

  const totalScripts = externalJs + inlineScripts;
  if (totalScripts > 15)
    issues.push({ severity: "warning", title: `${totalScripts} script tags detected`, detail: `${externalJs} external + ${inlineScripts} inline scripts can delay rendering.`, fix: "Combine, minify and load scripts with async/defer; remove unused JS." });

  const criticalCount = issues.filter((i) => i.severity === "critical").length;
  const warningCount = issues.filter((i) => i.severity === "warning").length;
  const passCount = issues.filter((i) => i.severity === "passed").length;
  if (criticalCount === 0 && warningCount === 0) {
    issues.push({ severity: "passed", title: "On-page foundation looks solid", detail: "Core structural checks passed.", fix: "Keep auditing performance and content depth regularly." });
  }
  const score = Math.max(5, Math.min(99, 100 - criticalCount * 18 - warningCount * 6 + passCount * 2));
  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : "D";

  return {
    success: true,
    requestedUrl: target.toString(),
    finalUrl,
    fetchedAt: new Date().toISOString(),
    response: {
      status: res.status,
      contentType,
      sizeBytes: htmlBytes,
      durationMs,
    },
    analysis: {
      score,
      grade,
      counts: {
        titleChars: title.length,
        descriptionChars: metaDescription.length,
        words: wordCount,
        h1: h1s.length,
        h2: h2Count,
        h3: h3Count,
        images: imagesTotal,
        imagesNoAlt,
        internalLinks,
        externalLinks,
        emptyAnchors,
        schema: schemaTypes.length,
        externalCss,
        externalJs,
        inlineScripts,
        inlineStyles,
        textRatio,
        imagesNoSize,
        frames,
      },
      title,
      metaDescription,
      metaKeywords,
      canonical: canonicalHref,
      viewport,
      robotsMeta,
      lang: langAttr,
      charsetDeclared,
      og: { ogTitle, ogDesc, ogImage },
      twitterCard,
      hreflang: hreflangTags,
      h1s,
      schemaTypes,
    },
    issues,
  };
}

/** Derives a Lighthouse-style audit breakdown from real on-page data. */
export function buildAuditFromAnalysis(result: OnPageResult): {
  scores: { performance: number; accessibility: number; bestPractices: number; seo: number };
  metrics: { lcp: string; fid: string; cls: string; ttfb: string };
  findings: AuditFinding[];
  overallGrade: string;
} {
  const c = result.analysis.counts;
  const htmlKb = Math.max(1, result.response.sizeBytes / 1024);

  // Performance: lighter HTML, fewer scripts/CSS, fewer unoptimized images
  let performance = 100;
  performance -= Math.min(45, htmlKb * 0.12);
  performance -= Math.min(20, c.externalJs * 3);
  performance -= Math.min(15, c.externalCss * 2);
  performance -= Math.min(15, c.inlineScripts * 2);
  performance -= Math.min(15, c.imagesNoSize * 1.2);
  performance = Math.max(5, Math.min(99, Math.round(performance)));

  // Accessibility: alt text coverage, lang attr, viewport
  let accessibility = 100;
  if (c.images > 0) accessibility -= Math.round((c.imagesNoAlt / c.images) * 50);
  if (!result.analysis.lang) accessibility -= 15;
  if (result.analysis.viewport === "missing") accessibility -= 25;
  accessibility = Math.max(5, Math.min(99, accessibility));

  // Best practices: charset, meta refresh, frames, inline styles
  let bestPractices = 100;
  if (!result.analysis.charsetDeclared) bestPractices -= 25;
  if (c.frames > 0) bestPractices -= Math.min(20, c.frames * 5);
  bestPractices -= Math.min(20, c.inlineStyles * 0.5);
  bestPractices = Math.max(5, Math.min(99, bestPractices));

  const seo = result.analysis.score;

  // Estimated Core Web Vitals from real page characteristics
  const ttfbMs = Math.max(80, result.response.durationMs);
  const lcpS = (0.9 + htmlKb / 600 + c.externalJs * 0.12 + c.images * 0.08).toFixed(1);
  const fidMs = Math.round(40 + c.inlineScripts * 15 + c.externalJs * 10);
  const cls = Math.min(0.9, 0.05 + c.imagesNoSize * 0.02 + c.frames * 0.05).toFixed(2);

  const findings: AuditFinding[] = [
    {
      type: result.analysis.title ? "passed" : "critical",
      title: result.analysis.title ? "Meta Title Tag Present" : "Missing Meta Title Tag",
      description: result.analysis.title
        ? `Title "${result.analysis.title.slice(0, 60)}" (${c.titleChars} chars)`
        : "No <title> tag was found in the document head.",
      fix: result.analysis.title
        ? "Keep the title under 60 characters with the primary keyword at the start."
        : "Add a unique, keyword-rich title under 60 characters.",
    },
    {
      type: result.analysis.metaDescription ? "passed" : "warning",
      title: result.analysis.metaDescription ? "Meta Description Present" : "Missing Meta Description",
      description: result.analysis.metaDescription
        ? `Description found (${c.descriptionChars} chars).`
        : "No meta description was detected.",
      fix: "Write a 140–160 character description with a clear value proposition.",
    },
    {
      type: c.schema > 0 ? "passed" : "warning",
      title: c.schema > 0 ? `Structured Data Detected (${c.schema})` : "Missing Structured Data (JSON-LD Schema)",
      description: c.schema > 0
        ? `Found: ${result.analysis.schemaTypes.join(", ")}`
        : "Google search crawlers cannot identify entity types for rich snippets.",
      fix: "Inject JSON-LD schema (Organization, Article, FAQPage) for rich snippet eligibility.",
    },
    {
      type: performance >= 70 ? "passed" : "warning",
      title: performance >= 70 ? "Page Weight Looks Healthy" : `Page Weight ${htmlKb.toFixed(0)}KB (${c.externalJs} JS + ${c.externalCss} CSS files)`,
      description: `HTML document is ${htmlKb.toFixed(0)}KB with ${c.externalJs} external scripts, ${c.externalCss} stylesheets and ${c.inlineScripts} inline scripts.`,
      fix: "Minify, defer or remove unused scripts/styles; enable Brotli compression and code splitting.",
    },
    {
      type: c.imagesNoAlt === 0 && c.images > 0 ? "passed" : "warning",
      title: c.imagesNoAlt > 0 ? `${c.imagesNoAlt} of ${c.images} images missing alt text` : "Image Alt Text Present",
      description: c.imagesNoAlt > 0
        ? "Images without alt attributes hurt accessibility and image SEO."
        : "All detected images carry alt attributes.",
      fix: "Add descriptive alt text to every meaningful image; use empty alt for decorative ones.",
    },
    {
      type: result.analysis.canonical ? "passed" : "warning",
      title: result.analysis.canonical ? "Canonical Tag Present" : "Missing Canonical Tag",
      description: result.analysis.canonical
        ? `Canonical points to ${result.analysis.canonical}`
        : "Duplicate content signals may dilute rankings.",
      fix: "Set a self-referencing canonical on every page.",
    },
  ];

  const overallGrade =
    seo >= 90 ? "A+" : seo >= 80 ? "A" : seo >= 70 ? "B" : seo >= 55 ? "C" : "D";

  return {
    scores: { performance, accessibility, bestPractices, seo },
    metrics: { lcp: `${lcpS}s`, fid: `${fidMs}ms`, cls, ttfb: `${ttfbMs}ms` },
    findings,
    overallGrade,
  };
}
