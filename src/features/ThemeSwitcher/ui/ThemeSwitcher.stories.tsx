import { Meta, StoryFn } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const OldDesignLight = Template.bind({});
OldDesignLight.args = {};

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {};
OldDesignDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {};
OldDesignOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const NewDesignLight = Template.bind({});
NewDesignLight.args = {};
NewDesignLight.decorators = [NewDesignDecorator];
