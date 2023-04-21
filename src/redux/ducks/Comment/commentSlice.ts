import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "types";
import { v4 as uuidv4 } from "uuid";

type CommentState = {
  list: IComment[];
};

const initialCardState: CommentState = {
  list: [],
};

const commentSlice = createSlice({
  name: "cards",
  initialState: initialCardState,
  reducers: {
    createComment(
      state,
      action: PayloadAction<{
        commentTitle: string;
        userName: string;
        cardId: string;
      }>
    ) {
      const newComm = {
        id: uuidv4(),
        cardId: action.payload.cardId,
        comment: action.payload.commentTitle,
        author: action.payload.userName,
      };
      state.list.push(newComm);
    },
    deleteComment(state, action: PayloadAction<string>) {
      state.list = state.list.filter(
        (comment) => comment.id !== action.payload
      );
    },
    editComment( state,
        action: PayloadAction<{ newTitle: string; id: string }>) {
            const commentEdited = state.list.find(
                (comment) => comment.id === action.payload.id
              );
              if (commentEdited) {
                commentEdited.comment = action.payload.newTitle;
              }
        },
  },
});

export const { createComment, deleteComment, editComment } =
  commentSlice.actions;
export default commentSlice.reducer;
