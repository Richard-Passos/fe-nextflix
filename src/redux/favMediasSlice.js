/* Logic */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

export const favMediasSlice = createSlice({
  name: "favorite-medias",
  initialState,
  reducers: {
    toggleFavMedias: (state, { payload }) => {
      const mediaIndex = state.favs.findIndex(({ id }) => id === payload.id);

      mediaIndex !== -1
        ? state.favs.splice(mediaIndex, 1)
        : state.favs.unshift(payload);
    },
  },
});

export const { toggleFavMedias } = favMediasSlice.actions;
export default favMediasSlice.reducer;
