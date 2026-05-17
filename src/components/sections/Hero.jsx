import React from 'react'
import Badge from '../ui/Badge'
import GradientText from '../ui/GradientText'
import Button from '../ui/Button'
import { APP_URL } from '../../constants.js'

const STATS = [
  { number: '50+', label: 'Languages' },
  { number: '10M+', label: 'Conversations' },
  { number: '98%', label: 'Accuracy Rate' },
  { number: '4.9★', label: 'User Rating' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />

      <Badge>AI-Powered Language Learning</Badge>

      <h1 className="hero__title">
        Learn any language<br />
        with your <GradientText>AI tutor</GradientText>
      </h1>

      <p className="hero__subtitle">
        Practice real conversations in 50+ languages. Get instant pronunciation
        feedback and a learning path that adapts to you.
      </p>

      <div className="hero__actions">
        <Button href={APP_URL} variant="primary">Start for free →</Button>
        <Button href="#features" variant="secondary">▶ See how it works</Button>
      </div>

      <div className="hero__stats" role="list">
        {STATS.map(({ number, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <div className="hero__stats-divider" aria-hidden="true" />}
            <div className="hero__stat" role="listitem">
              <span className="hero__stat-number gradient-text">{number}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
