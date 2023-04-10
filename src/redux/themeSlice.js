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
    toggleTheme: (state, action) => {
      action.payload === "first-time"
        ? (state.theme = light)
        : (state.theme = state.theme.title === "light" ? dark : light);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
