import { useState, useCallback, useRef } from 'react';
import SearchBar from './components/SearchBar';
import TopicTags from './components/TopicTags';
import Timeline from './components/Timeline';
import QuestionsGrid from './components/QuestionsGrid';
import QuestionDetail from './components/QuestionDetail';
import ThinkerProfile from './components/ThinkerProfile';
import { searchThinkers, getAllTags } from './utils/search';
import questions from './data/questions';
import './App.css';

const tags = getAllTags();

async function fetchAIResults(query) {
  const res = await fetch('/api/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.results || []).map(r => ({
    thinker: {
      name: r.name,
      nameEn: r.nameEn,
      birthYear: r.birthYear,
      era: r.era,
      category: r.category,
      tradition: r.tradition,
      color: r.color,
    },
    entry: { topic: r.topic, quote: r.quote, insight: r.insight, keywords: '' },
    score: 0,
    isAI: true,
  }));
}

export default function App() {
  const [query, setQuery] = useState('');
  const [localResults, setLocalResults] = useState([]);
  const [aiResults, setAiResults] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedThinker, setSelectedThinker] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const aiRequestId = useRef(0);

  const handleSearch = useCallback((q) => {
    setQuery(q);
    if (q.trim()) {
      const local = searchThinkers(q);
      setLocalResults(local);
      setHasSearched(true);

      // Also fire AI search
      const requestId = ++aiRequestId.current;
      setAiResults([]);
      setAiLoading(true);
      setAiError(null);
      fetchAIResults(q)
        .then(results => {
          if (aiRequestId.current === requestId) {
            // Deduplicate: remove AI results whose thinker name already appears in local
            const localNames = new Set(local.map(r => r.thinker.name));
            setAiResults(results.filter(r => !localNames.has(r.thinker.name)));
            setAiLoading(false);
          }
        })
        .catch(() => {
          if (aiRequestId.current === requestId) {
            setAiError('AI 搜索暂不可用');
            setAiLoading(false);
          }
        });
    } else {
      setLocalResults([]);
      setAiResults([]);
      setAiLoading(false);
      setAiError(null);
      setHasSearched(false);
    }
  }, []);

  const handleTagClick = useCallback((tag) => {
    handleSearch(tag);
  }, [handleSearch]);

  const handleQuestionClick = useCallback((question) => {
    setSelectedQuestion(question);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedQuestion(null);
  }, []);

  const handleThinkerClick = useCallback((thinker) => {
    setSelectedThinker(thinker);
  }, []);

  const handleCloseThinker = useCallback(() => {
    setSelectedThinker(null);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">入席</h1>
        <p className="tagline">加入一场跨越千年的对话</p>
      </header>

      <SearchBar onSearch={handleSearch} />
      <TopicTags tags={tags} onTagClick={handleTagClick} />

      <main className="main">
        {hasSearched ? (
          <>
            <Timeline
              results={localResults}
              query={query}
              onThinkerClick={handleThinkerClick}
              label={localResults.length > 0 ? '本地思想库' : null}
            />
            {aiLoading && (
              <div className="ai-loading">
                <div className="ai-spinner" />
                <span>正在向更广阔的思想世界搜索…</span>
              </div>
            )}
            {aiError && <div className="ai-error">{aiError}</div>}
            {aiResults.length > 0 && (
              <Timeline
                results={aiResults}
                query={query}
                onThinkerClick={handleThinkerClick}
                label="AI 探索 · 来自更广阔的思想世界"
                isAI
              />
            )}
          </>
        ) : (
          <QuestionsGrid questions={questions} onQuestionClick={handleQuestionClick} />
        )}
      </main>

      {selectedQuestion && (
        <QuestionDetail question={selectedQuestion} onClose={handleCloseDetail} onThinkerClick={handleThinkerClick} />
      )}

      {selectedThinker && (
        <ThinkerProfile thinker={selectedThinker} onClose={handleCloseThinker} />
      )}

      <footer className="footer">
        <p>入席 — 思想坐标系 · 让千年智慧为你所用</p>
      </footer>
    </div>
  );
}
