import { Meta, StoryFn } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
   title: 'widgets/ArticlesFilters',
   component: ArticlesFilters,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: NewDesignDecorator,
} as Meta<typeof ArticlesFilters>;

const Template: StoryFn<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
   (Story) => (
      <div style={{ marginLeft: '50%' }}>
         <Story />
      </div>
   )
];
