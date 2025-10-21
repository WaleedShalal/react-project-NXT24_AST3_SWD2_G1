import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/counterSlice";
import productsReducer from "./features/productsSlice/productsSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   counter: counterReducer,
  //   products: productsReducer,
  // },
});

export default store;
