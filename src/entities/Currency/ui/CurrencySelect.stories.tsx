import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "entities/Currency/CurrencySelect",
  component: CurrencySelect,

  argTypes: {
    backgroundColor: { control: "color" },
  },
     decorators: [
      // Story => <div style={{ padding: 200 }}><Story /></div>
      (StoryComponent: Story) => <div style={{ padding: 200 }}><StoryComponent /></div>
   ]
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
