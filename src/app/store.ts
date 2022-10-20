import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "@/features/alert/alertSlice";
import userReducer from "@/features/user/userSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
