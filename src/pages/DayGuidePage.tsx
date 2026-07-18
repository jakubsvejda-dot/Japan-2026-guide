import { AlertTriangle, Clock3, Ticket, Utensils } from 'lucide-react';
import { DayHero } from '../components/DayHero';
import { TransitDiagram } from '../components/TransitDiagram';
import { PlaceStoryCard } from '../components/PlaceStoryCard';
import { FoodGallery } from '../components/FoodGallery';
import type { DayGuide } from '../data/dayTypes';

type Props = {
  guide: DayGuide;
  onBack: () => void;
  onNavigate: (id: string) => void;
  previousDay?: DayGuide;
  nextDay?: DayGuide;
};

export function DayGuidePage({ guide, onBack, onNavigate, previousDay, nextDay }: Props) {
  const statusClass = (status: string) => `status-chip ${status.toLowerCase()}`;
  return (
    <>
      <DayHero onBack={onBack} guide={guide} />

      <section className="section day-intro">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DEN V JEDNÉ MINUTĚ</span>
            <h2>{guide.theme}</h2>
            <p>{guide.intro}</p>
          </div>
        </div>

        <div className="quick-grid">
          <article><Clock3 size={21} /><strong>Stav dne</strong><span className={statusClass(guide.status)}>{guide.status}</span></article>
          <article><Ticket size={21} /><strong>Rezervace</strong><span>{guide.reservations.length ? `${guide.reservations.length} položek` : 'žádná potvrzená rezervace'}</span></article>
          <article><Utensils size={21} /><strong>Jídlo</strong><span>{guide.food.length ? 'viz doporučení dne' : 'viz program a praktické tipy'}</span></article>
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

      {guide.reservations.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">REZERVACE</span><h2>Co je potvrzené</h2></div></div>
        <div className="item-grid">{guide.reservations.map((item) => <article key={item.title}><span className={statusClass(item.status)}>{item.status}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </section>}

      {guide.transit.length > 0 && <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OFFLINE TRASA</span>
            <h2>Doprava bez hádání</h2>
            <p>Každý přesun, přestup i pěší úsek samostatně. Položky RECHECK je nutné ověřit před cestou.</p>
          </div>
        </div>
        <TransitDiagram legs={guide.transit} />
      </section>}

      {guide.schedule.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">PROGRAM</span><h2>Orientační rytmus dne</h2></div></div>
        <div className="schedule-grid">
          {guide.schedule.map((item, index) => {
            const isTimed = 'time' in item;
            const embeddedTime = !isTimed ? item.title.match(/^(?:Kolem )?\d{1,2}:\d{2}(?:–\d{1,2}:\d{2})?/)?.[0] : '';
            return <article key={`${item.title}-${index}`}><time>{isTimed ? item.time : embeddedTime}</time><div><span className={statusClass(item.status ?? 'AGREED')}>{item.status ?? 'AGREED'}</span><strong>{item.title}</strong><p>{isTimed ? item.note : item.detail}</p></div></article>;
          })}
        </div>
      </section>}

      {guide.places.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">CO VLASTNĚ UVIDÍME</span><h2>Krátké čtení před návštěvou</h2></div></div>
        <div className="place-story-list">
          {guide.places.map((place, index) => <PlaceStoryCard place={place} reverse={index % 2 === 1} key={place.id} />)}
        </div>
      </section>}

      {guide.food.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">CO DNES OCHUTNAT</span><h2>Malá galerie chutí</h2><p>Ne povinný seznam. Jen věci, které přirozeně zapadají do dnešní trasy.</p></div></div>
        <FoodGallery items={guide.food} />
      </section>}

      {(guide.practicalTips.length > 0 || guide.weatherAlternative || guide.importantNotes.length > 0) && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">PRAKTICKY</span><h2>Důležité pro klidný den</h2></div></div>
        <div className="item-grid">
          {guide.practicalTips.map((item) => <article key={item.title}><span className={statusClass(item.status)}>{item.status}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
          {guide.weatherAlternative && <article><span className={statusClass(guide.weatherAlternative.status)}>{guide.weatherAlternative.status}</span><h3>{guide.weatherAlternative.title}</h3><p>{guide.weatherAlternative.detail}</p></article>}
          {guide.importantNotes.map((item) => <article key={item.title}><span className={statusClass(item.status)}>{item.status}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
        </div>
      </section>}

      {guide.japanToday.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="eyebrow">DNEŠNÍ JAPONSKO</span><h2>Tři drobnosti, které se hodí vědět</h2></div></div>
        <div className="japan-today-grid">
          {guide.japanToday.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
      </section>}

      <section className="day-footer-note">
        <span className="eyebrow">PRAKTICKY</span>
        <h2>Do batohu</h2>
        <p>{guide.weatherNote}</p>
        <div className="packing-tags">{guide.packing.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <nav className="day-navigation" aria-label="Navigace mezi dny">
        {previousDay ? <button onClick={() => onNavigate(previousDay.id)}>← {previousDay.date}</button> : <span />}
        <button className="day-list-button" onClick={onBack}>Seznam dnů</button>
        {nextDay ? <button onClick={() => onNavigate(nextDay.id)}>{nextDay.date} →</button> : <span />}
      </nav>
    </>
  );
}
