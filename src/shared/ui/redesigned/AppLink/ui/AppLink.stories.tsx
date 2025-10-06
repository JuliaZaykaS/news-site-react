import { Meta, StoryFn } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/', //  при ошибке Cannot read properties of undefined (reading 'pathname')
    },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//     children: 'Text',
//     variant: AppLinkTheme.PRIMARY,
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const PrimaryOrange = Template.bind({});
// PrimaryOrange.args = {
//     children: 'Text',
//     variant: AppLinkTheme.PRIMARY,
// };
// PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

// export const InvertedDark = Template.bind({});
// InvertedDark.args = {
//     children: 'Text',
//     variant: AppLinkTheme.INVERTED,
// };
// InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const RedDark = Template.bind({});
// RedDark.args = {
//     children: 'Text',
//     variant: AppLinkTheme.RED,
// };
// RedDark.decorators = [ThemeDecorator(Theme.DARK)];
