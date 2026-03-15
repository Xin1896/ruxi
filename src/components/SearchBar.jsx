import { useState, useRef, useCallback } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const isComposing = useRef(false);

  const handleInput = useCallback((e) => {
    setValue(e.target.value);
    if (!isComposing.current) {
      onSearch(e.target.value);
    }
  }, [onSearch]);

  const handleCompositionStart = useCallback(() => {
    isComposing.current = true;
  }, []);

  const handleCompositionEnd = useCallback((e) => {
    isComposing.current = false;
    onSearch(e.target.value);
  }, [onSearch]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !isComposing.current) {
      onSearch(value);
    }
  }, [onSearch, value]);

  const handleClear = useCallback(() => {
    setValue('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20">
          <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input
          type="text"
          value={value}
          onChange={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
          placeholder="搜索你心中的问题…  自由、幸福、死亡、爱…"
          autoComplete="off"
        />
        {value && (
          <button className="clear-btn" onClick={handleClear} aria-label="清除">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#70757a" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
