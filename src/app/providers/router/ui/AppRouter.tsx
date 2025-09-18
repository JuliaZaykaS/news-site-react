// import { AboutPage } from "pages/AboutPage";
// import { MainPage } from "pages/MainPage";
// import { getUserAuthData } from "@/entities/User";
import { Suspense, useCallback } from 'react';
// import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { element, path, authOnly, roles } = route;
        const pageElement = (
            <Suspense fallback={<PageLoader />}>
                {/* <div className="page-wrapper"> */}
                {element}
                {/* </div> */}
            </Suspense>
        );
        return (
            <Route
                key={path}
                element={
                    authOnly ? (
                        <RequireAuth roles={roles}>{pageElement}</RequireAuth>
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
