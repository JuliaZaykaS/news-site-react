import { Dictionary, EntityAdapter } from "@reduxjs/toolkit";
import { Article, ArticleViewType } from "entities/Article";
import { Comment } from "entities/Comment";

// export interface ArticleDetailsCommentsSchema extends EntityAdapter<Comment> {
export interface ArticlesPageSchema {
  ids: string[];
  entities: Dictionary<Article>;
  isLoading?: boolean;
  error?: string;
  view: ArticleViewType;
  // пагинация
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean; // инициализировались ли страницы
}
