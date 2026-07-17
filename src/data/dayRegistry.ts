import type { DayGuide } from './dayTypes';
import { sourceDays } from './sourceDays';

export const dayRegistry: Record<string, DayGuide> = {
  ...Object.fromEntries(sourceDays.map((guide) => [guide.id, guide])),
};

export const dayGuides = sourceDays;

export function getDayGuide(id: string): DayGuide | undefined {
  return dayRegistry[id];
}
