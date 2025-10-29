import {
    AppRouteByPathPattern,
    AppRoutes,
} from '@/shared/const/router';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export function useRouteChange() {
    const location = useLocation();

    const [appRoute, setAppRoute] = useState<AppRoutes>(
        AppRoutes.MAIN,
    );

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).forEach(
            ([pattern, route]) => {
                // проверяем,совпала ли текущая страница с паттерном (элементом в массиве роутов)
                // если да, то эта страница у нас открыта и записываем ее в стейт
                if (matchPath(pattern, location.pathname)) {
                    setAppRoute(route);
                }
            },
        );
    }, [location.pathname]);

    return appRoute;
}
