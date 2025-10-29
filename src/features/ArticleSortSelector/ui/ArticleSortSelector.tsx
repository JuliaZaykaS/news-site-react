import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import {
    Select,
    SelectOptions,
} from '@/shared/ui/deprecated/Select';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = typedMemo(
    (props: ArticleSortSelectorProps) => {
        const {
            className,
            sort,
            order,
            onChangeOrder,
            onChangeSort,
        } = props;
        const { t } = useTranslation('article');

        const orderOptions = useMemo<
            SelectOptions<SortOrder>[]
        >(
            () => [
                {
                    value: 'asc',
                    content: t('возрастанию'),
                },
                {
                    value: 'desc',
                    content: t('убыванию'),
                },
            ],
            [t],
        );
        const sortOptions = useMemo<
            SelectOptions<ArticleSortField>[]
        >(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: t('дате публикации'),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t('просмотрам'),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t('названию'),
                },
            ],
            [t],
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <div
                        className={classNames(
                            cls.articleSortSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <VStack gap="8">
                            <Text
                                text={t('Сортировать по:')}
                            />
                            <ListBox
                                items={sortOptions}
                                onChange={onChangeSort}
                                value={sort}
                            />
                            <ListBox
                                items={orderOptions}
                                onChange={onChangeOrder}
                                value={order}
                            />
                        </VStack>
                    </div>
                }
                off={
                    <div
                        className={classNames(
                            cls.articleSortSelector,
                            {},
                            [className],
                        )}
                    >
                        <Select<ArticleSortField>
                            label={t('Сортировать ПО')}
                            options={sortOptions}
                            onChange={onChangeSort}
                            value={sort}
                        />
                        <Select<SortOrder>
                            label={t('по')}
                            options={orderOptions}
                            onChange={onChangeOrder}
                            value={order}
                            className={cls.order}
                        />
                    </div>
                }
            />
        );
    },
);
