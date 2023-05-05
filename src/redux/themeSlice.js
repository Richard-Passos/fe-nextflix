/* Logic */
import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "@/styles/themes";

const initialState = {
  theme: {},
};

export const themeSlice = createSlice({
  name: "app-theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme.title === "dark" ? light : dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
