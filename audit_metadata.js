const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, "src"));

const longBlogTitles = [];
const longBlogExcerpts = [];
const longH1s = [];
const duplicateH2s = [];

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const relFile = path.relative(__dirname, file);

  // Check blog post objects
  const titleMatches = [...content.matchAll(/title:\s*["`]([^"`]+)["`]/g)];
  titleMatches.forEach(m => {
    const title = m[1].trim();
    if (file.includes("data\\posts") || file.includes("data/posts") || file.includes("blogPosts.ts")) {
      if (title.length > 60) {
        longBlogTitles.push({ file: relFile, len: title.length, title });
      }
    }
  });

  const excerptMatches = [...content.matchAll(/excerpt:\s*["`]([^"`]+)["`]/g)];
  excerptMatches.forEach(m => {
    const exc = m[1].trim();
    if (exc.length > 155) {
      longBlogExcerpts.push({ file: relFile, len: exc.length, exc });
    }
  });

  // check h1
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  h1Matches.forEach(m => {
    const clean = m[1].replace(/<[^>]+>/g, "").replace(/\{[^}]+\}/g, "").replace(/\s+/g, " ").trim();
    if (clean.length > 70) {
      longH1s.push({ file: relFile, len: clean.length, h1: clean });
    }
  });

  // check duplicate H2s in the same page file
  if (file.endsWith("page.tsx") || file.endsWith("View.tsx") || file.includes("data\\posts") || file.includes("data/posts")) {
    const h2Matches = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m =>
      m[1].replace(/<[^>]+>/g, "").replace(/\{[^}]+\}/g, "").replace(/\s+/g, " ").trim()
    );
    const seen = new Set();
    const dups = [];
    h2Matches.forEach(h2 => {
      if (h2.length > 0) {
        if (seen.has(h2.toLowerCase())) {
          dups.push(h2);
        } else {
          seen.add(h2.toLowerCase());
        }
      }
    });
    if (dups.length > 0) {
      duplicateH2s.push({ file: relFile, dups });
    }
  }
});

console.log("\n=== LONG BLOG TITLES (> 60 chars) ===");
longBlogTitles.forEach(t => console.log(`[${t.len}] ${t.file} -> ${t.title}`));

console.log("\n=== LONG BLOG EXCERPTS (> 155 chars) ===");
longBlogExcerpts.forEach(e => console.log(`[${e.len}] ${e.file} -> ${e.exc}`));

console.log("\n=== LONG H1s (> 70 chars) ===");
longH1s.forEach(h => console.log(`[${h.len}] ${h.file} -> ${h.h1}`));

console.log("\n=== DUPLICATE H2s IN A FILE ===");
duplicateH2s.forEach(d => console.log(`${d.file} -> ${JSON.stringify(d.dups)}`));
