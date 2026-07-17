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
  },
];

export const tripStats = [
  { value: '17', label: 'dní' },
  { value: '8', label: 'kapitol' },
  { value: '4', label: 'Nozomi' },
  { value: '2', label: 'ostrovy' },
];

export const routeStops = [
  { name: 'Tokio', sub: '21.–23. 7.', x: 10, y: 18, accent: '#b73b32' },
  { name: 'Kjóto', sub: '24.–27. 7.', x: 36, y: 33, accent: '#8d4a43' },
  { name: 'Ósaka', sub: '27.–30. 7.', x: 51, y: 43, accent: '#de6e33' },
  { name: 'Mijadžima', sub: '30.–31. 7.', x: 69, y: 59, accent: '#a33d35' },
  { name: 'Naošima', sub: '31. 7.–3. 8.', x: 86, y: 48, accent: '#347e71' },
  { name: 'Himeji', sub: '3. 8.', x: 70, y: 78, accent: '#516b85' },
  { name: 'Tokio', sub: '4. 8.', x: 94, y: 84, accent: '#745070' },
];
