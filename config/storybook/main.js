import path from 'path';
import { mergeConfig } from 'vite';
import svgr from "vite-plugin-svgr";

export default {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    // 'storybook-addon-mock/register',
    // 'storybook-addon-mock',
    'storybook-addon-themes'
  ],
  staticDirs: ['../../public'], // 👈 указываем папку public
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [svgr(
        {
          // Если хотите автоматический импорт без суффикса:
          include: "**/*.svg",
          svgrOptions: {
            exportType: "default",
            ref: true,
            svgo: false,
            titleProp: true,
          },
        }
      )],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src'),
        },
      },
      define: {
        __API__: JSON.stringify('http://localhost:8000'), // 👈 твой API url
        __IS_DEV__: true,
        //  __PROJECT__: JSON.stringify("frontend"),
        __PROJECT__: JSON.stringify("storybook"),
      },
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData: `@import "src/app/styles/index.scss";`,
            includePaths: [path.resolve(__dirname, '../../src/app/styles')],
            // includePaths: [path.resolve(__dirname, "..", "..", "src", "app", "styles")],
          },
        },
      },
    });
  },
};
