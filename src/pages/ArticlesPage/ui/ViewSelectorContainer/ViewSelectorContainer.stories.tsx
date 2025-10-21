import { Meta, StoryFn } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
   title: 'pages/ArticlesPage/ViewSelectorContainer',
   component: ViewSelectorContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: NewDesignDecorator,
} as Meta<typeof ViewSelectorContainer>;

const Template: StoryFn<typeof ViewSelectorContainer> = (args) => <ViewSelectorContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

