import { StoryFn } from "@storybook/react";
// eslint-disable-next-line juliaz/layer-imports
import "@/app/styles/index.scss";
import { Suspense } from "react";

export const SuspenseDecorator = (StoryComponent: StoryFn) => (

    <Suspense>
        <StoryComponent />
    </Suspense>
)
    ;