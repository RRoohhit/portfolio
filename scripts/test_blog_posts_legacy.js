const fs = require('fs');

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

const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const postMatches = [...content.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?content:\s*`([\s\S]*?)`/g)];

console.log('--- AUDITING blogPosts.ts HEADINGS ---');
postMatches.forEach(m => {
  const slug = m[1];
  const postContent = m[2];
  const blocks = parseArticleContent(postContent);
  const h2s = blocks.filter(b => b.type === 'h2');
  const h3s = blocks.filter(b => b.type === 'h3');
  const h4s = blocks.filter(b => b.type === 'h4');
  console.log(`✅ ${slug}: 1 H1 -> ${h2s.length} H2 -> ${h3s.length} H3s -> ${h4s.length} H4s`);
});
