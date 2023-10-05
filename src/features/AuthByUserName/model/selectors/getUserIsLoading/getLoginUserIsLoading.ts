import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginUserIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
