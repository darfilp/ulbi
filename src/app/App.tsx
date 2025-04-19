import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="" onClick={toggleTheme}>
        Переключить тему
      </div>

      <AppRouter />
    </div>
  );
}

export default App;
