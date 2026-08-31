const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/data/posts');
const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));

console.log('=== BLOG POST H1 AUDIT ===');
postFiles.forEach(file => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const h1Match = content.match(/h1:\s*"([^"]+)"/);
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const slugMatch = content.match(/slug:\s*"([^"]+)"/);
  const h1 = h1Match ? h1Match[1] : (titleMatch ? titleMatch[1] : 'N/A');
  const title = titleMatch ? titleMatch[1] : 'N/A';
  const slug = slugMatch ? slugMatch[1] : file;
  console.log(`[${slug}]`);
  console.log(`  Title (${title.length} ch): ${title}`);
  console.log(`  H1    (${h1.length} ch): ${h1}`);
});

const inlineFile = path.join(__dirname, '../src/data/blogPosts.ts');
const inlineContent = fs.readFileSync(inlineFile, 'utf8');
const inlinePosts = inlineContent.split('export const BLOG_POSTS: BlogPost[] = [')[1] || '';
const blocks = inlinePosts.split(/\{\s*slug:/).slice(1);
console.log('=== INLINE BLOG POSTS ===');
blocks.forEach(block => {
  const slugMatch = block.match(/^\s*"([^"]+)"/);
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const h1Match = block.match(/h1:\s*"([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : 'unknown';
  const title = titleMatch ? titleMatch[1] : 'N/A';
  const h1 = h1Match ? h1Match[1] : title;
  console.log(`[${slug}]`);
  console.log(`  Title (${title.length} ch): ${title}`);
  console.log(`  H1    (${h1.length} ch): ${h1}`);
});
