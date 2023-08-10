module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock/register",
  ],
  framework: "@storybook/react",
  // framework: "@storybook/react-webpack5",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
