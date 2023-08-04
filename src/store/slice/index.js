import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const rootReducer = combineReducers({
  book: bookReducer,
});
export default rootReducer;