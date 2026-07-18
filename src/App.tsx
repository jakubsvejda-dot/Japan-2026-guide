import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { DayGuidePage } from './pages/DayGuidePage';
import { ChapterDaysPage } from './pages/ChapterDaysPage';
import { dayGuides, getDayGuide } from './data/dayRegistry';
import { chapterDayIds, chapterForDay, chapters } from './data/trip';
import './styles/global.css';

type Route = { kind: 'home' } | { kind: 'chapter'; id: string } | { kind: 'day'; id: string };

function readRoute(): Route {
  const chapterMatch = window.location.hash.match(/^#\/chapter\/(.+)$/);
  if (chapterMatch) return { kind: 'chapter', id: chapterMatch[1] };
  const match = window.location.hash.match(/^#\/day\/(.+)$/);
  return match ? { kind: 'day', id: match[1] } : { kind: 'home' };
}

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('japan-theme') === 'dark');
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('japan-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const guide = route.kind === 'day' ? getDayGuide(route.id) : undefined;
  const dayIndex = guide ? dayGuides.findIndex((day) => day.id === guide.id) : -1;
  const chapter = route.kind === 'chapter' ? chapters.find((item) => item.id === route.id) : undefined;
  const chapterDays = chapter ? (chapterDayIds[chapter.id] ?? []).map(getDayGuide).filter((day): day is NonNullable<typeof day> => Boolean(day)) : [];
  const guideChapter = guide ? chapterForDay(guide.id) : undefined;

  return (
    <>
      <AppHeader isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        {route.kind === 'home'
          ? <HomePage onOpenChapter={(id) => { window.location.hash = `/chapter/${id}`; }} />
          : route.kind === 'chapter' && chapter
            ? <ChapterDaysPage chapter={chapter} days={chapterDays} onBack={() => { window.location.hash = '/'; }} onOpenDay={(id) => { window.location.hash = `/day/${id}`; }} />
            : guide
              ? <DayGuidePage guide={guide} onBack={() => { window.location.hash = guideChapter ? `/chapter/${guideChapter}` : '/'; }} onNavigate={(id) => { window.location.hash = `/day/${id}`; }} previousDay={dayGuides[dayIndex - 1]} nextDay={dayGuides[dayIndex + 1]} />
              : <HomePage onOpenChapter={(id) => { window.location.hash = `/chapter/${id}`; }} />}
      </main>
    </>
  );
}
