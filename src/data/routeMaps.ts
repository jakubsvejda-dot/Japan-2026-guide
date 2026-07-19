import type { DayGuide } from './dayTypes';

export type GeoStop = {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  mapMarkerId?: string;
  mapMarkerLabel?: string;
};

export type MapView = {
  asset: string;
  /** The exact OpenStreetMap embed bbox used to create the offline snapshot. */
  bbox: readonly [west: number, south: number, east: number, north: number];
  cropInset: number;
};

export type RouteMapPanel = {
  title: string;
  stopIds: string[];
  note?: string;
  view?: MapView;
  showOrder?: boolean;
  /** Tiny visual separation for genuinely nearby stops; the route itself stays at the true coordinate. */
  markerOffsets?: Record<string, { dx: number; dy: number }>;
  /** Rare hand-tuned positions for two labels that share an especially tight real-world cluster. */
  labelOverrides?: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' }>;
};

export type RouteMap = {
  panels: RouteMapPanel[];
  /** Long-distance days use the already-confirmed transit legs as one readable route axis. */
  transportAxis?: boolean;
};

// Coordinates were checked with OpenStreetMap Nominatim on 19 July 2026.
// They are used only for visual orientation; transport instructions remain in TransitDiagram.
const stops: Record<string, GeoStop> = {
  narita: { id: 'narita', label: 'Narita', latitude: 35.7758714, longitude: 140.3933101 },
  toshi: { id: 'toshi', label: 'Toshi Center Hotel', latitude: 35.6811277, longitude: 139.7388676 },
  tokyoStation: { id: 'tokyoStation', label: 'Tokyo Station', latitude: 35.6818017, longitude: 139.764981 },
  meijiJingu: { id: 'meijiJingu', label: 'Meiji Jingu', latitude: 35.6748417, longitude: 139.6996266 },
  harajuku: { id: 'harajuku', label: 'Harajuku', latitude: 35.6711612, longitude: 139.7049553 },
  teamLab: { id: 'teamLab', label: 'teamLab Planets', latitude: 35.64938, longitude: 139.789728 },
  shibuyaCrossing: { id: 'shibuyaCrossing', label: 'Shibuya Crossing', latitude: 35.6594951, longitude: 139.7004982, mapMarkerId: 'shibuya', mapMarkerLabel: 'Shibuya Crossing · Shibuya Sky' },
  shibuyaSky: { id: 'shibuyaSky', label: 'Shibuya Sky', latitude: 35.6582857, longitude: 139.7022617, mapMarkerId: 'shibuya', mapMarkerLabel: 'Shibuya Crossing · Shibuya Sky' },
  chureito: { id: 'chureito', label: 'Chureito Pagoda', latitude: 35.5012871, longitude: 138.8013556 },
  kawaguchiko: { id: 'kawaguchiko', label: 'Lake Kawaguchiko', latitude: 35.5130603, longitude: 138.7448243 },
  oshino: { id: 'oshino', label: 'Oshino Hakkai', latitude: 35.4602407, longitude: 138.8327032 },
  kyotoStation: { id: 'kyotoStation', label: 'Kyoto Station', latitude: 34.987091, longitude: 135.7590913 },
  kabin: { id: 'kabin', label: 'KABIN Kyoto', latitude: 34.9996615, longitude: 135.7645426 },
  kiyomizu: { id: 'kiyomizu', label: 'Kiyomizu-dera', latitude: 34.994303, longitude: 135.7844389 },
  sannenzaka: { id: 'sannenzaka', label: 'Sannenzaka', latitude: 34.9964787, longitude: 135.7813178 },
  kodaiJi: { id: 'kodaiJi', label: 'Kōdai-ji', latitude: 35.0003033, longitude: 135.7805956 },
  gion: { id: 'gion', label: 'Gion', latitude: 35.0046897, longitude: 135.778403 },
  arashiyama: { id: 'arashiyama', label: 'Arashiyama Bamboo Grove', latitude: 35.0167419, longitude: 135.6711482 },
  fushimi: { id: 'fushimi', label: 'Fushimi Inari', latitude: 34.9675192, longitude: 135.7797101 },
  nippombashi: { id: 'nippombashi', label: 'Nippombashi', latitude: 34.666718, longitude: 135.5061489 },
  denDen: { id: 'denDen', label: 'Den Den Town', latitude: 34.6592152, longitude: 135.5058245 },
  dotonbori: { id: 'dotonbori', label: 'Dotonbori', latitude: 34.6690306, longitude: 135.5015715 },
  osakaCastle: { id: 'osakaCastle', label: 'Osaka Castle Park', latitude: 34.686527, longitude: 135.5272461 },
  amerikamura: { id: 'amerikamura', label: 'Amerikamura', latitude: 34.6720061, longitude: 135.4988012 },
  kitte: { id: 'kitte', label: 'KITTE Osaka', latitude: 34.7006246, longitude: 135.4940012 },
  umedaSky: { id: 'umedaSky', label: 'Umeda Sky', latitude: 34.7052927, longitude: 135.4905349 },
  kintetsuNara: { id: 'kintetsuNara', label: 'Kintetsu-Nara', latitude: 34.6849624, longitude: 135.8260516 },
  naraPark: { id: 'naraPark', label: 'Nara Park', latitude: 34.6829008, longitude: 135.8545975 },
  todaiJi: { id: 'todaiJi', label: 'Tōdai-ji', latitude: 34.6882437, longitude: 135.8397568 },
  shinOsaka: { id: 'shinOsaka', label: 'Shin-Osaka', latitude: 34.7328955, longitude: 135.4985436 },
  hiroshima: { id: 'hiroshima', label: 'Hiroshima Station', latitude: 34.3978256, longitude: 132.4755766 },
  miyajimaguchi: { id: 'miyajimaguchi', label: 'Miyajimaguchi', latitude: 34.3117801, longitude: 132.3034408 },
  miyajimaPier: { id: 'miyajimaPier', label: 'Miyajima Pier', latitude: 34.3023924, longitude: 132.321038 },
  itsukushima: { id: 'itsukushima', label: 'Itsukushima Shrine', latitude: 34.2949054, longitude: 132.3186393 },
  okayama: { id: 'okayama', label: 'Okayama Station', latitude: 34.6667504, longitude: 133.9182664 },
  uno: { id: 'uno', label: 'Uno Port', latitude: 34.4940137, longitude: 133.9527032 },
  miyanoura: { id: 'miyanoura', label: 'Miyanoura Port', latitude: 34.4563509, longitude: 133.9741355 },
  tsutsuji: { id: 'tsutsuji', label: 'Tsutsuji-so', latitude: 34.4463187, longitude: 133.9973403 },
  honmura: { id: 'honmura', label: 'Honmura', latitude: 34.4602827, longitude: 133.9951957 },
  yellowPumpkin: { id: 'yellowPumpkin', label: 'Yellow Pumpkin', latitude: 34.446563, longitude: 133.993252 },
  chichu: { id: 'chichu', label: 'Chichu Art Museum', latitude: 34.4478026, longitude: 133.9847608 },
  himeji: { id: 'himeji', label: 'Himeji Castle', latitude: 34.8393313, longitude: 134.69402 },
  kokoEn: { id: 'kokoEn', label: 'Koko-en', latitude: 34.837969, longitude: 134.6896132 },
  toyosu: { id: 'toyosu', label: 'Toyosu Market', latitude: 35.6449472, longitude: 139.7846947 },
  sensoJi: { id: 'sensoJi', label: 'Sensō-ji', latitude: 35.7134032, longitude: 139.7955265 },
  akihabara: { id: 'akihabara', label: 'Akihabara', latitude: 35.7018928, longitude: 139.7743684 },
  // Exact coordinates from the hotel's official embedded map (2-9-10 Asakusa, Taito-ku).
  asakusaViewHotel: { id: 'asakusaViewHotel', label: 'Asakusa View Hotel Annex Rokku', mapMarkerLabel: 'Asakusa View Hotel\nAnnex Rokku', latitude: 35.714775935738416, longitude: 139.79097941553164 },
  haneda: { id: 'haneda', label: 'Haneda', latitude: 35.5456924, longitude: 139.7760994 },
};

