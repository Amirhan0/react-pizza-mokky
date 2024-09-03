import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedById: 0,
  categoryes: [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
};

export const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedById = action.payload;
    },
  },
});

export const { setCategoryId } = counterSlice.actions;

export default counterSlice.reducer;
