import { Selector, createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ScrollPositionSchema } from "../types/ScrollPositionSave";

export const getScrollPosition = (state: StateSchema): ScrollPositionSchema => {
  return state.scrollPositionSave.scroll;
};

export const getScrollPositionByPath = createSelector(
  getScrollPosition,

  (state: StateSchema, path: string) => path,

  (scroll, path) => scroll[path] || 0
);
