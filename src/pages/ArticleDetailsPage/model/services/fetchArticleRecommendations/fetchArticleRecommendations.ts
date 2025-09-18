import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecommendations', async (props, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                // по документации бекенда
                _limit: 4,
                // _page: page,
                // _order: order,
                // _sort: sort,
                // q: search,
                // type: type === ArticleDetailsType.ALL ? undefined : type,
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
