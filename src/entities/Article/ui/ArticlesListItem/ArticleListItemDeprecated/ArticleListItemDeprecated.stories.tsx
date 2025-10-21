import { Meta, StoryFn } from '@storybook/react';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';
import { article } from '@/shared/__mocks__/article';
import { ArticleViewType } from '../../../model/consts/articleConsts';

export default {
   title: 'entities/Article/ArticlesListItem/ArticleListItemDeprecated',
   component: ArticleListItemDeprecated,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleListItemDeprecated>;

const Template: StoryFn<typeof ArticleListItemDeprecated> = (args) => <ArticleListItemDeprecated {...args} />;

export const OldDesignGrid = Template.bind({});
OldDesignGrid.args = {
   article: article,
   view: ArticleViewType.GRID,
};

export const OldDesignList = Template.bind({});
OldDesignList.args = {
   article: article,
   view: ArticleViewType.LIST,
};
