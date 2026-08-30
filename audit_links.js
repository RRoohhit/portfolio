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
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, "src"));

const externalLinksPerFile = [];

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const rel = path.relative(__dirname, file);

  // find external http/https links
  const links = [...content.matchAll(/href=["'](https?:\/\/[^"']+)["']/g)];
  if (links.length > 3) {
    externalLinksPerFile.push({ file: rel, count: links.length, links: links.map(l => l[1]) });
  }
});

console.log("=== EXTERNAL LINKS COUNT ===");
externalLinksPerFile.sort((a,b) => b.count - a.count).forEach(x => {
  console.log(`[${x.count}] ${x.file}`);
});
