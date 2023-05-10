import type { User, UserSchema } from "./model/types/user";
import { userReducer, userActions } from "./model/slice/userSlice";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";

export {
  User,
  UserSchema,
  userReducer,
  userActions,
  getUserAuthData,
  getUserInited,
};
