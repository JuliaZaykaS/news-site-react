import { StoryFn } from '@storybook/react';
// import { Theme } from "@/shared/const/theme";
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouterDecorator = (
    StoryComponent: StoryFn,
) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
