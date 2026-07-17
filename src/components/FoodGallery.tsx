import { Sparkles } from 'lucide-react';
import type { FoodTip } from '../data/dayTypes';

type Props = { items: FoodTip[] };

const priorityLabel: Record<FoodTip['priority'], string> = {
  must: 'Určitě ochutnat',
  nice: 'Když bude chuť',
  curious: 'Pro zvědavce',
};

export function FoodGallery({ items }: Props) {
  return (
    <div className="food-gallery">
      {items.map((item) => (
        <article className="food-card" key={item.id}>
          <div className="food-card-visual">
            <img src={item.illustration} alt="" />
            <span className={`food-priority ${item.status?.toLowerCase() ?? item.priority}`}>
              <Sparkles size={13} /> {item.status ?? priorityLabel[item.priority]}
            </span>
          </div>
          <div className="food-card-copy">
            {item.japanese && <span>{item.japanese}</span>}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <dl>
              <div><dt>Kdy</dt><dd>{item.moment}</dd></div>
              <div><dt>Cena</dt><dd>{item.price}</dd></div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}
