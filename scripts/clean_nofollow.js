const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const allFiles = walk('src');
let count = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('nofollow noopener noreferrer')) {
    content = content.replace(/nofollow noopener noreferrer/g, 'noopener noreferrer');
    changed = true;
  }
  if (content.includes('noopener noreferrer nofollow')) {
    content = content.replace(/noopener noreferrer nofollow/g, 'noopener noreferrer');
    changed = true;
  }
  if (content.includes('rel="nofollow"')) {
    content = content.replace(/rel="nofollow"/g, 'rel="noopener noreferrer"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Cleaned nofollow in:', file);
    count++;
  }
});

console.log(`Successfully cleaned nofollow in ${count} files.`);
