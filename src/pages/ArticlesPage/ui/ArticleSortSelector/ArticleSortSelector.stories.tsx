import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/ArticlesPage/ArticleSortSelector",
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({})];
