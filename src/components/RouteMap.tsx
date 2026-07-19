import { Bike, Bus, CarTaxiFront, Footprints, ShipWheel, TrainFront } from 'lucide-react';
import type { DayGuide, TransitLeg } from '../data/dayTypes';
import { routeMapForDay, stopsForPanel, type GeoStop, type MapView, type RouteMapPanel } from '../data/routeMaps';

type Props = { guide: DayGuide };
type ProjectedStop = GeoStop & { x: number; y: number };
type DisplayMarker = ProjectedStop & { sourceX: number; sourceY: number };
type LabelPlacement = { dx: number; dy: number; anchor: 'start' | 'end' };
type LabelBox = { left: number; right: number; top: number; bottom: number };

function mercator(longitude: number, latitude: number) {
  const radians = (latitude * Math.PI) / 180;
  return {
    x: (longitude + 180) / 360,
    y: (1 - Math.asinh(Math.tan(radians)) / Math.PI) / 2,
  };
}

function projectStops(stops: GeoStop[], view?: MapView): ProjectedStop[] {
  if (stops.length === 1) return [{ ...stops[0], x: 50, y: 50 }];

  if (view) {
    const [west, south, east, north] = view.bbox;
    const northWest = mercator(west, north);
    const southEast = mercator(east, south);
    // The offline image is a centre crop of a square OpenStreetMap viewport.
    // Use its real Web Mercator projection instead of inventing background geography.
    const span = Math.max(southEast.x - northWest.x, southEast.y - northWest.y);
    const centerX = (northWest.x + southEast.x) / 2;
    const centerY = (northWest.y + southEast.y) / 2;
    const inset = view.cropInset / 600;
    const left = centerX - span / 2 + span * inset;
    const top = centerY - span / 2 + span * inset;
    const usableSpan = span * (1 - inset * 2);

    return stops.map((stop) => {
      const point = mercator(stop.longitude, stop.latitude);
      return { ...stop, x: ((point.x - left) / usableSpan) * 100, y: ((point.y - top) / usableSpan) * 100 };
    });
  }

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

function labelBox(stop: ProjectedStop, label: string, placement: LabelPlacement): LabelBox {
  // Approximate the rendered SVG label width in map units. Keeping this local
  // lets every map choose a readable nearby label without hardcoded day layouts.
  const lines = label.split('\n');
  const width = Math.min(43, Math.max(12, Math.max(...lines.map((line) => Array.from(line).length)) * 1.78));
  const x = stop.x + placement.dx;
  const y = stop.y + placement.dy;
  return {
    left: placement.anchor === 'start' ? x : x - width,
    right: placement.anchor === 'start' ? x + width : x,
    top: y - 2.7,
    bottom: y + 2.7 + (lines.length - 1) * 3.9,
  };
}

function overlapArea(first: LabelBox, second: LabelBox) {
  const width = Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
  const height = Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
  return width * height;
}

function labelPlacements(points: ProjectedStop[]) {
  const placed: Array<{ placement: LabelPlacement; box: LabelBox }> = [];

  return points.map((stop) => {
    const label = stop.mapMarkerLabel ?? stop.label;
    const rightFirst: LabelPlacement[] = [
      { dx: 5, dy: -5, anchor: 'start' }, { dx: 5, dy: 5, anchor: 'start' },
      { dx: -5, dy: -5, anchor: 'end' }, { dx: -5, dy: 5, anchor: 'end' },
      { dx: 5, dy: -13, anchor: 'start' }, { dx: 5, dy: 13, anchor: 'start' },
      { dx: -5, dy: -13, anchor: 'end' }, { dx: -5, dy: 13, anchor: 'end' },
    ];
    const leftFirst: LabelPlacement[] = [
      { dx: -5, dy: -5, anchor: 'end' }, { dx: -5, dy: 5, anchor: 'end' },
      { dx: 5, dy: -5, anchor: 'start' }, { dx: 5, dy: 5, anchor: 'start' },
      { dx: -5, dy: -13, anchor: 'end' }, { dx: -5, dy: 13, anchor: 'end' },
      { dx: 5, dy: -13, anchor: 'start' }, { dx: 5, dy: 13, anchor: 'start' },
    ];
    const candidates = stop.x > 67 ? leftFirst : rightFirst;
    const best = candidates.reduce<{ placement: LabelPlacement; box: LabelBox; score: number } | undefined>((current, placement, index) => {
      const box = labelBox(stop, label, placement);
      const outside = Math.max(0, -box.left) + Math.max(0, box.right - 100) + Math.max(0, -box.top) + Math.max(0, box.bottom - 100);
      const overlap = placed.reduce((total, item) => total + overlapArea(box, item.box), 0);
      const coversAnotherMarker = points.filter((point) => point !== stop).reduce((total, point) => total + (
        point.x >= box.left && point.x <= box.right && point.y >= box.top && point.y <= box.bottom ? 1 : 0
      ), 0);
      const score = outside * 100 + overlap * 20 + coversAnotherMarker * 80 + index * 0.01;
      return !current || score < current.score ? { placement, box, score } : current;
    }, undefined);

    const selected = best ?? { placement: rightFirst[0], box: labelBox(stop, label, rightFirst[0]) };
    placed.push(selected);
    return selected.placement;
  });
}

function MapPanel({ panel, stops }: { panel: RouteMapPanel; stops: GeoStop[] }) {
  const points = projectStops(stops, panel.view);
  const route = points.map((stop) => `${stop.x},${stop.y}`).join(' ');
  const mapUrl = panel.view ? `${import.meta.env.BASE_URL}${panel.view.asset}` : undefined;
  const markerPoints = points.filter((point, index) => !points.slice(0, index)
    .some((previous) => (previous.mapMarkerId ?? previous.id) === (point.mapMarkerId ?? point.id)));
  const displayMarkers: DisplayMarker[] = markerPoints.map((stop) => {
    const offset = panel.markerOffsets?.[stop.mapMarkerId ?? stop.id];
    return { ...stop, sourceX: stop.x, sourceY: stop.y, x: stop.x + (offset?.dx ?? 0), y: stop.y + (offset?.dy ?? 0) };
  });
  const automaticPlacements = labelPlacements(displayMarkers);
  const placements = displayMarkers.map((stop, index) => panel.labelOverrides?.[stop.mapMarkerId ?? stop.id] ?? automaticPlacements[index]);

  return (
    <figure className="route-map-panel">
      <figcaption>{panel.title}</figcaption>
      <svg viewBox="0 0 100 100" role="img" aria-label={`Zjednodušená orientační mapa: ${panel.title}`}>
        {mapUrl
          ? <image className="route-map-base" href={mapUrl} x="0" y="0" width="100" height="100" preserveAspectRatio="none" />
          : <rect className="route-map-land" x="0" y="0" width="100" height="100" rx="6" />}
        {points.length > 1 && <polyline className="route-map-line" points={route} />}
        {displayMarkers.map((stop, index) => {
          const markerId = stop.mapMarkerId ?? stop.id;
          const placement = placements[index];
          const labelLines = (stop.mapMarkerLabel ?? stop.label).split('\n');
          return <g className="route-map-stop" key={markerId} transform={`translate(${stop.x} ${stop.y})`}>
            {(stop.x !== stop.sourceX || stop.y !== stop.sourceY) && <line className="route-map-marker-link" x1={stop.sourceX - stop.x} y1={stop.sourceY - stop.y} x2="0" y2="0" />}
            <line className="route-map-label-stem" x1="0" y1="0" x2={placement.dx * .7} y2={placement.dy * .7} />
            <circle r={panel.showOrder ? 4.1 : 3.5} />
            {panel.showOrder && <text className="route-map-order" y="1.15">{index + 1}</text>}
            <text className="route-map-label" x={placement.dx} y={placement.dy} textAnchor={placement.anchor}>
              {labelLines.map((line, lineIndex) => <tspan key={line} x={placement.dx} dy={lineIndex === 0 ? 0 : 3.9}>{line}</tspan>)}
            </text>
          </g>;
        })}
      </svg>
      {panel.note && <p>{panel.note}</p>}
    </figure>
  );
}

function ModeIcon({ mode }: { mode: TransitLeg['mode'] }) {
  if (mode === 'walk') return <Footprints size={17} />;
  if (mode === 'bike') return <Bike size={17} />;
  if (mode === 'bus') return <Bus size={17} />;
  if (mode === 'taxi') return <CarTaxiFront size={17} />;
  if (mode === 'ferry') return <ShipWheel size={17} />;
  return <TrainFront size={17} />;
}

function TransferAxis({ legs }: { legs: TransitLeg[] }) {
  return (
    <div className="route-transfer-axis" aria-label="Osa přesunu dne">
      <div className="route-transfer-heading"><span className="eyebrow">DLOUHÝ PŘESUN</span><strong>Jedna cesta, krok za krokem</strong></div>
      <ol>{legs.map((leg, index) => (
        <li key={`${leg.from}-${leg.to}-${index}`}>
          <span className="route-transfer-icon" aria-hidden="true"><ModeIcon mode={leg.mode} /></span>
          <div><div className="route-transfer-topline"><strong>{leg.label}</strong><span className={`status-chip ${leg.status.toLowerCase()}`}>{leg.status}</span></div>
            <p>{leg.from} <span>→</span> {leg.to}</p>{leg.line && <small>{leg.line}</small>}</div>
        </li>
      ))}</ol>
    </div>
  );
}

export function RouteMap({ guide }: Props) {
  const map = routeMapForDay(guide);
  if (!map) return null;
  const panels = map.panels.map((panel) => ({ panel, stops: stopsForPanel(panel) })).filter(({ stops }) => stops.length > 0);
  if (!map.transportAxis && !panels.length) return null;

  return (
    <section className="section route-map-section">
      <div className="section-heading"><div><span className="eyebrow">ORIENTACE</span><h2>{map.transportAxis ? 'Cesta dne' : 'Mapa dne'}</h2>
        {map.transportAxis && <p>Dlouhý přesun je zobrazený jako jedna srozumitelná osa. Místní mapa ukazuje, kde se pak budete pohybovat.</p>}
      </div></div>
      {map.transportAxis && <TransferAxis legs={guide.transit} />}
      {panels.length > 0 && <div className={`route-map-layout ${panels.length > 1 ? 'is-transfer' : ''}`}>{panels.map(({ panel, stops }) => <MapPanel key={panel.title} panel={panel} stops={stops} />)}</div>}
      <p className="route-map-attribution">Mapové podklady © OpenStreetMap contributors. Uložené offline snímky slouží k orientaci, ne k navigaci.</p>
    </section>
  );
}
