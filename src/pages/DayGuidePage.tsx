import { AlertTriangle, Clock3, Ticket, Utensils } from 'lucide-react';
import { DayHero } from '../components/DayHero';
import { TransitDiagram } from '../components/TransitDiagram';
import { TransitSteps } from '../components/TransitSteps';
import { PlaceStoryCard } from '../components/PlaceStoryCard';
import { FoodGallery } from '../components/FoodGallery';
import type { DayGuide } from '../data/dayTypes';

type Props = {
  guide: DayGuide;
  onBack: () => void;
};

export function DayGuidePage({ guide, onBack }: Props) {
  return (
    <>
      <DayHero onBack={onBack} />

      <section className="section day-intro">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DEN V JEDNÉ MINUTĚ</span>
            <h2>Tři tváře Tokia</h2>
            <p>{guide.intro}</p>
          </div>
        </div>

        <div className="quick-grid">
          <article><Clock3 size={21} /><strong>Začátek</strong><span>odchod kolem 9:25</span></article>
          <article><Ticket size={21} /><strong>Rezervace</strong><span>teamLab + Shibuya Sky</span></article>
          <article><Utensils size={21} /><strong>Oběd</strong><span>Harajuku před Toyosu</span></article>
        </div>

        {guide.reservationWarning && (
          <div className="conflict-alert">
            <AlertTriangle size={23} />
            <div>
              <strong>Ještě jednou ověřit časy rezervací</strong>
              <p>{guide.reservationWarning}</p>
            </div>
          </div>
        )}
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OFFLINE TRASA</span>
            <h2>Jak se tam dostaneme</h2>
            <p>Schéma používá skutečné stanice a linky. Není v měřítku a konkrétní nástupiště se ověří v den cesty.</p>
          </div>
        </div>
        <TransitDiagram legs={guide.transit} />
      </section>

      <section className="section transport-detail-section">
        <div className="section-heading">
          <div><span className="eyebrow">KROK ZA KROKEM</span><h2>Metro bez hádání</h2><p>Každý přestup a pěší úsek samostatně.</p></div>
        </div>
        <TransitSteps legs={guide.transit} />
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="eyebrow">PROGRAM</span><h2>Orientační rytmus dne</h2></div></div>
        <div className="schedule-grid">
          {guide.schedule.map((item) => (
            <article key={`${item.time}-${item.title}`}><time>{item.time}</time><div><strong>{item.title}</strong><p>{item.note}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="eyebrow">CO VLASTNĚ UVIDÍME</span><h2>Krátké čtení před návštěvou</h2></div></div>
        <div className="place-story-list">
          {guide.places.map((place, index) => <PlaceStoryCard place={place} reverse={index % 2 === 1} key={place.id} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="eyebrow">CO DNES OCHUTNAT</span><h2>Malá galerie chutí</h2><p>Ne povinný seznam. Jen věci, které přirozeně zapadají do dnešní trasy.</p></div></div>
        <FoodGallery items={guide.food} />
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="eyebrow">DNEŠNÍ JAPONSKO</span><h2>Tři drobnosti, které se hodí vědět</h2></div></div>
        <div className="japan-today-grid">
          {guide.japanToday.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
      </section>

      <section className="day-footer-note">
        <span className="eyebrow">PRAKTICKY</span>
        <h2>Do batohu</h2>
        <p>{guide.weatherNote}</p>
        <div className="packing-tags">{guide.packing.map((item) => <span key={item}>{item}</span>)}</div>
      </section>
    </>
  );
}
