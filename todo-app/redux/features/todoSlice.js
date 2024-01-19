import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    task: "This is the task",
    status: "Active",
  },
  {
    id: 2,
    task: "This is the task",
    status: "Active",
  },
  {
    id: 3,
    task: "This is the task",
    status: "Completed",
  },
  {
    id: 4,
    task: "This is the task",
    status: "Completed",
  },
];

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: action.payload.id,
        task: action.payload.input,
        status: "Active",
      });
    },
    markCompleted: (state, action) => {
      const modifyStatus = state.find((obj) => obj.id === action.payload.id);
      if (modifyStatus) {
        modifyStatus.status === "Completed"
          ? (modifyStatus.status = "Active")
          : (modifyStatus.status = "Completed");
      }
    },
    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCompleted: (state, action) => {
      return state.filter((item) => item.status !== "Completed");
    },
  },
});

export const { addTodo, markCompleted, removeTask, clearCompleted } = todoList.actions;
export default todoList.reducer;
