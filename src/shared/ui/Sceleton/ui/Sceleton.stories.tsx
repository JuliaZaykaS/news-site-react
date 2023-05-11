import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sceleton } from "./Sceleton";

export default {
  title: "shared/Sceleton",
  component: Sceleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sceleton>;

const Template: ComponentStory<typeof Sceleton> = (args) => (
  <Sceleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
