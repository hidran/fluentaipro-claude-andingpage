import Button from '../ui/Button'
import { APP_URL } from '../../constants.js'

export default function Demo() {
  return (
    <section id="demo" className="section section--centered">
      <span className="section-label">See it in action</span>
      <h2 className="section-title">Your AI tutor, live</h2>
      <p className="section-subtitle">
        A real conversation — with real-time feedback on every word you say.
      </p>
      <div className="demo__frame">
        <div className="demo__browser-bar" aria-hidden="true">
          <span className="demo__dot demo__dot--red" />
          <span className="demo__dot demo__dot--yellow" />
          <span className="demo__dot demo__dot--green" />
        </div>
        <img
          src="/demo-screenshot.png"
          alt="FluentAiPro app showing a Spanish conversation with AI tutor and pronunciation scores"
          className="demo__screenshot"
          loading="lazy"
        />
      </div>
      <Button href={APP_URL} variant="primary" className="demo__cta">Try it yourself →</Button>
    </section>
  )
}
