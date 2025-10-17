import { Meta, StoryFn } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';

export default {
   title: 'features/scrollToTopButton',
   component: ScrollToTopButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ScrollToTopButton>;

const Template: StoryFn<typeof ScrollToTopButton> = (args) => <ScrollToTopButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
