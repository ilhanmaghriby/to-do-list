import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.data = state.data.filter(
        (todo) => todo.id !== idToDelete
      );
    },
  },
});

export const { addTodo, deleteTodo } = ToDoSlice.actions;
export default ToDoSlice;
