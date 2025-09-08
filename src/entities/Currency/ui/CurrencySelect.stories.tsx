
import { Meta, StoryFn } from "@storybook/react";

// import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "@/app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "entities/Currency/CurrencySelect",
  component: CurrencySelect,

  argTypes: {
    backgroundColor: { control: "color" },
  },
     decorators: [
      // Story => <div style={{ padding: 200 }}><Story /></div>
      (Story) => <div style={{ padding: 200 }}><Story /></div>
   ]
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

