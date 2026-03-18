// src/context/ThemeProvider.js
'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = 'light', themes = ['light', 'dark'] }) {
  const [theme, setThemeState] = useState(defaultTheme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ds-theme');
      if (stored && themes.includes(stored)) {
        setThemeState(stored);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ds-theme', theme);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  }, [themes]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const idx = themes.indexOf(prev);
      return themes[(idx + 1) % themes.length];
    });
  }, [themes]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}