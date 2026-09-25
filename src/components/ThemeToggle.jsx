import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 ${
        isDark
          ? 'border-white/10 bg-white/[0.05] hover:bg-white/[0.12] hover:border-amber-400/40 text-amber-300'
          : 'border-black/10 bg-black/[0.04] hover:bg-black/[0.08] hover:border-purple-600/40 text-purple-700 shadow-sm'
      } ${className}`}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        {/* Sun Icon for switching to Light */}
        <Sun
          className={`h-4.5 w-4.5 transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-amber-300 group-hover:rotate-45'
              : '-rotate-90 scale-0 opacity-0 absolute'
          }`}
        />
        {/* Moon Icon for switching to Dark */}
        <Moon
          className={`h-4.5 w-4.5 transition-all duration-500 transform ${
            !isDark
              ? 'rotate-0 scale-100 opacity-100 text-purple-700 group-hover:-rotate-12'
              : 'rotate-90 scale-0 opacity-0 absolute'
          }`}
        />
      </div>

      {/* Subtle ambient hover halo */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark
            ? 'shadow-[0_0_15px_rgba(251,191,36,0.3)]'
            : 'shadow-[0_0_15px_rgba(147,51,234,0.25)]'
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
