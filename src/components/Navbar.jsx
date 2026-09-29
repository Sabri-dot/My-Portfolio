import { useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-navbar">
      <div className="container">
        <nav className="navbar-container d-flex align-items-center justify-content-between">
          <a
            href="#home"
            className="navbar-brand-custom"
            onClick={closeMenu}
          >
            <span className="brand-dot"></span>
            BISHA
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link-custom" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" className="nav-link-custom" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" className="nav-link-custom" onClick={closeMenu}>
              Projects
            </a>

            <a
              href="#education"
              className="nav-link-custom"
              onClick={closeMenu}
            >
              Education
            </a>

            <a href="#contact" className="nav-link-custom" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="/cv.pdf"
              className="nav-cv-button"
              download
              onClick={closeMenu}
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar