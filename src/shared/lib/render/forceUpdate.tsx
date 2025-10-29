// для обновления интерфейса, если данные по переключению feature-флагов не содержатся в state
import {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useState,
} from 'react';

interface ForceUpdateContextType {
    value: boolean;
    forceUpdate: () => void;
}
const ForceUpdateContext =
    createContext<ForceUpdateContextType>({
        value: true,
        forceUpdate: () => {},
    });

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
};

export function ForceUpdateProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 120);
    };

    const valueContext = useMemo(() => {
        return { value, forceUpdate };
    }, [value]);

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={valueContext}>
            {children}
        </ForceUpdateContext.Provider>
    );
}
