// <Адрес страницы - строка, позиция скролла -число>
export type ScrollPositionSchema = Record<string, number>;
// export interface ScrollPositionSchema {
//   path: string;
//   position: number;
// }

export interface ScrollPositionSaveSchema {
  scroll: ScrollPositionSchema;
}
