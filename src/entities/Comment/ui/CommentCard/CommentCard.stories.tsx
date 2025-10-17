import { Meta, StoryFn } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'Lorem ipsum dolor sit amet',
        user: {
            id: '1',
            username: 'Vasya',
            avatar: 'https://cdn-icons-png.flaticon.com/256/7603/7603099.png',
        },
    },
    isLoading: false,
}

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })]


export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'Lorem ipsum dolor sit amet',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};
