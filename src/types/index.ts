export interface ICard {
  id: string;
  title: string;
  description?: string;
}

export interface IComment {
  id: string;
  cardId?: string;
  comment: string;
  author: string;
}
