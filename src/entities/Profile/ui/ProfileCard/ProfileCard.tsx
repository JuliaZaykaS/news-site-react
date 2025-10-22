import {
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Profile } from '../../model/types/profile';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';

import {
    Currency,
    CurrencySelect,
} from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import {
    HStack,
    VStack,
} from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
        onChangeAvatar,
        onChangeUserName,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        max
                        padding="24"
                        borderRadius="partial"
                    >
                        <VStack gap="32">
                            <HStack max justify="center">
                                <Skeleton
                                    border={'100%'}
                                    width={128}
                                    height={128}
                                />
                            </HStack>
                            <HStack gap="32" max>
                                <VStack gap="16" max>
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                </VStack>
                                <VStack gap="16" max>
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                    <Skeleton
                                        width={'100%'}
                                        height={38}
                                    />
                                </VStack>
                            </HStack>
                        </VStack>
                    </Card>
                }
                off={
                    <HStack
                        justify={'center'}
                        max
                        className={classNames(
                            cls.profileCard,
                            mods,
                            [className, cls.loading],
                        )}
                    >
                        <LoaderDeprecated />
                    </HStack>
                }
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <HStack
                        justify={'center'}
                        max
                        className={classNames(
                            cls.profileCardRedesigned,
                            mods,
                            [className, cls.error],
                        )}
                    >
                        <Text
                            variant={'error'}
                            title={t(
                                'Произошла ошибка при загрузке профиля',
                            )}
                            text={t(
                                'Попробуйте обновить страницу',
                            )}
                            align={'center'}
                        />
                    </HStack>
                }
                off={
                    <HStack
                        justify={'center'}
                        max
                        className={classNames(
                            cls.profileCard,
                            mods,
                            [className, cls.error],
                        )}
                    >
                        <TextDeprecated
                            theme={TextTheme.ERROR}
                            title={t(
                                'Произошла ошибка при загрузке профиля',
                            )}
                            text={t(
                                'Попробуйте обновить страницу',
                            )}
                            align={TextAlign.CENTER}
                        />
                    </HStack>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    max
                    padding="24"
                    className={classNames(
                        cls.profileCardRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="32">
                        {data?.avatar && (
                            <HStack
                                justify={'center'}
                                max
                                className={
                                    cls.avatarWrapper
                                }
                            >
                                <Avatar
                                    src={data?.avatar}
                                    alt={data?.username}
                                    size={120}
                                />
                            </HStack>
                        )}
                        <HStack gap="24" max>
                            <VStack gap="16" max>
                                <Input
                                    value={data?.first}
                                    label={t('Имя')}
                                    onChange={
                                        onChangeFirstName
                                    }
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.FirstName'
                                    }
                                />
                                <Input
                                    value={data?.lastname}
                                    label={t('Фамилия')}
                                    onChange={
                                        onChangeLastName
                                    }
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.LastName'
                                    }
                                />
                                <Input
                                    value={data?.age}
                                    label={t('Возраст')}
                                    onChange={onChangeAge}
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.Age'
                                    }
                                />
                                <Input
                                    value={data?.city}
                                    label={t('Город')}
                                    onChange={onChangeCity}
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.City'
                                    }
                                />
                            </VStack>
                            <VStack gap="16" max>
                                <Input
                                    value={data?.username}
                                    label={t(
                                        'Имя пользователя',
                                    )}
                                    onChange={
                                        onChangeUserName
                                    }
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.Username'
                                    }
                                />
                                <Input
                                    value={data?.avatar}
                                    label={t('Аватар')}
                                    onChange={
                                        onChangeAvatar
                                    }
                                    readonly={readonly}
                                    type={'text'}
                                    data-testid={
                                        'ProfileCard.Avatar'
                                    }
                                />

                                <CurrencySelect
                                    value={data?.currency}
                                    onChange={
                                        onChangeCurrency
                                    }
                                    readonly={readonly}
                                    data-testid={
                                        'ProfileCard.Currency'
                                    }
                                />
                                <CountrySelect
                                    value={data?.country}
                                    onChange={
                                        onChangeCountry
                                    }
                                    readonly={readonly}
                                    data-testid={
                                        'ProfileCard.Country'
                                    }
                                />
                            </VStack>
                        </HStack>
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    max
                    gap={'8'}
                    className={classNames(
                        cls.profileCard,
                        mods,
                        [className],
                    )}
                >
                    {data?.avatar && (
                        <HStack
                            justify={'center'}
                            max
                            className={cls.avatarWrapper}
                        >
                            <AvatarDeprecated
                                src={data?.avatar}
                                alt={data?.username}
                            />
                        </HStack>
                    )}
                    <InputDeprecated
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        className={cls.input}
                        onChange={onChangeFirstName}
                        readonly={readonly}
                        type={'text'}
                        data-testid={
                            'ProfileCard.FirstName'
                        }
                    />
                    <InputDeprecated
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        className={cls.input}
                        onChange={onChangeLastName}
                        readonly={readonly}
                        type={'text'}
                        data-testid={'ProfileCard.LastName'}
                    />
                    <InputDeprecated
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        className={cls.input}
                        onChange={onChangeAge}
                        readonly={readonly}
                        type={'text'}
                        data-testid={'ProfileCard.Age'}
                    />
                    <InputDeprecated
                        value={data?.city}
                        placeholder={t('Город')}
                        className={cls.input}
                        onChange={onChangeCity}
                        readonly={readonly}
                        type={'text'}
                        data-testid={'ProfileCard.City'}
                    />
                    <InputDeprecated
                        value={data?.username}
                        placeholder={t('Имя пользователя')}
                        className={cls.input}
                        onChange={onChangeUserName}
                        readonly={readonly}
                        type={'text'}
                        data-testid={'ProfileCard.Username'}
                    />
                    <InputDeprecated
                        value={data?.avatar}
                        placeholder={t('Аватар')}
                        className={cls.input}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                        type={'text'}
                        data-testid={'ProfileCard.Avatar'}
                    />

                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                        className={cls.input}
                        data-testid={'ProfileCard.Currency'}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                        className={cls.input}
                        data-testid={'ProfileCard.Country'}
                    />
                    {/* </div> */}
                </VStack>
            }
        />
    );
};
