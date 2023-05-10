import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title Lorem ipsum dolor sit amet, consectetur adipiscing",
  text: "text description lorem ipsum dolor sit amet, consectetur adip",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title Lorem ipsum dolor sit amet, consectetur adipiscing",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "text description lorem ipsum dolor sit amet, consectetur adip",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Title Lorem ipsum dolor sit amet, consectetur adipiscing",
  text: "text description lorem ipsum dolor sit amet, consectetur adip",
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {
  title: "Title Lorem ipsum dolor sit amet, consectetur adipiscing",
  text: "text description lorem ipsum dolor sit amet, consectetur adip",
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Error = Template.bind({});
Error.args = {
  title: "Title Lorem ipsum dolor sit amet, consectetur adipiscing",
  text: "text description lorem ipsum dolor sit amet, consectetur adip",
  theme: TextTheme.ERROR,
};
