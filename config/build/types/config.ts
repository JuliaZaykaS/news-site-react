export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string; // путь к файлам с переводами
  buildLocales: string; // путь, куда файлы с переводами перемещать
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode; // продакшн или девелопмент
  paths: BuildPaths; // пути к файлам
  isDev: boolean; // true если продакшн
  port: number; // порт, на котором происходит разработка
  apiUrl: string; // для выбора baseUrl (если прод или разработка)
  project: "storybook" | "jest" | "frontend"; // для разделения сред разработки, чтобы не отправлять запросы на сервер или др действия там, где они не нужны
}
