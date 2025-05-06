import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { AppRouter } from "./providers/RouterProvider";
// import { useEffect } from "react";

function App() {
  const { theme } = useTheme();

  // useEffect(() => {
  //   if (Math.random() < 0.6) {
  //     throw new Error();
  //   }
  // }, []);

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;
