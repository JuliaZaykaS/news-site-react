import { useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import cls from './Sidebar.module.scss';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = typedMemo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    // const { t } = useTranslation();
    // const sidebarItemsList = useSelector(getSidebarItems);
    const sidebarItemsList = useSidebarItems();

    const onToggle = () => {
        console.log(collapsed);

        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ));
    }, [collapsed, sidebarItemsList]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<aside
                data-testid="sidebar"
                className={classNames(cls.sidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [
                    className,
                ])}
            >
                <AppLogo
                    className={cls.appLogo}
                    size={collapsed ? 30 : 50}
                />
                <VStack tag={'nav'} gap={'8'} className={cls.items}>
                    {itemsList}
                </VStack>

                <Icon
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    Svg={ArrowIcon}
                    clickable
                >
                </Icon>

                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.language} short={collapsed} />
                </div>

            </aside>}
            off={<aside
                data-testid="sidebar"
                className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                    className,
                ])}
            >
                <Button
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square
                    size={ButtonSize.L}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                {/* <nav className={cls.items}>{itemsList}</nav> */}
                <VStack tag={'nav'} gap={'8'} className={cls.items}>
                    {itemsList}
                </VStack>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.language} short={collapsed} />
                </div>
            </aside>}
        />
    )
});
