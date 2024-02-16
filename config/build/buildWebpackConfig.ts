// import path from "path"; // импортим модуль, т.к. пути на разных ОС составляются по разному
import webpack from "webpack"; //to access built-in plugins
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types/config";

//функция для сборки вебпак конфига
export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    // указываем, для какого режима сборка: продакшн или девелопмент
    mode,
    // путь к входной точке в приложение
    entry: paths.entry, // dirname - имя директории, где мы сейчас находимся, далее путь к папке и главному файлу
    // настройки того, куда и как мы будем делать сборку приложения
    output: {
      filename: "[name].[contenthash].js", // имя главного файла сборки нашего приложения
      path: paths.build, // путь, куда сборка должна происходить
      clean: true, // для очистки ненужных файлов, остается только финальная сборка
      publicPath: "/",
    },
    // добавляем плагины
    plugins: buildPlugins(options),
    // настройки для TS
    module: {
      // правила для файлов-лоадеров, предназначенных для файлов, которые выходят за рамки js (файлы изображений, css, ts и тп)
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? "eval-cheap-module-source-map" : undefined, // для понимания, в каком файле произошла ошибка
    devServer: isDev ? buildDevServer(options) : undefined, // настройки для сервера разработки
  };
}
