import { StateSchema } from "app/providers/StoreProvider";

export const getNewCommentFormText = (state: StateSchema) =>
  state.addNewCommentForm?.text;
export const getNewCommentFormError = (state: StateSchema) =>
  state.addNewCommentForm?.error;
