import {
    ActionCreatorsMapObject,
    CreateSliceOptions,
    SliceCaseReducers,
    bindActionCreators,
    createSlice,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);
    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        return useMemo(
            () =>
                bindActionCreators(
                    slice.actions as ActionCreatorsMapObject,
                    dispatch,
                ) as typeof slice.actions,
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
