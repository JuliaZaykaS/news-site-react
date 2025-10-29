import { Meta, StoryFn } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args) => (
    <NotFoundPage {...args} />
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
