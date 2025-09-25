import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];  // название фичи, например, isArticleEnabled
const featureState = process.argv[3]; // коллбек on/off

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага')
}
if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)')
}
if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное значение состояния фичи (on или off)')
}

const project = new Project({});

// добавляем файл с исходным кодом, с которыми будем работать

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все файл проекта с указанными выше разрешениями
const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    // проверяем потомков этой функции в поисках нужной нам
    node.forEachChild(child => {
        // проверяем, имеет ли функция нужное нам название
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true
        }
    })
    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    // проходим по всем потомкам в поисках функции toggleFeatures
    sourceFile.forEachDescendant(node => {
        // ищем ноду с вызовом функции и находим нужную
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            // получаем опции функции
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
            if (!objectOptions) return;
            const featureNameProperty = objectOptions.getProperty('name');
            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
            // получаем имя и убираем кавычки
            const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1)

            if (featureName !== removedFeatureName) return;

            // заменяем функцию toggleFeatures на то, что нам нужно (из пунктов on или off)
            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '')
            }
            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '')
            }

        }
    })
});

// после всех операций сохраняем изменения
project.save();

