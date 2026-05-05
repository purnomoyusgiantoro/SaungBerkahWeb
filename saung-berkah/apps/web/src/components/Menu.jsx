import { useState } from 'react'
import { menuData, menuCategories } from '../data/menuData.js'
import MenuCard from './MenuCard.jsx'

export default function Menu({ onMenuClick }) {
  const [activeCategory, setActiveCategory] = useState('semua')

  const filtered = activeCategory === 'semua'
    ? menuData
    : menuData.filter(item => item.category === activeCategory)

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section__header section__header--light">
          <span className="section__tag section__tag--light">Menu Kami</span>
          <h2 className="section__title section__title--light">
            Pilihan Menu <em>Terlezat</em>
          </h2>
          <p className="section__desc section__desc--light">
            Klik foto menu untuk melihat detail dan langsung pesan!
          </p>
        </div>

        <div className="menu__tabs">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              className={`menu__tab ${activeCategory === cat.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map(item => (
            <MenuCard
              key={item.id}
              item={item}
              onClick={() => onMenuClick(item)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
