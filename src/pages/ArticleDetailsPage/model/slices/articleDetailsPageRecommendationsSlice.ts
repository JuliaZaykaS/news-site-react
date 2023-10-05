import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

import { ArticleDetailsPageRecommendationsSchema } from "../types/ArticleDetailsPageRecommendationsSchema";
import { Article } from "@/entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `comment.id`
  selectId: (article) => article.id,
});

// создаем селектор для получения нормальзованных данный из стейта
export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

const articleDetailsPageRecommendationsSlice = createSlice({
  name: "articleDetailsComments",
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>(
      {
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
      }
    ),
  reducers: {
    // // Can pass adapter functions directly as case reducers.  Because we're passing this
    // // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    // commentsAdded: commentsAdapter.addOne,
    // commentsReceived(state, action) {
    //   // Or, call them as "mutating" helpers in a case reducer
    //   commentsAdapter.setAll(state, action.payload.books);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } =
  articleDetailsPageRecommendationsSlice;
