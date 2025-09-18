import { Dictionary } from '@reduxjs/toolkit';
import {
    Article,
    ArticleDetailsType,
    ArticleSortField,
    ArticleViewType,
} from '@/entities/Article';

import { SortOrder } from '@/shared/types/sortOrder';

// export interface ArticleDetailsCommentsSchema extends EntityAdapter<Comment> {
export interface ArticlesPageSchema {
    ids: string[];
    entities: Dictionary<Article>;
    isLoading?: boolean;
    error?: string;
    // пагинация
    page: number;
    limit?: number;
    hasMore: boolean;

    // фильтры
    view: ArticleViewType;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;

    type: ArticleDetailsType;

    _inited: boolean; // инициализировались ли страницы
}
