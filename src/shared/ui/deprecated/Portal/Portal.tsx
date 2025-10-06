import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // что вставляем в портал
    element?: HTMLElement; // куда вставляем портал
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
