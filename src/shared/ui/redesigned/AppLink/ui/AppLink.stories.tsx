import { Meta, StoryFn } from '@storybook/react';

import { AppLink } from './AppLink';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/', //  при ошибке Cannot read properties of undefined (reading 'pathname')
    },
    decorators: NewDesignDecorator,
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

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
