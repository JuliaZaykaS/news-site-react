import { User } from "@/entities/User";
import { ArticleDetailsBlockType, ArticleDetailsType } from "../consts/articleConsts";



export interface ArticleDetailsBlockBase {
  id: string;
  type: ArticleDetailsBlockType;
}
export interface ArticleDetailsTextBlock extends ArticleDetailsBlockBase {
  type: ArticleDetailsBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export interface ArticleDetailsImageBlock extends ArticleDetailsBlockBase {
  type: ArticleDetailsBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleDetailsCodeBlock extends ArticleDetailsBlockBase {
  type: ArticleDetailsBlockType.CODE;
  code: string;
}
export type ArticleDetailsBlock =
  | ArticleDetailsCodeBlock
  | ArticleDetailsImageBlock
  | ArticleDetailsTextBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleDetailsType[];
  blocks: ArticleDetailsBlock[];
  user: User;
}

export interface ArticleDetailsSchema {
  data?: Article;
  isLoading: boolean;
  error?: string;
}
