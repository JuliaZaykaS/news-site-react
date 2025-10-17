import { Meta, StoryFn } from '@storybook/react';
import { DetailsContainer } from './DetailsContainer';

export default {
   title: 'shared/DetailsContainer',
   component: DetailsContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof DetailsContainer>;

const Template: StoryFn<typeof DetailsContainer> = (args) => <DetailsContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
