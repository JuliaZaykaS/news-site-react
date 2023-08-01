import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
import { AddNewCommentFormSchema } from "features/addNewCommentForm";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";

import { ArticlesPageSchema } from "pages/ArticlesPage";
import { To, NavigateOptions } from "react-router-dom";
import { rtkApi } from "shared/api/rtkApi";
import { ScrollPositionSaveSchema } from "widgets/Page";

//  пример
// export interface CounterState {
//   value: number;
// }

export interface StateSchema {
  counter: CounterSchema; // пример
  user: UserSchema;
  scrollPositionSave: ScrollPositionSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addNewCommentForm?: AddNewCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}
// articleDetailsComments?: ArticleDetailsCommentsSchema;
// articleDetailsRecommendations?: ArticleDetailsPageRecommendationsSchema;

// типы для названий редьюсеров
export type StateSchemaKey = keyof StateSchema;

//  тип для редьюсер менеджера
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  // getMountedReducers: OptionalRecord<StateSchemaKey, boolean>;
}

// тип для редьюсер-менеджера
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

//  типы для инстанс апи
export interface ThunkExtraArg {
  api: AxiosInstance;
  // navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
