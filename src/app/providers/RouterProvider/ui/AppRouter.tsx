import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "shared/router/routerConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {
  const router = createBrowserRouter(routeConfig);

  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
