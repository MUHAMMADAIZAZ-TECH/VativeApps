import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import productReducer from "./Slicers/ProductSlice/ProductSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    middleware: [thunkMiddleware],
  },
});
