import { ArrowDown } from 'lucide-react';
import { tripStats } from '../data/trip';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-mountain" aria-hidden="true" />
      <div className="hero-torii" aria-hidden="true">
        <span className="beam beam-1" />
        <span className="beam beam-2" />
        <span className="post post-1" />
        <span className="post post-2" />
      </div>

      <div className="hero-content">
        <div className="eyebrow light">20. 7. – 5. 8. 2026</div>
        <h1>Mise tří<br />dobrodruhů</h1>
        <p>
          Od neonu Tokia přes čajové Kjóto až k moři na Naošimě.
          Cesta plná kontrastů, chutí a míst, která vypadají jako jiný svět.
        </p>

        <div className="hero-stats">
          {tripStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <a className="primary-action" href="#route">
          Prohlédnout cestu <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
