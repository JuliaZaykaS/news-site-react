import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

//функция для конфигов по лоудерам
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        // test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"], // Массив языков
                            keyAsDefaultValue: true, // автоматически будет в качестве значения поставлять ключ
                            nsSeparator: "~",
                        },
                    ],
                ],
            },
        },
    };
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings

            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // modules: true, // для css модулей
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")), // чтобы для файлов css модулей были правила сборки одни
                        localIdentName: options.isDev // правило сборки css-файлов без приставки module
                            ? "[path][name]__[local]" // если разработка, то имя файла + уникальный хэш для уникальности селекторов и простоты дебага
                            : "[hash:base64:8]", // если прод, то только хэши
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    const typescriptLoader = {
        test: /\.tsx?$/, // для TS
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
}
