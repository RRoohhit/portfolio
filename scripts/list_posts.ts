import { BLOG_POSTS } from "../src/data/blogPosts";

console.log("Total posts:", BLOG_POSTS.length);
BLOG_POSTS.forEach((p, i) => {
  console.log(`${i + 1}. [${p.slug}]`);
  console.log(`   Title: "${p.title}"`);
  console.log(`   H1:    "${p.h1 || '(none)'}"`);
});
