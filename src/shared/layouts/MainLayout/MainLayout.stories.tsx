import { Meta, StoryFn } from '@storybook/react';
import { MainLayout } from './MainLayout';

export default {
    title: 'shared/layouts/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainLayout>;

const Template: StoryFn<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
