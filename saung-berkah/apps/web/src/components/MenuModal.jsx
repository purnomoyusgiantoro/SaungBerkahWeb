import { formatPrice, getCategoryEmoji, getCategoryColor } from '../utils/helpers.js'
import { restaurantInfo } from '../data/menuData.js'

export default function MenuModal({ item, onClose }) {
  const waMessage = encodeURIComponent(
    `Halo Saung Berkah Waras, saya mau pesan ${item.name} (${formatPrice(item.price)}). Mohon konfirmasinya ya!`
  )

  const orderOptions = [
    {
      id: 'wa',
      label: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      url: `https://wa.me/${restaurantInfo.whatsapp}?text=${waMessage}`,
      desc: 'Chat langsung & cepat'
    },
    {
      id: 'grabfood',
      label: 'GrabFood',
      icon: '🟢',
      color: '#00B14F',
      url: item.orderLinks?.grabfood || restaurantInfo.grabfood,
      desc: 'Kurir cepat ke lokasi'
    },
    {
      id: 'shopeefood',
      label: 'ShopeeFood',
      icon: '🧡',
      color: '#EE4D2D',
      url: item.orderLinks?.shopeefood || restaurantInfo.shopeefood,
      desc: 'Promo & diskon menarik'
    }
  ]

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${item.name}`}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Tutup">✕</button>

        {/* Image / Visual */}
        <div
          className="modal__image"
          style={{ background: getCategoryColor(item.category) }}
        >
          <span className="modal__emoji">{getCategoryEmoji(item.category)}</span>
          {item.tags?.map(tag => (
            <span key={tag} className="modal__tag">{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div className="modal__content">
          <span className="modal__category">{item.category}</span>
          <h2 className="modal__title">{item.name}</h2>
          <p className="modal__desc">{item.description}</p>

          <div className="modal__price-row">
            <span className="modal__price">{formatPrice(item.price)}</span>
            <span className="modal__price-label">per porsi</span>
          </div>

          {/* Order Options */}
          <div className="modal__order-section">
            <h3 className="modal__order-title">🛒 Mau pesan lewat mana?</h3>
            <div className="modal__order-options">
              {orderOptions.map(opt => (
                <a
                  key={opt.id}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__order-btn"
                  style={{ '--btn-color': opt.color }}
                >
                  <span className="modal__order-icon">{opt.icon}</span>
                  <div>
                    <div className="modal__order-label">{opt.label}</div>
                    <div className="modal__order-desc">{opt.desc}</div>
                  </div>
                  <span className="modal__order-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
