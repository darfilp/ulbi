import { createBrowserRouter, RouterProvider } from "react-router-dom";
import s from "./App.m.scss";

import NotFoundPage from "./pages/NotFoundPage";
import { Suspense, useContext, useState } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { Theme, ThemeProvider } from "./theme/ThemeProvider";
import { ThemeContext } from "./theme/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPageAsync />,
    },
    {
      path: "/about",
      element: <AboutPageAsync />,
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
