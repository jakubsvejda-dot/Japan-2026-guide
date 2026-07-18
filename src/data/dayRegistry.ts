import type { DayGuide } from './dayTypes';
import { sourceDays } from './sourceDays';
import { transportOverrides } from './transportOverrides';

const withBaseAssetPath = (path: string) => {
  const assetName = path.split('/assets/')[1];
  return assetName ? `${import.meta.env.BASE_URL}assets/${assetName}` : path;
};

export const dayGuides: DayGuide[] = sourceDays.map((guide) => ({
  ...guide,
  transit: transportOverrides[guide.id] ?? guide.transit,
  places: guide.places.map((place) => ({ ...place, illustration: withBaseAssetPath(place.illustration) })),
  food: guide.food.map((food) => ({ ...food, illustration: withBaseAssetPath(food.illustration) })),
}));

export const dayRegistry: Record<string, DayGuide> = Object.fromEntries(
  dayGuides.map((guide) => [guide.id, guide]),
);


export function getDayGuide(id: string): DayGuide | undefined {
  return dayRegistry[id];
}
