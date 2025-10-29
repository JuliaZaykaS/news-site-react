import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { typedMemo } from '@/shared/const/memo';
import { Text } from '@/shared/ui/deprecated/Text';
import {
    saveJsonSettings,
    useJsonSettings,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
// import { isMobile } from 'react-device-detect'

const ArticlePageGreeting = typedMemo(() => {
    const { t } = useTranslation('article');

    const isMobile = useDevice();

    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(
                saveJsonSettings({
                    isArticlesPageWasOpened: true,
                }),
            );
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => {
        setIsOpen(false);
    };

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});

export default ArticlePageGreeting;
