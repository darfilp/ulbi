import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;
