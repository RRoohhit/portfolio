const fs = require('fs');
const path = require('path');

function walk(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) r = r.concat(walk(fp));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(fp);
  });
  return r;
}

const files = walk(path.join(__dirname, 'src'));
const followedExternalLinks = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(__dirname, file);

  // Match <a ... href="http..." ...> or <Link ... href="http..." ...>
  const tagMatches = content.match(/<(?:a|Link)\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/g);
  if (tagMatches) {
    tagMatches.forEach(tag => {
      // Check if it has rel="...nofollow..."
      const relMatch = tag.match(/rel=["']([^"']+)["']/);
      const isNofollow = relMatch && relMatch[1].includes('nofollow');
      if (!isNofollow) {
        followedExternalLinks.push({ file: relPath, tag });
      }
    });
  }
});

console.log(`=== FOLLOWED EXTERNAL LINKS (Total: ${followedExternalLinks.length}) ===`);
followedExternalLinks.forEach(l => console.log(`${l.file} -> ${l.tag}`));
