import type { MorningPlan as MorningPlanData } from '../data/dayTypes';

type Props = { plan: MorningPlanData };

const rows = (plan: Omit<MorningPlanData, 'status' | 'variants' | 'notApplicable'>) => {
  const candidates: Array<[string, string | undefined]> = [
    ['Budíček', plan.wakeUp],
    ['Snídaně', plan.breakfast],
    ['Odchod', plan.leave],
    ['Ranní plán', plan.activity],
    ['Příjezd', plan.arrival],
    ['Rezerva', plan.buffer],
    ['Ověřit', plan.recheck],
  ];
  return candidates.filter((entry): entry is [string, string] => Boolean(entry[1]));
};

function PlanBody({ plan }: { plan: Omit<MorningPlanData, 'status' | 'variants' | 'notApplicable'> }) {
  return <>
    <dl className="morning-plan-grid">{rows(plan).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    <p className="morning-plan-reason"><strong>Proč takto:</strong> {plan.reason}</p>
  </>;
}

export function MorningPlan({ plan }: Props) {
  return <section className="section morning-plan-section">
    <div className="section-heading"><div><span className="eyebrow">OPERAČNÍ PLÁN</span><h2>Klidné ráno</h2><p>Bezpečný začátek dne podle finálního itineráře.</p></div></div>
    <div className="morning-plan-card">
      {plan.notApplicable ? <p className="morning-plan-not-applicable">{plan.notApplicable}</p> : plan.variants ? <div className="morning-plan-variants">{plan.variants.map((variant) => <article key={variant.title}><h3>{variant.title}</h3><PlanBody plan={variant} /></article>)}</div> : <PlanBody plan={plan} />}
    </div>
  </section>;
}
