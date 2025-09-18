import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файл с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все файл проекта с указанными выше разрешениями
const files = project.getSourceFiles();

// проходимся по всем файлам и производим замену стандартного абсолютного импорта на импорт с использованием алиаса
files.forEach((sourceFile) => {
    // получаем все строки с импортами в данной файле
    const importDeclarations = sourceFile.getImportDeclarations();
    // проходимся по каждому импорту, и если это импорт наш внутренний, не какой-то библиотеки, то добавляем алиас
    importDeclarations.forEach((importDeclaration) => {
        // получаем сроку импорта, например shared/lib/hooks/useModal/useModal
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

// после всех операций сохраняем изменения
project.save();

// функция для проверки импортов на соответсвие условий (принадлежность к нашему проекту, а не сторонним библиотекам)
function isAbsolute(value: string) {
    const folderNamesArr = [
        'app',
        'shared',
        'entities',
        'pages',
        'features',
        'widgets',
    ];
    return folderNamesArr.some((folderName) => value.startsWith(folderName));
}
