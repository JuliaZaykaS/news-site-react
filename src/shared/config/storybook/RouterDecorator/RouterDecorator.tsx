import { Story } from "@storybook/react";
// import { Theme } from "@/shared/const/theme";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
