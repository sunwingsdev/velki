import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/baseApi";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
