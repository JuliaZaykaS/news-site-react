import { Meta, StoryFn } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof ArticleRecommendationsList>;

const Template: StoryFn<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {};

Normal.parameters = {
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
                            ...article,
                            id: '1',
                        },
                        {
                            ...article,
                            id: '2',
                        },
                        {
                            ...article,
                            id: '3',
                        },
                    ],
                    { status: 200 },
                );
            }),
        ],
    },
};
