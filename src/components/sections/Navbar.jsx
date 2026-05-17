import { useEffect, useRef, useState } from 'react'
import GradientText from '../ui/GradientText'
import { APP_URL } from '../../constants.js'

const NAV_LINKS = [
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Languages', href: '#languages', id: 'languages' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const [activeId, setActiveId] = useState(null)

  // Scroll-glass effect
  useEffect(() => {
    const sentinel = document.getElementById('nav-sentinel')
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        navRef.current?.classList.toggle('navbar--scrolled', !entry.isIntersecting)
      },
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { threshold: 0.3 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav ref={navRef} className="navbar" aria-label="Main">
      <a href="/" className="navbar__logo">
        <GradientText>FluentAiPro</GradientText>
      </a>
      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, href, id }) => (
          <li key={label}>
            <a
              href={href}
              className={`navbar__link${activeId === id ? ' active' : ''}`}
              onClick={() => setActiveId(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a href={APP_URL} className="btn-primary navbar__cta">
        Start for free
      </a>
    </nav>
  )
}
