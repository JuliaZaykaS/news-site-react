import { Meta, StoryFn } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleRecommendation } from '@/shared/__mocks__/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof ArticleRecommendationsList>;

const Template: StoryFn<
    typeof ArticleRecommendationsList
> = (args) => <ArticleRecommendationsList {...args} />;

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};
OldDesignNormal.parameters = {
    // mockData: [
    //     {
    //         url: `${__API__}/articles?_limit=3`  ,
    //         method: 'GET',
    //         status: 200,
    // response: [
    //     {
    //     ...article, id: "1"
    //     },
    //     {
    //     ...article, id: "2"
    //     },
    //     {
    //     ...article, id: "3"
    //     },
    // ],
    //     },
    // ],
    msw: {
        handlers: [
            http.get(`${__API__}/articles?_limit=3`, () => {
                return HttpResponse.json(
                    [
                        {
                            ...articleRecommendation,
                            id: '1',
                        },
                        {
                            ...articleRecommendation,
                            id: '2',
                        },
                        {
                            ...articleRecommendation,
                            id: '3',
                        },
                    ],
                    { status: 200 },
                );
            }),
        ],
    },
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
NewDesignNormal.parameters = {
    msw: {
        handlers: [
            http.get(`${__API__}/articles?_limit=3`, () => {
                return HttpResponse.json(
                    [
                        {
                            ...articleRecommendation,
                            id: '1',
                        },
                        {
                            ...articleRecommendation,
                            id: '2',
                        },
                        {
                            ...articleRecommendation,
                            id: '3',
                        },
                    ],
                    { status: 200 },
                );
            }),
        ],
    },
};
