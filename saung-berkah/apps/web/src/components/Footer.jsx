import { restaurantInfo } from '../data/menuData.js'

export default function Footer() {
  const handleLink = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: 'IG', label: 'Instagram', url: 'https://instagram.com' },
    { icon: 'FB', label: 'Facebook', url: 'https://facebook.com' },
    { icon: 'WA', label: 'WhatsApp', url: `https://wa.me/${restaurantInfo.whatsapp}` }
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
    { label: 'GoFood', url: 'https://gofood.co.id' },
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
              {socialLinks.map(soc => (
                <a 
                  key={soc.icon} 
                  href={soc.url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    color: 'var(--kuning)',
                    textDecoration: 'none'
                  }}
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

        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '800px' }}>
          Foto menu tambahan memakai referensi foto makanan dari Wikimedia Commons. Untuk hasil paling aman, nanti ganti dengan foto asli Saung Berkah Waras kalau sudah sempat difoto.
        </p>

        <div className="footer-bottom">
          <p>© 2025 {restaurantInfo.name}. All rights reserved.</p>
          <p style={{ opacity: 0.5 }}>Dibuat untuk UMKM Indonesia</p>
        </div>
      </div>
    </footer>
  )
}