const placeStopIds: Record<string, string> = {
  'meiji-jingu': 'meijiJingu', harajuku: 'harajuku', 'teamlab-planets': 'teamLab',
  'shibuya-crossing': 'shibuyaCrossing', 'shibuya-sky': 'shibuyaSky',
  'chureito-pagoda': 'chureito', 'lake-kawaguchiko': 'kawaguchiko', 'oshino-hakkai': 'oshino',
  'kiyomizu-dera': 'kiyomizu', 'sannenzaka-ninenzaka': 'sannenzaka', gion: 'gion', 'kodai-ji': 'kodaiJi',
  'arashiyama-bamboo-grove': 'arashiyama', 'fushimi-inari': 'fushimi', 'den-den-town': 'denDen',
  dotonbori: 'dotonbori', 'osaka-castle-park': 'osakaCastle', 'nara-park': 'naraPark',
  'todai-ji': 'todaiJi', itsukushima: 'itsukushima', 'yellow-pumpkin': 'yellowPumpkin',
  'chichu-art-museum': 'chichu', 'himeji-castle': 'himeji', 'koko-en': 'kokoEn',
  'senso-ji': 'sensoJi', akihabara: 'akihabara',
};

const mapViews: Record<string, MapView> = {
  'tokyo-22': { asset: 'assets/maps/tokyo-22.jpg', bbox: [139.66, 35.61, 139.83, 35.72], cropInset: 40 },
  'fuji-23': { asset: 'assets/maps/fuji-23.jpg', bbox: [138.67, 35.42, 138.89, 35.56], cropInset: 40 },
  'kyoto-24': { asset: 'assets/maps/kyoto-24.jpg', bbox: [135.73, 34.96, 135.80, 35.03], cropInset: 40 },
  'kyoto-25': { asset: 'assets/maps/kyoto-25.jpg', bbox: [135.73, 34.97, 135.81, 35.03], cropInset: 40 },
  'kyoto-26': { asset: 'assets/maps/kyoto-26.jpg', bbox: [135.61, 34.94, 135.83, 35.06], cropInset: 40 },
  'osaka-27': { asset: 'assets/maps/osaka-27.jpg', bbox: [135.47, 34.63, 135.54, 34.70], cropInset: 40 },
  'nara-28': { asset: 'assets/maps/nara-28.jpg', bbox: [135.80, 34.65, 135.89, 34.72], cropInset: 40 },
  'osaka-29': { asset: 'assets/maps/osaka-29.jpg', bbox: [135.45, 34.62, 135.57, 34.74], cropInset: 40 },
  'miyajima-30': { asset: 'assets/maps/miyajima-30.jpg', bbox: [132.27, 34.25, 132.36, 34.34], cropInset: 40 },
  'naoshima-31': { asset: 'assets/maps/naoshima-31.jpg', bbox: [133.94, 34.41, 134.03, 34.49], cropInset: 40 },
  'naoshima-01': { asset: 'assets/maps/naoshima-01.jpg', bbox: [133.94, 34.41, 134.03, 34.49], cropInset: 40 },
  'naoshima-02': { asset: 'assets/maps/naoshima-02.jpg', bbox: [133.94, 34.41, 134.03, 34.49], cropInset: 40 },
  'himeji-03': { asset: 'assets/maps/himeji-03.jpg', bbox: [134.64, 34.80, 134.75, 34.88], cropInset: 40 },
  'tokyo-04': { asset: 'assets/maps/tokyo-04.jpg', bbox: [139.72, 35.60, 139.84, 35.75], cropInset: 40 },
};

