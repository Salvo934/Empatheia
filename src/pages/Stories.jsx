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

  const activeCategory = categories.find((c) => c.id === filter);
  const count = filtered.length;

  return (
    <div className="stories-page">
      <div className="container">
        <header className="stories-header">
          <p className="stories-label">Esplora</p>
          <h1 className="page-title">Storie</h1>
          <p className="page-subtitle">
            Voci di ragazzi che hanno scelto di non restare in silenzio. Bullismo, ingiustizia, e il coraggio di raccontarsi.
          </p>
          <div className="filter-tabs" role="group" aria-label="Filtra per categoria">
            {categories.map((cat) => {
              const num = cat.id === 'tutte' ? stories.length : stories.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                  aria-pressed={filter === cat.id}
                >
                  <span className="filter-tab-label">{cat.label}</span>
                  <span className="filter-tab-count" aria-hidden="true">{num}</span>
                </button>
              );
            })}
          </div>
        </header>

        {count > 0 && (
          <p className="stories-count">
            {count} {count === 1 ? 'storia' : 'storie'}
            {activeCategory && activeCategory.id !== 'tutte' && (
              <span className="stories-count-category"> in “{activeCategory.label}”</span>
            )}
          </p>
        )}

        <div className="stories-grid">
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} newspaper />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p className="no-results-title">Nessuna storia in questa categoria</p>
            <p className="no-results-hint">Prova a scegliere un altro filtro per esplorare le storie.</p>
          </div>
        )}
      </div>
    </div>
  );
}
