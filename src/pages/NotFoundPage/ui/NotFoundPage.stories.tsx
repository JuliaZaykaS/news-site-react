// import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators:[StoreDecorator({})]
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
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
