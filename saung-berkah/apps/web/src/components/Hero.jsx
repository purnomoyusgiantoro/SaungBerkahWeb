import { menuData } from '../data/menuData.js'
import { formatPrice, getCategoryEmoji } from '../utils/helpers.js'

export default function Hero() {
  const featuredItems = menuData.slice(0, 3)

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOrder = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__pattern" />

      <div className="hero__content">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Saung Asli Sunda · Buka Setiap Hari
          </div>

          <h1 className="hero__title">
            Makan Nikmat,
            <span className="hero__title-accent">Harga Ramah</span>
          </h1>

          <p className="hero__subtitle">
            Kuliner lengkap dengan suasana saung yang hangat dan nyaman. Dari soto,
            bakso, aneka nasi, hingga minuman segar — semua ada di sini!
          </p>

          <div className="hero__actions">
            <button onClick={scrollToOrder} className="btn btn--primary btn--lg">
              🛒 Pesan Sekarang
            </button>
            <button onClick={scrollToMenu} className="btn btn--ghost btn--lg">
              Lihat Menu
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">Rp 5K</span>
              <span className="hero__stat-label">Harga mulai dari</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">30+</span>
              <span className="hero__stat-label">Menu pilihan</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">3</span>
              <span className="hero__stat-label">Platform order</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          {featuredItems.map((item, i) => (
            <div
              key={item.id}
              className={`hero__photo-card hero__photo-card--${i + 1}`}
              style={{
                background: `linear-gradient(135deg, ${getCardGradient(i)} )`,
              }}
            >
              <div className="hero__photo-emoji">{getCategoryEmoji(item.category)}</div>
              <div className="hero__photo-label">{item.name}</div>
              <div className="hero__photo-price">{formatPrice(item.price)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getCardGradient(index) {
  const gradients = [
    '#3B1F0A, #5C3015',
    '#2A1508, #442010',
    '#1A0E05, #3B1F0A'
  ]
  return gradients[index] || gradients[0]
}
