const fs = require('fs');
const path = require('path');

// Flesch Reading Ease Formula
function fleschReadingEase(text) {
  const clean = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = clean.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = clean.split(/\s+/).filter(w => /[a-zA-Z0-9]/.test(w));
  if (sentences.length === 0 || words.length === 0) return 100;

  let syllables = 0;
  for (const word of words) {
    const w = word.toLowerCase().replace(/[^a-z]/g, '');
    if (w.length <= 3) {
      syllables += 1;
      continue;
    }
    const matches = w.match(/[aeiouy]{1,2}/g);
    let count = matches ? matches.length : 1;
    if (w.endsWith('e') && !w.endsWith('le')) count = Math.max(1, count - 1);
    syllables += count;
  }

  const score = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
  return Math.round(score * 10) / 10;
}

console.log('=== AUDITING ALL 4 SCREAMING FROG ISSUES ===\n');

// 1. Check for rel="nofollow" on internal links
console.log('--- 1. Checking rel="nofollow" on internal links ---');
function walkFiles(dir, exts = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walkFiles(fullPath, exts));
      }
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const allCodeFiles = walkFiles('src');
let internalNofollow = [];
allCodeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const tagRegex = /<[^>]+rel=[^>]+nofollow[^>]*>/gi;
  let m;
  while ((m = tagRegex.exec(content)) !== null) {
    const tag = m[0];
    const hrefMatch = tag.match(/href=[\"']([^\"']+)[\"']/i);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.startsWith('/') || href.includes('rohitguptaseo.in')) {
        internalNofollow.push({ file, tag, href });
      }
    }
  }
});
console.log(`Internal nofollow found: ${internalNofollow.length}`);
internalNofollow.forEach(item => console.log(`  [ALERT] in ${item.file}: ${item.tag}`));

// 2. Check blog post Title vs H1
console.log('\n--- 2. Checking Blog Post Titles vs H1s ---');
const postFiles = walkFiles('src/data');
let blogPostObjects = [];
postFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  slugMatches.forEach(sm => {
    const slug = sm[1];
    // Find title and h1 around this slug
    const startIdx = sm.index;
    const endIdx = content.indexOf('}', startIdx);
    const chunk = content.slice(startIdx, endIdx > 0 ? endIdx : undefined);
    const titleMatch = chunk.match(/title:\s*["']([^"']+)["']/);
    const h1Match = chunk.match(/h1:\s*["']([^"']+)["']/);
    if (titleMatch) {
      blogPostObjects.push({
        slug,
        file: f,
        title: titleMatch[1],
        h1: h1Match ? h1Match[1] : null
      });
    }
  });
});
console.log(`Found ${blogPostObjects.length} blog post objects across src/data:`);
blogPostObjects.forEach(bp => {
  console.log(`- ${bp.slug}`);
  console.log(`    title: "${bp.title}"`);
  console.log(`    h1:    "${bp.h1 || '(none -> falls back to title)'}"`);
});

// 3. Check Flesch Reading Ease on all page.tsx files
console.log('\n--- 3. Checking Flesch Reading Ease on pages ---');
const pageFiles = walkFiles('src/app', ['.tsx']).filter(f => f.endsWith('page.tsx'));
pageFiles.forEach(pf => {
  const content = fs.readFileSync(pf, 'utf8');
  const score = fleschReadingEase(content);
  if (score < 50) {
    console.log(`[Difficult / <50] Score: ${score.toFixed(1)} -> ${pf}`);
  }
});

// 4. Check Multiple H2s on pages
console.log('\n--- 4. Checking H2 occurrences on pages ---');
pageFiles.forEach(pf => {
  const content = fs.readFileSync(pf, 'utf8');
  const h2Matches = content.match(/<h2[\s>]/g);
  const count = h2Matches ? h2Matches.length : 0;
  if (count > 3) {
    console.log(`[H2 Count: ${count}] -> ${pf}`);
  }
});
