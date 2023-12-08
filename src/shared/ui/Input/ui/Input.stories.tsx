// import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Type text",
  value: "123123",
};
export const Dark = Template.bind({});

Dark.args = {
  placeholder: "text",
  value: "123123",
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});

Orange.args = {
  placeholder: "text",
  value: "123123",
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
