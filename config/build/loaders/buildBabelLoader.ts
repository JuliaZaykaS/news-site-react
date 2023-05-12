import { BuildOptions } from "../types/config";

export const buildBabelLoader = (options: BuildOptions) => {
  const { isDev } = options;
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    // test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"], // Массив языков
              keyAsDefaultValue: true, // автоматически будет в качестве значения поставлять ключ
              nsSeparator: "~",
            },
          ],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
};
