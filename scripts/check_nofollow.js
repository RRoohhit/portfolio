const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        checkDir(fullPath);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.matchAll(/<a\s+[^>]*rel=["']([^"']*)["'][^>]*>/gi);
      for (const m of matches) {
        const fullTag = m[0];
        const relVal = m[1];
        const hrefMatch = fullTag.match(/href=(?:\{([^}]+)\}|["']([^"']+)["'])/);
        const href = hrefMatch ? (hrefMatch[1] || hrefMatch[2]) : 'unknown';
        if (relVal.includes('nofollow')) {
          console.log(`File: ${fullPath}`);
          console.log(`  Tag: ${fullTag}`);
          console.log(`  Href: ${href}`);
          console.log(`  Rel: ${relVal}\n`);
        }
      }
    }
  }
}

console.log('=== CHECKING ALL NOFOLLOW TAGS IN SRC ===');
checkDir(path.join(__dirname, '../src'));
