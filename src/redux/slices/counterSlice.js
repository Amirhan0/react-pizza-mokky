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

const initialExample = {
  component1: 0,
  component2: 0,
  component3: 0,
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

export const counterExample = createSlice({
  name: "example",
  initialState: initialExample,
  reducers: {
    setComponent1: (state) => {
      state.component1 += 1;
    },
    setComponent2: (state) => {
      state.component2 += 1;
    },
    setComponent3: (state) => {
      state.component3 += 1;
    },
  },
});

export const { setCategoryId, setSortId } = counterSlice.actions;
export const { setComponent1, setComponent2, setComponent3 } =
  counterExample.actions;

export default counterSlice.reducer;
export const exampleReducer = counterExample.reducer;
