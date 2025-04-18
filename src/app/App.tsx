import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Suspense } from "react";

import "./styles/index.scss";
import { useTheme } from "shared/theme/useTheme";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

function App() {
  const { theme, toggleTheme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <div className={`app ${theme}`}>
      <div className="" onClick={toggleTheme}>
        Переключить тему
      </div>

      <Suspense fallback={<>loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
