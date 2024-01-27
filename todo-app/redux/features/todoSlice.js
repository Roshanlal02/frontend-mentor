import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      return (state = action.payload);
    },
    addTodo: (state, action) => {
      state?.push({
        id: action.payload.id,
        task: action.payload.input,
        status: "Active",
      });
      localStorage.setItem("todoObj", JSON.stringify(state));
    },
    markCompleted: (state, action) => {
      const modifyStatus = state.find((obj) => obj.id === action.payload.id);
      if (modifyStatus) {
        modifyStatus.status === "Completed"
          ? (modifyStatus.status = "Active")
          : (modifyStatus.status = "Completed");
      }
      localStorage.setItem("todoObj", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      localStorage.setItem(
        "todoObj",
        JSON.stringify(state.filter((item) => item.id !== action.payload.id))
      );
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCompleted: (state) => {
      localStorage.setItem(
        "todoObj",
        JSON.stringify(state.filter((item) => item.status !== "Completed"))
      );
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

      localStorage.setItem("todoObj", JSON.stringify(state));
    },
  },
});

export const {
  setInitialState,
  addTodo,
  markCompleted,
  removeTask,
  clearCompleted,
  modifyOrder,
} = todoList.actions;
export default todoList.reducer;

const getState = (state) => state;

export const getActiveTodos = createSelector([getState], (todos) =>
  todos.filter((item) => item.status === "Active")
);

export const getCompletedTodos = createSelector([getState], (todos) =>
  todos.filter((item) => item.status === "Completed")
);
