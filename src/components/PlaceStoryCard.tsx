import type { PlaceStory } from '../data/dayTypes';
import { ObservePanel } from './ObservePanel';

type Props = {
  place: PlaceStory;
  reverse?: boolean;
};

export function PlaceStoryCard({ place, reverse = false }: Props) {
  const image = place.image ?? (place.illustration ? {
    src: place.illustration,
    alt: '',
    credit: '',
    license: '',
    sourceUrl: '',
  } : undefined);
  const isGuide = Boolean(place.whyWeGo?.length && place.highlights?.length && place.practicalTip && place.mapsUrl);

  return (
    <article className={`place-story ${reverse ? 'reverse' : ''}`}>
      <div className="place-story-copy">
        <span className="place-time">{place.time}</span>
        {place.japanese && <div className="place-japanese">{place.japanese}</div>}
        <h2>{place.name}</h2>
        <details className="place-details">
          <summary>Otevřít průvodce místem</summary>
          {image && <div className="place-story-visual">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={(event) => { event.currentTarget.parentElement?.classList.add('image-unavailable'); }}
            />
            {image.credit && <p className="place-image-credit">
              Foto: <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">{image.credit}</a> · {image.license}
            </p>}
          </div>}

          {isGuide ? <>
            <h3>Proč sem jdeme</h3>
            {place.whyWeGo?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3>Co nepřehlédnout</h3>
            <ObservePanel items={place.highlights ?? []} />
            <h3>Praktický tip</h3>
            <div className="notice-card">{place.practicalTip}</div>
            <a className="maps-link" href={place.mapsUrl} target="_blank" rel="noopener noreferrer">
              Otevřít v Google Maps <span aria-hidden="true">↗</span>
            </a>
          </> : <>
            <h3>Proč tam jdeme</h3>
            <p><strong>{place.lead}</strong> {place.body}</p>
            <h3>Na co si dát pozor</h3>
            <div className="notice-card">{place.notice}</div>
            <h3>Krátká zajímavost</h3>
            <ObservePanel items={place.observe ?? []} />
          </>}
        </details>
      </div>
    </article>
  );
}
