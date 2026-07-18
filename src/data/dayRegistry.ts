import type { DayGuide } from './dayTypes';
import { sourceDays } from './sourceDays';
import { transportOverrides } from './transportOverrides';
import { placeGuidesByDay } from './placeGuides';

const withBaseAssetPath = (path: string) => {
  if (path.startsWith('assets/')) return `${import.meta.env.BASE_URL}${path}`;
  const assetName = path.split('/assets/')[1];
  return assetName ? `${import.meta.env.BASE_URL}assets/${assetName}` : path;
};

export const dayGuides: DayGuide[] = sourceDays.map((guide) => ({
  ...guide,
  transit: transportOverrides[guide.id] ?? guide.transit,
  places: (placeGuidesByDay[guide.id] ?? guide.places).map((place) => ({
    ...place,
    illustration: place.illustration ? withBaseAssetPath(place.illustration) : undefined,
    image: place.image && { ...place.image, src: withBaseAssetPath(place.image.src) },
  })),
  food: guide.food.map((food) => ({ ...food, illustration: withBaseAssetPath(food.illustration) })),
}));

export const dayRegistry: Record<string, DayGuide> = Object.fromEntries(
  dayGuides.map((guide) => [guide.id, guide]),
);


export function getDayGuide(id: string): DayGuide | undefined {
  return dayRegistry[id];
}
