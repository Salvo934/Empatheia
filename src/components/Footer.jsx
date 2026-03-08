import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shape" aria-hidden="true" />
      <div className="footer-glow" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/logoN:F.svg" alt="" className="footer-logo-img" />
            Empatheia
          </Link>
          <p className="footer-tagline">
            Storie di chi non ha voce. Qui ogni storia trova ascolto.
          </p>
        </div>
        <nav className="footer-nav">
          <span className="footer-nav-label">Esplora</span>
          <Link to="/storie">Storie</Link>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/condividi">Scrivi la tua</Link>
        </nav>
        <div className="footer-help">
          <span className="footer-help-label">Se hai bisogno di aiuto</span>
          <div className="footer-help-links">
            <a href="tel:19696">Telefono Azzurro 19696</a>
            <a href="tel:112">Emergenza 112</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-legal">© {new Date().getFullYear()} Empatheia</p>
          <span className="footer-dot" aria-hidden="true">·</span>
          <p className="footer-message">Ogni voce conta.</p>
        </div>
      </div>
    </footer>
  );
}
