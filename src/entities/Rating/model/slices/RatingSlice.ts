// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { Rating } from "../types/Rating";

// const initialState: RatingSchema = {
export const initialState = {
    isLoading: false,
    error: undefined,
};

// export const RatingSlice = createSlice({
//     name: "Rating",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         // builder
//         //     .addCase(fetchProfileData.pending, (state) => {
//         //         state.error = undefined;
//         //         state.isLoading = true;
//         //     })
//         //     .addCase(
//         //         fetchProfileData.fulfilled,
//         //         (state, action: PayloadAction<Rating>) => {
//         //             state.isLoading = false;

//         //             state.profile = action.payload;
//         //         }
//         //     )
//         //     .addCase(fetchProfileData.rejected, (state, action) => {
//         //         state.isLoading = false;
//         //         state.error = action.payload;
//         //     });

//     },
// });

// // Action creators are generated for each case reducer function
// export const { actions: RatingActions } = RatingSlice;
// export const { reducer: RatingReducer } = RatingSlice;
