import { Meta, StoryFn } from '@storybook/react';
import AddNewCommentForm from './AddNewCommentForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})]
} as Meta<typeof AddNewCommentForm>;

const Template: StoryFn<typeof AddNewCommentForm> = (args) => (
    <AddNewCommentForm {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    onSendComment: action('onSendComment'),
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    onSendComment: action('onSendComment'),
};
NewDesignNormal.decorators = [NewDesignDecorator]

