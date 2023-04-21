import HtmlWebpackPlugin from "html-webpack-plugin"; // плагин для связи вебпака с хтмл файлом, в который будут подключаться скрипты автоматически
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // плагин для создания css-файлов отдельных в проде
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; // плагин для анализа размера бандла
// import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

// функция для подключения и конфигурации плагинов
export function buildPlugins({
  paths,
  isDev,
  apiUrl,
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
    }),
  ];
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin()); // для обновления страницы без перезагрузки
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false })); // анализ размера бандла
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
