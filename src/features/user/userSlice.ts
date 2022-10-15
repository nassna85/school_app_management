import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import IUser from "@/interfaces/scope/user/IUser";

import UserService from "@/features/user/UserService";

const initialState: IUser = {
  me: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: [],
  },
  isError: false,
  isLoading: false,
  errorMessage: "",
};

// Get Current User Details
export const getMe = createAsyncThunk("user/me", async (_, thunkAPI) => {
  try {
    return await UserService.me();
  } catch (e) {
    let error;

    if (axios.isAxiosError(e)) {
      error = e?.response?.data?.message || "Something wrong";
    } else {
      error = "Something wrong";
    }
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
        state.me = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // @ts-ignore
        state.errorMessage = action.payload;
        state.me = {
          _id: "",
          firstName: "",
          lastName: "",
          email: "",
          role: [],
        };
      });
  },
});

export default userSlice.reducer;
