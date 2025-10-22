import { Theme } from '@/shared/const/theme';

// настройки про активность пользователя (чтобы хранить на бэкенде,а не в локалсторадж)
export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
    isArticlesPageWasOpened?: boolean;
}
