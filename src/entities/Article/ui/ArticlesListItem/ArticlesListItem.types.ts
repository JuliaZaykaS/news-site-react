import { HTMLAttributeAnchorTarget } from "react";
import { ArticleViewType } from "../../model/consts/articleConsts";
import { Article } from "../../model/types/article";

export interface ArticlesListItemProps {
    className?: string;
    article: Article;
    view: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}