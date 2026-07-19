import { routeStops } from '../data/trip';

export function JourneyMap() {
  return (
    <section className="section" id="route">
      <div className="section-heading">
        <div>
          <span className="eyebrow">NAŠE CESTA</span>
          <h2>Od neonu k moři a zpět</h2>
          <p>Tokio, Fuji, Kjóto, Ósaka, ostrovy a návrat — jedna společná cesta.</p>
        </div>
      </div>

      <div className="journey-map">
        <svg
          className="journey-map-desktop"
          viewBox="0 0 1000 540"
          role="img"
          aria-label="Schematická trasa Japonskem"
        >
          <path
            className="route-line"
            d="M100 100 C220 70 270 170 360 180 S460 180 510 235 S620 330 690 320 S785 250 860 260 S790 410 710 430 S820 480 940 450"
          />
          {routeStops.map((stop) => (
            <g key={`${stop.name}-${stop.x}-${stop.y}`} transform={`translate(${stop.x * 10}, ${stop.y * 5.4})`}>
              <circle r="31" fill={stop.accent} />
              <circle r="38" className="stop-ring" />
              <text className="stop-name" y="-49">{stop.name}</text>
              <text className="stop-sub" y="58">{stop.sub}</text>
            </g>
          ))}
        </svg>

        <ol className="journey-map-mobile">
          {routeStops.map((stop, index) => (
            <li key={`${stop.name}-${index}`}>
              <span className="mobile-node" style={{ background: stop.accent }} />
              <div>
                <strong>{stop.name}</strong>
                <small>{stop.sub}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
