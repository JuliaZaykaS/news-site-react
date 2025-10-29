import { Meta, StoryFn } from '@storybook/react';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AuthByUserName/LoginForm',
    component: LoginForm,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const OldDesignPrimary = Template.bind({});
OldDesignPrimary.args = {};
OldDesignPrimary.decorators = [
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];

export const OldDesignWithError = Template.bind({});
OldDesignWithError.args = {};
OldDesignWithError.decorators = [
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
            error: 'error',
        },
    }),
];

export const OldDesignLoading = Template.bind({});
OldDesignLoading.args = {};
OldDesignLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
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
            error: 'error',
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
            error: 'error',
        },
    }),
];

export const NewDesignPrimary = Template.bind({});
NewDesignPrimary.args = {};
NewDesignPrimary.decorators = [
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
        },
    }),
];

export const NewDesignWithError = Template.bind({});
NewDesignWithError.args = {};
NewDesignWithError.decorators = [
    StoreDecorator({
        loginForm: {
            userName: 'userName',
            password: 'password',
            error: 'error',
        },
    }),
];

export const NewDesignLoading = Template.bind({});
NewDesignLoading.args = {};
NewDesignLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
