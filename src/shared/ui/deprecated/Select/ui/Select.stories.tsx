import type { Meta, StoryFn } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Select',
    component: Select,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
    <Select {...args} />
);

const selectOptions = [
    {
        value: '123',
        content: '1 пункт',
    },
    {
        value: '456',
        content: '2 пункт',
    },
    {
        value: '789',
        content: '3 пункт',
    },
];

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите название селекта',
    options: selectOptions,
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Укажите название селекта',
    options: selectOptions,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    label: 'Укажите название селекта',
    options: selectOptions,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
