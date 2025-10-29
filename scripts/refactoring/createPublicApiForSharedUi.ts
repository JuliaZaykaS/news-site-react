import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

// добавляем файл с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все файл проекта с указанными выше разрешениями
const files = project.getSourceFiles();

// получаем саму папку shared/ui
const sharedUiPath = path.resolve(
    __dirname,
    '..',
    '..',
    'src',
    'shared',
    'ui',
);
const sharedUiDirectory =
    project.getDirectory(sharedUiPath);

// получаем все папки с компонентами
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((directory) => {
    // проверяем, есть ли в папке index.ts, чтобы его не перезаписывать
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile =
        directory.getSourceFile(indexFilePath);
    // console.log(directory.getDirectory("ui"));

    const uiPathInDirectory = path.resolve(
        __dirname,
        '..',
        '..',
        'src',
        'shared',
        'ui',
        directory.getBaseName(),
        'ui',
    );
    // const isUiInDirectory = directory.getDirectory("ui")
    const isUiInDirectory = directory.getDirectory(
        uiPathInDirectory,
    );

    // если файла нет, то создаем
    if (!indexFile) {
        const exportFromUi = `export * from './ui/${directory.getBaseName()}'`;
        const exportFromFile = `export * from './${directory.getBaseName()}'`;
        // const sourceCode = `export * from './${directory.getBaseName()}'`
        const sourceCode = isUiInDirectory
            ? exportFromUi
            : exportFromFile;
        const file = directory.createSourceFile(
            indexFilePath,
            sourceCode,
            {
                overwrite: true,
            },
        );
        file.save();
    }
});

// проходимся по всем файлам и производим замену стандартного абсолютного импорта на импорт с использованием алиаса
files.forEach((sourceFile) => {
    // получаем все строки с импортами в данной файле
    const importDeclarations =
        sourceFile.getImportDeclarations();
    // проходимся по каждому импорту, и если это импорт наш внутренний, не какой-то библиотеки, то добавляем алиас
    importDeclarations.forEach((importDeclaration) => {
        // получаем сроку импорта, например shared/lib/hooks/useModal/useModal
        const value =
            importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (
            isAbsolute(valueWithoutAlias) &&
            isSharedLayer &&
            isUiSlice
        ) {
            const result = valueWithoutAlias
                .split('/')
                .slice(0, 3)
                .join('/');
            importDeclaration.setModuleSpecifier(
                `@/${result}`,
            );
        }
    });
});

// после всех операций сохраняем изменения
project.save();

// функция для проверки импортов на соответствие условий (принадлежность к нашему проекту, а не сторонним библиотекам)
function isAbsolute(value: string) {
    const folderNamesArr = [
        'app',
        'shared',
        'entities',
        'pages',
        'features',
        'widgets',
    ];
    return folderNamesArr.some((folderName) =>
        value.startsWith(folderName),
    );
}
