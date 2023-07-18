import { RouteProps } from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import { AboutPage } from "pages/AboutPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}
export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
};
