const fs = require('fs');
const path = require('path');

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function calculateFleschScore(text) {
  // Strip HTML / JSX tags, imports, schemas, data arrays
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\{[\s\S]*?\}/g, ' ');
  text = text.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, ' ');
  text = text.replace(/export\s+[\s\S]*?;/g, ' ');
  text = text.replace(/const\s+[\s\S]*?=/g, ' ');

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 5);
  const words = text.split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
  
  if (sentences.length === 0 || words.length === 0) return { score: 100, words: 0, sentences: 0 };
  
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
    wordsPerSentence: Math.round(wordsPerSentence * 10) / 10
  };
}

function walk(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) r = r.concat(walk(fp));
    else if (f.endsWith('page.tsx')) r.push(fp);
  });
  return r;
}

const pages = walk('src/app/(marketing)');
console.log("=== FLESCH READABILITY SCORES (Target: > 50 / Plain English) ===");
pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const res = calculateFleschScore(c);
  if (res.score < 55) {
    console.log(`[Score: ${res.score} | W/S: ${res.wordsPerSentence}] ${p}`);
  }
});
