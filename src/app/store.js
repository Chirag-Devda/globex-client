import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
