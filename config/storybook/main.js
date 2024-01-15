module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-mock/register",
    "storybook-addon-themes",

  ],
  framework: "@storybook/react",
  // framework: "@storybook/react-webpack5",
  core: {
    builder: "@storybook/builder-webpack5",
  },

};
