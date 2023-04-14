import { ICard, IComment } from "types";

class localStorageData {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  getDataLocalStorage() {
    const storage = localStorage.getItem(this.key);
    if (storage) {
      let items = JSON.parse(storage);
      return items;
    } else return [];
  }
  addItem(items: any[], newElem: {}) {
    localStorage.setItem(this.key, JSON.stringify([...items, newElem]));
  }
  deleteItem(items: any[], id: string) {
    localStorage.setItem(
      this.key,
      JSON.stringify(items.filter((item) => item.id !== id))
    );
  }
  editCardName(cards: ICard[], cardId: string, titleCard: string) {
    localStorage.setItem(
      this.key,
      JSON.stringify(
        cards.map((card) => {
          if (card.id === cardId) {
            return {
              ...card,
              title: titleCard,
            };
          }
          return card;
        })
      )
    );
  }
  addDescCard(cards: ICard[], cardId: string, description: string) {
    localStorage.setItem(
      this.key,
      JSON.stringify(
        cards.map((card) => {
          if (card.id === cardId) {
            return {
              ...card,
              description: description,
            };
          }
          return card;
        })
      )
    );
  }
  editComment(comments: IComment[], id: string, commentNewValue: string) {
    localStorage.setItem(
      this.key,
      JSON.stringify(
        comments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              comment: commentNewValue,
            };
          }
          return comment;
        })
      )
    );
  }
}

export const cardRepository = new localStorageData("cards");
export const commentRepository = new localStorageData("comments");
