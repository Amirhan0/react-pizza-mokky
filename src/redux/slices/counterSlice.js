import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedById: 0,
  sortSelectedById: 0,
  categoryes: [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
  sort: ["популярности", "по цене", "по алфавиту"],
};

export const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedById = action.payload;
    },
    setSortId: (state, action) => {
      state.sortSelectedById = action.payload;
    },
  },
});

export const { setCategoryId, setSortId } = counterSlice.actions;

export default counterSlice.reducer;
