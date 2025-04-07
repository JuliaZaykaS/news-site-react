// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { articleRating, articleRatingSchema } from "../types/articleRating";


// const initialState: articleRatingSchema = {
export const initialState = {

    isLoading: false,
    error: undefined,

};

// export const articleRatingSlice = createSlice({
//     name: "articleRating",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProfileData.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(
//                 fetchProfileData.fulfilled,
//                 (state, action: PayloadAction < Article Rating >) => {
//     state.isLoading = false;

//     state.profile = action.payload;
// }
//       )
//       .addCase(fetchProfileData.rejected, (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// });

//   },
// });

// // Action creators are generated for each case reducer function
// export const { actions: articleRatingActions } = articleRatingSlice;
// export const { reducer: articleRatingReducer } = articleRatingSlice;
