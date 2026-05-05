// Import Menu Images
import imgEsJeruk from '../assets/menu_images/Es_jeruk.jpg'
import imgEsTehJumbo from '../assets/menu_images/Es_teh_gelas_jumbo.jpg'
import imgJusNaga from '../assets/menu_images/Jus_buah_naga.jpg'
import imgKopiTubruk from '../assets/menu_images/Kopi-tubruk.jpg'
import imgJusMangga from '../assets/menu_images/Mangga_gedong_mango_juice.JPG'
import imgMendoan from '../assets/menu_images/Mendoan.jpg'
import imgPopIceTaro from '../assets/menu_images/Pop_Ice_Rasa_Taro.jpg'
import imgAirMineral from '../assets/menu_images/Sebotol_air.jpg'
import imgTehAnget from '../assets/menu_images/Teh_Anget.jpg'
import imgBaksoHalus from '../assets/menu_images/baksohalus.png'
import imgBaksoIga from '../assets/menu_images/baksoiga.png'
import imgCahKangkung from '../assets/menu_images/cahkangkung.jpg'
import imgJusAlpukat from '../assets/menu_images/jusalpukat.jpg'
import imgKentangGoreng from '../assets/menu_images/kentanggoreng.jpg'
import imgPaketAyamBakar from '../assets/menu_images/paketayamgorengbakar.png'
import imgPaketAyamPenyet from '../assets/menu_images/paketayampenyet.JPG'

// Import Suasana Images
import imgGazebo from '../assets/images/tentangkamigaszebo.png'
import imgDepantoko from '../assets/images/depantoko.png'
import imgHeroMenu from '../assets/images/menu.png'

