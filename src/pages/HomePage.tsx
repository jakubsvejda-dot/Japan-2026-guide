import { Hero } from '../components/Hero';
import { JourneyMap } from '../components/JourneyMap';
import { ChapterCard } from '../components/ChapterCard';
import { chapters } from '../data/trip';

type Props = { onOpenChapter: (id: string) => void };

export function HomePage({ onOpenChapter }: Props) {
  return (
    <>
      <Hero />
      <JourneyMap />

      <section className="section">
        <div className="section-heading">
          <div>
          <span className="eyebrow">CO ZAŽIJEME</span>
          <h2>Osm různých světů</h2>
          <p>
              Každá část cesty má vlastní rytmus, vlastní světlo a jeden hlavní motiv.
            </p>
          </div>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <ChapterCard
              chapter={chapter}
              index={index}
              key={chapter.id}
              onOpen={() => onOpenChapter(chapter.id)}
            />
          ))}
        </div>
      </section>

    </>
  );
}
