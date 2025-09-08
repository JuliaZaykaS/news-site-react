import { Meta, StoryFn } from "@storybook/react";
import { CommentsList } from "./CommentsList";

export default {
  title: "entities/Comment/CommentsList",
  component: CommentsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof CommentsList>;

const Template: StoryFn<typeof CommentsList> = (args) => (
  <CommentsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet",
      user: { id: "1", username: "Vasya" },
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet",
      user: { id: "2", username: "Petya" },
    },
  ],
};
export const Loading = Template.bind({});
Loading.args = {
  comments: [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet",
      user: { id: "1", username: "Vasya" },
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet",
      user: { id: "2", username: "Petya" },
    },
  ],
  isLoading: true,
};
export const NoComments = Template.bind({});
NoComments.args = {
  comments: [],
};
