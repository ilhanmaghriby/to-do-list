import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./actions/ToDoSlice";

const store = configureStore({
  reducer: {
    todo: ToDoSlice.reducer,
  },
});

export default store;
