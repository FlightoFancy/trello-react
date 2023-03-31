export interface ICard {
  id: string;
  title: string;
  description?: string;
  columnId?: string;
}
export interface IComment {
  id: string;
  cardId?: string;
  comment: string;
  author: string;
}
export interface IColumn {
  id: string;
  title: string;
}
