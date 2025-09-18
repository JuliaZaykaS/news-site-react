import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `comment.id`
    selectId: (comment) => comment.id,
});

// создаем селектор для получения нормальзованных данный из стейта
export const getArticleDetailsComments =
    commentsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.comments ||
            commentsAdapter.getInitialState(),
    );

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            ids: [],
            entities: {},
            error: undefined,
        },
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
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
