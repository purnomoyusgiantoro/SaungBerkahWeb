import { formatPrice, getCategoryEmoji, getCategoryColor } from '../utils/helpers.js'
import { restaurantInfo } from '../data/menuData.js'

// SVG Icons as Constants
const IconWA = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04a11.771 11.771 0 001.591 5.919L0 24l6.149-1.613a11.771 11.771 0 005.9 1.594h.005c6.632 0 12.032-5.403 12.035-12.042a11.762 11.762 0 00-3.489-8.452z"/></svg>
)

const IconGrab = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.301 10.457c-.895 0-1.636.578-1.895 1.373a2.022 2.022 0 01-.137.411c-.347 1.04-1.328 1.785-2.484 1.785-1.45 0-2.625-1.173-2.625-2.62s1.175-2.62 2.625-2.62c.321 0 .626.059.909.165.41.151.874.151 1.284 0 .41-.151.724-.465.875-.875.253-.69.043-1.465-.544-1.922a4.493 4.493 0 00-2.524-.768c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c1.947 0 3.606-1.238 4.225-2.973.048-.137.137-.258.258-.34.12-.082.261-.122.404-.116.895 0 1.636-.578 1.895-1.373.106-.328.106-.677 0-1.005-.259-.795-1-1.373-1.895-1.373zm-16.602 0c-.895 0-1.636.578-1.895 1.373a2.022 2.022 0 01-.137.411c-.347 1.04-1.328 1.785-2.484 1.785-1.45 0-2.625-1.173-2.625-2.62s1.175-2.62 2.625-2.62c.321 0 .626.059.909.165.41.151.874.151 1.284 0 .41-.151.724-.465.875-.875.253-.69.043-1.465-.544-1.922a4.493 4.493 0 00-2.524-.768c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c1.947 0 3.606-1.238 4.225-2.973.048-.137.137-.258.258-.34.12-.082.261-.122.404-.116.895 0 1.636-.578 1.895-1.373.106-.328.106-.677 0-1.005-.259-.795-1-1.373-1.895-1.373z"/></svg>
)

const IconShopee = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.905 13.882l-1.391-9.743A1.91 1.91 0 0018.61 2.5h-13.22a1.91 1.91 0 00-1.904 1.639L2.095 13.882A3.82 3.82 0 001.5 16.5c0 4.142 4.701 7.5 10.5 7.5s10.5-3.358 10.5-7.5a3.82 3.82 0 00-.595-2.618zM12 21.5c-4.418 0-8-2.462-8-5.5a1.5 1.5 0 013 0c0 1.381 2.239 2.5 5 2.5s5-1.119 5-2.5a1.5 1.5 0 013 0c0 3.038-3.582 5.5-8 5.5z"/></svg>
)

const IconGoFood = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-20.571c4.722 0 8.571 3.85 8.571 8.571s-3.85 8.571-8.571 8.571S3.429 16.722 3.429 12 7.278 3.429 12 3.429zM12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 9.429c-1.894 0-3.429-1.535-3.429-3.429S10.106 8.571 12 8.571 15.429 10.106 15.429 12 13.894 15.429 12 15.429z"/></svg>
)

export default function MenuModal({ item, onClose }) {
  const waMessage = encodeURIComponent(
    `Halo Saung Berkah Waras, saya mau pesan ${item.name} (${formatPrice(item.price)}). Mohon konfirmasinya ya!`
  )

  const orderOptions = [
    {
      id: 'wa',
      label: 'WhatsApp',
      icon: <IconWA />,
      color: '#25D366',
      url: `https://wa.me/${restaurantInfo.whatsapp}?text=${waMessage}`,
      desc: 'Chat langsung & cepat'
    },
    {
      id: 'grabfood',
      label: 'GrabFood',
      icon: <IconGrab />,
      color: '#00B14F',
      url: item.orderLinks?.grabfood || restaurantInfo.grabfood,
      desc: 'Kurir cepat ke lokasi'
    },
    {
      id: 'shopeefood',
      label: 'ShopeeFood',
      icon: <IconShopee />,
      color: '#EE4D2D',
      url: item.orderLinks?.shopeefood || restaurantInfo.shopeefood,
      desc: 'Promo & diskon menarik'
    },
    {
      id: 'gofood',
      label: 'GoFood',
      icon: <IconGoFood />,
      color: '#E91E63',
      url: item.orderLinks?.gofood || restaurantInfo.gofood,
      desc: 'Layanan terpercaya'
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
          {item.image ? (
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span className="modal__emoji">{getCategoryEmoji(item.category)}</span>
          )}
          {item.tags?.map(tag => (
            <span key={tag} className="modal__tag" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--kuning)', color: 'var(--coklat)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 800 }}>{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div className="modal__content">
          <span className="modal__category" style={{ color: 'var(--kuning)', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 800 }}>{item.category}</span>
          <h2 className="modal__title">{item.name}</h2>
          <p className="modal__desc" style={{ opacity: 0.7, marginBottom: '1.5rem' }}>{item.description}</p>

          <div className="modal__price-row" style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
            <span className="modal__price" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--kuning)' }}>{formatPrice(item.price)}</span>
            <span className="modal__price-label" style={{ opacity: 0.5 }}>per porsi</span>
          </div>

          {/* Order Options */}
          <div className="modal__order-section">
            <h3 className="modal__order-title" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>🛒 Mau pesan lewat mana?</h3>
            <div className="modal__order-options" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {orderOptions.map(opt => (
                <a
                  key={opt.id}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__order-btn"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = opt.color; e.currentTarget.style.transform = 'translateX(8px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'flex', color: opt.color }}>{opt.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800 }}>{opt.label}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{opt.desc}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: opt.color, fontWeight: 900 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
