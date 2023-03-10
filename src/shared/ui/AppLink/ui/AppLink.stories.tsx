import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import "app/styles/index.scss";
// import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  theme: AppLinkTheme.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
 theme: AppLinkTheme.INVERTED
};

