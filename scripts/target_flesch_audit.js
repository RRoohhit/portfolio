const fs = require('fs');
const path = require('path');

function fleschReadingEase(text) {
  // Strip out imports, exports, JSX tags, classNames, brackets
  const clean = text
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+[^;]+;/g, '')
    .replace(/className="[^"]*"/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/[\`\"\'\(\)\[\]\{\}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const sentences = clean.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 5);
  const words = clean.split(/\s+/).filter(w => /^[a-zA-Z0-9]+$/.test(w));
  if (sentences.length === 0 || words.length === 0) return 100;

  let syllables = 0;
  for (const word of words) {
    const w = word.toLowerCase();
    if (w.length <= 3) {
      syllables += 1;
      continue;
    }
    const matches = w.match(/[aeiouy]{1,2}/g);
    let count = matches ? matches.length : 1;
    if (w.endsWith('e') && !w.endsWith('le')) count = Math.max(1, count - 1);
    syllables += count;
  }

  const score = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
  return {
    score: Math.round(score * 10) / 10,
    words: words.length,
    sentences: sentences.length,
    wordsPerSentence: Math.round((words.length / sentences.length) * 10) / 10,
    syllablesPerWord: Math.round((syllables / words.length) * 100) / 100
  };
}

const targetPages = [
  'src/app/(marketing)/seo-expert-hyderabad/page.tsx',
  'src/app/(marketing)/services/google-business-profile-seo/page.tsx',
  'src/app/(marketing)/local-seo-noida/page.tsx',
  'src/app/(marketing)/seo-expert-pune/page.tsx',
  'src/app/seo-analyzer/page.tsx',
  'src/app/(marketing)/seo-expert-ghaziabad/page.tsx',
  'src/app/(marketing)/services/white-hat-seo/page.tsx',
  'src/app/(marketing)/seo-expert-ayodhya/page.tsx',
  'src/app/(marketing)/services/international-seo/page.tsx',
  'src/app/(marketing)/seo-expert-gurgaon/page.tsx',
  'src/app/(marketing)/services/ai-search-optimization/page.tsx',
  'src/app/(marketing)/services/social-media-marketing/page.tsx',
  'src/app/(marketing)/services/content-seo/page.tsx',
  'src/app/(marketing)/services/off-page-seo/page.tsx',
  'src/app/(marketing)/services/react-development/page.tsx',
  'src/app/(marketing)/services/nextjs-development/page.tsx',
];

console.log("=== TARGET PAGES FLESCH AUDIT ===");
targetPages.forEach(p => {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const res = fleschReadingEase(content);
    console.log(`[${res.score >= 50 ? 'PASS' : 'FAIL'}] Score: ${res.score.toFixed(1)} (words/sent: ${res.wordsPerSentence}, syl/word: ${res.syllablesPerWord}) -> ${p}`);
  } else {
    console.log(`[MISSING] ${p}`);
  }
});
