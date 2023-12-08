import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainPage from "./MainPage";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/MainPage",
  component: MainPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators:[StoreDecorator({})]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => (
  // const Template: ComponentStory<typeof MainPage> = (args) => (
  // <MainPage {...args} />
  <MainPage />
);
export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
