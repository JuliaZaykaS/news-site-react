import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

import { EditableProfileCard } from '@/features/editableProfileCard';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ProfileRating } from '@/features/profileRating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/entities/Profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { useEffect, useState } from 'react';

interface ProfilePageProps {
    className?: string;
    mockedId?: string; // для мокания в сторибуке
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className, mockedId } = props;
    const { t } = useTranslation('profile');

    const params = useParams<{ id: string }>();
    const [id, setId] = useState(params.id);

    // const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (__PROJECT__ === 'storybook') {
            setId(mockedId);
        }
    }, [mockedId]);

    const userData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    let profileRatingContent;

    if (!id) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text text={t('Профиль не найден')} />}
                off={
                    <TextDeprecated
                        text={t('Профиль не найден')}
                    />
                }
            />
        );
    }

    if (userData?.id !== id && profileData) {
        profileRatingContent = (
            <ProfileRating profileId={id} />
        );
    }

    return (
        <Page
            className={classNames(cls.profilePage, {}, [
                className,
            ])}
            data-testid={'ProfilePage'}
        >
            <EditableProfileCard id={id} />
            {profileRatingContent}
        </Page>
    );
};

export default ProfilePage;
