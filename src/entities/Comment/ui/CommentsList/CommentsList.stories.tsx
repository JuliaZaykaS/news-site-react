import { Meta, StoryFn } from '@storybook/react';
import { CommentsList } from './CommentsList';
import { comments } from '@/shared/__mocks__/comments';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentsList>;

const Template: StoryFn<typeof CommentsList> = (args) => (
    <CommentsList {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    comments: comments,
};

export const OldDesignLoading = Template.bind({});
OldDesignLoading.args = {
    comments: comments,
    isLoading: true,
};

export const OldDesignNoComments = Template.bind({});
OldDesignNoComments.args = {
    comments: [],
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    comments: comments,
};
NewDesignNormal.decorators = [NewDesignDecorator]

export const NewDesignLoading = Template.bind({});
NewDesignLoading.args = {
    comments: comments,
    isLoading: true,
};
NewDesignLoading.decorators = [NewDesignDecorator]

export const NewDesignNoComments = Template.bind({});
NewDesignNoComments.args = {
    comments: [],
};
NewDesignNoComments.decorators = [NewDesignDecorator]
