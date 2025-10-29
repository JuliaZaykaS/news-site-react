import type { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => (
    <Navbar {...args} />
);

export const OldDesignLight = Template.bind({});
OldDesignLight.args = {};
OldDesignLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {};
OldDesignDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {};
OldDesignOrange.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];

export const OldDesignLightWithAuth = Template.bind({});
OldDesignLightWithAuth.args = {};
OldDesignLightWithAuth.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const OldDesignDarkWithAuth = Template.bind({});
OldDesignDarkWithAuth.args = {};
OldDesignDarkWithAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NewDesignLight = Template.bind({});
NewDesignLight.args = {};
NewDesignLight.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];
export const NewDesignLightWithAuth = Template.bind({});
NewDesignLightWithAuth.args = {};
NewDesignLightWithAuth.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        user: { authData: {} },
    }),
    (Story) => (
        <div style={{ marginLeft: '90%' }}>
            <Story />
        </div>
    ),
];
