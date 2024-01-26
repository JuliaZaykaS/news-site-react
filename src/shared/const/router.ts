// объявим список роутов приложения и их названий
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",

    NOT_FOUND = "not_found", // всегда последней
}


export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => "/admin_panel";
export const getRouteForbidden = () => "/forbidden";
export const getRouteNotFound = () => "*";


// создадим объект, к котором укажем к каждому роуту путь до соответствующего компонента
// <AppRoutes, string> -  имя пути, сам путь
// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: getRouteMain(),
//     [AppRoutes.ABOUT]: getRouteAbout(),
//     [AppRoutes.PROFILE]: getRouteProfile(':id'), // + id
//     [AppRoutes.ARTICLES]: getRouteArticles(),
//     [AppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'), // + id
//     [AppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
//     [AppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'), // + :id/edit
//     [AppRoutes.ADMIN_PANEL]: getRouteAdminPanel(),
//     [AppRoutes.FORBIDDEN]: getRouteForbidden(),
//     [AppRoutes.NOT_FOUND]: getRouteNotFound(),
// };