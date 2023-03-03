import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port, // порт для разработки
    open: true, // свойство для автоматического открытия страницы приложения
    historyApiFallback: true, // для проксирования запросов с главной страницы приложения
    hot: true, // для обновления страницы без перезагрузки
  };
}
