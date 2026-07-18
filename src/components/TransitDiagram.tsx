import { Bike, Bus, CarTaxiFront, Footprints, ShipWheel, TrainFront } from 'lucide-react';
import type { TransitLeg } from '../data/dayTypes';

type Props = {
  legs: TransitLeg[];
};

export function TransitDiagram({ legs }: Props) {
  return (
    <ol className="transit-diagram" aria-label="Doprava bez hádání">
      {legs.map((leg, index) => (
        <li className="diagram-leg" key={`${leg.from}-${leg.to}-${index}`}>
          <span className="diagram-icon" aria-hidden="true"><ModeIcon mode={leg.mode} /></span>
          <div className="diagram-copy">
            <div className="diagram-topline">
              <strong>{leg.label}</strong>
              <span className={`status-chip ${leg.status.toLowerCase()}`}>{leg.status}</span>
              {leg.duration !== 'dle provozu' && <small>{leg.duration}</small>}
            </div>
            <h3>{leg.from} <span>→</span> {leg.to}</h3>
            {leg.line && <p className="diagram-line">{leg.line}</p>}
            {leg.transfer && <p className="diagram-transfer">{leg.transfer}</p>}
            <p>{leg.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ModeIcon({ mode }: { mode: TransitLeg['mode'] }) {
  if (mode === 'walk') return <Footprints size={19} />;
  if (mode === 'bike') return <Bike size={19} />;
  if (mode === 'bus') return <Bus size={19} />;
  if (mode === 'taxi') return <CarTaxiFront size={19} />;
  if (mode === 'ferry') return <ShipWheel size={19} />;
  return <TrainFront size={19} />;
}
