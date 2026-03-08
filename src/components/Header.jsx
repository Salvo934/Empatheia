import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/storie', label: 'Storie' },
    { to: '/chi-siamo', label: 'Chi siamo' },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/FaviconSito6.png" alt="" className="logo-img" />
          <span className="logo-text">Empatheia</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/condividi"
            className="nav-cta nav-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Scrivi la tua storia
          </Link>
        </nav>

        <Link
          to="/condividi"
          className="nav-cta header-cta"
          onClick={() => setMenuOpen(false)}
        >
          Scrivi la tua storia
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </header>
  );
}
