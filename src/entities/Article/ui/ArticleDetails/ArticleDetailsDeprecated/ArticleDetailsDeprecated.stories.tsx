import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated';

export default {
   title: 'shared/ArticleDetailsDeprecated',
   component: ArticleDetailsDeprecated,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleDetailsDeprecated>;

const Template: ComponentStory<typeof ArticleDetailsDeprecated> = (args) => <ArticleDetailsDeprecated { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
