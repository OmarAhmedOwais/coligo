import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: localStorage.getItem("token") ? true : false},
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("token", "token");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
