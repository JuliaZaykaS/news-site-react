import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPagePageNum,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlePage", async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkAPI;

  const hasMore = getArticlesPageHasMore(getState());
  const limit = getArticlesPageLimit(getState());
  const page = getArticlesPagePageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(
      fetchArticlesList({
        page: page + 1,
      })
    );
  }
  //   try {
  //     const response = await extra.api.get<Article[]>(`/articles`, {
  //       params: {
  //         _expand: "user",
  //         // по документации бекенда
  //         _limit: limit,
  //         _page: page,
  //       },
  //     });
  //     if (!response.data) {
  //       throw new Error();
  //     }

  //     return response.data;
  //   } catch (error) {
  //     return rejectWithValue(`${error}`);
  //   }
});
