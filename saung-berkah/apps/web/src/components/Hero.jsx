import { menuData } from '../data/menuData.js'

export default function Hero() {
  const featuredItems = menuData.slice(0, 3)

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <div>
          <div className="hero-badge">Saung Asli Sunda · Buka Setiap Hari</div>
          <h1 className="hero-title">
            Makan Nikmat,<br />
            <span className="accent">Harga Ramah</span>
          </h1>
          <p className="hero-subtitle">
            Kuliner lengkap dengan suasana saung yang hangat dan nyaman. Dari soto,
            bakso, aneka nasi, hingga minuman segar — semua ada di sini!
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('#menu')} className="btn-primary">Pesan Sekarang</button>
            <button onClick={() => scrollToSection('#menu')} className="btn-secondary">Lihat Menu</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">Rp 5K</div>
              <div className="stat-label">Harga mulai dari</div>
            </div>
            <div className="stat">
              <div className="stat-num">30+</div>
              <div className="stat-label">Menu pilihan</div>
            </div>
            <div className="stat">
              <div className="stat-num">3</div>
              <div className="stat-label">Platform order</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {featuredItems.map((item, i) => (
            <div key={item.id} className={`photo-card pc${i + 1}`}>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {item.category === 'makanan' ? '🍲' : item.category === 'camilan' ? '🍟' : '🥤'}
                </div>
                <div style={{ color: 'white', fontWeight: 800 }}>{item.name}</div>
              </div>
              <div className="photo-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
