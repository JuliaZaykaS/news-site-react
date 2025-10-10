import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { typedMemo } from '@/shared/const/memo';
import { Flex } from '../Stack';
import { FlexDirection } from '../Stack/ui/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string; // выбранное значение
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = typedMemo((props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;
    const { t } = useTranslation();

    const onClickTab = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex className={classNames(cls.tabs, {}, [className])}
            direction={direction}
            gap='8'
            align='start'
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value
                return (
                    <Card
                        key={tab.value}
                        // className={cls.tab}
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        variant={
                            isSelected
                                ? 'light'
                                : 'normal'
                        }

                        onClick={onClickTab(tab)}
                        borderRadius='round'
                    >
                        {tab.content}
                    </Card>
                )
            })}
        </Flex>
    );
});
