import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { BuildOptions } from "../types/config";

export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates `style` nodes from JS strings

      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            // modules: true, // для css модулей
            auto: (resPath: string) => Boolean(resPath.includes(".module.")), // чтобы для файлов css модулей были правила сборки одни
            localIdentName: isDev // правило сборки css-файлов без приставки module
              ? "[path][name]__[local]" // если разработка, то имя файла + уникальный хэш для уникальности селекторов и простоты дебага
              : "[hash:base64:8]", // если прод, то только хэши
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
}
