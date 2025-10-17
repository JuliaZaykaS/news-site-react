import type { Meta, StoryFn } from '@storybook/react';

import { Drawer } from './Drawer';

export default {
    title: 'shared/deprecated/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
