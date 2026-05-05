export default function About() {
  const features = [
    {
      icon: '🍃',
      title: 'Bahan Segar Setiap Hari',
      desc: 'Kami memilih bahan-bahan segar langsung dari pasar setiap pagi untuk memastikan kualitas terbaik.'
    },
    {
      icon: '👨‍🍳',
      title: 'Resep Tradisional Autentik',
      desc: 'Dimasak dengan resep turun-temurun yang menjaga cita rasa khas Sunda tetap autentik dan lezat.'
    },
    {
      icon: '💰',
      title: 'Harga Sangat Terjangkau',
      desc: 'Mulai dari Rp 5.000 saja! Kami percaya makanan enak seharusnya bisa dinikmati semua kalangan.'
    }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__visual">
            <div className="about__img-main">
              <div className="about__img-placeholder about__img-placeholder--1">
                <span>🏡</span>
                <p>Suasana Saung</p>
              </div>
            </div>
            <div className="about__img-secondary">
              <div className="about__img-placeholder about__img-placeholder--2">
                <span>🍲</span>
                <p>Masakan Khas</p>
              </div>
            </div>
            <div className="about__badge-ornament">
              <span className="about__badge-year">Sejak</span>
              <span className="about__badge-num">2018</span>
            </div>
          </div>

          <div className="about__content">
            <span className="section__tag">Tentang Kami</span>
            <h2 className="section__title">
              Saung Nikmat,<br />
              <em>Rasa Autentik</em>
            </h2>
            <p className="section__desc">
              Saung Berkah Waras hadir untuk menghadirkan cita rasa masakan rumahan Sunda
              yang autentik dengan harga yang bersahabat. Kami percaya bahwa makanan enak
              tidak harus mahal — cukup penuh kasih sayang dan bahan-bahan pilihan.
            </p>

            <div className="about__features">
              {features.map((feat, i) => (
                <div key={i} className="about__feature">
                  <span className="about__feature-icon">{feat.icon}</span>
                  <div>
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
