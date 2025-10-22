import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/const/memo';
import { User } from '@/entities/User';
import {
    HStack,
    VStack,
} from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
    isCanEdit?: boolean;
}

export const ArticleAdditionalInfo = typedMemo(
    (props: ArticleAdditionalInfoProps) => {
        const {
            className,
            author,
            createdAt,
            views,
            onEdit,
            isCanEdit,
        } = props;

        const { t } = useTranslation('article');

        return (
            <VStack
                className={classNames('', {}, [className])}
                gap="32"
            >
                <HStack gap="8">
                    <Avatar
                        src={author.avatar ?? ''}
                        size={32}
                        alt={author.username}
                    />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <Button
                    onClick={onEdit}
                    disabled={!isCanEdit}
                >
                    {t('Редактировать')}
                </Button>
                <Text
                    text={t('{{count}} просмотров', {
                        count: views,
                    })}
                />
            </VStack>
        );
    },
);
