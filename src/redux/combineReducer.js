import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducerSlice";
const reducer = combineReducers({
  products: productReducer,
});

export default reducer;
