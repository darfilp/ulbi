import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./ThemeProvider";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return {
    theme,
    toggleTheme,
  };
};
