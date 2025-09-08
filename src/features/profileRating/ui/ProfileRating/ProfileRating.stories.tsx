import { Meta, StoryFn } from '@storybook/react';
import  ProfileRating  from './ProfileRating';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'features/ProfileRating',
   component: ProfileRating,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ProfileRating>;

const Template: StoryFn<typeof ProfileRating> = (args) => <ProfileRating { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
profileId: "2"
};
Normal.decorators = [StoreDecorator({
   user: {
   authData: {id: "1",}
   }
})
];

Normal.parameters = {
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
          http.get(`${__API__}/profile-ratings?userId=1&profileId=2`, () => {
            return HttpResponse.json([{rate: 4}], { status: 200 });
          }),
        ],
      },
};
export const WithoutRate = Template.bind({});
WithoutRate.args = {
profileId: "1"
};
WithoutRate.decorators = [StoreDecorator({
   user: {
   authData: {id: "1",}
   }
})
];

WithoutRate.parameters = {
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
          http.get(`${__API__}/profile-ratings?userId=1&profileId=2`, () => {
            return HttpResponse.json([{rate: 0}], { status: 200 });
          }),
        ],
      },
};
