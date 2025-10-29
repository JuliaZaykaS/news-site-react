// import { StateSchema } from "@/app/providers/StoreProvider";
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};
// export const getJsonSettings = (state: StateSchema) => state.user.authData?.jsonSettings
export const [useJsonSettings, getJsonSettings] =
    buildSelector(
        (state) =>
            state.user?.authData?.jsonSettings ??
            defaultJsonSettings,
    );
export const [useJsonSettingsByKey, getJsonSettingsByKey] =
    buildSelector(
        (state, key: keyof JsonSettings) =>
            state.user?.authData?.jsonSettings?.[key],
    );
