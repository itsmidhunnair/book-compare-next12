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
      if (state.compare.length === 4) {
        throw "Maximum of 4 books can be added to compare list.";
      }
      const updatedArray = toggleElementFromArray({
        array: state.compare,
        value: action.payload,
      });
      state.compare = updatedArray;
    },
    removeBookFromCompare: (state, action) => {
      const updatedArray = toggleElementFromArray({
        array: state.compare,
        value: action.payload,
      });
      state.compare = updatedArray;
    },
    removeAllFromCompare: (state) => {
      state.compare = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCompare, removeBookFromCompare, removeAllFromCompare } =
  bookSlice.actions;

export default bookSlice.reducer;
