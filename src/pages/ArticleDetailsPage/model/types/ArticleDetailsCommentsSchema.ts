import { Dictionary } from "@reduxjs/toolkit";
import { Comment } from "@/entities/Comment";

// export interface ArticleDetailsCommentsSchema extends EntityAdapter<Comment> {
export interface ArticleDetailsCommentsSchema {
  isLoading?: boolean;
  error?: string;
  //   data?: Comment[];
  ids: string[];
  entities: Dictionary<Comment>;
}
