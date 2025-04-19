import { RouteObject, RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

export const RouteNames = {
  MAIN: "main",
  ABOUT: "about",
  NOT_FOUND: "not_found",
} as const;

export type RouteNamesUnion = (typeof RouteNames)[keyof typeof RouteNames];

export const RoutePaths: Record<RouteNamesUnion, string> = {
  [RouteNames.MAIN]: "/",
  [RouteNames.ABOUT]: "/about",
  [RouteNames.NOT_FOUND]: "/not_found",
};

export const routeConfig: RouteObject[] = [
  {
    path: RoutePaths[RouteNames.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePaths[RouteNames.ABOUT],
    element: <AboutPage />,
  },
  {
    path: RoutePaths[RouteNames.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
