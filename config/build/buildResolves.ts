import { ResolveOptions } from "webpack";

// функция для расширений
export function buildResolves(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // типы файлов, для которых при импорте не будем указывать расширения
  };
}
