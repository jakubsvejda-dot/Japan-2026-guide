import { Hero } from '../components/Hero';
import { JourneyMap } from '../components/JourneyMap';
import { ChapterCard } from '../components/ChapterCard';
import { chapters } from '../data/trip';

export function HomePage() {
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
              Každá část cesty má vlastní rytmus. Úvod je krátký; podrobnosti budou patřit
              jednotlivým dnům a konkrétním přesunům.
            </p>
          </div>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <ChapterCard chapter={chapter} index={index} key={chapter.id} />
          ))}
        </div>
      </section>

      <section className="product-note">
        <span className="eyebrow">FÁZE 1</span>
        <h2>Nový základ aplikace</h2>
        <p>
          Tahle verze obsahuje nový responzivní home screen a komponentovou architekturu.
          Další část bude nový detail dne s ověřenou dopravou, mapou trasy, čtením o místech
          a gastronomií.
        </p>
      </section>
    </>
  );
}
