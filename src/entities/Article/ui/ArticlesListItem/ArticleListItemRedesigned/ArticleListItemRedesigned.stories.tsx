import { Meta, StoryFn } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

export default {
   title: 'shared/ArticleListItemRedesigned',
   component: ArticleListItemRedesigned,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleListItemRedesigned>;

const Template: StoryFn<typeof ArticleListItemRedesigned> = (args) => <ArticleListItemRedesigned {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
