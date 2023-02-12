// cls - имя класса
// mods -  объект доп опций состояния компонента
// additional - массив доп классов

type Mods = Record<string, boolean | string>;
export function classNames(
  cls: string,
  mods?: Mods, // доп опции (? или ставить {} )
  additional?: string[] // доп опции (? или ставить [] )
): string {
  return [
    cls,
    ...additional.filter(Boolean), // фильтрация, чтобы не появились ошибки, если значения не приходят
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value)) // выбираем только опции с флагом true
      .map(([className, value]) => className), // выбираем название полученных опций для вставки в className
  ].join(" ");
}
