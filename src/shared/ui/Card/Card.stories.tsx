import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title={'title'} text={'text'} />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title={'title'} text={'text'} />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children: <Text title={'title'} text={'text'} />,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
