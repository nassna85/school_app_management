import { createSlice } from "@reduxjs/toolkit";

import IUser from "@/interfaces/IUser";

const initialState: IUser = {
  id: null,
  email: null,
  roles: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return {
        ...state,
        id: payload.id,
        email: payload.email,
        roles: payload.roles,
      };
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
