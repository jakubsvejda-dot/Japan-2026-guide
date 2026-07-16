import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { DayTokyo22Page } from './pages/DayTokyo22Page';
import './styles/global.css';

type Route = 'home' | 'day-tokyo-22';

function readRoute(): Route {
  return window.location.hash === '#/day/tokyo-22' ? 'day-tokyo-22' : 'home';
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

  const openTokyoDay = () => {
    window.location.hash = '/day/tokyo-22';
  };

  const goHome = () => {
    window.location.hash = '/';
  };

  return (
    <>
      <AppHeader isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        {route === 'home'
          ? <HomePage onOpenTokyoDay={openTokyoDay} />
          : <DayTokyo22Page onBack={goHome} />}
      </main>
    </>
  );
}
