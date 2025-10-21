import { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { profile } from '@/shared/__mocks__/profile';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (args: object) => (
    <ProfilePage {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = { mockedId: '1' };
OldDesignNormal.decorators = [
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
];

export const OldDesignDark = Template.bind({});
OldDesignDark.args = { mockedId: '1' };
OldDesignDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
];
export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = { mockedId: '1' };
OldDesignOrange.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
];

export const OldDesignNormalNonProfile = Template.bind({});
OldDesignNormalNonProfile.args = {};
OldDesignNormalNonProfile.decorators = [
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
];

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = { mockedId: '1' };
NewDesignNormal.decorators = [
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
    NewDesignDecorator,
];

export const NewDesignNormalNonProfile = Template.bind({});
NewDesignNormalNonProfile.args = {};
NewDesignNormalNonProfile.decorators = [
    StoreDecorator({
        profile: {
            formData: profile,
        },
    }),
    NewDesignDecorator,
];