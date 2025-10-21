import { combineSlices } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counterSlice/counterSlice";
import { productsSlice } from "./features/productsSlice/productsSlice";

const rootReducer = combineSlices(counterSlice, productsSlice);

export default rootReducer;
