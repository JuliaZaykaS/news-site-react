import type { Meta, StoryFn } from '@storybook/react';
import { ArticlesList } from './ArticlesList';
import { ArticleViewType } from '../../model/consts/articleConsts';
import { article } from '@/shared/__mocks__/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Article/ArticlesList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesList>;

const Template: StoryFn<typeof ArticlesList> = (args) => (
    <ArticlesList {...args} />
);

export const OldDesignGrid = Template.bind({});
OldDesignGrid.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.GRID,
};

export const OldDesignList = Template.bind({});
OldDesignList.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.LIST,
};

export const OldDesignLoadingGrid = Template.bind({});
OldDesignLoadingGrid.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.GRID,
};

export const OldDesignLoadingList = Template.bind({});
OldDesignLoadingList.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.LIST,
};

export const NewDesignGrid = Template.bind({});
NewDesignGrid.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.GRID,
};
NewDesignGrid.decorators = [NewDesignDecorator];

export const NewDesignList = Template.bind({});
NewDesignList.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.LIST,
};
NewDesignList.decorators = [NewDesignDecorator];

export const NewDesignLoadingGrid = Template.bind({});
NewDesignLoadingGrid.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.GRID,
};
NewDesignLoadingGrid.decorators = [NewDesignDecorator];

export const NewDesignLoadingList = Template.bind({});
NewDesignLoadingList.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.LIST,
};
NewDesignLoadingList.decorators = [NewDesignDecorator];
