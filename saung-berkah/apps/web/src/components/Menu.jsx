import { useState } from 'react'
import { menuData, menuCategories } from '../data/menuData.js'
import MenuCard from './MenuCard.jsx'

export default function Menu({ onMenuClick }) {
  const [activeCategory, setActiveCategory] = useState('semua')

  const filtered = activeCategory === 'semua'
    ? menuData
    : menuData.filter(item => item.category === activeCategory)

  return (
    <section className="menu-wrap" id="menu">
      <div className="container">
        <div className="menu-inner">
          <span className="sec-tag">Menu Kami</span>
          <h2 className="sec-title">
            Pilihan Menu <em>Terlezat</em>
          </h2>
          <p className="sec-desc">
            Klik foto menu untuk melihat detail dan langsung pesan!
          </p>

          <div className="menu-tabs">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filtered.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onClick={() => onMenuClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
