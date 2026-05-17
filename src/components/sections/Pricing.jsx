import { useState } from 'react'
import GlassCard from '../ui/GlassCard'
import { APP_URL } from '../../constants.js'

const PLANS = [
  {
    icon: '🌱', name: 'Free',
    monthly: '0', yearly: '0', yearlyTotal: null,
    desc: 'Try it out, no strings attached',
    features: [
      { label: '1 language', included: true },
      { label: '10 AI conversations / month', included: true },
      { label: 'Basic pronunciation feedback', included: true },
      { label: 'Adaptive learning path', included: false },
      { label: 'Progress analytics', included: false },
      { label: 'Priority support', included: false },
    ],
    cta: 'Get started free', ctaVariant: 'outline',
  },
  {
    icon: '🥈', name: 'Silver',
    monthly: '12.99', yearly: '10.39', yearlyTotal: '124.70',
    desc: 'For committed language learners',
    featured: true,
    features: [
      { label: '3 languages', included: true },
      { label: 'Unlimited AI conversations', included: true },
      { label: 'Advanced pronunciation feedback', included: true },
      { label: 'Adaptive learning path', included: true },
      { label: 'Progress analytics', included: true },
      { label: 'Priority support', included: false },
    ],
    cta: 'Start for free →', ctaVariant: 'primary',
  },
  {
    icon: '🥇', name: 'Gold',
    monthly: '24.99', yearly: '19.99', yearlyTotal: '239.88',
    desc: 'All languages, full power',
    features: [
      { label: 'All 50+ languages', included: true },
      { label: 'Unlimited AI conversations', included: true },
      { label: 'Advanced pronunciation feedback', included: true },
      { label: 'Adaptive learning path', included: true },
      { label: 'Progress analytics', included: true },
      { label: 'Priority support', included: true },
    ],
    cta: 'Get started', ctaVariant: 'outline',
  },
]

export default function Pricing() {
  const [cycle, setCycle] = useState('monthly')
  const isYearly = cycle === 'yearly'

  return (
    <section id="pricing" className="section section--centered">
      <span className="section-label">Simple pricing</span>
      <h2 className="section-title">Start free, grow at your pace</h2>
      <p className="section-subtitle">No credit card required. Cancel anytime.</p>

      {/* Toggle */}
      <div className="pricing__toggle-row">
        <button
          className={`pricing__toggle-label${!isYearly ? ' pricing__toggle-label--active' : ''}`}
          onClick={() => setCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className="pricing__toggle-track"
          onClick={() => setCycle(isYearly ? 'monthly' : 'yearly')}
          role="switch"
          aria-checked={isYearly}
          aria-label={isYearly ? 'Switch to monthly billing' : 'Switch to yearly billing'}
        >
          <span className={`pricing__toggle-knob${isYearly ? ' pricing__toggle-knob--right' : ''}`} />
        </button>
        <button
          className={`pricing__toggle-label${isYearly ? ' pricing__toggle-label--active' : ''}`}
          onClick={() => setCycle('yearly')}
        >
          Yearly
        </button>
        {isYearly && <span className="pricing__save-badge">Save 20%</span>}
      </div>

      {/* Cards */}
      <div className="pricing__grid">
        {PLANS.map(({ icon, name, monthly, yearly, yearlyTotal, desc, featured, features, cta, ctaVariant }) => {
          const price = isYearly ? yearly : monthly
          return (
            <GlassCard key={name} className={`pricing__card${featured ? ' pricing__card--featured' : ''}`}>
              {featured && <span className="pricing__popular-badge">Most Popular</span>}
              <div className="pricing__plan-icon">{icon}</div>
              <h3 className="pricing__plan-name">{name}</h3>
              <p className="pricing__plan-desc">{desc}</p>
              <div className="pricing__price">
                <span className="pricing__currency">€</span>
                <span className="pricing__amount">{price}</span>
                {price !== '0' && <span className="pricing__period"> / mo</span>}
              </div>
              <p className="pricing__billing-note">
                {price === '0' ? 'Forever free' :
                  isYearly && yearlyTotal ? `€${yearlyTotal} / year` : '\u00a0'}
              </p>
              <hr className="pricing__divider" />
              <ul className="pricing__features">
                {features.map(({ label, included }) => (
                  <li key={label} className={`pricing__feature${!included ? ' pricing__feature--muted' : ''}`}>
                    <span className="pricing__check" aria-hidden="true">{included ? '✓' : '–'}</span>
                    {label}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`pricing__cta${ctaVariant === 'primary' ? ' btn-primary' : ' btn-plan-outline'}`}
              >
                {cta}
              </a>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}
