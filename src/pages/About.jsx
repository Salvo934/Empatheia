import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <header className="about-header">
          <h1 className="page-title">Chi siamo</h1>
          <p className="about-tagline">
            Empatheia dà voce a chi non ne ha.
          </p>
        </header>

        <div className="about-content">
          <section className="about-block">
            <h2>La nostra missione</h2>
            <p>
            Empatheia nasce per dare voce a chi spesso resta in silenzio. Raccontiamo storie di bullismo, ingiustizia e di tutte quelle situazioni in cui qualcuno non viene ascoltato o compreso.
            Crediamo che ogni storia abbia valore: nessuna voce è troppo piccola, nessun dolore è troppo insignificante. Attraverso il racconto vogliamo offrire sostegno a chi si sente solo e sensibilizzare le persone sull’importanza dell’ascolto e dell’empatia.
            Il nostro obiettivo è trasformare le esperienze personali in consapevolezza collettiva, perché parlare di ciò che accade significa iniziare a cambiarlo..
            </p>
          </section>

          <section className="about-block">
            <h2>Perché “Empatheia”</h2>
            <p>
              Empatheia è empatia in greco. Crediamo che ascoltare e dare spazio alle storie degli altri 
              sia il primo passo per un mondo più giusto. Chi subisce bullismo o ingiustizia spesso 
              tace per paura o vergogna: questo spazio è per chi vuole parlare, in forma anonima o no, 
              e per chi vuole leggere e capire.
            </p>
          </section>

          <section className="about-block">
            <h2>Come funziona</h2>
            <p>
              Puoi <Link to="/storie">leggere le storie</Link> già pubblicate e, se vuoi, 
              <Link to="/condividi"> condividere la tua</Link>. Le storie sono curate con rispetto: 
              non giudichiamo, non banalizziamo. L’obiettivo è dare visibilità a esperienze che troppo 
              spesso restano nascoste e far sentire meno soli chi le vive.
            </p>
          </section>

          <section className="about-cta">
            <p>Hai una storia da raccontare? Questo è il tuo spazio.</p>
            <Link to="/condividi" className="btn btn-primary">Scrivi la tua storia</Link>
          </section>
        </div>
      </div>
    </div>
  );
}
