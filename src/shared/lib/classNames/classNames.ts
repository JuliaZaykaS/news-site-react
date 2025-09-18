// cls - имя класса
// mods -  объект доп опций состояния компонента
// additional - массив доп классов

export type Mods = Record<string, boolean | string | undefined>;
export function classNames(
    cls: string,
    mods: Mods = {}, // доп опции (? или ставить {} )
    additional: Array<string | undefined> = [], // доп опции (? или ставить [] )
): string {
    return [
        cls,
        ...additional.filter(Boolean), // фильтрация, чтобы не появились ошибки, если значения не приходят
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value)) // выбираем только опции с флагом true
            .map(([className, _]) => className), // выбираем название полученных опций для вставки в className
    ].join(' ');
}
