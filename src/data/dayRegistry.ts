import type { DayGuide } from './dayTypes';
import { tokyo22 } from './dayTokyo22';

export const dayRegistry: Record<string, DayGuide> = {
  [tokyo22.id]: tokyo22,
};

export function getDayGuide(id: string): DayGuide | undefined {
  return dayRegistry[id];
}
