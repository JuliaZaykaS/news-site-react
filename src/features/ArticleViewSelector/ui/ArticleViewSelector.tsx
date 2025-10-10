import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import GridIconDeprecated from '@/shared/assets/icons/grid.svg';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import { ArticleViewType } from '@/entities/Article';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import ListIcon from '@/shared/assets/icons/burger.svg'
import GridIcon from '@/shared/assets/icons/tile.svg'
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { useMemo } from 'react';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleViewType;
    onViewClick: (view: ArticleViewType) => void;
}

// const viewTypes = toggleFeatures({
//     name: 'isAppRedesigned',
//     on: () => [
//         {
//             view: ArticleViewType.GRID,
//             icon: GridIcon,
//         },
//         {
//             view: ArticleViewType.LIST,
//             icon: ListIcon,
//         },
//     ],
//     off: () => [
//         {
//             view: ArticleViewType.GRID,
//             icon: GridIconDeprecated,
//         },
//         {
//             view: ArticleViewType.LIST,
//             icon: ListIconDeprecated,
//         },
//     ]
// });

export const ArticleViewSelector = typedMemo(
    (props: ArticleViewSelectorProps) => {
        const { className, view, onViewClick } = props;
        const { t } = useTranslation();

        const viewTypes = useMemo(() => [
            {
                view: ArticleViewType.GRID,
                icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => GridIcon,
                    off: () => GridIconDeprecated,
                }),
            },
            {
                view: ArticleViewType.LIST,
                icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ListIcon,
                    off: () => ListIconDeprecated,
                }),
            },
        ], []);

        const onClick = (newView: ArticleViewType) => {
            return () => {
                onViewClick(newView);
            };
        };

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Card
                    className={classNames(cls.articleViewSelectorRedesigned, {}, [className])}
                    borderRadius='round'
                >
                    <HStack gap='8'>
                        {viewTypes.map((viewType) => {
                            return (
                                <Icon
                                    key={viewType.view}
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.notSelected]: viewType.view !== view,
                                    })}
                                    clickable
                                    onClick={onClick(viewType.view)}
                                />
                            );
                        })}
                    </HStack>
                </Card>}
                off={<div
                    className={classNames(cls.articleViewSelector, {}, [className])}
                >
                    {viewTypes.map((viewType) => {
                        return (
                            <ButtonDeprecated
                                theme={ButtonTheme.CLEAR}
                                onClick={onClick(viewType.view)}
                                key={viewType.view}
                                className={cls.selectorBtn}
                            >
                                <IconDeprecated
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.notSelected]: viewType.view !== view,
                                    })}
                                />
                            </ButtonDeprecated>
                        );
                    })}
                </div>}
            />

        );
    },
);
