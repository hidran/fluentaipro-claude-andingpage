import GlassCard from '../ui/GlassCard'

const TESTIMONIALS = [
  {
    quote: "I tried every app out there. FluentAiPro is the first one where I actually hold real conversations. My Spanish went from zero to B1 in 4 months.",
    name: 'Marco R.',
    meta: 'Learning Spanish · 4 months',
    initials: 'MR',
    avatarClass: 'testimonial__avatar--violet',
  },
  {
    quote: "The pronunciation feedback is incredible. My Japanese tutor told me my accent improved more in 2 weeks with this app than in a year of classes.",
    name: 'Sarah L.',
    meta: 'Learning Japanese · 6 months',
    initials: 'SL',
    avatarClass: 'testimonial__avatar--cyan',
  },
  {
    quote: "I travel for work constantly. Being able to switch between Mandarin and French on the same app, on any device, is a game changer.",
    name: 'David K.',
    meta: 'Learning Mandarin + French',
    initials: 'DK',
    avatarClass: 'testimonial__avatar--purple',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <span className="section-label">Loved by learners</span>
      <h2 className="section-title">Real people, real results</h2>
      <p className="section-subtitle">From total beginners to C1 speakers — here's what our learners say.</p>
      <div className="testimonials__grid">
        {TESTIMONIALS.map(({ quote, name, meta, initials, avatarClass }) => (
          <GlassCard key={name} className="testimonial__card">
            <div className="testimonial__stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="testimonial__quote">"{quote}"</p>
            <div className="testimonial__author">
              <div className={`testimonial__avatar ${avatarClass}`} aria-hidden="true">{initials}</div>
              <div>
                <p className="testimonial__name">{name}</p>
                <p className="testimonial__meta">{meta}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
