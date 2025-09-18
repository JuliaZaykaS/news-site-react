import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Загружаем env-файл для текущего режима
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            // svgr({
            //     exportAsDefault: true
            // }),
            svgr({
                // Если хотите автоматический импорт без суффикса:
                include: '**/*.svg',
                svgrOptions: {
                    exportType: 'default',
                    ref: true,
                    svgo: false,
                    titleProp: true,
                },
            }),

            react(),
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: '/src',
                },
            ],
        },
        define: {
            __IS_DEV__: true,
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('frontend'),
            __VITE_TEST__: env.VITE_TEST === 'true' ? true : false,
        },
        server: {
            host: '0.0.0.0', // слушать на всех интерфейсах
            port: 5173,
        },
    };
});

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
