import { AppRoutes } from "@/shared/const/router";
import { useRouteChange } from "@/shared/lib/router/useRouteChange";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";
import { ReactElement } from "react";

export function useAppToolbar() {
    const currentRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[currentRoute]

}