import { Meta, StoryFn } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
   title: 'shared/AdditionalInfoContainer',
   component: AdditionalInfoContainer,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AdditionalInfoContainer>;

const Template: StoryFn<typeof AdditionalInfoContainer> = (args) => <AdditionalInfoContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
