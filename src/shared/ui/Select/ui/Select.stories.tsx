import type { Meta, StoryFn } from '@storybook/react';

import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Укажите название селекта",
  options: [
    {
      value: "123",
      content: "1 пункт",
    },
    {
      value: "456",
      content: "2 пункт",
    },
    {
      value: "789",
      content: "3 пункт",
    },
  ],
};
