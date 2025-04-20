import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      {/* <div className="" onClick={toggleTheme}>
        Переключить тему
      </div> */}
    </div>
  );
}

export default App;
