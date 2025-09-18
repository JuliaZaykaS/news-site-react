import path from 'path'; // импортим модуль, т.к. пути на разных ОС составляются по разному
// import HtmlWebpackPlugin from "html-webpack-plugin"; // плагин для связи вебпака с хтмл файлом, в который будут подключаться скрипты автоматически
import webpack from 'webpack'; //to access built-in plugins
// import { buildPlugins } from "./config/build/buildPlugins";
// import { buildLoaders } from "./config/build/buildLoaders";
// import { buildResolves } from "./config/build/buildResolves";
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    // чтобы использовать переменные окружения, которые мы прописали в скриптах
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // dirname - имя директории, где мы сейчас находимся, далее путь к папке и главному файлу
        build: path.resolve(__dirname, 'build'), // путь, куда сборка должна происходить,
        html: path.resolve(__dirname, 'public', 'index.html'), // указываем, какой файл хтмл мы будет использовать в качестве шаблона,
        src: path.resolve(__dirname, 'src'), // путь к папке src
        locales: path.resolve(__dirname, 'public', 'locales'), // путь к папке с переводами
        buildLocales: path.resolve(__dirname, 'build', 'locales'), // путь к папке для переводов в продакшн
    };

    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env?.port || 3000;
    // const PORT = env?.port || 5173; // для cypress
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
    return config;
};
