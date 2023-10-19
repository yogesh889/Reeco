// pass all the data of our application to the store
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/product-slice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
