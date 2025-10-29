import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
// import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<
        ReducersMapObject<StateSchema>
    >;
}

export const StoreProvider = (
    props: StoreProviderProps,
) => {
    const { children, initialState, asyncReducers } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate
    );

    // доступ к стор для cypress
    if (window.Cypress) {
        window.store = store; // 👈 Добавляем store в window, если запущен Cypress
    }

    return <Provider store={store}>{children}</Provider>;
};
