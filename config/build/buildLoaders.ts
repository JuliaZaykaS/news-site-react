import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

//функция для конфигов по лоудерам
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = buildBabelLoader(options);
  const cssLoaders = buildCssLoaders(isDev);
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
