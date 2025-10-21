import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/shared/__mocks__/article';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsPageHeader>;

const Template: StoryFn<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

const user = {
    id: '1',
    username: 'admin',
};


export const Reader = Template.bind({});
Reader.args = {};
Reader.decorators = [StoreDecorator({})];

export const Editor = Template.bind({});
Editor.args = {};
Editor.decorators = [
    StoreDecorator({
        user: { authData: user },
        articleDetails: {
            data: article,
        },
    }),
];
