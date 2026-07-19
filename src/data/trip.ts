export type Chapter = {
  id: string;
  dates: string;
  place: string;
  japanese: string;
  title: string;
  teaser: string;
  accent: string;
  highlights: string[];
  symbol: string;
  image: string;
  imageAlt: string;
};

export const chapters: Chapter[] = [
  {
    id: 'tokyo',
    dates: '21.–22. 7.',
    place: 'Tokio',
    japanese: '東京',
    title: 'Město, které mění tvář každých pár minut',
    teaser: 'Tichý les Meiji Jingu, digitální svět teamLabu a večer vysoko nad Shibuyou.',
    accent: '#b73b32',
    highlights: ['Meiji Jingu', 'teamLab Planets', 'Shibuya Sky'],
    symbol: '東京',
    image: 'assets/places/shibuya-crossing.jpg',
    imageAlt: 'Shibuya Crossing v Tokiu.',
  },
  {
    id: 'fuji',
    dates: '23. 7.',
    place: 'Fuji',
    japanese: '富士山',
    title: 'Den pod nejslavnější horou Japonska',
    teaser: 'Jezero, tradiční vesnice, průzračné prameny a pagoda s ikonickým výhledem.',
    accent: '#d89b37',
    highlights: ['Kawaguchiko', 'Oshino Hakkai', 'Chureito'],
    symbol: '富士',
    image: 'assets/places/chureito.jpg',
    imageAlt: 'Chureito Pagoda s horou Fuji.',
  },
  {
    id: 'kyoto',
    dates: '24.–27. 7.',
    place: 'Kjóto',
    japanese: '京都',
    title: 'Čaj, bambus a tisíce červených bran',
    teaser: 'Staré uličky, čajový obřad a samurajský workshop v městě tradic.',
    accent: '#8d4a43',
    highlights: ['Kiyomizu-dera', 'Čajový obřad', 'Arashiyama'],
    symbol: '京都',
    image: 'assets/places/kiyomizu.jpg',
    imageAlt: 'Kiyomizu-dera v Kjótu.',
  },
  {
    id: 'osaka',
    dates: '27.–30. 7.',
    place: 'Ósaka + Nara',
    japanese: '大阪・奈良',
    title: 'Neony, hry, street food a jeleni',
    teaser: 'Nejživější jídlo cesty, arkády a výlet do Nary za Velkým Buddhou.',
    accent: '#de6e33',
    highlights: ['Dotonbori', 'Kuromon', 'Nara Park'],
    symbol: '大阪',
    image: 'assets/places/dotonbori.jpg',
    imageAlt: 'Neony Dotonbori v Ósace v noci.',
  },
  {
    id: 'miyajima',
    dates: '30.–31. 7.',
    place: 'Mijadžima',
    japanese: '宮島',
    title: 'Brána, která při přílivu plave na moři',
    teaser: 'Po odjezdu denních návštěvníků zůstanou lampiony, moře a tichý ostrov.',
    accent: '#a33d35',
    highlights: ['Torii', 'Itsukushima', 'Večerní ostrov'],
    symbol: '宮島',
    image: 'assets/places/itsukushima.jpg',
    imageAlt: 'Torii svatyně Itsukushima na Mijadžimě.',
  },
  {
    id: 'naoshima',
    dates: '31. 7.–3. 8.',
    place: 'Naošima',
    japanese: '直島',
    title: 'Ostrov, kde umění žije venku',
    teaser: 'Elektrokola, dvě puntíkované dýně, Chichu a dlouhé odpoledne u moře.',
    accent: '#347e71',
    highlights: ['Elektrokola', 'Chichu', 'Tsutsuji beach'],
    symbol: '直島',
    image: 'assets/places/yellow-pumpkin.jpg',
    imageAlt: 'Žlutá dýně na Naošimě.',
  },
  {
    id: 'himeji',
    dates: '3. 8.',
    place: 'Himeji',
    japanese: '姫路',
    title: 'Hrad bílé volavky',
    teaser: 'Jedna silná zastávka cestou zpět: původní bílý hrad a zahrada Koko-en.',
    accent: '#516b85',
    highlights: ['Himeji Castle', 'Koko-en', 'Nozomi 46'],
    symbol: '姫路',
    image: 'assets/places/himeji.jpg',
    imageAlt: 'Hrad Himedži.',
  },
  {
    id: 'tokyo-final',
    dates: '4. 8.',
    place: 'Tokio naposled',
    japanese: '東京・終章',
    title: 'Staré Tokio, sushi mistr a Akihabara',
    teaser: 'Ranní Toyosu, společné sushi u pultu a poslední odpoledne mezi arkádami.',
    accent: '#745070',
    highlights: ['Toyosu', 'Sensō-ji', 'Akihabara'],
    symbol: '終章',
    image: 'assets/places/sensoji.jpg',
    imageAlt: 'Chrám Sensō-ji v Asakuse.',
  },
];

