import { restaurantInfo } from '../data/menuData.js'

// SVG Icons
const IconMapPin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
)

const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
)

const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
)

const IconWA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04a11.771 11.771 0 001.591 5.919L0 24l6.149-1.613a11.771 11.771 0 005.9 1.594h.005c6.632 0 12.032-5.403 12.035-12.042a11.762 11.762 0 00-3.489-8.452z"/></svg>
)

export default function Location() {
  const infos = [
    { 
      icon: <IconMapPin />, 
      label: 'Alamat', 
      value: 'Sawah, Surotrunan, Kec. Alian, Kabupaten Kebumen, Jawa Tengah 54313' 
    },
    { 
      icon: <IconClock />, 
      label: 'Jam Operasional', 
      value: 'Senin – Minggu: 08.00 – 21.00 WIB (Buka Setiap Hari)' 
    },
    { 
      icon: <IconPhone />, 
      label: 'WhatsApp', 
      value: 'Hubungi kami untuk reservasi meja atau pesan take away' 
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
            <p className="sec-desc">
              Kunjungi Saung Berkah Waras untuk menikmati hidangan autentik di tengah suasana asri Kebumen.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
              {infos.map((info, i) => (
                <div key={i} className="loc-item" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div className="loc-icon" style={{ 
                    color: 'var(--kuning)', 
                    background: 'rgba(245, 166, 35, 0.1)', 
                    padding: '12px', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.1rem', color: 'white' }}>{info.label}</strong>
                    <span style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.6' }}>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                style={{ padding: '14px 28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', fontWeight: 700 }}
              >
                <IconWA /> Chat WhatsApp
              </a>
              <a 
                href={restaurantInfo.mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary"
                style={{ padding: '14px 28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', fontWeight: 700 }}
              >
                <IconMapPin /> Buka Google Maps
              </a>
            </div>
          </div>

          <div className="map-placeholder" style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', minHeight: '450px', background: '#111', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=SAUNG%20BERKAH%20WARAS%20Kebumen&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
