/* Logic */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

export const favMediasSlice = createSlice({
  name: "favorite-medias",
  initialState,
  reducers: {
    toggleFavMedias: (state, action) => {
      const isMediaFav = state.favs.findIndex((id) => id === action.payload);

      if (isMediaFav !== -1) {
        state.favs.splice(isMediaFav, 1);
      } else {
        state.favs.unshift(action.payload);
      }
    },
  },
});

export const { toggleFavMedias } = favMediasSlice.actions;
export default favMediasSlice.reducer;
