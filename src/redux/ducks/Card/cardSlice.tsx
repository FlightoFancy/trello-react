import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "types";
import { v4 as uuidv4 } from "uuid";

type CardState = {
  list: ICard[];
};

const initialCardState: CardState = {
  list: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState: initialCardState,
  reducers: {
    createCard(
      state,
      action: PayloadAction<{ cardTitle: string; columnId: string }>
    ) {
      const newCard = {
        id: uuidv4(),
        title: action.payload.cardTitle,
        columnId: action.payload.columnId,
      };
      state.list.push(newCard);
    },
    deleteCard(state, action: PayloadAction<{ id: string }>) {
      state.list = state.list.filter((card) => card.id !== action.payload.id);
    },
    editCardName(
      state,
      action: PayloadAction<{ newTitle: string; id: string }>
    ) {
      const cardRename = state.list.find(
        (card) => card.id === action.payload.id
      );
      if (cardRename) {
        cardRename.title = action.payload.newTitle;
      }
    },
    addDescription(
      state,
      action: PayloadAction<{ description: string; id: string }>
    ) {
      const cardEdited = state.list.find(
        (card) => card.id === action.payload.id
      );
      if (cardEdited) {
        cardEdited.description = action.payload.description;
      }
    },
  },
});

export const { createCard, deleteCard, editCardName, addDescription } =
  cardSlice.actions;
export default cardSlice.reducer;
