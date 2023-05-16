import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddNewCommentFormSchema } from "../types/addNewCommentForm";

const initialState: AddNewCommentFormSchema = {
  text: "",
};

export const addNewCommentFormSlice = createSlice({
  name: "addNewCommentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProfileData.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(
  //       fetchProfileData.fulfilled,
  //       (state, action: PayloadAction<Add New Comment Form>) => {
  //         state.isLoading = false;

  //         state.profile = action.payload;
  //       }
  //     )
  //     .addCase(fetchProfileData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });

  // },
});

// Action creators are generated for each case reducer function
export const { actions: addNewCommentFormActions } = addNewCommentFormSlice;
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice;
