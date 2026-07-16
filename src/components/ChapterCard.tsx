import { ArrowUpRight } from 'lucide-react';
import type { Chapter } from '../data/trip';

type Props = {
  chapter: Chapter;
  index: number;
};

export function ChapterCard({ chapter, index }: Props) {
  return (
    <article className="chapter-card" style={{ '--chapter-accent': chapter.accent } as React.CSSProperties}>
      <div className="chapter-visual" aria-hidden="true">
        <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="chapter-symbol">{chapter.symbol}</span>
        <span className="chapter-orb" />
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
          Kapitola připravena pro další sprint <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}
