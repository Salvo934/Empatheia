import { useState } from 'react';
import { getStories, categories } from '../data/storiesStore';
import StoryCard from '../components/StoryCard';
import './Stories.css';

export default function Stories() {
  const [filter, setFilter] = useState('tutte');
  const stories = getStories();
  const filtered =
    filter === 'tutte'
      ? stories
      : stories.filter((s) => s.category === filter);

  return (
    <div className="stories-page">
      <div className="container">
        <header className="stories-header">
          <h1 className="page-title">Storie</h1>
          <p className="page-subtitle">
            Voci di ragazzi che hanno scelto di non restare in silenzio. Bullismo, ingiustizia, e il coraggio di raccontarsi.
          </p>
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        <div className="stories-grid">
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">Nessuna storia in questa categoria.</p>
        )}
      </div>
    </div>
  );
}
