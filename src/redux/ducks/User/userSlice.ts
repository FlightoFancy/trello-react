import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";

type UserState = {
  user: IUser;
};

const initialUserState: UserState = {
  user: { name: "", isAuth: false },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser(
      state,
      action: PayloadAction<{
        userName: string;
        isAuth: boolean;
      }>
    ) {
      state.user = {
        name: action.payload.userName,
        isAuth: action.payload.isAuth,
      };
      return state;
    },
    exitUser(state) {
      state.user = {
        name: "",
        isAuth: false,
      };
      return state;
    },
  },
});

export const { createUser, exitUser } = userSlice.actions;
export default userSlice.reducer;
