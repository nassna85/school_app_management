import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import IAuth from "@/interfaces/IAuth";
import IUserRegister from "@/interfaces/IUserRegister";

import AuthService from "@/features/auth/authService";

const initialState: IAuth = {
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  errors: null,
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: IUserRegister, thunkAPI) => {
    try {
      return await AuthService.register(user);
    } catch (e) {
      let errors;
      if (axios.isAxiosError(e)) {
        errors = e?.response?.data?.errors;
      } else {
        errors = "Something wrong";
      }
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errors = null;
    },
    login: (state, { payload }) => {
      return {
        ...state,
        id: payload.user.id,
        email: payload.user.email,
        roles: payload.user.roles,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // @ts-ignore
        state.errors = action.payload;
        state.user = null;
      });
  },
});

export const { reset, login } = authSlice.actions;

export default authSlice.reducer;
