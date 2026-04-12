
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "dark" | "light" | "sunset" | "ocean";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "dark", setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("pmec-theme");
    return (saved as Theme) || "dark";
  });

  useEffect(() => {
    localStorage.setItem("pmec-theme", theme);
    const root = document.documentElement;
    root.classList.remove("dark", "light", "sunset", "ocean");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
