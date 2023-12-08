import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator.tsx";
// import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx";
import { Theme } from "../../src/shared/const/theme.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator(StyleDecorator);
// addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
