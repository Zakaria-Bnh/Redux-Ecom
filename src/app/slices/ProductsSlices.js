import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsUrl = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  status: "idle",
  error: "null",
};

export const FetchProducts = createAsyncThunk(
  "ProductsSlice/fetchProducts",
  async () => {
    const response = await axios.get(ProductsUrl);
    return response.data;
  }
);

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(FetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;

        
      })
      .addCase(FetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const SelecteProducts = (state) => state.products.products;

export default ProductsSlice.reducer;
