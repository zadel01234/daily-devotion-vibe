import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'sepia';
type FontSize = 'small' | 'standard' | 'large';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('app-theme');
    return (saved as Theme) || 'light';
  });

  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const saved = localStorage.getItem('app-font-size');
    return (saved as FontSize) || 'standard';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-light', 'theme-dark', 'theme-sepia', 'dark');
    
    if (theme === 'dark') {
      root.classList.add('dark', 'theme-dark');
    } else if (theme === 'sepia') {
      root.classList.add('theme-sepia');
    } else {
      root.classList.add('theme-light');
    }
    
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-font-size', fontSize);
    localStorage.setItem('app-font-size', fontSize);
  }, [fontSize]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
