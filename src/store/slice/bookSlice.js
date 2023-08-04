import { createSlice } from "@reduxjs/toolkit";
import { toggleElementFromArray } from "src/helpers";

const initialState = {
  compare: [],
};

export const bookSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const updatedArray = toggleElementFromArray({
        array: state.compare,
        value: action.payload,
      });
      state.compare = updatedArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCompare } = bookSlice.actions;

export default bookSlice.reducer;
