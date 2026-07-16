import type { PlaceStory } from '../data/dayTokyo22';

type Props = {
  place: PlaceStory;
  reverse?: boolean;
};

export function PlaceStoryCard({ place, reverse = false }: Props) {
  return (
    <article className={`place-story ${reverse ? 'reverse' : ''}`}>
      <div className="place-story-visual">
        <img src={place.illustration} alt="" />
      </div>
      <div className="place-story-copy">
        <span className="place-time">{place.time}</span>
        <div className="place-japanese">{place.japanese}</div>
        <h2>{place.name}</h2>
        <h3>{place.lead}</h3>
        <p>{place.body}</p>
        <div className="notice-card">{place.notice}</div>
      </div>
    </article>
  );
}
