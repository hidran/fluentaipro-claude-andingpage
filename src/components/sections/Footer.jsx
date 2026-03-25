import { APP_URL } from '../../constants.js'
import Button from '../ui/Button'

const NAV_LINKS = ['Features', 'Languages', 'Pricing', 'FAQ', 'Privacy Policy', 'Terms of Service']

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta-block">
        <h2 className="footer__cta-title">Ready to speak a new language?</h2>
        <Button href={APP_URL} variant="primary">Start for free →</Button>
      </div>

      <div className="footer__bottom">
        <nav className="footer__nav" aria-label="Footer">
          {NAV_LINKS.map(link => (
            <a key={link} href="#" className="footer__nav-link">{link}</a>
          ))}
        </nav>

        <div className="footer__social">
          <a href="#" className="footer__social-link" aria-label="Twitter/X"><TwitterIcon /></a>
          <a href="#" className="footer__social-link" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="footer__social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
        </div>

        <p className="footer__copy">© 2026 FluentAiPro. All rights reserved.</p>
      </div>
    </footer>
  )
}
