import { formatPrice } from '../utils/helpers.js'

export default function MenuCard({ item, onClick }) {
  const getEmoji = (cat) => {
    if (cat === 'makanan') return '🍲'
    if (cat === 'camilan') return '🍟'
    return '🥤'
  }

  return (
    <article className="menu-card" onClick={onClick}>
      <div className="menu-card-img">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div style={{ fontSize: '3rem' }}>{getEmoji(item.category)}</div>
        )}
      </div>
      <div className="menu-card-body">
        <span className="menu-cat">{item.category}</span>
        <h3 className="menu-name">{item.name}</h3>
        <p className="menu-note">{item.description.slice(0, 50)}...</p>
        <div className="menu-price">{formatPrice(item.price)}</div>
      </div>
    </article>
  )
}
