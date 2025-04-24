import clsx from "clsx";
import { useTheme } from "shared/theme/useTheme";
import s from "./ThemeToggle.m.scss";
import DarkMode from "shared/assets/icons/dark_mode.svg";
import LightMode from "shared/assets/icons/light_mode.svg";
import { Button } from "shared/lib/Button";
import { Theme } from "shared/theme/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={clsx(s.root, className)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <DarkMode fill="white" />
      ) : (
        <LightMode fill="white" />
      )}
    </Button>
  );
};
