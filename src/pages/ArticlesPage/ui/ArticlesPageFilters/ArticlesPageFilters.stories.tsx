import { Meta, StoryFn } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators:[StoreDecorator({})]
} as Meta<typeof ArticlesPageFilters>;

const Template: StoryFn<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({})];

