import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned';

export default {
   title: 'shared/ArticleDetailsRedesigned',
   component: ArticleDetailsRedesigned,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleDetailsRedesigned>;

const Template: ComponentStory<typeof ArticleDetailsRedesigned> = (args) => <ArticleDetailsRedesigned { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
