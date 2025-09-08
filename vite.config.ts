import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // svgr({
        //     exportAsDefault: true
        // }),
        svgr({
            // Если хотите автоматический импорт без суффикса:
            include: "**/*.svg",
            svgrOptions: {
                exportType: "default",
                ref: true,
                svgo: false,
                titleProp: true,
            },
        }),

        react(),],
    resolve: {
        alias: [{
            find: "@", replacement: "/src"
        }],
    },
    define: {
        __IS_DEV__: true,
        __API__: JSON.stringify("http://localhost:8000"),
        __PROJECT__: JSON.stringify("frontend"),

    }
})

// import svgr from '@svgr/rollup';

// svgr({
//     // exportType: 'named',
//     exportType: 'default',
//     // svgoConfig: {
//     //     plugins: [
//     //         {
//     //             name: 'preset-default',
//     //             params: {
//     //                 overrides: {
//     //                     removeViewBox: false,
//     //                     cleanupIds: false,
//     //                 },
//     //             },
//     //         },
//     //     ],
//     // },
// }),