import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { DayGuidePage } from './pages/DayGuidePage';
import { getDayGuide } from './data/dayRegistry';
import './styles/global.css';

type Route = { kind: 'home' } | { kind: 'day'; id: string };

function readRoute(): Route {
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

  return (
    <>
      <AppHeader isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        {route.kind === 'home' || !guide
          ? <HomePage onOpenTokyoDay={() => { window.location.hash = '/day/tokyo-22'; }} />
          : <DayGuidePage guide={guide} onBack={() => { window.location.hash = '/'; }} />}
      </main>
    </>
  );
}
