import { useParams, Link } from 'react-router-dom';
import { getStoryBySlug } from '../data/storiesStore';
import './StorySingle.css';

export default function StorySingle() {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);

  if (!story) {
    return (
      <div className="container story-single">
        <p className="not-found">Storia non trovata.</p>
        <Link to="/storie" className="back-link">← Tutte le storie</Link>
      </div>
    );
  }

  const paragraphs = story.body.split('\n\n').filter(Boolean);

  return (
    <article className="story-single">
      <div className="container">
        <Link to="/storie" className="back-link">← Tutte le storie</Link>

        <header className="story-header">
          <span className="story-category">{story.category}</span>
          <h1 className="story-title">{story.title}</h1>
          <div className="story-meta">
            <span>{story.author}</span>
            <span className="dot">·</span>
            <span>{story.date}</span>
            <span className="dot">·</span>
            <span>{story.readTime}</span>
          </div>
        </header>

        <div className="story-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <footer className="story-footer">
          <p>La tua storia può aiutare qualcun altro.</p>
          <Link to="/condividi" className="btn btn-primary">Condividi la tua</Link>
        </footer>
      </div>
    </article>
  );
}
