import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

// функция для расширений
export function buildResolves(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // типы файлов, для которых при импорте не будем указывать расширения
    preferAbsolute: true, //аюсолютные пути в приоритете
    modules: [options.paths.src, "node_modules"], // папки, из которых нужно учитывать абсолютные импорты
    mainFiles: ["index"], // для каждого модуля главным файлом будет считаться index
    alias: {}, //какой знак указывать при абсолютном импорте, если пустой объект, то без спец знаков
  };
}
