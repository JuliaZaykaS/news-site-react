
/* eslint-disable react/display-name */
// import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entities/Article";

// eslint-disable-next-line juliaz/public-api-imports
import { loginReducer } from "@/features/AuthByUserName/model/slice/loginSlice";
// eslint-disable-next-line juliaz/public-api-imports
import { addNewCommentFormReducer } from "@/features/addNewCommentForm/model/slices/addNewCommentFormSlice";
// eslint-disable-next-line juliaz/public-api-imports
import { profileReducer } from "@/features/editableProfileCard/model/slices/profileSlice";
// eslint-disable-next-line juliaz/public-api-imports
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
// import { articleDetailsCommentsReducer } from "@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  // articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addNewCommentForm: addNewCommentFormReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList // доп редьюсеры для конкретной стори
  ) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
