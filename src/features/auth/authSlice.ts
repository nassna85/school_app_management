import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import IAuth from "@/interfaces/scope/auth/IAuth";
import IUserRegister from "@/interfaces/scope/auth/IUserRegister";
import ILoginCredentials from "@/interfaces/scope/auth/ILoginCredentials";

import AuthService from "@/features/auth/AuthService";

const initialState: IAuth = {
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  errors: null,
  errorMessage: "",
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

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginCredentials, thunkAPI) => {
    try {
      return await AuthService.login(credentials);
    } catch (e) {
      let message;
      if (axios.isAxiosError(e)) {
        message = e?.response?.data?.message;
      } else {
        message = "Something wrong";
      }
      return thunkAPI.rejectWithValue(message);
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
      state.errorMessage = "";
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // @ts-ignore
        state.errors = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // @ts-ignore
        state.errorMessage = action.payload;
        state.user = null;
      });
  },
});

export const { reset, logout } = authSlice.actions;

export default authSlice.reducer;
