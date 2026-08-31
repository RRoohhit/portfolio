const fs = require('fs');

const pages = [
  'src/app/(marketing)/page.tsx',
  'src/app/(marketing)/services/ecommerce-seo/page.tsx',
  'src/app/(marketing)/services/on-page-seo/page.tsx',
  'src/app/(marketing)/services/digital-marketing/page.tsx',
  'src/app/(marketing)/ai-lab/page.tsx',
  'src/app/(marketing)/seo-expert-mumbai/page.tsx',
  'src/app/(marketing)/case-studies/page.tsx',
  'src/app/(marketing)/seo-expert-kolkata/page.tsx',
  'src/app/(marketing)/seo-expert-noida/page.tsx',
  'src/app/(marketing)/seo-expert-delhi/page.tsx',
  'src/app/(marketing)/seo-expert-chennai/page.tsx',
  'src/app/(marketing)/seo-expert-bangalore/page.tsx',
  'src/app/(marketing)/services/ai-search-optimization/page.tsx',
  'src/app/(marketing)/services/seo/page.tsx',
  'src/app/(marketing)/services/web-development/page.tsx'
];

pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const headings = [...content.matchAll(/<(h[1-6])[^>]*>(.*?)<\/\1>/gs)].map(m => ({ tag: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }));
  console.log('=== ' + p + ' ===');
  headings.forEach(h => console.log(`  ${h.tag}: ${h.text.substring(0, 50)}`));
});
