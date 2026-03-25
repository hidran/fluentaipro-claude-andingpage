const LANGUAGES = [
  { flag: '🇪🇸', name: 'Spanish' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇨🇳', name: 'Mandarin' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇩🇪', name: 'German' },
  { flag: '🇧🇷', name: 'Portuguese' },
  { flag: '🇮🇹', name: 'Italian' },
  { flag: '🇰🇷', name: 'Korean' },
  { flag: '🇸🇦', name: 'Arabic' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇷🇺', name: 'Russian' },
  { flag: '🇳🇱', name: 'Dutch' },
  { flag: '🇹🇷', name: 'Turkish' },
  { flag: '🇵🇱', name: 'Polish' },
  { flag: '🇸🇪', name: 'Swedish' },
  { flag: '🇬🇷', name: 'Greek' },
  { flag: '🇮🇱', name: 'Hebrew' },
  { flag: '🇰🇪', name: 'Swahili' },
]

export default function Languages() {
  return (
    <section id="languages" className="section section--centered">
      <span className="section-label">Available now</span>
      <h2 className="section-title">50+ languages, one tutor</h2>
      <p className="section-subtitle">
        Native speaker voice models for every language and dialect.
      </p>
      <div className="languages__grid">
        {LANGUAGES.map(({ flag, name }) => (
          <div key={name} className="language__chip">
            <span className="language__flag" aria-hidden="true">{flag}</span>
            <span className="language__name">{name}</span>
          </div>
        ))}
        <div className="language__chip language__chip--more" aria-label="32 more languages available">+32 more</div>
      </div>
    </section>
  )
}
