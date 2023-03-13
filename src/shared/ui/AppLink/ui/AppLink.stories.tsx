import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import "app/styles/index.scss";
// import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/AppLink",
  component: AppLink,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/", //  при ошибке Cannot read properties of undefined (reading 'pathname')
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
  theme: AppLinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: "Text",
  theme: AppLinkTheme.INVERTED,
};
export const Red = Template.bind({});
Red.args = {
  children: "Text",
  theme: AppLinkTheme.RED,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: "Text",
  theme: AppLinkTheme.INVERTED,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: "Text",
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
