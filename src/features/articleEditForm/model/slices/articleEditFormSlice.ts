import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { articleEditForm, articleEditFormSchema } from "../types/articleEditForm";
import { ArticleEditFormSchema } from "../types/articleEditForm";


const initialState: ArticleEditFormSchema = {

    isLoading: false,
    error: undefined,

};

export const articleEditFormSlice = createSlice({
    name: "articleEditForm",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //         builder
        //             .addCase(fetchProfileData.pending, (state) => {
        //                 state.error = undefined;
        //                 state.isLoading = true;
        //             })
        //             .addCase(
        //                 fetchProfileData.fulfilled,
        //                 (state, action: PayloadAction < Article Edit Form >) => {
        //     state.isLoading = false;

        //     state.profile = action.payload;
        // }
        //           )
        //           .addCase(fetchProfileData.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });

    },
});

// Action creators are generated for each case reducer function
export const { actions: articleEditFormActions } = articleEditFormSlice;
export const { reducer: articleEditFormReducer } = articleEditFormSlice;
