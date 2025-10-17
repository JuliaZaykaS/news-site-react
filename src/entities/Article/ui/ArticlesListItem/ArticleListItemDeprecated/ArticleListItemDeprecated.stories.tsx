import { Meta, StoryFn } from '@storybook/react';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

export default {
   title: 'shared/ArticleListItemDeprecated',
   component: ArticleListItemDeprecated,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleListItemDeprecated>;

const Template: StoryFn<typeof ArticleListItemDeprecated> = (args) => <ArticleListItemDeprecated {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
