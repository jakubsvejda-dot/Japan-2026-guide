import { ArrowLeft, CalendarDays, MapPin, Target } from 'lucide-react';
import type { DayGuide } from '../data/dayTypes';

type Props = {
  onBack: () => void;
  guide: DayGuide;
};

export function DayHero({ onBack, guide }: Props) {
  return (
    <section className="day-hero">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} /> Zpět na cestu
      </button>

      <div className="day-hero-art" aria-hidden="true">
        <span className="city-grid" />
        <span className="day-sun" />
        <span className="day-torii torii-one" />
        <span className="day-torii torii-two" />
      </div>

      <div className="day-hero-copy">
        <div className="day-orientation" aria-label="Orientace dne">
          <span><CalendarDays size={16} /> {guide.date}</span>
          <span><MapPin size={16} /> {guide.city}</span>
          <span><Target size={16} /> Dnešní cíl: {guide.theme}</span>
        </div>
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
        <div className="day-facts">
          <span>{guide.weekday.toUpperCase()}</span>
          <span>{guide.weatherNote}</span>
        </div>
      </div>
    </section>
  );
}
