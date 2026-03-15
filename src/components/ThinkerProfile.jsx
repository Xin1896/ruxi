import thinkerProfiles from '../data/thinkerProfiles';

export default function ThinkerProfile({ thinker, onClose }) {
  const profile = thinkerProfiles[thinker.name];

  if (!profile) {
    return (
      <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="profile-panel">
          <button className="detail-close" onClick={onClose}>✕</button>
          <div className="profile-header" style={{ borderColor: thinker.color }}>
            <div className="profile-avatar" style={{ background: thinker.color }}>
              {thinker.name[0]}
            </div>
            <h2>{thinker.name}</h2>
            <p className="profile-name-en">{thinker.nameEn}</p>
            <p className="profile-meta">{thinker.era} · {thinker.tradition} · {thinker.category}</p>
          </div>
          <p style={{ textAlign: 'center', color: '#9aa0a6', padding: '40px 0' }}>暂无详细档案</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="profile-panel">
        <button className="detail-close" onClick={onClose}>✕</button>

        <div className="profile-header" style={{ borderColor: thinker.color }}>
          <div className="profile-avatar" style={{ background: thinker.color }}>
            {thinker.name[0]}
          </div>
          <h2>{thinker.name}</h2>
          <p className="profile-name-en">{thinker.nameEn}</p>
          <p className="profile-meta">{thinker.era} · {thinker.tradition} · {thinker.category}</p>
        </div>

        <div className="profile-bio">
          <p>{profile.bio}</p>
        </div>

        <div className="profile-section">
          <h3>人生履历</h3>
          <div className="milestone-list">
            {profile.milestones.map((m, i) => (
              <div key={i} className="milestone-item">
                <div className="milestone-dot" style={{ background: thinker.color }} />
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>思想演变</h3>
          <div className="evolution-list">
            {profile.thoughtEvolution.map((e, i) => (
              <div key={i} className="evolution-item">
                <div className="evolution-marker">
                  <div className="evolution-number" style={{ background: thinker.color }}>
                    {i + 1}
                  </div>
                  {i < profile.thoughtEvolution.length - 1 && (
                    <div className="evolution-line" style={{ background: thinker.color + '30' }} />
                  )}
                </div>
                <div className="evolution-content">
                  <div className="evolution-period">{e.period}</div>
                  <div className="evolution-title">{e.title}</div>
                  <p className="evolution-desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
