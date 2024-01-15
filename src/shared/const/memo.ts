import { memo } from "react";

// использовать вместо обычного memo типизированный

export const typedMemo: <T>(c: T) => T = memo;