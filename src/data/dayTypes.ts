export type TransitMode = 'walk' | 'metro' | 'train' | 'shinkansen' | 'bus' | 'taxi' | 'ferry' | 'bike';

export type TransitLeg = {
  mode: TransitMode;
  label: string;
  from: string;
  to: string;
  detail: string;
  /** Linka, typ spoje nebo název trajektu, pokud je ve Source of Truth uveden. */
  line?: string;
  /** Přestup, výstup nebo praktické navázání, pokud je ve Source of Truth uvedeno. */
  transfer?: string;
  lineCode?: string;
  lineColor?: string;
  duration: string;
  status: ItemStatus;
};

export type ItemStatus = 'CONFIRMED' | 'AGREED' | 'RECOMMENDED' | 'OPTIONAL' | 'RECHECK' | 'OPEN';

export type ItineraryItem = {
  title: string;
  detail: string;
  status: ItemStatus;
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
  observe: string[];
};

export type FoodTip = {
  id: string;
  name: string;
  japanese?: string;
  description: string;
  price: string;
  moment: string;
  illustration: string;
  priority: 'must' | 'nice' | 'curious';
  status?: ItemStatus;
};

export type DayGuide = {
  id: string;
  date: string;
  weekday: string;
  city: string;
  title: string;
  theme: string;
  status: ItemStatus;
  intro: string;
  weatherNote: string;
  reservationWarning?: string;
  schedule: ({ time: string; title: string; note: string; status?: ItemStatus } | ItineraryItem)[];
  transit: TransitLeg[];
  places: PlaceStory[];
  food: FoodTip[];
  japanToday: { title: string; text: string }[];
  packing: string[];
  reservations: ItineraryItem[];
  practicalTips: ItineraryItem[];
  weatherAlternative?: ItineraryItem;
  importantNotes: ItineraryItem[];
};
