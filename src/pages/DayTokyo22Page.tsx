import { AlertTriangle, Clock3, Ticket, Utensils } from 'lucide-react';
import { DayHero } from '../components/DayHero';
import { TransitDiagram } from '../components/TransitDiagram';
import { TransitSteps } from '../components/TransitSteps';
import { PlaceStoryCard } from '../components/PlaceStoryCard';
import { tokyo22 } from '../data/dayTokyo22';

type Props = {
  onBack: () => void;
};

export function DayTokyo22Page({ onBack }: Props) {
  return (
    <>
      <DayHero onBack={onBack} />

      <section className="section day-intro">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DEN V JEDNÉ MINUTĚ</span>
            <h2>Tři tváře Tokia</h2>
            <p>{tokyo22.intro}</p>
          </div>
        </div>

        <div className="quick-grid">
          <article>
            <Clock3 size={21} />
            <strong>Začátek</strong>
            <span>odchod kolem 9:25</span>
          </article>
          <article>
            <Ticket size={21} />
            <strong>Rezervace</strong>
            <span>teamLab + Shibuya Sky</span>
          </article>
          <article>
            <Utensils size={21} />
            <strong>Oběd</strong>
            <span>Harajuku před Toyosu</span>
          </article>
        </div>

        <div className="conflict-alert">
          <AlertTriangle size={23} />
          <div>
            <strong>Ještě jednou ověřit časy rezervací</strong>
            <p>{tokyo22.reservationWarning}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OFFLINE TRASA</span>
            <h2>Jak se tam dostaneme</h2>
            <p>
              Schéma používá skutečné stanice a linky. Není v měřítku a neřeší
              konkrétní nástupiště, která se vždy ověří v den cesty.
            </p>
          </div>
        </div>
        <TransitDiagram legs={tokyo22.transit} />
      </section>

      <section className="section transport-detail-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">KROK ZA KROKEM</span>
            <h2>Metro bez hádání</h2>
            <p>Každý přestup a pěší úsek je rozepsaný samostatně.</p>
          </div>
        </div>
        <TransitSteps legs={tokyo22.transit} />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROGRAM</span>
            <h2>Orientační rytmus dne</h2>
          </div>
        </div>
        <div className="schedule-grid">
          {tokyo22.schedule.map((item) => (
            <article key={`${item.time}-${item.title}`}>
              <time>{item.time}</time>
              <div>
                <strong>{item.title}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CO VLASTNĚ UVIDÍME</span>
            <h2>Krátké čtení před návštěvou</h2>
          </div>
        </div>
        <div className="place-story-list">
          {tokyo22.places.map((place, index) => (
            <PlaceStoryCard place={place} reverse={index % 2 === 1} key={place.id} />
          ))}
        </div>
      </section>

      <section className="day-footer-note">
        <span className="eyebrow">PRAKTICKY</span>
        <h2>Do batohu</h2>
        <p>{tokyo22.weatherNote}</p>
        <div className="packing-tags">
          <span>voda</span><span>SPF 50</span><span>malý ručníček</span>
          <span>lehká pláštěnka</span><span>oblečení vhodné do teamLabu</span>
        </div>
      </section>
    </>
  );
}
