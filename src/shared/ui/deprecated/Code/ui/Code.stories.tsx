import type { Meta, StoryFn } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;

const textCode = `export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;`

export const Normal = Template.bind({});
Normal.args = {
  textCode: textCode,
};

export const Dark = Template.bind({});
Dark.args = {
  textCode: textCode,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({});
Orange.args = {
  textCode: textCode,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

