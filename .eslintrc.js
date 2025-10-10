module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'prettier',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        // typescript-eslint/parser:
    },

    // parser: "@typescript-eslint/parser",
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'eslint-plugin-juliaz',
        'unused-imports',
    ],
    // rules: {
    //   // "react/jsx-indent": [2, 4, { indentLogicalExpressions: true }],
    //   "react/jsx-indent": [2, 4],
    //   // indent: [2, 2],
    //   "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // },
    rules: {
        // "react/jsx-indent": [2, 4],
        // "react/jsx-indent-props": [2, 4],
        // indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'react/prop-types': 'warn',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testId',
                    'data-testid',
                    'to',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'tag',
                    'as',
                    'border',
                    'feature',
                    'color',
                    'variant',
                    'borderRadius',
                    'size',
                    'wrap',
                ],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "error", // Проверяем зависимости эффекта
        // "eslint-plugin-juliaz/path-checker":"error",// неверные пути внутри модуля
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }], // сколько атрибутов в jsx на 1 строке без переносов

        'juliaz/path-checker': [2, { alias: '@' }], // неверные пути внутри модуля
        'juliaz/path-checker': [2, { alias: '@' }], // неверные пути внутри модуля
        'juliaz/public-api-imports': [
            2,
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ], // неверный импорт (не из паблик апи)
        'juliaz/layer-imports': [
            2,
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ], // неверный импорт (не из паблик апи)

        'unused-imports/no-unused-imports': 'error', // неиспользуемые импорты
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        // позволяет для определенного вида файлов переопределить какие-то правила
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off', // отключаем переводы в тестовых файлах
                'max-len': 'off',
            },
        },
    ],
};
