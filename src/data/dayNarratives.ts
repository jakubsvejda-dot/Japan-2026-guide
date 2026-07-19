import rawNarratives from '../../docs/DAY_NARRATIVES_v1.0.md?raw';

export type DayNarrative = {
  headline: string;
  narrative: string;
};

type NarrativeMatch = {
  day: string;
  month: 'července' | 'srpna';
  headline: string;
  narrative: string;
};

function calendarDate({ day, month }: NarrativeMatch) {
  return `${day}. ${month === 'července' ? '7' : '8'}. 2026`;
}

function parseNarratives(source: string): Record<string, DayNarrative> {
  const matches = Array.from(source.matchAll(/^## (?<day>\d+)\. (?<month>července|srpna) — [^\n]+\n\n\*\*(?<headline>[^\n]+)\*\*\n\n(?<narrative>[^\n]+)$/gmu));
  const entries = matches.map((match) => {
    const groups = match.groups as NarrativeMatch | undefined;
    if (!groups) throw new Error('Day narrative is missing a required heading or paragraph.');
    return [calendarDate(groups), { headline: groups.headline, narrative: groups.narrative }] as const;
  });

  if (entries.length !== 17) throw new Error(`Expected 17 day narratives, received ${entries.length}.`);
  return Object.fromEntries(entries);
}

/**
 * The markdown import is embedded by Vite at build time: the PWA stays fully
 * offline while the editorial source remains a single, exact document.
 */
export const dayNarrativesByDate = parseNarratives(rawNarratives);
