import { Meta, StoryFn } from '@storybook/react';

import AboutPage from './AboutPage';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
