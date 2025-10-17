import { Meta, StoryFn } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';

export default {
   title: 'shared/FiltersContainer',
   component: FiltersContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof FiltersContainer>;

const Template: StoryFn<typeof FiltersContainer> = (args) => <FiltersContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
