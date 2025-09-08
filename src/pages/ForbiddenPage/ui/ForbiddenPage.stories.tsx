import { Meta, StoryFn } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'pages/ForbiddenPage',
   component: ForbiddenPage,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [StoreDecorator({})],
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn<typeof ForbiddenPage> = (args) => <ForbiddenPage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};

