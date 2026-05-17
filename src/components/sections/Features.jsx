import GlassCard from '../ui/GlassCard'

const FEATURE_CARDS = [
  {
    icon: '🎙️',
    iconStyle: 'cyan',
    title: 'Real-Time Pronunciation Feedback',
    desc: "Speech recognition scores every word you say, highlights problem areas, and guides your mouth placement. No more guessing.",
  },
  {
    icon: '🗺️',
    title: 'Adaptive Learning Paths',
    desc: "Your path adjusts to your pace, goals, and weak spots — whether you're a beginner or brushing up on business vocabulary.",
  },
  {
    icon: '🌍',
    iconStyle: 'cyan',
    title: '50+ Languages',
    desc: 'From Spanish, French, and Mandarin to Swahili, Hindi, and Dutch — with native speaker voice models for every dialect.',
  },
  {
    icon: '📱',
    title: 'Web & Mobile, Seamlessly',
    desc: 'Practice on your laptop at home and continue on your phone on the go. Progress syncs instantly across all your devices.',
  },
]

const PRON_SCORES = [
  { word: 'mercado', pct: 88, good: true },
  { word: 'familia', pct: 95, good: true },
  { word: 'estuve',  pct: 72, good: false },
]

function PronunciationMockup() {
  return (
    <div className="features__mockup">
      <div className="features__chat">
        <div className="features__bubble features__bubble--ai">
          <span className="features__avatar">AI</span>
          <p>¿Cómo estuvo tu fin de semana?</p>
        </div>
        <div className="features__bubble features__bubble--user">
          <p>Fui al mercado con mi familia.</p>
          <span className="features__avatar features__avatar--user">Me</span>
        </div>
        <div className="features__bubble features__bubble--ai">
          <span className="features__avatar">AI</span>
          <p>¡Genial! Try <em>estuve</em> instead of <em>fui</em> for better flow.</p>
        </div>
      </div>
      <div className="features__pron">
        <p className="features__pron-label">Pronunciation score</p>
        {PRON_SCORES.map(({ word, pct, good }) => (
          <div className="features__pron-row" key={word}>
            <span className="features__pron-word">{word}</span>
            <div className="features__pron-track">
              <div
                className={`features__pron-fill ${good ? 'features__pron-fill--good' : 'features__pron-fill--warn'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="features__pron-score">{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="section">
      <span className="section-label">What you get</span>
      <h2 className="section-title">Everything you need<br />to truly learn a language</h2>
      <p className="section-subtitle">Not just flashcards. Real AI-powered practice that mirrors how humans actually learn to speak.</p>

      <div className="features__grid">
        <GlassCard className="features__wide-card">
          <div className="features__wide-copy">
            <div className="features__icon">🤖</div>
            <h3 className="features__title">Conversational AI Tutors</h3>
            <p className="features__desc">Practice real dialogues with AI tutors that respond naturally, correct your mistakes in context, and never get tired of your questions.</p>
          </div>
          <PronunciationMockup />
        </GlassCard>

        {FEATURE_CARDS.map(({ icon, iconStyle, title, desc }) => (
          <GlassCard key={title} className="features__card">
            <div className={`features__icon${iconStyle === 'cyan' ? ' features__icon--cyan' : ''}`}>{icon}</div>
            <h3 className="features__title">{title}</h3>
            <p className="features__desc">{desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
