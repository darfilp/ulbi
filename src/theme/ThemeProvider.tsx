import { createContext, FC, ReactElement, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
