import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { UserRole } from "../../types/user";

export const getRoleSelectors = (state: StateSchema) => state.user?.authData?.roles

export const isUserAdmin = createSelector(getRoleSelectors, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getRoleSelectors, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
export const isUserUser = createSelector(getRoleSelectors, (roles) => Boolean(roles?.includes(UserRole.USER)))