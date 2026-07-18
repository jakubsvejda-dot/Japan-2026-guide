import { Footprints, TrainFront, ArrowRightLeft } from 'lucide-react';
import type { TransitLeg } from '../data/dayTypes';

type Props = {
  legs: TransitLeg[];
};

function ModeIcon({ mode }: { mode: TransitLeg['mode'] }) {
  if (mode === 'walk') return <Footprints size={19} />;
  if (mode === 'metro') return <TrainFront size={19} />;
  return <ArrowRightLeft size={19} />;
}

export function TransitSteps({ legs }: Props) {
  return (
    <div className="transit-steps">
      {legs.map((leg, index) => (
        <article className="transit-step" key={`${leg.from}-${leg.to}-${index}`}>
          <div
            className="mode-icon"
            style={{ '--mode-color': leg.lineColor ?? '#777069' } as React.CSSProperties}
          >
            <ModeIcon mode={leg.mode} />
          </div>
          <div className="transit-step-copy">
            <div className="transit-step-topline">
              <span>{leg.label} {leg.status && <em className={`status-chip ${leg.status.toLowerCase()}`}>{leg.status}</em>}</span>
              <small>{leg.duration}</small>
            </div>
            <h3>{leg.from} <span>→</span> {leg.to}</h3>
            <p>{leg.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
