import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlag } from "../setGetFeatures";
import { ReactElement } from "react";

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags,
    on: ReactElement,
    off: ReactElement,

}
export function ToggleFeatures(props: ToggleFeaturesProps) {
    const { feature, on, off } = props;
    if (getFeatureFlag(feature)) {
        return on
    }
    return off
}