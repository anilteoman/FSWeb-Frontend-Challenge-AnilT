import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
