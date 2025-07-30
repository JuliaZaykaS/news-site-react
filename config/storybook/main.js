// module.exports = {
//   stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],

//   addons: [
//     "@storybook/addon-links",
//     "storybook-addon-mock/register",
//     "storybook-addon-themes"
//   ],

//   // framework: "@storybook/react",
//   framework: {
//   name: "@storybook/react-vite",
//   options: {}
// },

//   // framework: "@storybook/react-webpack5",
//   // core: {
//   //   // builder: "@storybook/builder-webpack5",
//   //   builder: "react-vite",
//   // },

//   features: {
//     backgrounds: false
//   }
// };

import path from 'path';
import { mergeConfig } from 'vite';

export default {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    'storybook-addon-mock/register',
    'storybook-addon-themes'
  ],
    viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "src/app/styles/index.scss";`,
            includePaths: [path.resolve(__dirname, '../../src/app/styles')],
            // includePaths: [path.resolve(__dirname, "..", "..", "src", "app", "styles")],
          },
        },
      },
    });
  },
};
