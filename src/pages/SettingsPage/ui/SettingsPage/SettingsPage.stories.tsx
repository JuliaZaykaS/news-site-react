import type { Meta, StoryFn } from '@storybook/react';

import SettingsPage from './SettingsPage';

export default {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof SettingsPage>;

const Template: StoryFn<typeof SettingsPage> = (args) => <SettingsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};