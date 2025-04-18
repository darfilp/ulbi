import { createBrowserRouter, RouterProvider } from "react-router-dom";
import s from "./App.m.scss";

import NotFoundPage from "./pages/NotFoundPage";
import { Suspense, useContext, useState } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

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
