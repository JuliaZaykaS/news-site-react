import type { Meta, StoryFn } from '@storybook/react';

import { Drawer } from './Drawer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => (
    <Drawer {...args} />
);

const baseArgs = {
    isOpen: true,
    children: <div>Drawer</div>,
};

export const Normal = Template.bind({});
Normal.args = baseArgs;
