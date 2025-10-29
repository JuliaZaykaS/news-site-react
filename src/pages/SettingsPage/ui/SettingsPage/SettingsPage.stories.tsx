import type { Meta, StoryFn } from '@storybook/react';

import SettingsPage from './SettingsPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
        (Story) => (
            <div style={{ height: '500px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof SettingsPage>;

const Template: StoryFn<typeof SettingsPage> = (args) => (
    <SettingsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = StoreDecorator({
    user: {
        authData: {},
    },
});
