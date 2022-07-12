import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perks: [],
  drawbacks: [],
  open_sections: {
    perks: false,
    drawbacks: false,
  },
  hideUnselected: false,
  dialogOpen: false,
};

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleOpenSection: (state, { payload }) => {
      state.open_sections = {
        ...state.open_sections,
        ...payload,
      };
    },
    addPerk: (state, { payload }) => {
      state.perks = [...state.perks, payload];
    },
    removePerk: (state, { payload }) => {
      const payloadTitle = payload.title;
      state.perks = [
        ...state.perks.filter(({ title }) => title !== payloadTitle),
      ];
    },
    addDrawback: (state, { payload }) => {
      state.drawbacks = [...state.drawbacks, payload];
    },
    removeDrawback: (state, { payload }) => {
      const payloadTitle = payload.title;
      state.drawbacks = [
        ...state.drawbacks.filter(({ title }) => title !== payloadTitle),
      ];
    },
    toggleHideUnselected: (state) => {
      state.hideUnselected = !state.hideUnselected;
    },
    toggleDialogOpen: (state) => {
      state.dialogOpen = !state.dialogOpen;
    },
  },
});

export const {
  addPerk,
  removePerk,
  addDrawback,
  removeDrawback,
  toggleHideUnselected,
  toggleDialogOpen,
} = slice.actions;

export default slice.reducer;
