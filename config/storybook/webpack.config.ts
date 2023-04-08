import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { BuildPaths } from "../build/types/config";

// конфигурация нужна для настройки работы сторибук
// который по умолчанию также как вебпак не умеет работать с css-модулями, картинками и тп
export default ({ config }: { config: webpack.Configuration }) => {
  // опишем только то, где находится наш проект
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  // поместим в конфиг путь до проекта и расширения файлов, которые следует обработать
  // console.log("paths.src", paths.src);

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // добавляем лоадеры в сторибук
  config.module?.rules?.push(buildCssLoaders(true)); // для стилей

  if (config.module) {
    // eslint-disable-next-line no-param-reassign
    // config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
    config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }; // Если правило связано с свг, то его берем
      }
      return rule; // если не связано с свг, то возвращаем
    });
  }
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  // для корректного отображения стора от редакса
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
