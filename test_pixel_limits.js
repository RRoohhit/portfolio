const fs = require('fs');
const path = require('path');

// Google SERP Title pixel width estimation (Desktop Arial 20px)
function estimateTitlePixels(str) {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (/[ijl\.,':;!\s\|\-]/.test(c)) width += 5;
    else if (/[frtI]/.test(c)) width += 6.5;
    else if (/[abcdeghknopqrsuvxyzJS0-9]/.test(c)) width += 10;
    else if (/[mwABCDEFGHKNOPQRTUVXYZ]/.test(c)) width += 12;
    else if (/[MW—&]/.test(c)) width += 15;
    else width += 10;
  }
  return Math.round(width);
}

function estimateDescPixels(str) {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (/[ijl\.,':;!\s\|\-]/.test(c)) width += 4;
    else if (/[frtI]/.test(c)) width += 5;
    else if (/[abcdeghknopqrsuvxyzJS0-9]/.test(c)) width += 7.8;
    else if (/[mwABCDEFGHKNOPQRTUVXYZ]/.test(c)) width += 9.5;
    else if (/[MW—&]/.test(c)) width += 12;
    else width += 7.8;
  }
  return Math.round(width);
}

// 1. Check blog/[slug]
const blogFile = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// Match title in blog posts
const titleRegex = /title:\s*["']([^"']+)["']/g;
let m;
console.log("=== BLOG POST TITLES ===");
while ((m = titleRegex.exec(blogFile)) !== null) {
  const t = m[1];
  const px = estimateTitlePixels(t);
  console.log(`[Chars: ${t.length}, Px: ${px}] ${t}`);
}

console.log("\n=== CHECKING ALL APP MARKETING PAGES ===");
function walk(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) r = r.concat(walk(fp));
    else if (f.endsWith('page.tsx')) r.push(fp);
  });
  return r;
}

const pages = walk(path.join(__dirname, 'src/app'));
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const tm = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const dm = content.match(/description:\s*\n?\s*["'`]([\s\S]*?)["'`],/);
  const rel = path.relative(__dirname, p);
  if (tm) {
    const t = tm[1];
    const px = estimateTitlePixels(t);
    const d = dm ? dm[1].replace(/\s+/g, ' ').trim() : '';
    const dpx = estimateDescPixels(d);
    if (t.length > 56 || px > 540 || d.length > 150 || dpx > 940) {
      console.log(`PAGE: ${rel}`);
      console.log(`  TITLE (${t.length} chars, ${px}px): "${t}"`);
      console.log(`  DESC  (${d.length} chars, ${dpx}px): "${d.substring(0,100)}..."`);
    }
  }
});
