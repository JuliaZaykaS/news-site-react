import type { Meta, StoryFn } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageError } from './PageError';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/PageError',
    component: PageError,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args) => (
    <PageError {...args} />
);

export const OldDesignLight = Template.bind({});
OldDesignLight.args = {};
OldDesignLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OldDesignDark = Template.bind({});
OldDesignDark.args = {};
OldDesignDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OldDesignOrange = Template.bind({});
OldDesignOrange.args = {};
OldDesignOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const NewDesign = Template.bind({});
NewDesign.args = {};
NewDesign.decorators = [NewDesignDecorator];
