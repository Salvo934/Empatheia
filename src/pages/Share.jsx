import { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORIE_EMAIL } from '../config/email';
import './Share.css';

export default function Share() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    author: '',
    title: '',
    category: 'Bullismo',
    story: '',
  });
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAcceptPrivacy(checked);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptPrivacy) return;
    const author = form.author?.trim() || 'Anonimo';
    const title = form.title?.trim() || '(Senza titolo)';
    const category = form.category?.trim() || 'Bullismo';
    const body = form.story?.trim() || '';

    const subject = `[Empatheia] Nuova storia: ${title}`;
    const bodyText = `Nuova storia inviata da Empatheia

--- Firma ---
${author}

--- Titolo ---
${title}

--- Tema ---
${category}

--- Storia ---

${body}

---
(Ricevuta il ${new Date().toLocaleString('it-IT')})`;

    const mailto = `mailto:${encodeURIComponent(STORIE_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailto;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="share-page share-page--success">
        <div className="container share-success">
          <h1 className="page-title">Grazie</h1>
          <p>
            Si è aperto il tuo programma di posta con la storia già scritta. Invia l’email per inviarmela.
            La riceverò, la correggerò se serve e la pubblicherò sul sito. <strong>Non sei solo.</strong>
          </p>
          <Link to="/storie" className="btn btn-primary">Leggi le altre storie</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="share-page">
      <div className="container">
        <header className="share-header">
          <h1 className="page-title">Condividi la tua storia</h1>
          <p className="share-intro">
            Questo spazio è solo per te. Puoi restare anonimo: nessun giudizio, solo ascolto. 
            La tua voce conta e qui è al sicuro.
          </p>
        </header>

        <div className="share-form-wrap">
        <form className="share-form" onSubmit={handleSubmit}>
          <label>
            <span>Come vuoi firmarti?</span>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Nome, pseudonimo o lascia vuoto per Anonimo"
            />
          </label>
          <label>
            <span>Titolo della storia (breve)</span>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Es. Il giorno in cui ho deciso di parlare"
              required
            />
          </label>
          <label>
            <span>Tema</span>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="Bullismo">Bullismo</option>
              <option value="Ingiustizia">Ingiustizia</option>
              <option value="Storia di coraggio">Storia di coraggio</option>
              <option value="Altro">Altro</option>
            </select>
          </label>
          <label>
            <span>La tua storia</span>
            <textarea
              name="story"
              value={form.story}
              onChange={handleChange}
              placeholder="Scrivi qui quello che vuoi raccontare. Nessun giudizio, solo ascolto."
              rows={10}
              required
            />
          </label>
          <div className="share-form-consent">
            <label className="share-form-checkbox">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={acceptPrivacy}
                onChange={handleChange}
                required
                aria-describedby="consent-description"
              />
              <span id="consent-description">
                Accetto la{' '}
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-form-privacy-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </Link>{' '}
                e autorizzo la pubblicazione della mia storia sul sito.
              </span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-submit" disabled={!acceptPrivacy}>
            Invia la storia
          </button>
        </form>
        </div>

        <p className="share-help">
          Se stai vivendo una situazione difficile e hai bisogno di parlare con qualcuno: 
          <a href="tel:19696"> Telefono Azzurro 19696</a>, <a href="tel:112">Emergenza 112</a>.
        </p>
      </div>
    </div>
  );
}
