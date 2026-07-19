import { routeStops } from '../data/trip';

const mapAsset = `${import.meta.env.BASE_URL}assets/maps/japan-journey-overview.png`;

// The offline OSM screenshot is 1280 × 720, then safely cropped to 1200 × 675.
// The embedded map resolves to its actual Leaflet centre and zoom. Projecting with
// those values (instead of the requested bbox) keeps every point on real land.
const mapCentre = { latitude: 35.0088, longitude: 135.9, zoom: 7 };
const sourceSize = { frameWidth: 1280, frameHeight: 720, cropLeft: 40, cropTop: 0, width: 1200, height: 675 };

function mercatorY(latitude: number) {
  const radians = (latitude * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function mapPoint(latitude: number, longitude: number) {
  const worldSize = 256 * 2 ** mapCentre.zoom;
  const worldX = ((longitude + 180) / 360) * worldSize;
  const worldY = ((Math.PI - mercatorY(latitude)) / (2 * Math.PI)) * worldSize;
  const centreX = ((mapCentre.longitude + 180) / 360) * worldSize;
  const centreY = ((Math.PI - mercatorY(mapCentre.latitude)) / (2 * Math.PI)) * worldSize;
  const x = worldX - centreX + sourceSize.frameWidth / 2 - sourceSize.cropLeft;
  const y = worldY - centreY + sourceSize.frameHeight / 2 - sourceSize.cropTop;
  return { x, y };
}

const markerOffsets: Record<string, { x: number; y: number; anchor: 'start' | 'end' }> = {
  tokyo: { x: -38, y: -42, anchor: 'end' },
  fuji: { x: 40, y: 58, anchor: 'start' },
  kyoto: { x: 42, y: -54, anchor: 'start' },
  osaka: { x: -42, y: 66, anchor: 'end' },
  miyajima: { x: -42, y: 60, anchor: 'end' },
  naoshima: { x: 42, y: 72, anchor: 'start' },
  himeji: { x: -42, y: -48, anchor: 'end' },
};

export function JourneyMap() {
  const route = routeStops.map((stop) => mapPoint(stop.latitude, stop.longitude));
  const markers = routeStops.filter((stop, index, stops) => stops.findIndex((candidate) => candidate.markerId === stop.markerId) === index);

  return (
    <section className="section" id="route">
      <div className="section-heading">
        <div>
          <span className="eyebrow">NAŠE CESTA</span>
          <h2>Od neonu k moři a zpět</h2>
          <p>Tokio, Fuji, Kjóto, Ósaka, ostrovy a návrat — jedna společná cesta.</p>
        </div>
      </div>

      <div className="journey-map" aria-label="Mapa hlavní cesty po Japonsku">
        <svg
          className="journey-map-visual"
          viewBox="0 0 1200 675"
          role="img"
          aria-label="Mapa cesty Tokio, Fuji, Tokio, Kjóto, Ósaka, Mijadžima, Naošima, Himedži a Tokio"
        >
          <image href={mapAsset} x="0" y="0" width="1200" height="675" preserveAspectRatio="none" />
          <rect className="journey-map-wash" x="0" y="0" width="1200" height="675" />
          <polyline className="journey-route-line" points={route.map(({ x, y }) => `${x},${y}`).join(' ')} />
          {markers.map((stop) => {
            const point = mapPoint(stop.latitude, stop.longitude);
            const orders = routeStops.reduce<number[]>((all, candidate, index) => candidate.markerId === stop.markerId ? [...all, index + 1] : all, []);
            const offset = markerOffsets[stop.markerId];
            return (
            <g key={stop.markerId}>
              <circle className="journey-stop-halo" cx={point.x} cy={point.y} r="31" />
              <circle className="journey-stop" cx={point.x} cy={point.y} r="22" fill={stop.accent} />
              <text className="journey-stop-order" x={point.x} y={point.y + 6}>{orders.join(' / ')}</text>
              <line className="journey-label-line" x1={point.x} y1={point.y} x2={point.x + offset.x * .72} y2={point.y + offset.y * .72} />
              <text className="journey-stop-name" x={point.x + offset.x} y={point.y + offset.y} textAnchor={offset.anchor}>
                <tspan x={point.x + offset.x}>{stop.name}</tspan>
              </text>
            </g>
          )})}
        </svg>
        <p className="journey-map-caption">Jedna hlavní trasa, s jednodenním výletem z Tokia k Fuji a návratem zpět.</p>
      </div>
    </section>
  );
}
