import { Meta, StoryFn } from '@storybook/react';
import { AppLogo } from './AppLogo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof AppLogo>;

const Template: StoryFn<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
