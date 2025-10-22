import { Meta, StoryFn } from '@storybook/react';
import { ScrollToolbar } from './ScrollToolbar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/ScrollToolbar',
    component: ScrollToolbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as Meta<typeof ScrollToolbar>;

const Template: StoryFn<typeof ScrollToolbar> = (args) => (
    <ScrollToolbar {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
