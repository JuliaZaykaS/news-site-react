import { Meta, StoryFn } from '@storybook/react';
import  AdminPanelPage  from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'pages/AdminPanelPage',
   component: AdminPanelPage,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [StoreDecorator({})],

} as Meta<typeof AdminPanelPage>;

const Template: StoryFn<typeof AdminPanelPage> = (args) => <AdminPanelPage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};

