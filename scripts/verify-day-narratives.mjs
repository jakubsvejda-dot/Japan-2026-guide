import { readFile } from 'node:fs/promises';

const narrativeSource = await readFile(new URL('../docs/DAY_NARRATIVES_v1.0.md', import.meta.url), 'utf8');
const daySource = await readFile(new URL('../src/data/sourceDays.ts', import.meta.url), 'utf8');
const pageSource = await readFile(new URL('../src/pages/DayGuidePage.tsx', import.meta.url), 'utf8');

const narrativeMatches = Array.from(narrativeSource.matchAll(/^## (\d+)\. (července|srpna) — [^\n]+\n\n\*\*([^\n]+)\*\*\n\n([^\n]+)$/gmu));
const narrativeDates = narrativeMatches.map(([, day, month]) => `${day}. ${month === 'července' ? '7' : '8'}. 2026`);
const itineraryDates = Array.from(daySource.matchAll(/date: '([^']+)'/g)).map(([, date]) => date);

if (narrativeMatches.length !== 17) throw new Error(`Expected 17 narratives, found ${narrativeMatches.length}.`);
if (new Set(narrativeDates).size !== narrativeDates.length) throw new Error('Narrative dates must be unique.');
if (narrativeDates.some((date) => !itineraryDates.includes(date)) || itineraryDates.some((date) => !narrativeDates.includes(date))) {
  throw new Error('Narratives and itinerary days do not have an exact calendar-date match.');
}
if (!pageSource.includes('Den v jedné minutě') || pageSource.includes('{guide.intro}')) {
  throw new Error('The day page must render the narrative section instead of the old short intro.');
}

console.log(`Day narrative checks passed for ${narrativeMatches.length} calendar days.`);
