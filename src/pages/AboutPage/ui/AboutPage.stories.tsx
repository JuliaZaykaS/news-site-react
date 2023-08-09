import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutPage from "./AboutPage";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/AboutPage",
  component: AboutPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators:[StoreDecorator({})]
} as ComponentMeta<typeof AboutPage>;

// const Template: ComponentStory<typeof AboutPage> = (args) => (
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});
Orange.args = {};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
