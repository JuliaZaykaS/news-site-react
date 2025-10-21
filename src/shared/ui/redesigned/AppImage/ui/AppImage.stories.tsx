import { Meta, StoryFn } from '@storybook/react';
import { AppImage } from './AppImage';
import AvatarImg from '@/shared/assets/tests/example.png';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: NewDesignDecorator,
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: AvatarImg,
};

export const Loading = Template.bind({});
Loading.args = {
    fallback: <div>Loading...</div>
};

export const Error = Template.bind({});
Error.args = {
    errorFallback: <div>Loading Error...</div>
};
