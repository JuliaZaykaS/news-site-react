// import { AboutPage } from "pages/AboutPage";
// import { MainPage } from "pages/MainPage";
import { getUserAuthData } from "entities/User";
import { Suspense, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  // const routes = useMemo(() => {
  //   return Object.values(routeConfig).filter((el) => {
  //     if (el.authOnly && !isAuth) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [isAuth]);
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { element, path } = route;
    const pageElement = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{element}</div>
      </Suspense>
    );
    return (
      <Route
        key={path}
        element={
          route.authOnly ? (
            <RequireAuth>{pageElement}</RequireAuth>
          ) : (
            pageElement
          )
        }
        path={path}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
