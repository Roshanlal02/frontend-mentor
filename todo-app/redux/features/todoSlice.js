import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.push({ id: 1, task: action.payload, status: "Active" });
    },
  },
});

export const { addTodo } = todoList.actions;
export default todoList.reducer;
