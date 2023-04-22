import { configureStore } from "@reduxjs/toolkit";
import { CardReducer, CommentReducer, UserReducer } from "./ducks";

const store = configureStore({
  reducer: {
    cards: CardReducer,
    comments: CommentReducer,
    user: UserReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
