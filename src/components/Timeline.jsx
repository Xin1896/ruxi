import TimelineCard from './TimelineCard';

function groupByEra(results) {
  const groups = {};
  for (const r of results) {
    const year = r.thinker.birthYear;
    let eraLabel;
    if (year < -500) eraLabel = '先秦 · 古希腊';
    else if (year < 0) eraLabel = '古典时期';
    else if (year < 500) eraLabel = '古代晚期';
    else if (year < 1500) eraLabel = '中世纪';
    else if (year < 1800) eraLabel = '近代早期';
    else if (year < 1900) eraLabel = '19世纪';
    else eraLabel = '20世纪至今';

    if (!groups[eraLabel]) groups[eraLabel] = [];
    groups[eraLabel].push(r);
  }
  return groups;
}

export default function Timeline({ results, query, onThinkerClick, label, isAI }) {
  if (!results.length && !label) {
    return (
      <div className="timeline-empty">
        <p>没有找到与「{query}」相关的思想。</p>
        <p>等待 AI 搜索更广阔的思想世界…</p>
      </div>
    );
  }

  if (!results.length) return null;

  const groups = groupByEra(results);

  return (
    <div className={`timeline ${isAI ? 'timeline-ai' : ''}`}>
      <div className="timeline-header">
        <h2>
          {label || '跨越时空的对话'}
          {isAI && <span className="ai-badge">AI</span>}
        </h2>
        <span className="result-count">{results.length} 位思想者的回应</span>
      </div>
      <div className="timeline-line">
        {Object.entries(groups).map(([era, items]) => (
          <div key={era} className="era-group">
            <div className="era-label">{era}</div>
            <div className="era-cards">
              {items.map((result, i) => (
                <TimelineCard key={`${result.thinker.name}-${i}`} result={result} onThinkerClick={onThinkerClick} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
