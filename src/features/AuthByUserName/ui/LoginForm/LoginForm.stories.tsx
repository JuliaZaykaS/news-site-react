import { Meta, StoryFn } from "@storybook/react";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import LoginForm from "./LoginForm";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

export default {
  title: "features/LoginForm",
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { userName: "userName", password: "password" },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
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
export const Orange = Template.bind({});

Orange.args = {};
Orange.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    loginForm: { userName: "userName", password: "password", error: "error" },
  }),
];

