import type { Profile, ProfileSchema } from "./model/types/profile";
import { profileReducer, profileActions } from "./model/slice/profileSlice";
import { getProfileData } from "./model/selectors/getUserAuthData/getProfileData";

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  getProfileData,
};
