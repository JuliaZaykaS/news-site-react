import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";

export const getCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!article || !user) return false;
    return user?.id === article?.user.id;
  }
);
