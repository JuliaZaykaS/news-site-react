import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema";
import { Profile } from "entities/Profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());
  const profileId = formData?.id;

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }
  try {
    const response = await extra.api.put<Profile>(
      `/profile/${profileId}`,
      formData
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
