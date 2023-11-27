import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductsSlices";
import ProductQuickViewReducer from "./slices/ProductQuickViewSlice";
import ShoppingCart from './slices/CartSlice'
import FavoriteList from './slices/FavoritesSlice'

export const store = configureStore({
    reducer: {
        products : ProductsReducer,
        ProductQuickViewReducer,
        ShoppingCart,
        FavoriteList
    }
})