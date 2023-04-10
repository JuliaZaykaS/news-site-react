import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { LoginForm } from "./LoginForm";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

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
Primary.decorators = [
  StoreDecorator({
    loginForm: { userName: "userName", password: "password" },
  }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator({
    loginForm: { userName: "userName", password: "password", error: "error" },
  }),
];
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { userName: "userName", password: "password", error: "error" },
  }),
];
