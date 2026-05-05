export default function About() {
  const features = [
    {
      icon: '🍃',
      title: 'Bahan Segar Setiap Hari',
      desc: 'Kami memilih bahan-bahan segar langsung dari pasar setiap pagi untuk kualitas terbaik.'
    },
    {
      icon: '👨‍🍳',
      title: 'Resep Tradisional Autentik',
      desc: 'Dimasak dengan resep turun-temurun yang menjaga cita rasa khas Sunda tetap lezat.'
    },
    {
      icon: '💰',
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
              <div style={{ fontSize: '4rem' }}>🏡</div>
            </div>
            <div className="aimg aimg2">
              <div style={{ fontSize: '3rem' }}>🍲</div>
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
                <div key={i} className="feat-item">
                  <div className="feat-icon">{feat.icon}</div>
                  <div className="feat-text">
                    <strong>{feat.title}</strong>
                    <span>{feat.desc}</span>
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
