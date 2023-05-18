import { Dictionary, EntityAdapter } from "@reduxjs/toolkit";
import { Article, ArticleViewType } from "entities/Article";
import { Comment } from "entities/Comment";

// export interface ArticleDetailsCommentsSchema extends EntityAdapter<Comment> {
export interface ArticlesPageSchema {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewType;
  ids: string[];
  entities: Dictionary<Article>;
}
