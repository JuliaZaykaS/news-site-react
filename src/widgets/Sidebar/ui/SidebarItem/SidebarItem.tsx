import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

import { AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = typedMemo(
    (props: SidebarItemProps) => {
        const { t } = useTranslation();

        const { collapsed, item } = props;
        const { path, text } = item;
        const isAuth = useSelector(getUserAuthData);
        if (item.authOnly && !isAuth) {
            return null;
        }
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <AppLink
                        to={path}
                        className={classNames(
                            cls.itemRedesigned,
                            {
                                [cls.collapsedRedesigned]:
                                    collapsed,
                            },
                        )}
                        activeClassName={cls.active}
                    >
                        <Icon Svg={item.Icon} />
                        <span className={cls.link}>
                            {t(text)}
                        </span>
                    </AppLink>
                }
                off={
                    <AppLinkDeprecated
                        to={path}
                        className={classNames(cls.item, {
                            [cls.collapsed]: collapsed,
                        })}
                        theme={AppLinkTheme.INVERTED}
                    >
                        <item.Icon className={cls.icon} />
                        <span className={cls.link}>
                            {t(text)}
                        </span>
                    </AppLinkDeprecated>
                }
            />
        );
    },
);
