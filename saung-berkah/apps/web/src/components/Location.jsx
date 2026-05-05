import { restaurantInfo } from '../data/menuData.js'

export default function Location() {
  const infos = [
    { icon: '📍', label: 'Alamat', value: restaurantInfo.address },
    { icon: '🕐', label: 'Jam Buka', value: `${restaurantInfo.openDays} · ${restaurantInfo.openHours}` },
    { icon: '📞', label: 'WhatsApp', value: `+${restaurantInfo.whatsapp}` }
  ]

  return (
    <section className="location" id="lokasi">
      <div className="container">
        <div className="location__inner">
          <div className="location__info">
            <span className="section__tag section__tag--light">Lokasi</span>
            <h2 className="section__title section__title--light">
              Temukan <em>Kami</em>
            </h2>

            <div className="location__details">
              {infos.map((info) => (
                <div key={info.label} className="location__detail">
                  <div className="location__detail-icon">{info.icon}</div>
                  <div>
                    <strong>{info.label}</strong>
                    <span>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="location__map">
            <div className="location__map-placeholder">
              <span className="location__map-icon">🗺️</span>
              <p>Saung Berkah Waras</p>
              <p className="location__map-address">{restaurantInfo.address}</p>
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                📍 Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
