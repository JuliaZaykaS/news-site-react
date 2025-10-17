import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned';

export default {
   title: 'shared/ArticleDetailsRedesigned',
   component: ArticleDetailsRedesigned,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleDetailsRedesigned>;

const Template: StoryFn<typeof ArticleDetailsRedesigned> = (args) => <ArticleDetailsRedesigned {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
