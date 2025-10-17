import { Meta, StoryFn } from '@storybook/react';
import { AppLoaderLayout } from './AppLoaderLayout';

export default {
   title: 'shared/AppLoaderLayout',
   component: AppLoaderLayout,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AppLoaderLayout>;

const Template: StoryFn<typeof AppLoaderLayout> = (args) => <AppLoaderLayout {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
