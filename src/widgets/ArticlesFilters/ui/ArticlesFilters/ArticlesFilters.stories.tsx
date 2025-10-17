import { Meta, StoryFn } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';

export default {
   title: 'shared/ArticlesFilters',
   component: ArticlesFilters,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesFilters>;

const Template: StoryFn<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
