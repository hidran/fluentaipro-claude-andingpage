import { useState, useRef } from 'react'

const FAQS = [
  {
    q: 'How does the AI pronunciation feedback work?',
    a: 'FluentAiPro uses speech recognition to analyze every word you speak. It scores your pronunciation on a 0–100 scale, highlights sounds that need improvement, and provides guidance on tongue placement and stress patterns.',
  },
  {
    q: 'Can I learn multiple languages at the same time?',
    a: 'Yes! Silver plan supports 3 languages and Gold supports all 50+. You can switch between languages at any time and your progress is tracked independently for each one.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'FluentAiPro works fully in your mobile browser today. Dedicated iOS and Android apps are coming soon — sign up to get notified when they launch.',
  },
  {
    q: 'What happens when I hit the free conversation limit?',
    a: "On the Free plan you get 10 AI conversations per month. Once you've used them, you can upgrade to Silver or Gold for unlimited conversations, or wait for your monthly limit to reset.",
  },
  {
    q: 'How is FluentAiPro different from Duolingo?',
    a: "Duolingo is great for vocabulary. FluentAiPro is built for conversation — you practice speaking with an AI tutor that responds naturally, and you get real-time pronunciation feedback on every sentence. It's speaking practice, not gamified drills.",
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. Cancel anytime from your account settings. You keep access until the end of your current billing period. No questions asked.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const id = `faq-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="faq__item">
      <button
        className="faq__question"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{question}</span>
        <span className={`faq__chevron${open ? ' faq__chevron--open' : ''}`} aria-hidden="true">▾</span>
      </button>
      <div
        id={id}
        ref={contentRef}
        className="faq__answer"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight ?? 500}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="faq__answer-text">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section" style={{ maxWidth: 720, margin: '0 auto', padding: '90px 48px' }}>
      <span className="section-label">FAQ</span>
      <h2 className="section-title">Got questions?</h2>
      <div className="faq__list">
        {FAQS.map(({ q, a }) => (
          <FAQItem key={q} question={q} answer={a} />
        ))}
      </div>
    </section>
  )
}
