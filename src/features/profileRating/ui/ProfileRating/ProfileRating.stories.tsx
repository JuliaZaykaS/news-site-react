import { Meta, StoryFn } from '@storybook/react';
import ProfileRating from './ProfileRating';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileRating>;

const Template: StoryFn<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {
    profileId: '2',
};
OldDesignNormal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
OldDesignNormal.parameters = {
    // mockData: [
    //     {
    //         url: `${__API__}/profile-ratings?userId=1&profileId=2`  ,
    //         method: 'GET',
    //         status: 200,
    //       response: [
    //          {
    //               rate: 4
    //            }

    //         ],
    //     },
    // ],
    msw: {
        handlers: [
            http.get(
                `${__API__}/profile-ratings?userId=1&profileId=2`,
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
    profileId: '1',
};
OldDesignWithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

OldDesignWithoutRate.parameters = {
    // mockData: [
    //     {
    //         url: `${__API__}/profile-ratings?userId=1&profileId=2`  ,
    //         method: 'GET',
    //         status: 200,
    //       response: [
    //          {
    //               rate: 0
    //            }

    //         ],
    //     },
    // ],
    msw: {
        handlers: [
            http.get(
                `${__API__}/profile-ratings?userId=1&profileId=2`,
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
    profileId: '2',
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
                `${__API__}/profile-ratings?userId=1&profileId=2`,
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
    profileId: '1',
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
                `${__API__}/profile-ratings?userId=1&profileId=2`,
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
