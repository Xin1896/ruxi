import { useState, useCallback } from 'react';
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

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedThinker, setSelectedThinker] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback((q) => {
    setQuery(q);
    if (q.trim()) {
      setResults(searchThinkers(q));
      setHasSearched(true);
    } else {
      setResults([]);
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
          <Timeline results={results} query={query} onThinkerClick={handleThinkerClick} />
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
