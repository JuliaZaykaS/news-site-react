import { Meta, StoryFn } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/shared/__mocks__/article';

export default {
   title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
   component: AdditionalInfoContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AdditionalInfoContainer>;

const Template: StoryFn<typeof AdditionalInfoContainer> = (args) => <AdditionalInfoContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
   articleDetails: {
      data: article
   }
})]
