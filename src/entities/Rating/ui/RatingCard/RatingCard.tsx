import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { typedMemo } from '@/shared/const/memo';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = typedMemo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        onCancel,
        onAccept,
        hasFeedback,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const onCloseBtnClick = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const onSendBtnClick = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, feedback, onAccept]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
                data-testid={'RatingCard.Input'}
            />
        </>
    );

    return (
        <Card
            max
            className={classNames(cls.ratingCard, {}, [className])}
            data-testid={'RatingCard'}
        >
            <VStack align={'center'} gap={'8'} max>
                <Text title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
                {isMobile ? (
                    <Drawer isOpen={isModalOpen} lazy onClose={onCloseBtnClick}>
                        <VStack gap={'32'}>
                            {modalContent}
                            <Button
                                onClick={onSendBtnClick}
                                size={ButtonSize.L}
                                fullWidth
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                ) : (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack gap={'32'} max>
                            {modalContent}
                            <HStack max gap={'16'} justify={'end'}>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCloseBtnClick}
                                    data-testid={'RatingCard.Close'}
                                >
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={onSendBtnClick}
                                    data-testid={'RatingCard.Send'}
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                )}
            </VStack>
        </Card>
    );
});
