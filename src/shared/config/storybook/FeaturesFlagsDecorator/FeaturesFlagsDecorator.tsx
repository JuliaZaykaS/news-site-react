import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { StoryFn } from '@storybook/react';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) =>
    // eslint-disable-next-line react/display-name
    (StoryComponent: StoryFn) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
