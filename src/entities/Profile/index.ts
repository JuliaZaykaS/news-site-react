import type { Profile, ProfileSchema } from "./model/types/profile";
import { profileReducer, profileActions } from "./model/slice/profileSlice";
import { getProfileFirstName } from "./model/selectors/getProfileFirstName/getProfileFirstName";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  getProfileFirstName,
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileData,
  ProfileCard,
};
