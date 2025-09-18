// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { profileRating, profileRatingSchema } from "../types/profileRating";

// const initialState: profileRatingSchema = {
export const initialState = {
    isLoading: false,
    error: undefined,
};

// export const profileRatingSlice = createSlice({
//     name: "profileRating",
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
//                 (state, action: PayloadAction < Profile Rating >) => {
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
// export const { actions: profileRatingActions } = profileRatingSlice;
// export const { reducer: profileRatingReducer } = profileRatingSlice;
