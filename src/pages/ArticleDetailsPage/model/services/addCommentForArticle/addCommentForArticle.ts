import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

import { getArticleDetailsData } from '@/entities/Article';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
// import { addNewCommentFormActions } from "@/features/addNewCommentForm/model/slices/addNewCommentFormSlice";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    //   const text = getNewCommentFormText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>(`/comments`, {
            articleId: article.id,
            userId: userData.id,
            text,
        });
        if (!response.data) {
            throw new Error();
        }

        // dispatch(addNewCommentFormActions.setText(""));
        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"));
        return rejectWithValue(`${error}`);
    }
});
