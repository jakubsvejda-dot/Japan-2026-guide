import { ArrowLeft, CloudRain, MapPin } from 'lucide-react';

type Props = {
  onBack: () => void;
};

export function DayHero({ onBack }: Props) {
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
        <span className="eyebrow light">22. 7. 2026 · STŘEDA · TOKIO</span>
        <h1>Od lesního ticha<br />k moři světel</h1>
        <p>
          Meiji Jingu, Harajuku, teamLab Planets a Shibuya Sky.
          Jeden den, během kterého se Tokio třikrát úplně promění.
        </p>
        <div className="day-facts">
          <span><MapPin size={16} /> 4 hlavní zastávky</span>
          <span><CloudRain size={16} /> horko a možné přeháňky</span>
        </div>
      </div>
    </section>
  );
}
