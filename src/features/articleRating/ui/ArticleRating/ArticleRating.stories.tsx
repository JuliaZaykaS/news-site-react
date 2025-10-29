import { Meta, StoryFn } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleRating>;

const Template: StoryFn<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    articleId: '1',
};
OldDesignNormal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
OldDesignNormal.parameters = {
    //  mockData: [
    //      {
    //          url: `${__API__}/article-ratings?userId=1&articleId=1`  ,
    //          method: 'GET',
    //          status: 200,
    //        response: [
    //           {
    //                rate: 4
    //             }

    //          ],
    //      },
    //  ],
    msw: {
        handlers: [
            http.get(
                `${__API__}/article-ratings?userId=1&articleId=1`,
                () => {
                    return HttpResponse.json(
                        [{ rate: 4 }],
                        { status: 200 },
                    );
                },
            ),
        ],
    },
};

export const OldDesignWithoutRate = Template.bind({});
OldDesignWithoutRate.args = {
    articleId: '1',
};
OldDesignWithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
OldDesignWithoutRate.parameters = {
    //  mockData: [
    //      {
    //          url: `${__API__}/article-ratings?userId=1&articleId=1`  ,
    //          method: 'GET',
    //          status: 200,
    //        response: [
    //           {
    //                rate: 0
    //             }

    //          ],
    //      },
    //  ],
    msw: {
        handlers: [
            http.get(
                `${__API__}/article-ratings?userId=1&articleId=1`,
                () => {
                    return HttpResponse.json(
                        [{ rate: 0 }],
                        { status: 200 },
                    );
                },
            ),
        ],
    },
};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    articleId: '1',
};
NewDesignNormal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    NewDesignDecorator,
];
NewDesignNormal.parameters = {
    msw: {
        handlers: [
            http.get(
                `${__API__}/article-ratings?userId=1&articleId=1`,
                () => {
                    return HttpResponse.json(
                        [{ rate: 4 }],
                        { status: 200 },
                    );
                },
            ),
        ],
    },
};

export const NewDesignWithoutRate = Template.bind({});
NewDesignWithoutRate.args = {
    articleId: '1',
};
NewDesignWithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    NewDesignDecorator,
];
NewDesignWithoutRate.parameters = {
    msw: {
        handlers: [
            http.get(
                `${__API__}/article-ratings?userId=1&articleId=1`,
                () => {
                    return HttpResponse.json(
                        [{ rate: 0 }],
                        { status: 200 },
                    );
                },
            ),
        ],
    },
};
