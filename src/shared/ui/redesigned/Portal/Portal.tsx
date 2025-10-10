import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // что вставляем в портал
    element?: HTMLElement; // куда вставляем портал
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
