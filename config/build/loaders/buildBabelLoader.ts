import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";


interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = (options: BuildBabelLoaderProps) => {
  const { isDev, isTsx } = options;
  return {
    // test: /\.(js|jsx|ts|tsx)$/,
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
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
          [
            "@babel/plugin-transform-runtime"
          ],
          ["@babel/plugin-transform-typescript", {
            isTsx,
          }],

          isDev && require.resolve("react-refresh/babel"),
          isTsx && [babelRemovePropsPlugin(), { props: ["data-testid"] }],
        ].filter(Boolean),
      },
    },
  };
};
