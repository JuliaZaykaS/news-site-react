import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollPositionSaveSchema } from '../types/ScrollPositionSave';

const initialState: ScrollPositionSaveSchema = {
    scroll: {},
};

export const ScrollPositionSaveSlice = createSlice({
    name: 'scrollPositionSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionSaveActions } = ScrollPositionSaveSlice;
export const { reducer: scrollPositionSaveReducer } = ScrollPositionSaveSlice;
