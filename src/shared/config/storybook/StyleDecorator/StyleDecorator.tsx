import { Story } from "@storybook/react";
import "@/app/styles/index.scss";

// export const StyleDecorator = (story: () => Story) => (
//   <div className="app light">{story()}</div>
// );
// export const StyleDecorator = (story: () => Story) => story();
export const StyleDecorator = (StoryComponent: Story) => <StoryComponent />;
