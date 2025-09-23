import { lazy } from 'react';
import ArticlesPage from './ArticlesPage';

// const isTest = __VITE_TEST__ ?? false;
// export const ArticlesPageAsync = isTest
//     ? ArticlesPage // статический import для тестов
//     : lazy(() => import('./ArticlesPage'));

export const ArticlesPageAsync = lazy(() => import('./ArticlesPage'));
export default ArticlesPage;
