import { Rating } from "@/entities/Rating"
import { rtkApi } from "@/shared/api/rtkApi"

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}
interface AddProfileRatingArg {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}


const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: "/profile-ratings",
                params: {
                    userId: userId,
                    profileId: profileId,

                }

            }),
        }),
        addProfileRating: build.mutation<void, AddProfileRatingArg>({
            query: (arg) => ({
                url: "/profile-ratings",
                method: "POST",
                body: arg,

            }),
        }),
    }),

})

export const useGetArticleRating = profileRatingApi.useGetProfileRatingQuery
export const useAddArticleRating = profileRatingApi.useAddProfileRatingMutation
