import { Meta, StoryFn } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { article } from '@/shared/__mocks__/article';
import { ArticleViewType } from '../../../model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticlesListItem/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as Meta<typeof ArticleListItemRedesigned>;

const Template: StoryFn<
    typeof ArticleListItemRedesigned
> = (args) => <ArticleListItemRedesigned {...args} />;

export const NewDesignGrid = Template.bind({});
NewDesignGrid.args = {
    article: article,
    view: ArticleViewType.GRID,
};

export const NewDesignList = Template.bind({});
NewDesignList.args = {
    article: article,
    view: ArticleViewType.LIST,
};
