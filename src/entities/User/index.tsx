import type { User, UserSchema } from './model/types/user';
import { UserRole } from './model/types/user';
import { userReducer, userActions } from './model/slices/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    getRoleSelectors,
    isUserAdmin,
    isUserManager,
    isUserUser,
} from './model/selectors/getRoleSelectors/getRoleSelectors';

export {
    User,
    UserSchema,
    UserRole,
    userReducer,
    userActions,
    getUserAuthData,
    getUserInited,
    getRoleSelectors,
    isUserAdmin,
    isUserManager,
    isUserUser,
};
