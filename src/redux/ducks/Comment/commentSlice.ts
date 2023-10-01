import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "types";
import { v4 as uuidv4 } from "uuid";

type CommentState = {
  list: IComment[];
};

const initialCommentState: CommentState = {
  list: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {
    createComment(
      state,
      action: PayloadAction<{
        commentTitle: string;
        userName: string;
        cardId: string;
      }>
    ) {
      const newComment = {
        id: uuidv4(),
        cardId: action.payload.cardId,
        comment: action.payload.commentTitle,
        author: action.payload.userName,
      };
      state.list.push(newComment);
    },
    deleteComment(state, action: PayloadAction<string>) {
      state.list = state.list.filter(
        (comment) => comment.id !== action.payload
      );
    },
    editComment(
      state,
      action: PayloadAction<{ newTitle: string; id: string }>
    ) {
      const commentEdited = state.list.find(
        (comment) => comment.id === action.payload.id
      );
      if (commentEdited) {
        commentEdited.comment = action.payload.newTitle;
      }
    },
    clearCommentState(state) {
      state.list = [];
    },
  },
});

export const { createComment, deleteComment, editComment, clearCommentState } =
  commentSlice.actions;
export default commentSlice.reducer;
