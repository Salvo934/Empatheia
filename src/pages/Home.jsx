import { Link } from 'react-router-dom';
import { getStories } from '../data/storiesStore';
import StoryCard from '../components/StoryCard';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

export default function Home() {
  const stories = getStories();
  const featured = stories[0];
  const rest = stories.slice(1, 5);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-corners" aria-hidden="true">
          <span className="hero-corner hero-corner--tl">Bullismo</span>
          <span className="hero-corner hero-corner--tr">ingiustizia</span>
          <span className="hero-corner hero-corner--bl">coraggio</span>
          <span className="hero-corner hero-corner--br">rinascita</span>
        </div>
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-bg-blob hero-bg-blob--1" />
          <span className="hero-bg-blob hero-bg-blob--2" />
        </div>
        <div className="container hero-inner">
          <h1 className="hero-title">
            <span className="hero-title-typewriter">
              Storie di chi non ha voce<span className="hero-title-cursor" aria-hidden="true">|</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Empatheia è lo spazio dove i ragazzi raccontano quello che vivono e trovano ascolto.
          </p>
          <div className="hero-actions">
            <Link to="/storie" className="btn btn-primary hero-btn">Leggi le storie</Link>
            <Link to="/condividi" className="btn btn-secondary hero-btn">Condividi la tua</Link>
          </div>
        </div>
      </section>

      <section className="featured manifesto-section">
        <div className="container container--wide">
          <div className="featured-split">
            <ScrollReveal>
              <div className="manifesto">
                <p className="manifesto-label">Perché siamo qui</p>
                <h2 className="manifesto-title">Il manifesto</h2>
                <div className="manifesto-content">
                  <p className="manifesto-intro">
                    Empatheia è nato perché troppi ragazzi vivono cose che nessuno ascolta. Bullismo, ingiustizia, solitudine:
                    spesso non c’è uno spazio sicuro dove dire «è successo anche a me». <strong>Questo blog è quel spazio.</strong>
                  </p>
                  <p className="manifesto-body">
                    Qui le storie non sono notizie: sono voci. Ogni racconto è un modo per uscire dal silenzio e per far
                    sentire chi legge che non è solo. La prima storia che abbiamo pubblicato ha aperto la strada:
                    da lì è nato tutto.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="featured-story-col">
                <h3 className="manifesto-story-label">La prima storia di Empatheia</h3>
                <StoryCard story={featured} featured />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="stories-grid-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-label">Ultime storie</h2>
              <Link to="/storie" className="link-all">Vedi tutte</Link>
            </div>
          </ScrollReveal>
          <div className="stories-grid">
            {rest.map((story, i) => (
              <ScrollReveal key={story.id} stagger={i * 120}>
                <StoryCard story={story} newspaper />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <p className="cta-text">La tua storia può dare forza a qualcun altro.</p>
            <Link to="/condividi" className="btn btn-primary">Scrivi la tua storia</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
