import { restaurantInfo } from '../data/menuData.js'

export default function Footer() {
  const handleLink = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              {restaurantInfo.name}
              <span>{restaurantInfo.tagline}</span>
            </div>
            <p>
              Kuliner nikmat dengan suasana saung yang hangat. Hadir untuk menghadirkan
              cita rasa terbaik dengan harga yang bersahabat.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigasi</h4>
            <ul>
              <li><button onClick={() => handleLink('#about')}>Tentang</button></li>
              <li><button onClick={() => handleLink('#menu')}>Menu</button></li>
              <li><button onClick={() => handleLink('#galeri')}>Galeri</button></li>
              <li><button onClick={() => handleLink('#lokasi')}>Lokasi</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Pesan Sekarang</h4>
            <ul>
              <li><a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={restaurantInfo.grabfood} target="_blank" rel="noreferrer">GrabFood</a></li>
              <li><a href={restaurantInfo.shopeefood} target="_blank" rel="noreferrer">ShopeeFood</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
          <p>Kuliner Nikmat · Harga Bersahabat</p>
        </div>
      </div>
    </footer>
  )
}
