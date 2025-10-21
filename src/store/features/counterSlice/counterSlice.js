import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    incrementByAmount: (state, action) => {
      console.log("🚀 ~ action incrementByAmount:", action);
      state.counterValue += action.payload;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    decrementByAmount: (state, action) => {
      console.log("🚀 ~ action decrementByAmount:", action);
      state.counterValue -= action.payload;
    },
    reset: (state) => {
      state.counterValue = 0;
    },
  },
});

const { actions, reducer: counterReducer } = counterSlice;

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = actions;

export default counterReducer;
