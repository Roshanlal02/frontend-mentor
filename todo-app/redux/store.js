import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/features/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
