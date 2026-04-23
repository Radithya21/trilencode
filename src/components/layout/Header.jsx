import { useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import './Header.css'

export function Header({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo font-serif" aria-label="Back to top">
          Trilen.
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div className={`header__overlay ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="header__overlay-link font-serif"
            onClick={() => setMenuOpen(false)}
            style={{ '--i': i }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
