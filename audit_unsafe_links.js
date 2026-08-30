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

const unsafeLinks = [];

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const rel = path.relative(__dirname, file);

  // match <a ...> or <Link ...> containing target="_blank"
  const tagMatches = content.match(/<(?:a|Link)\s+[^>]*target=["']_blank["'][^>]*>/g);
  if (tagMatches) {
    tagMatches.forEach(tag => {
      if (!tag.includes('rel=')) {
        unsafeLinks.push({ file: rel, tag });
      }
    });
  }
});

console.log("=== UNSAFE TARGET=_BLANK TAGS (MISSING REL) ===");
unsafeLinks.forEach(u => console.log(`${u.file} -> ${u.tag}`));
