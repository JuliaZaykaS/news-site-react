import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/shared/__mocks__/article';

export default {
    title: 'entities/Article/ArticleDetails/ArticleDetailsDeprecated',
    component: ArticleDetailsDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsDeprecated>;

const Template: StoryFn<typeof ArticleDetailsDeprecated> = (
    args,
) => <ArticleDetailsDeprecated {...args} />;

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};
OldDesignNormal.decorators = [
    StoreDecorator({ articleDetails: { data: article } }),
];

export const OldDesignLoading = Template.bind({});
OldDesignLoading.args = {};
OldDesignLoading.decorators = [
    StoreDecorator({ articleDetails: { isLoading: true } }),
];

export const OldDesignError = Template.bind({});
OldDesignError.args = {};
OldDesignError.decorators = [
    StoreDecorator({ articleDetails: { error: 'error' } }),
];
