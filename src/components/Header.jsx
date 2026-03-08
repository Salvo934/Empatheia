import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/storie', label: 'Storie' },
  { to: '/chi-siamo', label: 'Chi siamo' },
];

const bannerLinks = [
  ...nav,
  { to: '/condividi', label: 'Scrivi la tua storia' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/LogoDefinitivo.png" alt="Empatheia" className="logo-img" />
          <span className="logo-text">Empatheia</span>
        </Link>

        <nav className="nav" aria-label="Menu principale">
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/condividi" className="nav-cta header-cta">
          Scrivi la tua storia
        </Link>
      </div>

      <div className="header-banner" aria-label="Navigazione">
        <div className="banner-track">
          {[...bannerLinks, ...bannerLinks].map(({ to, label }, i) => (
            <Link
              key={`${to}-${i}`}
              to={to}
              className={`banner-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
