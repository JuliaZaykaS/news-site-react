
import { Meta, StoryFn } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
