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
            Suasana & <em>Hidangan</em>
          </h2>

          <div className="gallery-grid">
            {galleryItems.map((gItem) => {
              const menuItem = gItem.menuId
                ? menuData.find(m => m.id === gItem.menuId)
                : null
              
              const displayImage = gItem.image || (menuItem ? menuItem.image : null)

              return (
                <div
                  key={gItem.id}
                  className={`gal-item ${gItem.menuId ? 'gal-item--clickable' : ''}`}
                  onClick={() => handleClick(gItem)}
                >
                  {displayImage ? (
                    <img src={displayImage} alt={gItem.label} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: 'var(--krem2)' }}>
                      {gItem.label.includes('Suasana') ? '🏡' : '🥘'}
                    </div>
                  )}
                  <div className="gal-overlay">
                    <span className="gal-label">{gItem.label}</span>
                    {gItem.menuId && <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--kuning)' }}>Klik untuk pesan</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
