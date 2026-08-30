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

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const rel = path.relative(__dirname, file);
  
  // Find all <h1> tags, including multiline
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  let match;
  while ((match = h1Regex.exec(content)) !== null) {
    const rawText = match[1]
      .replace(/<[^>]+>/g, " ")
      .replace(/\{['"`]([^'"`]+)['"`]\}/g, "$1")
      .replace(/\{[^}]+\}/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&apos;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    console.log(`[${rawText.length}] ${rel} -> "${rawText}"`);
  }
});
