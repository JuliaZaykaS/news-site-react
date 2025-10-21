import { Meta, StoryFn } from '@storybook/react';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';


import { ProfileCard } from './ProfileCard';

import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { profile } from '@/shared/__mocks__/profile';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const OldDesignPrimary = Template.bind({});
OldDesignPrimary.args = {
    data: profile,
};

export const NewDesignPrimary = Template.bind({});
NewDesignPrimary.args = {
    data: profile,
};
NewDesignPrimary.decorators = [NewDesignDecorator]

export const OldDesignWithError = Template.bind({});
OldDesignWithError.args = {
    error: 'true',
};

export const NewDesignWithError = Template.bind({});
NewDesignWithError.args = {
    error: 'true',
};
NewDesignWithError.decorators = [NewDesignDecorator];

export const OldDesignLoading = Template.bind({});
OldDesignLoading.args = {
    isLoading: true,
};

export const NewDesignLoading = Template.bind({});
NewDesignLoading.args = {
    isLoading: true,
};
NewDesignLoading.decorators = [NewDesignDecorator]

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {
    data: profile,
};
OldDesignDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {
    data: profile,
};
OldDesignOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
