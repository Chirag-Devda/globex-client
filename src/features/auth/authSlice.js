import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser } from "../../api/query/authApi";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create an async thunk to fetch user data
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const userData = await loadUser();
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null; // Clear user data on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user data";
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
