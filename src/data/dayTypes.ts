export type TransitMode = 'walk' | 'metro' | 'yurikamome' | 'train' | 'bus' | 'taxi' | 'ferry';

export type TransitLeg = {
  mode: TransitMode;
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
};

export type DayGuide = {
  id: string;
  date: string;
  weekday: string;
  city: string;
  title: string;
  intro: string;
  weatherNote: string;
  reservationWarning?: string;
  schedule: { time: string; title: string; note: string }[];
  transit: TransitLeg[];
  places: PlaceStory[];
  food: FoodTip[];
  japanToday: { title: string; text: string }[];
  packing: string[];
};
