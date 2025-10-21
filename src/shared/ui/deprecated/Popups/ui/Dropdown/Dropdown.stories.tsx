import type { Meta, StoryFn } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/ui/Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

const dropdownItems = [
    {
        content: 'first',
    },
    {
        content: 'second',
    },
    {
        content: 'third',
    },
]

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: dropdownItems,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open</Button>,
    items: dropdownItems,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({});
Orange.args = {
    trigger: <Button>Open</Button>,
    items: dropdownItems,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]
