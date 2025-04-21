import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";
import { ThemeToggle } from "widgets/themeToggle";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      <ThemeToggle />
    </div>
  );
}

export default App;
