import type { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/deprecated/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
    theme: TextTheme.ERROR,
};

export const Size_L = Template.bind({});
Size_L.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
    size: TextSize.L,
};

export const Size_M = Template.bind({});
Size_M.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
    size: TextSize.L,
};

export const Size_S = Template.bind({});
Size_S.args = {
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'text description lorem ipsum dolor sit amet, consectetur adip',
    size: TextSize.L,
};
