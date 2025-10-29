import { lazy } from 'react';
import ArticlesPage from './ArticlesPage';

const isTest = process.env.NODE_ENV === 'test';

export const ArticlesPageAsync = isTest
    ? ArticlesPage // статический import для тестов
    : lazy(() => import('./ArticlesPage'));
