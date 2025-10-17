
import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const FeaturesFlagsDecorator = (features: FeatureFlags) => (StoryComponent: StoryFn) => {
   setFeatureFlags(features)
   return (
      <StoryComponent />
   )
};