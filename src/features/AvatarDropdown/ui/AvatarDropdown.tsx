import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useSelector } from 'react-redux';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = typedMemo(
    (props: AvatarDropdownProps) => {
        const { className } = props;

        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const isAdmin = useSelector(isUserAdmin);
        const isManager = useSelector(isUserManager);
        const authData = useSelector(getUserAuthData);

        const onLogout = useCallback(() => {
            dispatch(userActions.logout());
        }, [dispatch]);

        const isAdminPanelAvailable = isAdmin || isManager;

        const navbarItems = [
            ...(isAdminPanelAvailable
                ? [
                      {
                          content: t('Админка'),
                          href: getRouteAdminPanel(),
                      },
                  ]
                : []),
            {
                content: t('Настройки'),
                href: authData && getRouteSettings(),
            },
            {
                content: t('Профиль'),
                href:
                    authData &&
                    getRouteProfile(authData.id),
            },
            {
                content: t('Выйти'),
                onClick: onLogout,
            },
        ];

        if (!authData) {
            return null;
        }

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Dropdown
                        className={classNames('', {}, [
                            className,
                        ])}
                        items={navbarItems}
                        trigger={
                            <Avatar
                                src={authData.avatar || ''}
                                alt={authData.username}
                                size={40}
                            />
                        }
                        direction={'bottom-left'}
                    />
                }
                off={
                    <DropdownDeprecated
                        className={classNames('', {}, [
                            className,
                        ])}
                        items={navbarItems}
                        trigger={
                            <AvatarDeprecated
                                src={authData.avatar || ''}
                                alt={authData.username}
                                size={30}
                                fallbackInverted
                            />
                        }
                        direction={'bottom-left'}
                    />
                }
            />
        );
    },
);
