import imgGazebo from '../assets/images/tentangkamigaszebo.png'
import imgMakanan from '../assets/images/tentangkamimakanan.png'

// SVG Icons
const IconLeaf = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-8 8c-1 0-2 0-3-.4"></path><path d="m11 20 2-2"></path><path d="M5 21c.2-1 1-3.11 3-5.22"></path></svg>
)

const IconChef = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"></path><path d="M6 22h12"></path><path d="M7 14c0-3.87 3.13-7 7-7h1"></path><path d="M18 14V8c0-3.31-2.69-6-6-6S6 4.69 6 8v6"></path><path d="M11 11h2"></path></svg>
)

const IconTag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
)

export default function About() {
  const features = [
    {
      icon: <IconLeaf />,
      title: 'Bahan Segar Setiap Hari',
      desc: 'Kami memilih bahan-bahan segar langsung dari pasar setiap pagi untuk kualitas terbaik.'
    },
    {
      icon: <IconChef />,
      title: 'Resep Tradisional Autentik',
      desc: 'Dimasak dengan resep turun-temurun yang menjaga cita rasa khas Sunda tetap lezat.'
    },
    {
      icon: <IconTag />,
      title: 'Harga Sangat Terjangkau',
      desc: 'Mulai dari Rp 5.000 saja! Makanan enak seharusnya bisa dinikmati semua kalangan.'
    }
  ]

  return (
    <section className="about-wrap" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-img-stack">
            <div className="aimg aimg1">
              <img src={imgGazebo} alt="Suasana Saung Gazebo" />
            </div>
            <div className="aimg aimg2">
              <img src={imgMakanan} alt="Masakan Khas Saung" />
            </div>
            <div className="about-ornament">
              Sejak<br />2018
            </div>
          </div>

          <div>
            <span className="sec-tag">Tentang Kami</span>
            <h2 className="sec-title">
              Saung Nikmat,<br />
              <em>Rasa Autentik</em>
            </h2>
            <p className="sec-desc">
              Saung Berkah Waras hadir untuk menghadirkan cita rasa masakan rumahan Sunda
              yang autentik dengan harga yang bersahabat. Kami percaya bahwa makanan enak
              tidak harus mahal — cukup penuh kasih sayang dan bahan-bahan pilihan.
            </p>

            <div className="about-features">
              {features.map((feat, i) => (
                <div key={i} className="feat-item" style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="feat-icon" style={{ 
                    color: 'var(--kuning)', 
                    background: 'rgba(245, 166, 35, 0.1)', 
                    padding: '12px', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {feat.icon}
                  </div>
                  <div className="feat-text">
                    <strong style={{ display: 'block', marginBottom: '0.3rem', fontSize: '1.1rem', color: 'white' }}>{feat.title}</strong>
                    <span style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.5' }}>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
