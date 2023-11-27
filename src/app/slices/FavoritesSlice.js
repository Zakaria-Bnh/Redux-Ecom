import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const FavoriteSlice = createSlice({
  name: "FavoriteList",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const newItem = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!newItem) {
        state.favorites.push(action.payload);
      } else {
        state.favorites;
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const SelectFavorites = (state) => state.FavoriteList.favorites;
export const Selecttotalfavorites = (state) =>
  state.FavoriteList.favorites.length;
export const { addToFavorite, removeFromFavorites } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
