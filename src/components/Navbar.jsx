import { useState } from 'react';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar navbar-portfolio fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-icon"><FiCode /></span>
          sabri<span className="brand-dot">.</span>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <span>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;