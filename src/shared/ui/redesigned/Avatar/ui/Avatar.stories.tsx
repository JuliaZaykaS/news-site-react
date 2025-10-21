import { Meta, StoryFn } from '@storybook/react';

import { Avatar } from './Avatar';

import AvatarImg from '@/shared/assets/tests/example.png';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    decorators: NewDesignDecorator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};
export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};
