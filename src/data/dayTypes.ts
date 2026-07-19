import type { DayNarrative } from './dayNarratives';

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

export type MorningPlan = {
  status: ItemStatus;
  notApplicable?: string;
  wakeUp?: string;
  breakfast?: string;
  leave?: string;
  activity?: string;
  arrival?: string;
  buffer?: string;
  reason: string;
  recheck?: string;
  variants?: Array<Omit<MorningPlan, 'status' | 'variants' | 'notApplicable'> & { title: string }>;
};

export type PlaceStory = {
  id: string;
  time: string;
  name: string;
  japanese?: string;
  lead?: string;
  body?: string;
  notice?: string;
  illustration?: string;
  observe?: string[];
  image?: PlaceImage;
  whyWeGo?: string[];
  highlights?: string[];
  practicalTip?: string;
  mapsUrl?: string;
};

export type PlaceImage = {
  src: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
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
  narrative?: DayNarrative;
  morningPlan?: MorningPlan;
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
