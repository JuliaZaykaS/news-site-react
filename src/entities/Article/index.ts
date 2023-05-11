export { Article, ArticleDetailsSchema } from "./model/types/article";
export {
  articleDetailsActions,
  articleDetailsReducer,
} from "./model/slice/articleDetailsSlice";
export { fetchArticleById } from "./model/services/fetchArticleById/fetchArticleById";
export {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
  getArticleDetailsData,
} from "./model/selectors/getArticleDetails";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
