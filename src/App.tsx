import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import './styles/global.css';

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('japan-theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('japan-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <AppHeader isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        <HomePage />
      </main>
    </>
  );
}
