import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
   title: 'features/AvatarDropdown',
   component: AvatarDropdown,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [

      (StoryComponent: Story) => <div style={{ marginLeft: "90%" }}><StoryComponent /></div>
   ]
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown { ...args } />;

export const User = Template.bind({});
User.args = {

};

User.decorators = [StoreDecorator({
   user: {
      authData: { id: "1", roles:[UserRole.USER]}

   }
})
];
export const Admin = Template.bind({});
Admin.args = {

};

Admin.decorators = [StoreDecorator({
   user: {
   authData: {id: "1",roles:[UserRole.ADMIN]}
   }
})
];
export const NotAuth = Template.bind({});
NotAuth.args = {

};

NotAuth.decorators = [StoreDecorator({

})
];