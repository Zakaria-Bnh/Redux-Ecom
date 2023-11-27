// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShowModal: false,
    ProductData : {}
};

const ProductQuickViewSlice = createSlice({
name: 'ProductQuickView',
  initialState,
  reducers: {
    openModal : (state) => {
        state.isShowModal = true
    },
    closeModal : (state) => {
        state.isShowModal = false
    },
    ViewProduct : (state, {payload}) => {
        state.ProductData = payload
    },

  },
});

export const { openModal, closeModal, ViewProduct } = ProductQuickViewSlice.actions;

export const SelectIsShowModal = (state) => state.ProductQuickViewReducer.isShowModal
export const SelectProductData = (state) => state.ProductQuickViewReducer.ProductData

export default ProductQuickViewSlice.reducer;