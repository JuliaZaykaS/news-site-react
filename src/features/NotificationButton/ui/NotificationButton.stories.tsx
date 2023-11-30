import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'features/NotificationButton',
   component: NotificationButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [

      (StoryComponent: Story) => <div style={{ marginLeft: "90%" }}><StoryComponent /></div>
   ]
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {


};
Normal.decorators = [StoreDecorator({

})
];