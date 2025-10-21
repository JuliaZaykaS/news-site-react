import { Meta, StoryFn } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = normalArgs;

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = normalArgs;
NewDesignNormal.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })]

export const OldDesignLoading = Template.bind({});
OldDesignLoading.args = {
    comment: {
        id: '1',
        text: 'Lorem ipsum dolor sit amet',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};

export const NewDesignLoading = Template.bind({});
NewDesignLoading.args = {
    comment: {
        id: '1',
        text: 'Lorem ipsum dolor sit amet',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};
NewDesignLoading.decorators = [NewDesignDecorator]
