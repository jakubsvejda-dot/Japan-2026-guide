import type { DayGuide } from './dayTypes';

export type GeoStop = {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
};

export type RouteMapPanel = {
  title: string;
  stopIds: string[];
  note?: string;
};

export type RouteMap = {
  panels: RouteMapPanel[];
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
  shibuyaCrossing: { id: 'shibuyaCrossing', label: 'Shibuya Crossing', latitude: 35.6594951, longitude: 139.7004982 },
  shibuyaSky: { id: 'shibuyaSky', label: 'Shibuya Sky', latitude: 35.6582857, longitude: 139.7022617 },
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

const overrides: Record<string, RouteMap> = {
  'tokyo-21': { panels: [{ title: 'Příjezd do Tokia', stopIds: ['narita', 'toshi'] }] },
  'kyoto-24': { panels: [
    { title: 'Tokio', stopIds: ['toshi', 'tokyoStation'] },
    { title: 'Kjóto', stopIds: ['kyotoStation', 'kabin'] },
  ] },
  'kyoto-26': { panels: [{ title: 'Kjóto', stopIds: ['kabin', 'arashiyama'], note: 'Adresa samurajského workshopu zůstává RECHECK, proto není v mapě.' }] },
  'osaka-27': { panels: [
    { title: 'Kjóto', stopIds: ['fushimi'] },
    { title: 'Ósaka', stopIds: ['nippombashi', 'denDen', 'dotonbori'] },
  ] },
  'nara-28': { panels: [{ title: 'Nara', stopIds: ['kintetsuNara', 'naraPark', 'todaiJi'] }] },
  'osaka-29': { panels: [{ title: 'Ósaka', stopIds: ['osakaCastle', 'amerikamura', 'kitte', 'umedaSky'] }] },
  'miyajima-30': { panels: [
    { title: 'Ósaka', stopIds: ['shinOsaka'] },
    { title: 'Hirošima', stopIds: ['hiroshima', 'miyajimaguchi'] },
    { title: 'Mijadžima', stopIds: ['miyajimaPier', 'itsukushima'] },
  ] },
  'naoshima-31': { panels: [
    { title: 'Mijadžima', stopIds: ['miyajimaPier', 'miyajimaguchi'] },
    { title: 'Hirošima', stopIds: ['hiroshima'] },
    { title: 'Okayama / Uno', stopIds: ['okayama', 'uno'] },
    { title: 'Naošima', stopIds: ['miyanoura', 'tsutsuji'] },
  ] },
  'naoshima-01': { panels: [{ title: 'Naošima', stopIds: ['miyanoura', 'honmura', 'yellowPumpkin', 'tsutsuji'] }] },
  'naoshima-02': { panels: [{ title: 'Naošima', stopIds: ['tsutsuji', 'chichu'] }] },
  'himeji-03': { panels: [
    { title: 'Naošima / Uno', stopIds: ['tsutsuji', 'miyanoura', 'uno'] },
    { title: 'Himedži', stopIds: ['himeji', 'kokoEn'] },
    { title: 'Tokio', stopIds: ['tokyoStation'] },
  ] },
  'tokyo-04': { panels: [
    { title: 'Tokio', stopIds: ['toyosu', 'sensoJi', 'akihabara'] },
    { title: 'Odlet', stopIds: ['haneda'] },
  ] },
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

  return stopIds.length ? { panels: [{ title: guide.city, stopIds }] } : undefined;
}
