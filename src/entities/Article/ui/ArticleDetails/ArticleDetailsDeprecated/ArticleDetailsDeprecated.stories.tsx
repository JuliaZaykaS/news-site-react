import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated';

export default {
   title: 'shared/ArticleDetailsDeprecated',
   component: ArticleDetailsDeprecated,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleDetailsDeprecated>;

const Template: StoryFn<typeof ArticleDetailsDeprecated> = (args) => <ArticleDetailsDeprecated { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
