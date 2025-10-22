import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { typedMemo } from '@/shared/const/memo';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import {
    getFeatureFlag,
    updateFeatureFlag,
} from '@/shared/lib/features';
import { useCallback, useMemo, useState } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = typedMemo(
    (props: UiDesignSwitcherProps) => {
        const { className } = props;
        const { t } = useTranslation('settings');
        const dispatch = useAppDispatch();
        const isAppRedesigned = getFeatureFlag(
            'isAppRedesigned',
        );
        const authData = useSelector(getUserAuthData);
        const forceUpdate = useForceUpdate();

        const [isLoading, setIsLoading] = useState(false);

        const items = useMemo(() => {
            return [
                {
                    content: t('Новый'),
                    value: 'new',
                },
                {
                    content: t('Старый'),
                    value: 'old',
                },
            ];
        }, [t]);

        const onChange = useCallback(
            async (value: string) => {
                if (authData) {
                    setIsLoading(true);

                    await dispatch(
                        updateFeatureFlag({
                            userId: authData.id,
                            newFeatures: {
                                isAppRedesigned:
                                    value === 'new'
                                        ? true
                                        : false,
                            },
                        }),
                    ).unwrap();
                    setIsLoading(false);
                    forceUpdate();
                }
            },
            [authData, dispatch, forceUpdate],
        );

        return (
            <HStack>
                <Text text={t('Вариант интерфейса')} />
                {isLoading ? (
                    <Skeleton width={100} height={40} />
                ) : (
                    <ListBox
                        className={classNames('', {}, [
                            className,
                        ])}
                        value={
                            isAppRedesigned ? 'new' : 'old'
                        }
                        items={items}
                        onChange={onChange}
                    ></ListBox>
                )}
            </HStack>
        );
    },
);
