import { ArrowUpRight } from 'lucide-react';
import type { Chapter } from '../data/trip';

type Props = {
  chapter: Chapter;
  index: number;
  onOpen?: () => void;
};

export function ChapterCard({ chapter, index, onOpen }: Props) {
  const className = `chapter-card ${onOpen ? 'is-clickable' : ''}`;

  return (
    <article
      className={className}
      style={{ '--chapter-accent': chapter.accent } as React.CSSProperties}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (onOpen && (event.key === 'Enter' || event.key === ' ')) onOpen();
      }}
      role={onOpen ? 'button' : undefined}
      tabIndex={onOpen ? 0 : undefined}
    >
      <div className="chapter-visual">
        <img src={`${import.meta.env.BASE_URL}${chapter.image}`} alt={chapter.imageAlt} loading="lazy" />
        <span className="chapter-overlay" aria-hidden="true" />
        <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="chapter-symbol" aria-hidden="true">{chapter.symbol}</span>
      </div>

      <div className="chapter-copy">
        <div className="chapter-meta">
          <span>{chapter.dates}</span>
          <span>{chapter.japanese}</span>
        </div>
        <h3>{chapter.place}</h3>
        <h4>{chapter.title}</h4>
        <p>{chapter.teaser}</p>
        <div className="chapter-tags">
          {chapter.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
        <span className="chapter-link">
          {onOpen ? 'Otevřít itinerář' : 'Detail připravíme v dalším sprintu'}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}
