export default function TimelineCard({ result, onThinkerClick }) {
  const { thinker, entry } = result;

  const handleAvatarClick = (e) => {
    e.stopPropagation();
    if (onThinkerClick) onThinkerClick(thinker);
  };

  return (
    <div className="timeline-card" style={{ borderLeftColor: thinker.color }}>
      <div className="card-header">
        <button
          className="thinker-avatar"
          style={{ background: thinker.color }}
          onClick={handleAvatarClick}
          title={`查看${thinker.name}的思想档案`}
        >
          {thinker.name[0]}
        </button>
        <div className="thinker-info">
          <span className="thinker-name thinker-name-link" onClick={handleAvatarClick}>
            {thinker.name}
          </span>
          <span className="thinker-name-en">{thinker.nameEn}</span>
        </div>
        <div className="thinker-meta">
          <span className="thinker-era">{thinker.era}</span>
          <span className="thinker-tradition">{thinker.tradition}</span>
        </div>
      </div>
      <div className="card-topic">{entry.topic}</div>
      <blockquote className="card-quote">{entry.quote}</blockquote>
      <p className="card-insight">{entry.insight}</p>
    </div>
  );
}
