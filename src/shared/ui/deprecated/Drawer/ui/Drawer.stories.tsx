import type { Meta, StoryFn } from '@storybook/react';

import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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

export const Dark = Template.bind({});
Dark.args = baseArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = baseArgs;
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
