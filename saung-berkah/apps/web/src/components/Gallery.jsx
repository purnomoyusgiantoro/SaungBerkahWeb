import { galleryItems, menuData } from '../data/menuData.js'

export default function Gallery({ onGalleryClick }) {
  const handleClick = (galleryItem) => {
    if (galleryItem.menuId) {
      const menuItem = menuData.find(m => m.id === galleryItem.menuId)
      if (menuItem) onGalleryClick(menuItem)
    }
  }

  return (
    <section className="gallery-wrap" id="galeri">
      <div className="container">
        <div className="gallery-inner">
          <span className="sec-tag">Galeri</span>
          <h2 className="sec-title">
            Lihat <em>Semuanya</em>
          </h2>
          <p className="sec-desc">
            Klik foto untuk melihat detail menu dan langsung pesan!
          </p>

          <div className="gallery-grid">
            {galleryItems.map((gItem) => (
              <div
                key={gItem.id}
                className="gal-item"
                onClick={() => handleClick(gItem)}
              >
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                  {gItem.label === 'Suasana Saung' ? '🏡' : '🥘'}
                </div>
                <div className="gal-overlay">
                  <span className="gal-label">{gItem.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
