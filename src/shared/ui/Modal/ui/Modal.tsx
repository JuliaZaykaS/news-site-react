import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    // theme: Theme;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { isClosing, isMounted, closeHandler } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });

    const { theme } = useTheme();

    // для классов по условию
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    // если указан пропс lazy и модалка еще не вмонтирована, то рендера нет
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClose={closeHandler} />

                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
