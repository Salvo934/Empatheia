import { Link } from 'react-router-dom';
import './StoryCard.css';

export default function StoryCard({ story, featured = false, newspaper = false }) {
  const { slug, title, excerpt, author, date, category, readTime } = story;

  return (
    <article className={`story-card ${featured ? 'story-card--featured' : ''} ${newspaper ? 'story-card--newspaper' : ''}`}>
      <Link to={`/storie/${slug}`} className="story-card-link">
        <span className="story-card-category">{category}</span>
        <h2 className="story-card-title">{title}</h2>
        <p className="story-card-excerpt">{excerpt}</p>
        <footer className={`story-card-meta ${newspaper ? 'story-card-meta--row' : ''}`}>
          <span className="story-card-meta-text">
            <span>{author}</span>
            <span className="dot">·</span>
            <span>{date}</span>
            <span className="dot">·</span>
            <span>{readTime}</span>
          </span>
          {newspaper && (
            <span className="story-card-btn">Leggi</span>
          )}
        </footer>
      </Link>
    </article>
  );
}
