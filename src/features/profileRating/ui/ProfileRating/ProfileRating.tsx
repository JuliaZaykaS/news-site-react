import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import {
    useAddArticleRating,
    useGetArticleRating,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { RatingCard } from '@/entities/Rating';
import { typedMemo } from '@/shared/const/memo';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = typedMemo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id ?? '',
        profileId,
    });
    const [addProfileRating] = useAddArticleRating();

    const rating = data?.[0];

    const handleAddArticleRating = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                addProfileRating({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, addProfileRating, userData?.id],
    );

    const onAcceptRating = useCallback(
        (starsCount: number, feedback?: string) => {
            handleAddArticleRating(starsCount, feedback);
        },
        [handleAddArticleRating],
    );
    const onCancelRating = useCallback(
        (starsCount: number) => {
            handleAddArticleRating(starsCount);
        },
        [handleAddArticleRating],
    );

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />;
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о пользователе')}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancelRating}
            onAccept={onAcceptRating}
        />
    );
});

export default ProfileRating;
