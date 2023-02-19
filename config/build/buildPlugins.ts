import HtmlWebpackPlugin from "html-webpack-plugin"; // плагин для связи вебпака с хтмл файлом, в который будут подключаться скрипты автоматически
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // плагин для создания css-файлов отдельных в проде

import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

// функция для подключения и конфигурации плагинов
export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
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
    }),
    new webpack.HotModuleReplacementPlugin(), // для обновления страницы без перезагрузки
  ];
}
