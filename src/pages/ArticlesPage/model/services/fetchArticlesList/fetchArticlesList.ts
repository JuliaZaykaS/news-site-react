import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleDetailsType } from "entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePageNum,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesListProps {
  // page?: number;
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  // void,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  // const { page = 1 } = props;
  const page = getArticlesPagePageNum(getState());
  const limit = getArticlesPageLimit(getState());
  const order = getArticlesPageOrder(getState());
  const sort = getArticlesPageSort(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        // по документации бекенда
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort,
        q: search,
        type: type === ArticleDetailsType.ALL ? undefined : type,
      },
    });
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
