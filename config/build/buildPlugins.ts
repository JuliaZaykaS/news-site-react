import HtmlWebpackPlugin from "html-webpack-plugin"; // плагин для связи вебпака с хтмл файлом, в который будут подключаться скрипты автоматически
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // плагин для создания css-файлов отдельных в проде
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; // плагин для анализа размера бандла
// import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import CircularDependencyPlugin from "circular-dependency-plugin";

// функция для подключения и конфигурации плагинов
export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html, // указываем, какой файл хтмл мы будет использовать в качестве шаблона  для работы с хтмл
    }),
    new webpack.ProgressPlugin(), // для отслеживания прогресса сборки
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      // для перемещения переводов в сборку
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),

  ];
  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin()); // для обновления страницы без перезагрузки
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false })); // анализ размера бандла
    plugins.push(new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,

      // add errors to webpack instead of warnings
      failOnError: true,

    })); // анализ кольцевых зависимостей
  }
  // return [
  //   new HtmlWebpackPlugin({
  //     template: paths.html, // указываем, какой файл хтмл мы будет использовать в качестве шаблона  для работы с хтмл
  //   }),
  //   new webpack.ProgressPlugin(), // для отслеживания прогресса сборки
  //   new MiniCssExtractPlugin({
  //     filename: "css/[name].[contenthash:8].css",
  //     chunkFilename: "css/[name].[contenthash:8].css",
  //   }),
  //   new webpack.DefinePlugin({
  //     __IS_DEV__: JSON.stringify(isDev),
  //   }),
  //   new webpack.HotModuleReplacementPlugin(), // для обновления страницы без перезагрузки
  //   new BundleAnalyzerPlugin({ openAnalyzer: false }),
  // ];
  return plugins;
}
