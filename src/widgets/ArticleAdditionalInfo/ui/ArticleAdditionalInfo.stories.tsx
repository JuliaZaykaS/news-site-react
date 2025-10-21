import { Meta, StoryFn } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import Avatar from '@/shared/assets/tests/example.png'

export default {
   title: 'widgets/ArticleAdditionalInfo',
   component: ArticleAdditionalInfo,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleAdditionalInfo>;

const Template: StoryFn<typeof ArticleAdditionalInfo> = (args) => <ArticleAdditionalInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   author: {
      id: '1',
      username: 'User',
      avatar: Avatar,
   },
   views: 10,
};
