import { useMemo } from 'react';
import { searchByQuestion } from '../utils/search';
import TimelineCard from './TimelineCard';

export default function QuestionDetail({ question, onClose, onThinkerClick }) {
  const results = useMemo(
    () => searchByQuestion(question.keywords),
    [question]
  );

  return (
    <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="detail-panel">
        <button className="detail-close" onClick={onClose}>✕</button>
        <div className="detail-header">
          <span className="detail-icon">{question.icon}</span>
          <h2>{question.title}</h2>
          <p className="detail-en">{question.subtitle}</p>
          <p className="detail-desc">{question.description}</p>
        </div>

        <div className="detail-section">
          <h3>围桌而坐的人</h3>
          <p className="detail-hint">
            以下思想者曾回应这个问题，按出生年份排列
          </p>
          <div className="detail-cards">
            {results.map((r, i) => (
              <TimelineCard key={`${r.thinker.name}-${i}`} result={r} onThinkerClick={onThinkerClick} />
            ))}
          </div>
        </div>

        <div className="detail-section user-response">
          <h3>你的回应</h3>
          <textarea
            placeholder="如果你也入席这场对话，你会怎么说？"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}
