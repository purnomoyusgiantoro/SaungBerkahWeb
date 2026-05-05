import { restaurantInfo } from '../data/menuData.js'

export default function Location() {
  const infos = [
    { 
      icon: 'MAP', 
      label: 'Alamat', 
      value: 'Cek di Google Maps dengan nama "Saung Berkah Waras" untuk arah lengkap' 
    },
    { 
      icon: 'JAM', 
      label: 'Jam Operasional', 
      value: 'Senin – Minggu: 08.00 – 21.00 WIB (Buka Setiap Hari)' 
    },
    { 
      icon: 'WA', 
      label: 'WhatsApp', 
      value: 'Hubungi kami untuk reservasi meja atau pesan take away' 
    },
    { 
      icon: 'IG', 
      label: 'Media Sosial', 
      value: 'Follow @saungberkahwaras di Instagram & Facebook untuk promo terbaru' 
    }
  ]

  return (
    <section className="loc-wrap" id="lokasi">
      <div className="container">
        <div className="loc-inner">
          <div className="loc-info">
            <span className="sec-tag">Lokasi & Kontak</span>
            <h2 className="sec-title">
              Temukan <em>Kami</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {infos.map((info) => (
                <div key={info.label} className="loc-item">
                  <div className="loc-icon" style={{ fontSize: '0.7rem', fontWeight: 900 }}>{info.icon}</div>
                  <div>
                    <strong>{info.label}</strong>
                    <span>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="map-btn"
                style={{ background: '#25D366', color: '#fff' }}
              >
                Chat WhatsApp
              </a>
              <a 
                href={restaurantInfo.mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="map-btn"
              >
                Buka Google Maps
              </a>
            </div>
          </div>

          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <p style={{ fontWeight: 800, color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Saung Berkah Waras</p>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Klik tombol di samping untuk rute navigasi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
