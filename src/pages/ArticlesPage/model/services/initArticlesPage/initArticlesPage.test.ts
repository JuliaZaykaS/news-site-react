import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("initArticlesPage.test", () => {
  test("inited false ", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });
    const params = new URLSearchParams();

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(4);
    // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });
  test("inited true", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    const params = new URLSearchParams();

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
