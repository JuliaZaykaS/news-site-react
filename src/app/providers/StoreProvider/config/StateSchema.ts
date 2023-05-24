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
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { To, NavigateOptions } from "react-router-dom";
import { ScrollPositionSaveSchema } from "widgets/Page";

//  пример
// export interface CounterState {
//   value: number;
// }

export interface StateSchema {
  counter: CounterSchema; // пример
  user: UserSchema;
  scrollPositionSave: ScrollPositionSaveSchema;

  // асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addNewCommentForm?: AddNewCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

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