export const chapterDayIds: Record<string, string[]> = {
  tokyo: ['tokyo-21', 'tokyo-22'],
  fuji: ['fuji-23'],
  kyoto: ['kyoto-24', 'kyoto-25', 'kyoto-26'],
  osaka: ['osaka-27', 'nara-28', 'osaka-29'],
  miyajima: ['miyajima-30'],
  naoshima: ['naoshima-31', 'naoshima-01', 'naoshima-02'],
  himeji: ['himeji-03'],
  'tokyo-final': ['tokyo-04'],
};

export function chapterForDay(dayId: string): string | undefined {
  return Object.entries(chapterDayIds).find(([, ids]) => ids.includes(dayId))?.[0];
}

export const tripStats = [
  { value: '17', label: 'dní' },
  { value: '8', label: 'kapitol' },
  { value: '4', label: 'Nozomi' },
  { value: '2', label: 'ostrovy' },
];

export const routeStops = [
  // These are only calm, city-level orientation points for the overview map.
  // Daily maps and transit cards retain the precise operational detail.
  { id: 'tokyo-start', markerId: 'tokyo', name: 'Tokio', sub: '21.–23. 7. · 4. 8.', latitude: 35.6818017, longitude: 139.764981, accent: '#b73b32' },
  { id: 'fuji', markerId: 'fuji', name: 'Fuji', sub: '23. 7. · výlet z Tokia', latitude: 35.5012871, longitude: 138.8013556, accent: '#657f69' },
  { id: 'tokyo-after-fuji', markerId: 'tokyo', name: 'Tokio', sub: 'návrat po výletu', latitude: 35.6818017, longitude: 139.764981, accent: '#b73b32' },
  { id: 'kyoto', markerId: 'kyoto', name: 'Kjóto', sub: '24.–27. 7.', latitude: 34.987091, longitude: 135.7590913, accent: '#8d4a43' },
  { id: 'osaka', markerId: 'osaka', name: 'Ósaka', sub: '27.–30. 7.', latitude: 34.666718, longitude: 135.5061489, accent: '#de6e33' },
  { id: 'miyajima', markerId: 'miyajima', name: 'Mijadžima', sub: '30.–31. 7.', latitude: 34.2949054, longitude: 132.3186393, accent: '#a33d35' },
  { id: 'naoshima', markerId: 'naoshima', name: 'Naošima', sub: '31. 7.–3. 8.', latitude: 34.4563509, longitude: 133.9741355, accent: '#347e71' },
  { id: 'himeji', markerId: 'himeji', name: 'Himedži', sub: '3. 8.', latitude: 34.8393313, longitude: 134.69402, accent: '#516b85' },
  { id: 'tokyo-final', markerId: 'tokyo', name: 'Tokio', sub: '4. 8.', latitude: 35.714775935738416, longitude: 139.79097941553164, accent: '#745070' },
];
