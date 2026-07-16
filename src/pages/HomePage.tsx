import { Hero } from '../components/Hero';
import { JourneyMap } from '../components/JourneyMap';
import { ChapterCard } from '../components/ChapterCard';
import { chapters } from '../data/trip';

type Props = {
  onOpenTokyoDay: () => void;
};

export function HomePage({ onOpenTokyoDay }: Props) {
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
              Každá část cesty má vlastní rytmus. Tokio už nyní obsahuje první
              plně zpracovaný detail dne.
            </p>
          </div>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <ChapterCard
              chapter={chapter}
              index={index}
              key={chapter.id}
              onOpen={chapter.id === 'tokyo' ? onOpenTokyoDay : undefined}
            />
          ))}
        </div>
      </section>

      <section className="product-note">
        <span className="eyebrow">FÁZE 2</span>
        <h2>První kompletní detail dne</h2>
        <p>
          Tokio 22. 7. obsahuje offline dopravní schéma, přestupy krok za krokem,
          orientační program a krátké čtení ke všem hlavním zastávkám.
        </p>
        <button className="text-action" onClick={onOpenTokyoDay}>
          Otevřít Tokio 22. 7. →
        </button>
      </section>
    </>
  );
}
