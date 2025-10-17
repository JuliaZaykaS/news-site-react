import { Meta, StoryFn } from '@storybook/react';

import { Avatar } from './Avatar';

import AvatarImg from '@/shared/assets/tests/example.png';

export default {
    title: 'shared/deprecated/Avatar',
    component: Avatar,

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
