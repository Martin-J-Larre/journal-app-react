import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    status: "No-Autheticated", //todo: checking/no-auth/auth
    userId: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "Checking";
    },
  },
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;
