import { useState, useEffect } from 'react'
import { restaurantInfo } from '../data/menuData.js'

export default function Navbar({ setActivePage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Tentang' },
    { href: '#menu', label: 'Menu' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#lokasi', label: 'Lokasi' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <span className="navbar__logo-main">{restaurantInfo.name}</span>
        <span className="navbar__logo-sub">{restaurantInfo.tagline}</span>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <button
              className="navbar__link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${restaurantInfo.whatsapp}?text=Halo%20Saung%20Berkah%20Waras%2C%20saya%20mau%20pesan`}
        className="btn btn--primary navbar__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pesan Sekarang
      </a>

      <button
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
