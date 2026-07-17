import { Hero } from '../components/Hero';
import { JourneyMap } from '../components/JourneyMap';
import { ChapterCard } from '../components/ChapterCard';
import { chapters } from '../data/trip';

type Props = {
  onOpenDay: (id: string) => void;
};

const chapterDays: Record<string, string> = { tokyo: 'tokyo-21', fuji: 'fuji-23', kyoto: 'kyoto-24', osaka: 'osaka-27', miyajima: 'miyajima-30', naoshima: 'naoshima-31', himeji: 'himeji-03', 'tokyo-final': 'tokyo-04' };

export function HomePage({ onOpenDay }: Props) {
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
              onOpen={() => onOpenDay(chapterDays[chapter.id])}
            />
          ))}
        </div>
      </section>

      <section className="product-note">
        <span className="eyebrow">FÁZE 2</span>
        <h2>První kompletní detail dne</h2>
        <p>Každá kapitola vede k aktuálnímu dennímu programu s potvrzenými rezervacemi, doporučenou logistikou a otevřenými položkami.</p>
        <button className="text-action" onClick={() => onOpenDay('tokyo-21')}>
          Otevřít itinerář →
        </button>
      </section>
    </>
  );
}
