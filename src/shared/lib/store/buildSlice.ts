import { CreateSliceOptions, SliceCaseReducers, bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/useAppDispatch/useAppDispatch";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options)
    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch()
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
    }

    return {
        ...slice,
        useActions,

    }
}

// <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string > (options: CreateSliceOptions<State, CaseReducers, Name>): Slice<State, CaseReducers, Name>