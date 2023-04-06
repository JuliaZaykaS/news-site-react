import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { LoginForm } from "./LoginForm";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "features/LoginForm",
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
export const Dark = Template.bind({});

Primary.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
