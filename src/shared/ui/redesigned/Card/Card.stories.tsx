import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

const text = <Text title={'title'} text={'text'} />

export const Normal = Template.bind({});
Normal.args = {
    children: text,
    padding: '24'
};

export const BorderRadiusRound = Template.bind({});
BorderRadiusRound.args = {
    children: text,
    borderRadius: 'round',
    padding: '24'
};

export const BorderRadiusPartial = Template.bind({});
BorderRadiusPartial.args = {
    children: text,
    borderRadius: 'partial',
    padding: '24'
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: text,
    variant: 'outlined',
    padding: '24'
};

export const Light = Template.bind({});
Light.args = {
    children: text,
    variant: 'light',
    padding: '24'
};
