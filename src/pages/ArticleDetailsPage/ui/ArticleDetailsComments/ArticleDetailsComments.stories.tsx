import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof ArticleDetailsComments>;

const Template: StoryFn<typeof ArticleDetailsComments> = (
    args,
) => <ArticleDetailsComments {...args} />;

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    articleId: '1',
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    articleId: '1',
};
NewDesignNormal.decorators = [NewDesignDecorator];
