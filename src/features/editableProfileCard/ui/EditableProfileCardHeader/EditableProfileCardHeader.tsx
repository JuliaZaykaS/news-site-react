import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useSelector } from 'react-redux';

import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { profileActions } from '../../model/slices/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (
    props: EditableProfileCardHeaderProps,
) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(
        () => dispatch(profileActions.setReadonly(false)),
        [dispatch],
    );
    const onCancelEdit = useCallback(
        () => dispatch(profileActions.cancelEdit()),
        [dispatch],
    );
    const onSaveEdit = useCallback(
        () => dispatch(updateProfileData()),

        [dispatch],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card padding='24' max borderRadius='partial'>
                    <HStack
                        max
                        justify={'between'}
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Профиль пользователя')} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <Button
                                        variant={'outline'}
                                        onClick={onEdit}
                                        data-testid={'EditableProfileCardHeader.EditButton'}
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            variant={'outline'}
                                            color='error'
                                            onClick={onCancelEdit}
                                            data-testid={
                                                'EditableProfileCardHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            variant={'outline'}
                                            color='success'
                                            onClick={onSaveEdit}
                                            data-testid={
                                                'EditableProfileCardHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                </Card>
            }
            off={<HStack
                max
                justify={'between'}
                className={classNames('', {}, [className])}
            >
                <TextDeprecated title={t('Профиль пользователя')} />
                {canEdit && (
                    <>
                        {readonly ? (
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditButton'}
                            >
                                {t('Редактировать')}
                            </ButtonDeprecated>
                        ) : (
                            <HStack gap="8">
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.CancelButton'
                                    }
                                >
                                    {t('Отменить')}
                                </ButtonDeprecated>

                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSaveEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.SaveButton'
                                    }
                                >
                                    {t('Сохранить')}
                                </ButtonDeprecated>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>} />

    );
};
