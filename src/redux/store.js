import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { exampleReducer } from "./slices/counterSlice";
export const store = configureStore({
  reducer: {
    category: counterReducer,
    example: exampleReducer,
  },
});
