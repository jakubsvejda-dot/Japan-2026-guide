import { ArrowLeft, CalendarDays, ChevronRight, MapPin } from 'lucide-react';
import type { Chapter } from '../data/trip';
import type { DayGuide } from '../data/dayTypes';

type Props = { chapter: Chapter; days: DayGuide[]; onBack: () => void; onOpenDay: (id: string) => void };

export function ChapterDaysPage({ chapter, days, onBack, onOpenDay }: Props) {
  return (
    <section className="chapter-days section">
      <button className="chapter-back" onClick={onBack}><ArrowLeft size={18} /> Všechny kapitoly</button>
      <span className="eyebrow">{chapter.dates} · {chapter.japanese}</span>
      <h1>{chapter.place}</h1>
      <p>{chapter.teaser}</p>
      <div className="chapter-day-list" aria-label={`Dny kapitoly ${chapter.place}`}>
        {days.map((day) => (
          <button key={day.id} onClick={() => onOpenDay(day.id)}>
            <span className="chapter-day-date"><CalendarDays size={18} /> {day.date}</span>
            <strong>{day.title}</strong>
            <span className="chapter-day-meta"><MapPin size={15} /> {day.city}</span>
            <ChevronRight className="chapter-day-arrow" size={21} />
          </button>
        ))}
      </div>
    </section>
  );
}
