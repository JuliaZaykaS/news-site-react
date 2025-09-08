import { Meta, StoryFn } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: "1",
    text: "Lorem ipsum dolor sit amet",
    user: {
      id: "1",
      username: "Vasya",
      avatar: "https://cdn-icons-png.flaticon.com/256/7603/7603099.png",
    },
  },
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: "1",
    text: "Lorem ipsum dolor sit amet",
    user: { id: "1", username: "Vasya" },
  },
  isLoading: true,
};
