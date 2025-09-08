import { Meta, StoryFn } from "@storybook/react";
import ArticleEditPage from "./ArticleEditPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
// import { ArticleDetailsBlockType } from "entities/Article/model/types/article";

export default {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators:[StoreDecorator({})]
} as Meta<typeof ArticleEditPage>;

const Template: StoryFn<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

// export const Normal = Template.bind({});
// Normal.args = {};
// Normal.decorators = [StoreDecorator({
//   user:
// })]
// export const Edit = Template.bind({});
// Edit.args = {};
// Edit.decorators = [StoreDecorator({ articleDetails: { data: article } })];

export const Create = Template.bind({});
Create.args = {};
// Create.decorators = [StoreDecorator({})];
