
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

// import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "@/app/providers/ThemeProvider";
import { CountrySelect } from "./CountrySelect";

export default {
  title: "entities/Country/CountrySelect",
  component: CountrySelect,

  argTypes: {
    backgroundColor: { control: "color" },
  },
    decorators: [
      // Story => <div style={{ padding: 200 }}><Story /></div>
      (StoryComponent: Story) => <div style={{ padding: 300 }}><StoryComponent /></div>
   ]
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
