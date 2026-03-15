export default function QuestionsGrid({ questions, onQuestionClick }) {
  return (
    <div className="questions-section">
      <h2 className="questions-title">十个永恒之问</h2>
      <p className="questions-subtitle">这些问题，人类追问了几千年</p>
      <div className="questions-grid">
        {questions.map(q => (
          <div key={q.id} className="question-card" onClick={() => onQuestionClick(q)}>
            <span className="question-icon">{q.icon}</span>
            <h3>{q.title}</h3>
            <p className="question-en">{q.subtitle}</p>
            <p className="question-desc">{q.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
