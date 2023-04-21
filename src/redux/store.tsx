import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./ducks/Card/cardSlice";
import commentReducer from "./ducks/Comment/commentSlice";

const store = configureStore({
  reducer: {
    cards: cardReducer,
    comments: commentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
