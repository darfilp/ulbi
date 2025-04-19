import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "shared/router/routerConfig";

export const AppRouter = () => {
  const router = createBrowserRouter(routeConfig);

  return (
    <Suspense fallback={<>loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
