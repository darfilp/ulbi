import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";
import isNumber from "shared/utils/isNumber";

function App() {
  const { theme } = useTheme();

  console.log(isNumber("32"), true);

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;
