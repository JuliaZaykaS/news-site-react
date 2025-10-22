import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import {
    HStack,
    VStack,
} from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Button } from '@/shared/ui/redesigned/Button';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/redesigned/Input';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (
        starsCount: number,
        feedback?: string,
    ) => void;
    rate?: number;
}

export const RatingCard = typedMemo(
    (props: RatingCardProps) => {
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

        const [isModalOpen, setIsModalOpen] =
            useState(false);
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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <>
                        <Text title={feedbackTitle} />
                        <Input
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            data-testid={'RatingCard.Input'}
                        />
                    </>
                }
                off={
                    <>
                        <TextDeprecated
                            title={feedbackTitle}
                        />
                        <InputDeprecated
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            data-testid={'RatingCard.Input'}
                        />
                    </>
                }
            />
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        max
                        className={classNames('', {}, [
                            className,
                        ])}
                        data-testid={'RatingCard'}
                        padding="24"
                        borderRadius="partial"
                    >
                        <VStack
                            align={'center'}
                            gap={'8'}
                            max
                        >
                            <Text
                                title={
                                    starsCount
                                        ? t(
                                              'Спасибо за оценку',
                                          )
                                        : title
                                }
                            />
                            <StarRating
                                selectedStars={starsCount}
                                size={40}
                                onSelect={onSelectStars}
                            />
                            {isMobile ? (
                                <Drawer
                                    isOpen={isModalOpen}
                                    lazy
                                    onClose={
                                        onCloseBtnClick
                                    }
                                >
                                    <VStack gap={'32'}>
                                        {modalContent}
                                        <Button
                                            onClick={
                                                onSendBtnClick
                                            }
                                            size="l"
                                            fullWidth
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    </VStack>
                                </Drawer>
                            ) : (
                                <Modal
                                    isOpen={isModalOpen}
                                    lazy
                                >
                                    <VStack gap={'32'} max>
                                        {modalContent}
                                        <HStack
                                            max
                                            gap={'16'}
                                            justify={'end'}
                                        >
                                            <Button
                                                onClick={
                                                    onCloseBtnClick
                                                }
                                                data-testid={
                                                    'RatingCard.Close'
                                                }
                                            >
                                                {t(
                                                    'Закрыть',
                                                )}
                                            </Button>
                                            <Button
                                                onClick={
                                                    onSendBtnClick
                                                }
                                                data-testid={
                                                    'RatingCard.Send'
                                                }
                                            >
                                                {t(
                                                    'Отправить',
                                                )}
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </Modal>
                            )}
                        </VStack>
                    </Card>
                }
                off={
                    <CardDeprecated
                        max
                        className={classNames('', {}, [
                            className,
                        ])}
                        data-testid={'RatingCard'}
                    >
                        <VStack
                            align={'center'}
                            gap={'8'}
                            max
                        >
                            <TextDeprecated
                                title={
                                    starsCount
                                        ? t(
                                              'Спасибо за оценку',
                                          )
                                        : title
                                }
                            />
                            <StarRatingDeprecated
                                selectedStars={starsCount}
                                size={40}
                                onSelect={onSelectStars}
                            />
                            {isMobile ? (
                                <DrawerDeprecated
                                    isOpen={isModalOpen}
                                    lazy
                                    onClose={
                                        onCloseBtnClick
                                    }
                                >
                                    <VStack gap={'32'}>
                                        {modalContent}
                                        <ButtonDeprecated
                                            onClick={
                                                onSendBtnClick
                                            }
                                            size={
                                                ButtonSize.L
                                            }
                                            fullWidth
                                        >
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    </VStack>
                                </DrawerDeprecated>
                            ) : (
                                <ModalDeprecated
                                    isOpen={isModalOpen}
                                    lazy
                                >
                                    <VStack gap={'32'} max>
                                        {modalContent}
                                        <HStack
                                            max
                                            gap={'16'}
                                            justify={'end'}
                                        >
                                            <ButtonDeprecated
                                                theme={
                                                    ButtonTheme.OUTLINE_RED
                                                }
                                                onClick={
                                                    onCloseBtnClick
                                                }
                                                data-testid={
                                                    'RatingCard.Close'
                                                }
                                            >
                                                {t(
                                                    'Закрыть',
                                                )}
                                            </ButtonDeprecated>
                                            <ButtonDeprecated
                                                onClick={
                                                    onSendBtnClick
                                                }
                                                data-testid={
                                                    'RatingCard.Send'
                                                }
                                            >
                                                {t(
                                                    'Отправить',
                                                )}
                                            </ButtonDeprecated>
                                        </HStack>
                                    </VStack>
                                </ModalDeprecated>
                            )}
                        </VStack>
                    </CardDeprecated>
                }
            />
        );
    },
);
