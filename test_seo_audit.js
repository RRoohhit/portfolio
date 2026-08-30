const fs = require('fs');
const path = require('path');

// Google SERP Title pixel width estimation
// Standard proportional font character width in pixels (Arial 20px / Google Desktop SERP)
function estimateTitlePixels(str) {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (/[ijl\.,':;!\s\|\-]/.test(c)) width += 4.5;
    else if (/[frt]/.test(c)) width += 6;
    else if (/[abcdeghknopqrsuvxyzJS]/.test(c)) width += 9;
    else if (/[mwABCDEFGHKNOPQRTUVXYZ0-9]/.test(c)) width += 11;
    else if (/[MW—&]/.test(c)) width += 14;
    else width += 9;
  }
  return Math.round(width);
}

function estimateDescPixels(str) {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (/[ijl\.,':;!\s\|\-]/.test(c)) width += 4;
    else if (/[frt]/.test(c)) width += 5.5;
    else if (/[abcdeghknopqrsuvxyzJS0-9]/.test(c)) width += 7.5;
    else if (/[MW—&]/.test(c)) width += 11;
    else width += 8;
  }
  return Math.round(width);
}

console.log("=== CHECKING ALL BLOG POST TITLES & EXCERPTS ===");
const blogPostsFile = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// Also test blog slug dynamic title
const { BLOG_POSTS } = require('./src/data/blogPosts.ts');
console.log(`Found ${BLOG_POSTS ? BLOG_POSTS.length : 'N/A'} blog posts.`);
