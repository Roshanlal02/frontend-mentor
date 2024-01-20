import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state?.push({
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
    modifyOrder: (state, action) => {
      if (!action.payload) return;

      const currentIndex = state.findIndex((object) => {
        return object.id === action.payload.draggingItem.id;
      });
      const targetIndex = state.findIndex((object) => {
        return object.id === action.payload.dropItem.id;
      });

      if (currentIndex !== -1 && targetIndex !== -1) {
        state.splice(currentIndex, 1);
        state.splice(targetIndex, 0, action.payload.draggingItem);
      }
    },
  },
});

export const {
  addTodo,
  markCompleted,
  removeTask,
  clearCompleted,
  modifyOrder,
} = todoList.actions;
export default todoList.reducer;
