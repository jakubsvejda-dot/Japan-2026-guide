import { readFileSync } from 'node:fs';

const overrides = readFileSync(new URL('../src/data/transportOverrides.ts', import.meta.url), 'utf8');
const registry = readFileSync(new URL('../src/data/dayRegistry.ts', import.meta.url), 'utf8');
const diagram = readFileSync(new URL('../src/components/TransitDiagram.tsx', import.meta.url), 'utf8');
const page = readFileSync(new URL('../src/pages/DayGuidePage.tsx', import.meta.url), 'utf8');

const required = [
  'NOZOMI 151', 'NOZOMI 13', 'NOZOMI 162', 'NOZOMI 46',
  "'naoshima-31'", "'himeji-03'", "'tokyo-04'",
  'Yurikamome', 'JR Uno Line', 'Naoshima town bus', 'Toei Asakusa / Keikyu',
];

for (const value of required) {
  if (!overrides.includes(value)) throw new Error(`Chybí povinný dopravní údaj: ${value}`);
}
if (!overrides.includes("'ferry'")) throw new Error('Chybí trajekt v dopravních datech.');
if (!overrides.includes("'RECHECK'")) throw new Error('Chybí status RECHECK v dopravních datech.');
if (!diagram.includes('legs.map')) throw new Error('Schéma nevykresluje všechny dopravní kroky.');
if (!page.includes('guide.transit.length > 0')) throw new Error('Prázdná dopravní sekce není chráněna.');
if (!registry.includes('import.meta.env.BASE_URL')) throw new Error('Assety nejsou normalizované podle Vite base.');

console.log('Transit checks passed.');
