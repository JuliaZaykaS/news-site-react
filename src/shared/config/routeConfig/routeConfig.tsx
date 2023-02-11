import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

// объявим список роутов приложения и их названий
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

// создадим объект, к котором укажем к каждому роуту путь до соответствующего компонента
// <AppRoutes, string> -  имя пути, сам путь
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// объявляем сами роуты, маршрут для них и компоненты для отрисовки
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
