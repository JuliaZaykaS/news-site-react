const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';
import { typedMemo } from '@/shared/const/memo';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = typedMemo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
           
        </div>
    );
});`;
