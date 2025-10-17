import { Meta, StoryFn } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
   title: 'shared/ArticleAdditionalInfo',
   component: ArticleAdditionalInfo,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleAdditionalInfo>;

const Template: StoryFn<typeof ArticleAdditionalInfo> = (args) => <ArticleAdditionalInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
