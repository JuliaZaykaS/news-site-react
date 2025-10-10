import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof UiDesignSwitcher>;

const Template: StoryFn<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};