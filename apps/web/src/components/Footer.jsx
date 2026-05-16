import { restaurantInfo } from '../data/menuData.js'

// SVG Icons
const IconIG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
)

const IconFB = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)

const IconWA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04a11.771 11.771 0 001.591 5.919L0 24l6.149-1.613a11.771 11.771 0 005.9 1.594h.005c6.632 0 12.032-5.403 12.035-12.042a11.762 11.762 0 00-3.489-8.452z"/></svg>
)

export default function Footer() {
  const handleLink = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <IconIG />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <IconFB />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <IconWA />, label: 'WhatsApp', url: `https://wa.me/${restaurantInfo.whatsapp}` }
  ]

  const mainLinks = [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Daftar Menu', href: '#menu' },
    { label: 'Cara Pesan', href: '#menu' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Lokasi', href: '#lokasi' },
  ]

  const orderLinks = [
    { label: 'WhatsApp', url: `https://wa.me/${restaurantInfo.whatsapp}` },
    { label: 'ShopeeFood', url: restaurantInfo.shopeefood },
    { label: 'GrabFood', url: restaurantInfo.grabfood },
    { label: 'GoFood', url: restaurantInfo.gofood },
  ]

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              {restaurantInfo.name}
              <span>{restaurantInfo.tagline}</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              UMKM kuliner dengan suasana saung tradisional yang hangat. Menyajikan beragam menu lezat dengan harga terjangkau untuk semua kalangan.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((soc, i) => (
                <a 
                  key={i} 
                  href={soc.url} 
                  target="_blank" 
                  rel="noreferrer"
                  title={soc.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--kuning)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--kuning)'; e.currentTarget.style.color = 'var(--coklat)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--kuning)'; }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Menu Utama</h4>
            <ul>
              {mainLinks.map(link => (
                <li key={link.label}>
                  <button onClick={() => handleLink(link.href)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Order Via</h4>
            <ul>
              {orderLinks.map(link => (
                <li key={link.label}>
                  <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 {restaurantInfo.name}. All rights reserved.</p>
          <p style={{ opacity: 0.5 }}>Dibuat untuk UMKM Indonesia</p>
        </div>
      </div>
    </footer>
  )
}
