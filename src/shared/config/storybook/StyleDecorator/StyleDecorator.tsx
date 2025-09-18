import { StoryFn } from '@storybook/react';
// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';

// export const StyleDecorator = (story: () => Story) => (
//   <div className="app light">{story()}</div>
// );
// export const StyleDecorator = (story: () => Story) => story();
export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
