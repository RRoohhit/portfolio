const fs = require('fs');
const path = require('path');

// Simple syllable counter for English words
function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

// Flesch Reading Ease score: 206.835 - 1.015 * (words/sentences) - 84.6 * (syllables/words)
// Score 60-70 = Standard / Plain English (easily understood by 8th-9th graders)
// Score 70-80 = Fairly Easy
// Score < 50 = Difficult / Very Difficult
function calculateFleschScore(text) {
  // Strip HTML / JSX tags and code blocks
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\{[\s\S]*?\}/g, ' ');
  text = text.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, ' ');
  text = text.replace(/export\s+[\s\S]*?;/g, ' ');
  text = text.replace(/const\s+[\s\S]*?=/g, ' ');

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 5);
  const words = text.split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
  
  if (sentences.length === 0 || words.length === 0) return 0;
  
  let totalSyllables = 0;
  words.forEach(w => {
    totalSyllables += countSyllables(w);
  });
  
  const wordsPerSentence = words.length / sentences.length;
  const syllablesPerWord = totalSyllables / words.length;
  
  const score = 206.835 - (1.015 * wordsPerSentence) - (84.6 * syllablesPerWord);
  return {
    score: Math.round(score * 10) / 10,
    words: words.length,
    sentences: sentences.length,
    avgWordsPerSentence: Math.round(wordsPerSentence * 10) / 10,
    avgSyllablesPerWord: Math.round(syllablesPerWord * 100) / 100
  };
}

const targetPages = [
  'src/app/(marketing)/services/ecommerce-seo/page.tsx',
  'src/app/(marketing)/services/international-seo/page.tsx',
  'src/app/seo-audit/page.tsx',
  'src/app/(marketing)/services/social-media-marketing/page.tsx',
  'src/app/(marketing)/services/google-business-profile-seo/page.tsx',
  'src/app/(marketing)/services/hire-seo-expert/page.tsx',
  'src/app/(marketing)/services/wordpress-development/page.tsx',
  'src/app/(marketing)/rohit-gupta/page.tsx',
  'src/app/(marketing)/services/white-hat-seo/page.tsx',
  'src/app/(marketing)/services/ai-search-optimization/page.tsx',
  'src/app/(marketing)/services/content-seo/page.tsx',
  'src/app/(marketing)/services/off-page-seo/page.tsx',
  'src/app/(marketing)/services/react-development/page.tsx',
  'src/app/(marketing)/services/nextjs-development/page.tsx'
];

targetPages.forEach(p => {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const res = calculateFleschScore(content);
    console.log(`[Score: ${res.score} | W/S: ${res.avgWordsPerSentence}] ${p}`);
  }
});
