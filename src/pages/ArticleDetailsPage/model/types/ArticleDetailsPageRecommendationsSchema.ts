import { Dictionary, EntityAdapter } from "@reduxjs/toolkit";
import { Article } from "entities/Article";

// export interface ArticleDetailsCommentsSchema extends EntityAdapter<Comment> {
export interface ArticleDetailsPageRecommendationsSchema {
  isLoading?: boolean;
  error?: string;
  //   data?: Comment[];
  ids: string[];
  entities: Dictionary<Article>;
}
