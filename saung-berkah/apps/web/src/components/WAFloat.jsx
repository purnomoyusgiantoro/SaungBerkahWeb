import { restaurantInfo } from '../data/menuData.js'

export default function WAFloat() {
  const waMessage = encodeURIComponent(
    'Halo Saung Berkah Waras, saya mau pesan makanan. Bisa bantu saya?'
  )

  return (
    <a
      href={`https://wa.me/${restaurantInfo.whatsapp}?text=${waMessage}`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      title="Chat di WhatsApp"
    >
      <span className="wa-float__icon">💬</span>
      <span className="wa-float__label">WhatsApp</span>
    </a>
  )
}
