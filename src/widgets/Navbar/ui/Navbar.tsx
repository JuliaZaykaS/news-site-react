import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { AppLinkTheme } from '@/shared/ui/deprecated/AppLink';

import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';

import { HStack } from '@/shared/ui/redesigned/Stack';

import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';
import { typedMemo } from '@/shared/const/memo';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = typedMemo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.navbarRedesigned,
        off: () => cls.navbar,
    })

    if (authData) {
        return (
            <ToggleFeatures
                feature={"isAppRedesigned"}
                on={<header className={classNames(mainClass, {}, [className])}>
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>}
                off={<header className={classNames(cls.navbar, {}, [className])}>
                    <TextDeprecated
                        className={cls.appName}
                        title={t('Cognitive News app')}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.INVERTED}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>} />

        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Button
                    variant={'clear'}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>}
                off={<ButtonDeprecated
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </ButtonDeprecated>}
            />


            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
