import type { Meta, StoryFn } from '@storybook/react';

import { Loader } from './Loader';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Loader',
    component: Loader,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => (
    <Loader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {};

Inverted.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
