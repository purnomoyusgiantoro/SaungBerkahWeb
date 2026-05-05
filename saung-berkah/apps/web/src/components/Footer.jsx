import { restaurantInfo } from '../data/menuData.js'

export default function Footer() {
  const links = [
    { label: 'Tentang', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Lokasi', href: '#lokasi' },
  ]

  const handleLink = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__brand-name">{restaurantInfo.name}</h3>
            <p className="footer__brand-tagline">{restaurantInfo.tagline}</p>
            <p className="footer__brand-desc">
              Kuliner nikmat dengan suasana saung yang hangat. Hadir untuk menghadirkan
              cita rasa terbaik dengan harga yang bersahabat.
            </p>
          </div>

          <div className="footer__links">
            <h4>Navigasi</h4>
            <ul>
              {links.map(link => (
                <li key={link.href}>
                  <button onClick={() => handleLink(link.href)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Pesan Sekarang</h4>
            <div className="footer__order-links">
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__order-btn footer__order-btn--wa"
              >
                💬 WhatsApp
              </a>
              <a
                href={restaurantInfo.grabfood}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__order-btn footer__order-btn--grab"
              >
                🟢 GrabFood
              </a>
              <a
                href={restaurantInfo.shopeefood}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__order-btn footer__order-btn--shopee"
              >
                🧡 ShopeeFood
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
          <p>Made with ❤️ for delicious food</p>
        </div>
      </div>
    </footer>
  )
}
