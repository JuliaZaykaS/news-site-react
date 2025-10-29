import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

//функция для конфигов по лоудерам
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: "@svgr/webpack",
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      }
    }],
  };

  // вместо typescriptLoader
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoaders = buildCssLoaders(isDev);
  // const typescriptLoader = {
  //   test: /\.tsx?$/, // для TS
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  //   // options: {
  //   //   transpileOnly: true,
  //   // },
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  // return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoaders];
}
