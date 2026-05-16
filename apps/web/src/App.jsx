import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import MenuModal from './components/MenuModal.jsx'
import WAFloat from './components/WAFloat.jsx'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [activePage, setActivePage] = useState('home')

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        <Hero setActivePage={setActivePage} />
        <About />
        <Menu onMenuClick={setActiveModal} />
        <Gallery onGalleryClick={setActiveModal} />
        <Location />
      </main>
      <Footer />
      <WAFloat />
      {activeModal && (
        <MenuModal item={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  )
}

export default App
