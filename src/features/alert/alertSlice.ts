import { createSlice } from "@reduxjs/toolkit";

import IAlert from "@/interfaces/IAlert";

const initialState: IAlert = {
  show: false,
  type: "",
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    add: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    remove: (state) => {
      state.show = false;
      state.type = "";
      state.message = "";
    },
  },
});

export const { add, remove } = alertSlice.actions;

export default alertSlice.reducer;
