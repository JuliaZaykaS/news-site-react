import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article, ArticleDetailsSchema } from "../types/article";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    // setReadonly: (state, action: PayloadAction<boolean>) => {
    //   state.readonly = action.payload;
    // },
    // updateProfile: (state, action: PayloadAction<Article>) => {
    //   state.formData = { ...state.formData, ...action.payload };
    // },
    // cancelEdit: (state) => {
    //   state.readonly = true;
    //   state.formData = state.profile;
    //   state.validateError = undefined;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
