import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/shared/__mocks__/article';

export default {
   title: 'entities/Article/ArticleDetails/ArticleDetailsRedesigned',
   component: ArticleDetailsRedesigned,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [NewDesignDecorator],
} as Meta<typeof ArticleDetailsRedesigned>;

const Template: StoryFn<typeof ArticleDetailsRedesigned> = (args) => <ArticleDetailsRedesigned {...args} />;

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [StoreDecorator({ articleDetails: { data: article } })];

export const NewDesignLoading = Template.bind({});
NewDesignLoading.args = {};
NewDesignLoading.decorators = [StoreDecorator({ articleDetails: { isLoading: true } })];

export const NewDesignError = Template.bind({});
NewDesignError.args = {};
NewDesignError.decorators = [StoreDecorator({ articleDetails: { error: 'error' } })];
