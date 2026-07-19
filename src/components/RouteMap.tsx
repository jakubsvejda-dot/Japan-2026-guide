import type { DayGuide } from '../data/dayTypes';
import { routeMapForDay, stopsForPanel, type GeoStop } from '../data/routeMaps';

type Props = { guide: DayGuide };

type ProjectedStop = GeoStop & { x: number; y: number };

function projectStops(stops: GeoStop[]): ProjectedStop[] {
  if (stops.length === 1) return [{ ...stops[0], x: 50, y: 50 }];

  const latitude = stops.reduce((total, stop) => total + stop.latitude, 0) / stops.length;
  const longitudeScale = Math.cos((latitude * Math.PI) / 180);
  const xs = stops.map((stop) => stop.longitude * longitudeScale);
  const ys = stops.map((stop) => stop.latitude);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const padX = Math.max((maxX - minX) * 0.16, 0.0035);
  const padY = Math.max((maxY - minY) * 0.16, 0.0035);

  return stops.map((stop, index) => ({
    ...stop,
    x: 10 + ((xs[index] - minX + padX) / (maxX - minX + padX * 2)) * 80,
    y: 90 - ((ys[index] - minY + padY) / (maxY - minY + padY * 2)) * 80,
  }));
}

function MapPanel({ title, stops, note }: { title: string; stops: GeoStop[]; note?: string }) {
  const points = projectStops(stops);
  const route = points.map((stop) => `${stop.x},${stop.y}`).join(' ');

  return (
    <figure className="route-map-panel">
      <figcaption>{title}</figcaption>
      <svg viewBox="0 0 100 100" role="img" aria-label={`Geografická orientace: ${title}`}>
        <rect className="route-map-land" x="0" y="0" width="100" height="100" rx="6" />
        <path className="route-map-grid" d="M0 25H100M0 50H100M0 75H100M25 0V100M50 0V100M75 0V100" />
        {points.length > 1 && <polyline className="route-map-line" points={route} />}
        {points.map((stop, index) => {
          const labelLeft = stop.x > 72;
          const labelY = [-3.5, 6.5, -3.5, -5.5, 7][index % 5];
          return <g className="route-map-stop" key={stop.id} transform={`translate(${stop.x} ${stop.y})`}>
            <circle r="5.5" />
            <text className="route-map-number" y="1.5">{index + 1}</text>
            <text className={`route-map-label ${labelLeft ? 'label-left' : ''}`} x={labelLeft ? -8 : 8} y={labelY}>{stop.label}</text>
          </g>;
        })}
      </svg>
      {note && <p>{note}</p>}
    </figure>
  );
}

export function RouteMap({ guide }: Props) {
  const map = routeMapForDay(guide);
  if (!map) return null;

  const panels = map.panels
    .map((panel) => ({ ...panel, stops: stopsForPanel(panel) }))
    .filter((panel) => panel.stops.length > 0);

  if (!panels.length) return null;

  return (
    <section className="section route-map-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">ORIENTACE</span>
          <h2>Mapa dne</h2>
          <p>Jen pro rychlou orientaci v prostoru. Podrobný postup zůstává v dopravě níže.</p>
        </div>
      </div>
      <div className={`route-map-layout ${panels.length > 1 ? 'is-transfer' : ''}`}>
        {panels.map((panel, index) => (
          <div className="route-map-step" key={panel.title}>
            {index > 0 && <div className="route-map-connector" aria-hidden="true"><span>→</span></div>}
            <MapPanel title={panel.title} stops={panel.stops} note={panel.note} />
          </div>
        ))}
      </div>
      <p className="route-map-attribution">Geografická data: © OpenStreetMap contributors. Mapa je statická a funguje offline.</p>
    </section>
  );
}
