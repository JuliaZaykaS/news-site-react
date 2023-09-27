import { useState, useRef, MutableRefObject, useCallback, useEffect } from "react";

interface useModalProps {
    animationDelay: number;
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
}

export function useModal(props: useModalProps) {
    const { animationDelay, onClose, isOpen, lazy } = props

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;


    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDownClick = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );



    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDownClick);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDownClick);
        };
    }, [isOpen, onKeyDownClick]);


    return { isClosing, isMounted, closeHandler }
}