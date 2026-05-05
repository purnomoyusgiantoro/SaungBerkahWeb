import { useState, useEffect } from 'react'
import { restaurantInfo } from '../data/menuData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={scrolled ? { height: '60px', background: 'rgba(59,31,10,0.98)' } : {}}>
      <div className="nav-logo">
        {restaurantInfo.name}
        <span>{restaurantInfo.tagline}</span>
      </div>

      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              className="nav-link-btn"
            >
              <a href={link.href} onClick={(e) => e.preventDefault()}>{link.label}</a>
            </button>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${restaurantInfo.whatsapp}?text=Halo%20Saung%20Berkah%20Waras%2C%20saya%20mau%20pesan`}
        className="nav-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pesan Sekarang
      </a>
    </nav>
  )
}
