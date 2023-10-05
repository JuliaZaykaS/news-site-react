import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import "app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    loginForm: { userName: "userName", password: "password" },
  }),
];

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { userName: "userName", password: "password" },
  }),
];
export const Orange = Template.bind({});

Orange.args = {};
Orange.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    loginForm: { userName: "userName", password: "password" },
  }),
];
export const LightWithAuth = Template.bind({});

LightWithAuth.args = {};
LightWithAuth.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const DarkWithAuth = Template.bind({});

DarkWithAuth.args = {};
DarkWithAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
];
