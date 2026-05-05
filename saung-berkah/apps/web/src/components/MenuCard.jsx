import { formatPrice, getCategoryEmoji, getCategoryColor } from '../utils/helpers.js'

export default function MenuCard({ item, onClick }) {
  return (
    <article
      className="menu-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Lihat detail ${item.name}`}
    >
      <div
        className="menu-card__image"
        style={{ background: getCategoryColor(item.category) }}
      >
        <span className="menu-card__emoji">{getCategoryEmoji(item.category)}</span>
        <div className="menu-card__image-overlay" />
        <div className="menu-card__click-hint">Klik untuk detail</div>
      </div>

      <div className="menu-card__body">
        <span className="menu-card__category">{item.category}</span>
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.description.slice(0, 60)}...</p>
        <div className="menu-card__footer">
          <span className="menu-card__price">{formatPrice(item.price)}</span>
          <div className="menu-card__tags">
            {item.tags?.slice(0, 1).map(tag => (
              <span key={tag} className="menu-card__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
