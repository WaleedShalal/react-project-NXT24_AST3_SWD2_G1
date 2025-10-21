import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      console.log("fetchAllProducts.pending", state);
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      console.log("fetchAllProducts.fulfilled", action);
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      console.log("fetchAllProducts.rejected", action);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

const { reducer: productsReducer } = productsSlice;

export default productsReducer;
