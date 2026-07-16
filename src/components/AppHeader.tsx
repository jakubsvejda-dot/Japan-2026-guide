import { Moon, Sun } from 'lucide-react';

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function AppHeader({ isDark, onToggleTheme }: Props) {
  return (
    <header className="app-header">
      <div className="brand">
        <span>JAPONSKO 2026</span>
        <strong>Mise tří dobrodruhů</strong>
      </div>
      <button className="icon-button" onClick={onToggleTheme} aria-label="Přepnout vzhled">
        {isDark ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </header>
  );
}
