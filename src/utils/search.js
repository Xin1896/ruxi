import thinkers from '../data/thinkers';

export function searchThinkers(query) {
  if (!query || !query.trim()) return [];

  const terms = query.trim().toLowerCase().split(/\s+/);
  const results = [];

  for (const thinker of thinkers) {
    for (const entry of thinker.entries) {
      const keywordStr = entry.keywords.toLowerCase();
      const topicStr = entry.topic.toLowerCase();
      const insightStr = entry.insight.toLowerCase();
      const quoteStr = entry.quote.toLowerCase();
      const nameStr = thinker.name.toLowerCase();
      const searchPool = `${keywordStr} ${topicStr} ${insightStr} ${quoteStr} ${nameStr}`;

      const matched = terms.some(term => searchPool.includes(term));

      if (matched) {
        const matchCount = terms.filter(term => searchPool.includes(term)).length;
        const keywordBonus = terms.filter(term => keywordStr.includes(term)).length * 2;

        results.push({
          thinker: {
            name: thinker.name,
            nameEn: thinker.nameEn,
            birthYear: thinker.birthYear,
            era: thinker.era,
            category: thinker.category,
            tradition: thinker.tradition,
            color: thinker.color,
          },
          entry,
          score: matchCount + keywordBonus,
        });
      }
    }
  }

  // Sort by score desc, then by birth year asc (chronological)
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.thinker.birthYear - b.thinker.birthYear;
  });

  return results;
}

export function searchByQuestion(questionKeywords) {
  const query = questionKeywords.join(' ');
  return searchThinkers(query);
}

// Get unique topic tags from all thinkers
export function getAllTags() {
  const tags = new Set();
  for (const thinker of thinkers) {
    for (const entry of thinker.entries) {
      const keywords = entry.keywords.split(',').map(k => k.trim());
      keywords.forEach(k => tags.add(k));
    }
  }
  // Return curated popular tags
  const popular = [
    '自由', '幸福', '意义', '死亡', '爱', '正义', '孤独',
    '真理', '苦难', '智慧', '道德', '权力', '美', '时间', '命运'
  ];
  return popular;
}
