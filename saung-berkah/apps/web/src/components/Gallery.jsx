import { galleryItems, menuData } from '../data/menuData.js'
import { getCategoryEmoji, getCategoryColor } from '../utils/helpers.js'

export default function Gallery({ onGalleryClick }) {
  const handleClick = (galleryItem) => {
    if (galleryItem.menuId) {
      const menuItem = menuData.find(m => m.id === galleryItem.menuId)
      if (menuItem) onGalleryClick(menuItem)
    }
  }

  return (
    <section className="gallery" id="galeri">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Galeri</span>
          <h2 className="section__title">
            Lihat <em>Semuanya</em>
          </h2>
          <p className="section__desc">
            Klik foto untuk melihat detail menu dan langsung pesan!
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((gItem) => {
            const menuItem = gItem.menuId
              ? menuData.find(m => m.id === gItem.menuId)
              : null

            return (
              <div
                key={gItem.id}
                className={`gallery__item gallery__item--${gItem.id} ${gItem.menuId ? 'gallery__item--clickable' : ''}`}
                onClick={() => handleClick(gItem)}
                role={gItem.menuId ? 'button' : undefined}
                tabIndex={gItem.menuId ? 0 : undefined}
                onKeyDown={(e) => e.key === 'Enter' && gItem.menuId && handleClick(gItem)}
                aria-label={gItem.menuId ? `Lihat detail ${gItem.label}` : gItem.label}
              >
                <div
                  className="gallery__item-bg"
                  style={{
                    background: menuItem
                      ? getCategoryColor(menuItem.category)
                      : 'linear-gradient(135deg, #3B1F0A, #5C3015)'
                  }}
                >
                  <span className="gallery__item-emoji">
                    {menuItem ? getCategoryEmoji(menuItem.category) : '🏡'}
                  </span>
                </div>

                <div className="gallery__item-overlay">
                  <span className="gallery__item-label">{gItem.label}</span>
                  {gItem.menuId && (
                    <span className="gallery__item-action">Tap untuk pesan →</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
