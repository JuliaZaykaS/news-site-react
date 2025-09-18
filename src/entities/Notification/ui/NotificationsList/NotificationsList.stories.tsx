import type { Meta, StoryFn } from '@storybook/react';

import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';

export default {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationsList>;

const Template: StoryFn<typeof NotificationsList> = (args) => (
    <NotificationsList {...args} />
);

const items = [
    {
        id: '1',
        title: 'Уведомление',
        description: 'текст текст текст',
    },
    {
        id: '2',
        title: 'Уведомление',
        description: 'текст текст текст',
    },
    {
        id: '3',
        title: 'Уведомление',
        description: 'текст текст текст',
    },
];

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    // mockData: [
    //     {
    //         url: `${__API__}/notifications`  ,
    //         method: 'GET',
    //         status: 200,
    //       response:
    //          items

    //         ,
    //     },
    // ],
    msw: {
        handlers: [
            http.get(`${__API__}/notifications`, () => {
                return HttpResponse.json(items, { status: 200 });
            }),
        ],
    },
};
