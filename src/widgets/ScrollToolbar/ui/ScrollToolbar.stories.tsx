import { Meta, StoryFn } from '@storybook/react';
import { ScrollToolbar } from './ScrollToolbar';

export default {
   title: 'shared/ScrollToolbar',
   component: ScrollToolbar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ScrollToolbar>;

const Template: StoryFn<typeof ScrollToolbar> = (args) => < ScrollToolbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
