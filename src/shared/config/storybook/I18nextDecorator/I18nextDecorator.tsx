import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18nForTests';
import { Decorator } from '@storybook/react/*';

export const I18nextDecorator: Decorator = (Story) => (
    <I18nextProvider i18n={i18n}>
        <Story />
    </I18nextProvider>
);
