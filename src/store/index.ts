import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducer";

export const store = configureStore({
  reducer: AppReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
