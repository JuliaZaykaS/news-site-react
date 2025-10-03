import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];  // название фичи, например, isArticleEnabled
const featureState = process.argv[3]; // коллбек on/off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

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
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true
        }
    })
    return isToggleFeatures;
}
function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)
    return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
    // получаем опции функции
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
    if (!objectOptions) return;
    const featureNameProperty = objectOptions.getProperty('name');
    const onFunctionProperty = objectOptions.getProperty('on');
    const offFunctionProperty = objectOptions.getProperty('off');

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
    // получаем имя и убираем кавычки
    const featureName = featureNameProperty?.getFirstDescendantByKind(
        SyntaxKind.StringLiteral)?.getText().slice(1, -1)

    if (featureName !== removedFeatureName) return;

    // заменяем функцию toggleFeatures на то, что нам нужно (из пунктов on или off)
    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
    }
    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
    }
}

const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => {
    return jsxAttributes.find((node) => node.getNameNode().getText() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removedFeatureName) return;

    const offValue = getReplacedComponent(offAttribute);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    // проходим по всем потомкам в поисках функции toggleFeatures
    sourceFile.forEachDescendant(node => {
        // ищем ноду с вызовом функции и находим нужную
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node)
        }
        // ищем ноду, которая является jsx-элементом
        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            replaceComponent(node);
        }
    })
});

// после всех операций сохраняем изменения
project.save();

