import { Meta, StoryFn } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'features/NotificationButton',
   component: NotificationButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [
      (Story) => <div style={{ marginLeft: "90%" }}><Story /></div>
   ]
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => <NotificationButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {


};
Normal.decorators = [StoreDecorator({

})
];
