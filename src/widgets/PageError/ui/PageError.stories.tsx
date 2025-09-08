import type { Meta, StoryFn } from '@storybook/react';


// import "app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { PageError } from "./PageError";

export default {
  title: "widgets/PageError",
  component: PageError,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});

Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
