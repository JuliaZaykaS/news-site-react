import { Meta, StoryFn } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '../../../../shared/__mocks__/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsPage>;

const Template: StoryFn<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};
OldDesignNormal.decorators = [StoreDecorator({ articleDetails: { data: article } })];

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [
    StoreDecorator({ articleDetails: { data: article } }),
    NewDesignDecorator,
];
