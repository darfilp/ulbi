import { createContext } from "react";
import { Theme } from "./ThemeProvider";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as any);

export const LOCAL_STORAGE_THEME_KEY = "theme";
