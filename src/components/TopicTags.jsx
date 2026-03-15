export default function TopicTags({ tags, onTagClick }) {
  return (
    <div className="topic-tags">
      {tags.map(tag => (
        <button key={tag} className="tag" onClick={() => onTagClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
}
