import { Eye } from 'lucide-react';

type Props = { items: string[] };

export function ObservePanel({ items }: Props) {
  return (
    <div className="observe-panel">
      <div className="observe-heading"><Eye size={18} /> Všimněte si</div>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
