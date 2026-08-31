const fs = require('fs');
const path = require('path');

function parseArticleContent(content) {
  const lines = content.split("\n");
  const blocks = [];
  let i = 0;
  let h2Count = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("```")) {
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        i++;
      }
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h4", text: line.slice(4) });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      h2Count += 1;
      blocks.push({
        type: h2Count === 1 ? "h2" : "h3",
        text: line.slice(3),
      });
      i++;
      continue;
    }

    i++;
  }

  return blocks;
}

// Read blog posts
const postsDir = 'src/data/posts';
const files = fs.readdirSync(postsDir);

console.log('--- AUDITING BLOG POST HEADINGS ---');
let totalPosts = 0;
let errors = 0;

files.forEach(f => {
  if (f.endsWith('.ts')) {
    const content = fs.readFileSync(path.join(postsDir, f), 'utf8');
    const match = content.match(/content:\s*`([\s\S]*?)`/);
    if (match) {
      totalPosts++;
      const blocks = parseArticleContent(match[1]);
      const h2s = blocks.filter(b => b.type === 'h2');
      const h3s = blocks.filter(b => b.type === 'h3');
      const h4s = blocks.filter(b => b.type === 'h4');
      
      if (h2s.length !== 1) {
        console.error(`❌ ${f} has ${h2s.length} H2s!`);
        errors++;
      } else {
        console.log(`✅ ${f}: 1 H1 (post title) -> ${h2s.length} H2 -> ${h3s.length} H3s -> ${h4s.length} H4s`);
      }
    }
  }
});

console.log(`\nAudit Complete: ${totalPosts} posts verified. Errors: ${errors}`);
