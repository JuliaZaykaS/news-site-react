import { StateSchema } from "@/app/providers/StoreProvider";

// ?? - в этом случае к "" приведется только тогда, когда будет null или undefined, на другие false-значения он реагировать не будет(т.е. 0 можно будет ввести, в отличие от ||)
export const getNewCommentFormText = (state: StateSchema) =>
  state.addNewCommentForm?.text ?? "";
export const getNewCommentFormError = (state: StateSchema) =>
  state.addNewCommentForm?.error;
