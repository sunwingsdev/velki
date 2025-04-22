import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      // Check if user is active before setting credentials
      if (payload.user?.status === 'banned' || payload.user?.status === 'deactivated') {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return;
      }
      
      state.token = payload.token;
      state.user = payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setSingleUser: (state, { payload }) => {
      state.singleUser = payload;
      
      // If the updated user is the current user and they're banned/deactivated, log them out
      if (state.user && state.user._id === payload._id && 
          (payload.status === 'banned' || payload.status === 'deactivated')) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
    // Add a new reducer to check user status on app load or periodically
    checkUserStatus: (state) => {
      if (state.user && (state.user.status === 'banned' || state.user.status === 'deactivated')) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  },
});

export const { setCredentials, logout, setSingleUser, checkUserStatus } = authSlice.actions;
export default authSlice.reducer;