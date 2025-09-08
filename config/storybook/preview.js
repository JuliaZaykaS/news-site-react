import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator.tsx";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator.tsx";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator.tsx";
// import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx";
import { Theme } from "@/shared/const/theme.ts";
import '@/app/styles/index.scss';

import { initialize, mswDecorator } from 'msw-storybook-addon';


initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ["app", Theme.LIGHT], color: '#ffffff' },
      { name: 'dark', class: ["app", Theme.DARK], color: '#000000' },
      { name: 'orange', class: ["app", Theme.ORANGE], color: '#ff9900' },
    ],
  },
};
// addDecorator(StyleDecorator);
// addDecorator(TranslationDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
// addDecorator(SuspenseDecorator);

export const decorators = [
  StyleDecorator,
  RouterDecorator,
  SuspenseDecorator,
  mswDecorator,
  // (Story, context) => {
  //   const mockData = context.parameters.mockData?.map((mock: any) => ({
  //     ...mock,
  //     url: `${__API__}${mock.url}`, // добавляем базовый путь
  //   }));

  //   context.parameters.mockData = mockData;

  //   return <Story />;
  // },
];
