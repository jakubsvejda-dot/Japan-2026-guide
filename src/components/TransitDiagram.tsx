import type { TransitLeg } from '../data/dayTypes';

type Props = {
  legs: TransitLeg[];
};

export function TransitDiagram({ legs }: Props) {
  return (
    <div className="transit-diagram" role="img" aria-label="Schéma denní trasy">
      {legs.map((leg, index) => (
        <div className="diagram-leg" key={`${leg.from}-${leg.to}`}>
          <div className="diagram-node">
            <span
              className="line-badge"
              style={{ background: leg.lineColor ?? '#6f6861' }}
            >
              {leg.lineCode ?? '•'}
            </span>
            <div>
              <strong>{leg.from}</strong>
              <small>{leg.label}</small>
            </div>
          </div>

          <div className="diagram-connector">
            <span style={{ background: leg.lineColor ?? '#b8aea2' }} />
            <small>{leg.duration}</small>
          </div>

          {index === legs.length - 1 && (
            <div className="diagram-node final">
              <span className="line-badge destination">展</span>
              <div>
                <strong>{leg.to}</strong>
                <small>cíl posledního přesunu</small>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
