import { Meta, StoryFn } from "@storybook/react";
import AddNewCommentForm from "./AddNewCommentForm";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
// import { action } from "storybook/actions";
import { action } from "@storybook/addon-actions";

export default {
  title: "features/AddNewCommentForm",
  component: AddNewCommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof AddNewCommentForm>;

const Template: StoryFn<typeof AddNewCommentForm> = (args) => (
  <AddNewCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action("onSendComment"),
};
Normal.decorators = [StoreDecorator({})];
