import { Meta, StoryFn } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'pages/ArticlesPage/FiltersContainer',
   component: FiltersContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [NewDesignDecorator]
} as Meta<typeof FiltersContainer>;

const Template: StoryFn<typeof FiltersContainer> = (args) => <FiltersContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
