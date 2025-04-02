import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import s from './App.m.scss';

import NotFoundPage from './pages/NotFoundPage';
import { Suspense } from 'react';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

function App() {
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

      
    return  <Suspense fallback={<>loading...</>}>
    <RouterProvider router={router} />
  </Suspense>;
}

export default App