const overrides: Record<string, RouteMap> = {
  'tokyo-21': { panels: [], transportAxis: true },
  'tokyo-22': { panels: [{
    title: 'Tokio',
    stopIds: ['toshi', 'meijiJingu', 'harajuku', 'teamLab', 'shibuyaCrossing', 'shibuyaSky', 'toshi'],
    view: mapViews['tokyo-22'],
    showOrder: true,
    markerOffsets: {
      meijiJingu: { dx: -2.6, dy: -2.6 },
      harajuku: { dx: 2.6, dy: 2.6 },
    },
  }] },
  'kyoto-24': { panels: [{ title: 'Kjóto po příjezdu', stopIds: ['kyotoStation', 'kabin'], view: mapViews['kyoto-24'] }], transportAxis: true },
  'kyoto-25': { panels: [{
    title: 'Kjóto',
    stopIds: ['kabin', 'kiyomizu', 'sannenzaka', 'kodaiJi', 'gion'],
    view: mapViews['kyoto-25'],
    showOrder: true,
    markerOffsets: {
      kiyomizu: { dx: -2.6, dy: 2.6 },
      sannenzaka: { dx: 2.6, dy: -2.6 },
    },
    labelOverrides: {
      kabin: { dx: -8, dy: -6, anchor: 'end' },
      kiyomizu: { dx: -5, dy: 10, anchor: 'end' },
    },
  }] },
  'kyoto-26': { panels: [{ title: 'Kjóto', stopIds: ['kabin', 'arashiyama'], note: 'Adresa samurajského workshopu zůstává RECHECK, proto není v mapě.', view: mapViews['kyoto-26'] }] },
  'osaka-27': { panels: [{ title: 'Ósaka po příjezdu', stopIds: ['nippombashi', 'denDen', 'dotonbori', 'nippombashi'], view: mapViews['osaka-27'] }], transportAxis: true },
  'nara-28': { panels: [{ title: 'Nara', stopIds: ['kintetsuNara', 'naraPark', 'todaiJi', 'kintetsuNara'], view: mapViews['nara-28'] }], transportAxis: true },
  'osaka-29': { panels: [{ title: 'Ósaka', stopIds: ['nippombashi', 'osakaCastle', 'amerikamura', 'kitte', 'umedaSky'], view: mapViews['osaka-29'] }] },
  'miyajima-30': { panels: [{ title: 'Mijadžima po příjezdu', stopIds: ['miyajimaPier', 'itsukushima'], view: mapViews['miyajima-30'] }], transportAxis: true },
  'naoshima-31': { panels: [{ title: 'Naošima po příjezdu', stopIds: ['miyanoura', 'tsutsuji'], view: mapViews['naoshima-31'] }], transportAxis: true },
  'naoshima-01': { panels: [{
    title: 'Naošima',
    stopIds: ['tsutsuji', 'miyanoura', 'honmura', 'yellowPumpkin', 'tsutsuji'],
    view: mapViews['naoshima-01'],
    showOrder: true,
    markerOffsets: {
      tsutsuji: { dx: 2.4, dy: -2.4 },
      yellowPumpkin: { dx: -2.4, dy: 2.4 },
    },
  }] },
  'naoshima-02': { panels: [{ title: 'Naošima', stopIds: ['tsutsuji', 'chichu'], view: mapViews['naoshima-02'] }] },
  'himeji-03': { panels: [{ title: 'Himedži', stopIds: ['himeji', 'kokoEn'], view: mapViews['himeji-03'] }], transportAxis: true },
  'tokyo-04': { panels: [{
    title: 'Tokio',
    stopIds: ['asakusaViewHotel', 'toyosu', 'asakusaViewHotel', 'sensoJi', 'akihabara', 'asakusaViewHotel'],
    view: mapViews['tokyo-04'],
    labelOverrides: {
      asakusaViewHotel: { dx: 5, dy: -10, anchor: 'start' },
      sensoJi: { dx: 5, dy: 9, anchor: 'start' },
    },
  }], transportAxis: true },
};

export function stopsForPanel(panel: RouteMapPanel): GeoStop[] {
  return panel.stopIds.map((id) => stops[id]).filter((stop): stop is GeoStop => Boolean(stop));
}

export function routeMapForDay(guide: DayGuide): RouteMap | undefined {
  const override = overrides[guide.id];
  if (override) return override;

  const stopIds = guide.places
    .map((place) => placeStopIds[place.id])
    .filter((id): id is string => Boolean(id));

  return stopIds.length ? { panels: [{ title: guide.city, stopIds, view: mapViews[guide.id] }] } : undefined;
}