// Data menu Saung Berkah Waras
export const menuData = [
  // ===== MAKANAN UTAMA =====
  {
    id: 1,
    category: 'makanan',
    name: 'Paket Ayam Goreng/Bakar',
    description: 'Nasi putih dengan pilihan ayam goreng atau bakar yang meresap bumbunya, disajikan dengan lalapan dan sambal khas Saung.',
    price: 18000,
    image: imgPaketAyamBakar,
    tags: ['Populer', 'Bestseller'],
  },
  {
    id: 2,
    category: 'makanan',
    name: 'Paket Ayam Penyet',
    description: 'Ayam goreng yang dipenyet dengan sambal bawang pedas nampol, disajikan lengkap dengan nasi dan lalapan segar.',
    price: 19000,
    image: imgPaketAyamPenyet,
    tags: ['Pedas', 'Favorit'],
  },
  {
    id: 3,
    category: 'makanan',
    name: 'Bakso Iga Spesial',
    description: 'Bakso urat besar dengan potongan iga sapi yang empuk di dalamnya, disajikan dengan kuah kaldu sapi asli yang gurih.',
    price: 25000,
    image: imgBaksoIga,
    tags: ['Rekomendasi'],
  },
  {
    id: 4,
    category: 'makanan',
    name: 'Bakso Halus',
    description: 'Bakso sapi halus kenyal dengan kuah kaldu bening yang segar, lengkap dengan mie, bihun, dan sayuran.',
    price: 15000,
    image: imgBaksoHalus,
    tags: ['Klasik'],
  },
  {
    id: 5,
    category: 'makanan',
    name: 'Cah Kangkung',
    description: 'Kangkung segar yang ditumis dengan bumbu tauco dan irisan cabai, memberikan rasa gurih dan sedikit pedas.',
    price: 10000,
    image: imgCahKangkung,
    tags: ['Sayuran'],
  },

  // ===== CAMILAN =====
  {
    id: 6,
    category: 'camilan',
    name: 'Tempe Mendoan',
    description: 'Tempe lebar yang digoreng setengah matang dengan adonan tepung berbumbu dan irisan daun bawang. Disajikan hangat dengan sambal kecap.',
    price: 10000,
    image: imgMendoan,
    tags: ['Gurih'],
  },
  {
    id: 7,
    category: 'camilan',
    name: 'Kentang Goreng',
    description: 'Potongan kentang yang digoreng hingga renyah di luar and lembut di dalam, ditaburi sedikit garam atau bumbu penyedap.',
    price: 12000,
    image: imgKentangGoreng,
    tags: ['Renyah'],
  },

  // ===== MINUMAN =====
  {
    id: 8,
    category: 'minuman',
    name: 'Jus Alpukat',
    description: 'Jus alpukat kental yang manis dan creamy, disajikan dengan siraman susu kental manis cokelat.',
    price: 15000,
    image: imgJusAlpukat,
    tags: ['Segar'],
  },
  {
    id: 9,
    category: 'minuman',
    name: 'Jus Mangga Gedong',
    description: 'Jus dari mangga gedong gincu pilihan yang manis dan harum, memberikan kesegaran alami buah tropis.',
    price: 15000,
    image: imgJusMangga,
    tags: ['Segar'],
  },
  {
    id: 10,
    category: 'minuman',
    name: 'Jus Buah Naga',
    description: 'Jus buah naga merah yang segar dan kaya akan serat, manisnya pas dan menyehatkan.',
    price: 13000,
    image: imgJusNaga,
    tags: ['Sehat'],
  },
  {
    id: 11,
    category: 'minuman',
    name: 'Es Jeruk Segar',
    description: 'Perasan jeruk asli yang dicampur dengan air gula dan es batu, sangat pas untuk melepas dahaga.',
    price: 10000,
    image: imgEsJeruk,
    tags: ['Klasik'],
  },
  {
    id: 12,
    category: 'minuman',
    name: 'Es Teh Gelas Jumbo',
    description: 'Teh manis dingin yang disajikan dalam gelas ukuran jumbo, cocok untuk menemani santapan pedas Anda.',
    price: 7000,
    image: imgEsTehJumbo,
    tags: ['Favorit'],
  },
  {
    id: 13,
    category: 'minuman',
    name: 'Teh Anget',
    description: 'Seduhan teh berkualitas yang disajikan hangat, memberikan rasa tenang dan nyaman setelah makan.',
    price: 5000,
    image: imgTehAnget,
    tags: ['Hangat'],
  },
  {
    id: 14,
    category: 'minuman',
    name: 'Pop Ice Taro',
    description: 'Minuman blender rasa taro yang manis dan dingin, favorit bagi penyuka rasa talas yang unik.',
    price: 8000,
    image: imgPopIceTaro,
    tags: ['Manis'],
  },
  {
    id: 15,
    category: 'minuman',
    name: 'Kopi Tubruk',
    description: 'Kopi hitam khas nusantara dengan ampas, memberikan rasa kopi yang kuat dan aroma yang menggugah selera.',
    price: 10000,
    image: imgKopiTubruk,
    tags: ['Kopi'],
  },
  {
    id: 16,
    category: 'minuman',
    name: 'Air Mineral',
    description: 'Air mineral kemasan botol untuk memastikan Anda tetap terhidrasi dengan baik.',
    price: 5000,
    image: imgAirMineral,
    tags: ['Netral'],
  }
]

export const menuCategories = [
  { id: 'semua', label: 'Semua' },
  { id: 'makanan', label: 'Makanan' },
  { id: 'camilan', label: 'Camilan' },
  { id: 'minuman', label: 'Minuman' }
]

export const galleryItems = [
  { id: 1, label: 'Suasana Gazebo', image: imgGazebo, menuId: null },
  { id: 2, label: 'Bakso Iga Spesial', menuId: 3 },
  { id: 3, label: 'Tampilan Depan', image: imgDepantoko, menuId: null },
  { id: 4, label: 'Paket Ayam Penyet', menuId: 2 },
  { id: 5, label: 'Daftar Menu', image: imgHeroMenu, menuId: null },
  { id: 6, label: 'Es Teh Jumbo', menuId: 12 }
]

export const restaurantInfo = {
  name: 'Saung Berkah Waras',
  tagline: 'Kuliner Nikmat · Harga Bersahabat',
  whatsapp: '628123456789',
  grabfood: 'https://food.grab.com',
  shopeefood: 'https://shopeefood.com',
  gofood: 'https://gofood.co.id',
  address: 'Jl. Contoh No. 123, Bandung, Jawa Barat',
  openDays: 'Setiap Hari',
  openHours: '08.00 – 21.00 WIB',
  mapsUrl: 'https://maps.app.goo.gl/iuDoztRb8tAECFcJ7'
}
