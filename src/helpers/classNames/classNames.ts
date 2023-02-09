// cls - имя класса
// mods -  объект доп опций состояния компонента
// additional - массив доп классов

type Mods = Record<string, boolean | string>;
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value)) // выбираем только опции с флагом true
      .map(([className, value]) => className), // выбираем название полученных опций для вставки в className
  ].join(" ");
}
