import { Story } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
