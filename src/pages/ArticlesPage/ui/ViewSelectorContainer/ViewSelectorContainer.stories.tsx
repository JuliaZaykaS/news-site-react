import { Meta, StoryFn } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';

export default {
   title: 'shared/ViewSelectorContainer',
   component: ViewSelectorContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ViewSelectorContainer>;

const Template: StoryFn<typeof ViewSelectorContainer> = (args) => <ViewSelectorContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
