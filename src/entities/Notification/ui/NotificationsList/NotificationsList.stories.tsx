import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
   title: 'entities/Notification/NotificationsList',
   component: NotificationsList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [withMock]

} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList { ...args } />;


const items = [
   {
   id: "1",
   title: "Уведомление",
   description: "текст текст текст",

},
   {
   id: "2",
   title: "Уведомление",
   description: "текст текст текст",

},
   {
   id: "3",
   title: "Уведомление",
   description: "текст текст текст",

},
]

export const Normal = Template.bind({});
Normal.args = {

};


Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`  ,
            method: 'GET',
            status: 200,
          response:
             items

            ,
        },
    ],
};

