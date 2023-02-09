export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode; // продакшн или девелопмент
  paths: BuildPaths; // пути к файлам
  isDev: boolean; // true если продакшн
  port: number; // порт, на котором происходит разработка
}
