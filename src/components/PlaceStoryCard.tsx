import type { PlaceStory } from '../data/dayTypes';
import { ObservePanel } from './ObservePanel';

type Props = {
  place: PlaceStory;
  reverse?: boolean;
};

export function PlaceStoryCard({ place, reverse = false }: Props) {
  return (
    <article className={`place-story ${reverse ? 'reverse' : ''}`}>
      <div className="place-story-copy">
        <span className="place-time">{place.time}</span>
        <div className="place-japanese">{place.japanese}</div>
        <h2>{place.name}</h2>
        <details className="place-details">
          <summary>Otevřít průvodce místem</summary>
          <div className="place-story-visual">
            <img src={place.illustration} alt="" loading="lazy" />
          </div>
          <h3>Proč tam jdeme</h3>
          <p><strong>{place.lead}</strong> {place.body}</p>
          <h3>Na co si dát pozor</h3>
          <div className="notice-card">{place.notice}</div>
          <h3>Krátká zajímavost</h3>
          <ObservePanel items={place.observe} />
        </details>
      </div>
    </article>
  );
}
