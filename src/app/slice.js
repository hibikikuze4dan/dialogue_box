import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 12,
  perks: [],
  drawbacks: [],
};

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = slice.actions;

export default slice.reducer;
