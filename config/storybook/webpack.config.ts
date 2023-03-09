import path from "path";
import webpack from "webpack";
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
  console.log("paths.src", paths.src);

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // добавляем лоадеры в сторибук
  config.module?.rules?.push(buildCssLoaders(true));
  return config;
};
