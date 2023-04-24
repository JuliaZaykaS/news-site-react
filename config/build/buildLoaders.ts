import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";

//функция для конфигов по лоудерам
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  //   const { isDev} = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
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
        ],
      },
    },
  };
  const cssLoaders = buildCssLoaders(options.isDev);
  const typescriptLoader = {
    test: /\.tsx?$/, // для TS
    use: "ts-loader",
    exclude: /node_modules/,
    // options: {
    //   transpileOnly: true,
    // },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
}
