import { Meta, StoryFn } from '@storybook/react';

import AboutPage from './AboutPage';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = () => (
    <AboutPage />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {};
OldDesignDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {};
OldDesignOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
