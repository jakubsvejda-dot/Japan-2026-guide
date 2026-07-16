export type TransitLeg = {
  mode: 'walk' | 'metro' | 'yurikamome';
  label: string;
  from: string;
  to: string;
  detail: string;
  line?: string;
  lineCode?: string;
  lineColor?: string;
  duration: string;
};

export type PlaceStory = {
  id: string;
  time: string;
  name: string;
  japanese: string;
  lead: string;
  body: string;
  notice: string;
  illustration: string;
};

export const tokyo22 = {
  id: 'tokyo-22',
  date: '22. 7. 2026',
  weekday: 'středa',
  city: 'Tokio',
  title: 'Od lesního ticha k moři světel',
  intro:
    'Během jediného dne uvidíme tři úplně odlišná Tokia. Ráno vstoupíme do lesa Meiji Jingu, odpoledne se projdeme digitálním světem teamLabu a den zakončíme vysoko nad Shibuyou.',
  weatherNote: 'Horký den s možností přeháněk. Voda, pokrývka hlavy a lehká pláštěnka do batohu.',
  reservationWarning:
    'V uloženém itineráři je teamLab v okně 14:30–15:00 a Shibuya Sky v 16:40. Běžná návštěva teamLabu trvá přibližně 90 minut a samotný přesun do Shibuye další desítky minut. Tyto dvě rezervace proto před cestou ještě jednou ověřte — v této podobě se prakticky překrývají.',
  schedule: [
    { time: '08:30', title: 'Snídaně v hotelu', note: 'Pohodový začátek a voda do batohu.' },
    { time: '09:25', title: 'Odchod z Toshi Center Hotel', note: 'Nagatacho je několik minut pěšky.' },
    { time: '10:00', title: 'Meiji Jingu', note: 'Počítejte i s desetiminutovou lesní cestou od vstupu k hlavní svatyni.' },
    { time: '11:30', title: 'Harajuku a oběd', note: 'Takeshita Street jen krátce; v horku dát přednost klimatizovanému obědu.' },
    { time: '14:30–15:00', title: 'teamLab Planets — vstupní okno', note: 'Čas z posledního uloženého plánu; ověřit proti potvrzení.' },
    { time: '16:40', title: 'Shibuya Sky', note: 'Rezervováno. Časově koliduje s obvyklou délkou teamLabu.' },
  ],
  transit: [
    {
      mode: 'walk',
      label: 'Pěšky',
      from: 'Toshi Center Hotel',
      to: 'Nagatacho Station',
      detail: 'Vyjděte směrem k hlavní třídě a sledujte značení metra. Hotel uvádí Nagatacho jako nejbližší stanici.',
      duration: '3–8 min',
    },
    {
      mode: 'metro',
      label: 'Hanzomon Line',
      from: 'Nagatacho Z04',
      to: 'Omote-sando Z02',
      detail: 'Směr Shibuya. Vystoupíte po dvou zastávkách.',
      line: 'Tokyo Metro Hanzomon Line',
      lineCode: 'Z',
      lineColor: '#8f76b6',
      duration: 'asi 6 min',
    },
    {
      mode: 'metro',
      label: 'Přestup',
      from: 'Omote-sando Z02',
      to: 'Omote-sando C04',
      detail: 'Uvnitř stanice přejděte na Chiyoda Line. Není potřeba vycházet na ulici.',
      line: 'Přestup Z → C',
      lineCode: '↔',
      lineColor: '#b6a36b',
      duration: '5–10 min',
    },
    {
      mode: 'metro',
      label: 'Chiyoda Line',
      from: 'Omote-sando C04',
      to: 'Meiji-jingumae〈Harajuku〉 C03',
      detail: 'Jedna zastávka směrem na Yoyogi-uehara.',
      line: 'Tokyo Metro Chiyoda Line',
      lineCode: 'C',
      lineColor: '#00a7a5',
      duration: '2 min',
    },
    {
      mode: 'walk',
      label: 'Pěšky',
      from: 'Meiji-jingumae',
      to: 'Meiji Jingu — jižní vstup',
      detail: 'Od stanice je vstup blízko, ale od brány k hlavní svatyni počítejte minimálně dalších deset minut.',
      duration: '5–10 + 10 min',
    },
    {
      mode: 'metro',
      label: 'Chiyoda Line',
      from: 'Meiji-jingumae C03',
      to: 'Hibiya C09',
      detail: 'Po obědě v Harajuku jeďte směrem na Kita-ayase. Z Hibiye pokračujte značeným podzemním propojením do oblasti Yurakucho.',
      line: 'Tokyo Metro Chiyoda Line',
      lineCode: 'C',
      lineColor: '#00a7a5',
      duration: 'asi 16 min',
    },
    {
      mode: 'walk',
      label: 'Podzemní přesun',
      from: 'Hibiya',
      to: 'Yurakucho Y18',
      detail: 'Delší chůze podzemím. Sledujte značení Yurakucho Line; při nejistotě se zeptejte obsluhy.',
      duration: '8–12 min',
    },
    {
      mode: 'metro',
      label: 'Yurakucho Line',
      from: 'Yurakucho Y18',
      to: 'Toyosu Y22',
      detail: 'Směr Shin-kiba. V Toyosu přestoupíte na automatickou linku Yurikamome.',
      line: 'Tokyo Metro Yurakucho Line',
      lineCode: 'Y',
      lineColor: '#c7a600',
      duration: 'asi 9 min',
    },
    {
      mode: 'yurikamome',
      label: 'Yurikamome',
      from: 'Toyosu U16',
      to: 'Shin-toyosu U15',
      detail: 'Jedna zastávka. teamLab Planets je přibližně minutu pěšky od Shin-toyosu.',
      line: 'Yurikamome',
      lineCode: 'U',
      lineColor: '#0079c2',
      duration: '2 + 1 min',
    },
    {
      mode: 'yurikamome',
      label: 'Yurikamome',
      from: 'Shin-toyosu U15',
      to: 'Toyosu U16',
      detail: 'Stejnou linkou jednu zastávku zpět.',
      line: 'Yurikamome',
      lineCode: 'U',
      lineColor: '#0079c2',
      duration: '2 min',
    },
    {
      mode: 'metro',
      label: 'Yurakucho Line',
      from: 'Toyosu Y22',
      to: 'Nagatacho Y16',
      detail: 'Směr Wakoshi. V Nagatacho přestupte na Hanzomon Line.',
      line: 'Tokyo Metro Yurakucho Line',
      lineCode: 'Y',
      lineColor: '#c7a600',
      duration: 'asi 14 min',
    },
    {
      mode: 'metro',
      label: 'Hanzomon Line',
      from: 'Nagatacho Z04',
      to: 'Shibuya Z01',
      detail: 'Tři zastávky. Po příjezdu sledujte značení Shibuya Scramble Square / SHIBUYA SKY.',
      line: 'Tokyo Metro Hanzomon Line',
      lineCode: 'Z',
      lineColor: '#8f76b6',
      duration: 'asi 7 min',
    },
  ] satisfies TransitLeg[],
  places: [
    {
      id: 'meiji',
      time: 'dopoledne',
      name: 'Meiji Jingu',
      japanese: '明治神宮',
      lead: 'Ticho uprostřed města',
      body:
        'Svatyně je věnovaná císaři Meidži a císařovně Šóken. Největší zážitek nepřichází až u hlavní budovy: začne už ve chvíli, kdy ruch Harajuku během několika kroků zmizí v lese.',
      notice:
        'Všimněte si obrovských dřevěných torii, sudů se saké a dřevěných destiček ema. Od vstupu k hlavní svatyni je to nejméně dalších deset minut.',
      illustration: '/Japan-2026-guide/assets/place-meiji.svg',
    },
    {
      id: 'teamlab',
      time: 'odpoledne',
      name: 'teamLab Planets',
      japanese: 'チームラボ',
      lead: 'Muzeum, do kterého se vstupuje celým tělem',
      body:
        'Instalace se nesledují z bezpečné vzdálenosti. Budeme chodit bosky, projdeme vodou a vstoupíme do prostor, ve kterých se světlo i obraz mění podle přítomnosti lidí.',
      notice:
        'Vezměte oblečení, které lze vyhrnout nad kolena. Některé podlahy jsou zrcadlové; uvnitř jsou k dispozici bezplatné skříňky.',
      illustration: '/Japan-2026-guide/assets/place-teamlab.svg',
    },
    {
      id: 'shibuya',
      time: 'podvečer',
      name: 'Shibuya Sky',
      japanese: '渋谷スカイ',
      lead: 'Tokio bez konce',
      body:
        'Vyhlídka leží přímo nad Shibuya Station v komplexu Scramble Square. Z jedné strany uvidíme nejznámější přechod města, z druhé nekonečnou zástavbu a při dobré viditelnosti i Fuji.',
      notice:
        'Venkovní střecha může být kvůli počasí uzavřená. Volné předměty se ukládají do skříněk před vstupem na střechu.',
      illustration: '/Japan-2026-guide/assets/place-shibuya.svg',
    },
  ] satisfies PlaceStory[],
};
