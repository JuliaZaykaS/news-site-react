// import { AboutPage } from "pages/AboutPage";
// import { MainPage } from "pages/MainPage";
import { getUserAuthData } from "entities/User";
import { Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((el) => {
      if (el.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
